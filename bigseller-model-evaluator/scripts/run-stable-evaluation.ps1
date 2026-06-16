param(
  [int]$Rounds = 3,
  [int]$DiscoverLimit = 0,
  [int]$MaxTitles = 0,
  [int]$TimeoutMs = 15000,
  [int]$Retries = 2,
  [int]$MaxConsecutiveFailures = 3,
  [int]$MaxRuntimeLatencyMs = 6000,
  [int]$MaxRuntimeSingleLatencyMs = 8000,
  [double]$MinRuntimeSuccessRate = 0.8,
  [double]$MaxTimeoutFailureRate = 0.1,
  [double]$MinStableRuntimeEligibleRate = 0.5,
  [int]$PauseSecondsBetweenRounds = 60,
  [string]$Root = "",
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

if (-not $Root) {
  $Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
}

$EvalScriptPath = Join-Path $Root "evaluate-nvidia-models.mjs"
$AggregateScriptPath = Join-Path $Root "scripts\aggregate-rankings.mjs"
$VisualReportScriptPath = Join-Path $Root "scripts\generate-visual-report.mjs"
$TitlesPath = Join-Path $Root "data\shoe-titles.sample.txt"
$StableRunsPath = Join-Path $Root "out\stable-runs"
$OutPath = Join-Path $Root "out\model-ranking.json"
$ReportPath = Join-Path $Root "out\report.md"
$RuntimeConfigPath = Join-Path $Root "out\runtime-model-config.json"
$FailSummaryPath = Join-Path $Root "out\fail-summary.json"
$VisualReportPath = Join-Path $Root "out\visual-report.html"
$EnvLocalPath = Join-Path $Root ".env.local"

function Invoke-NodeChecked {
  param(
    [Parameter(Mandatory = $true)]
    [object[]]$Arguments,
    [Parameter(Mandatory = $true)]
    [string]$Step
  )

  node @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "$Step failed with exit code $LASTEXITCODE"
  }
}

if ($Rounds -lt 1) {
  throw "Rounds must be at least 1."
}

if (Test-Path $EnvLocalPath) {
  Get-Content $EnvLocalPath | ForEach-Object {
    $line = $_.Trim()
    if (-not $line -or $line.StartsWith("#") -or -not $line.Contains("=")) { return }
    $parts = $line.Split("=", 2)
    $name = $parts[0].Trim()
    $value = $parts[1].Trim().Trim('"').Trim("'")
    if ($name -and -not [Environment]::GetEnvironmentVariable($name, "Process")) {
      [Environment]::SetEnvironmentVariable($name, $value, "Process")
    }
  }
}

if (-not $env:NVIDIA_API_KEY) {
  throw "Missing NVIDIA_API_KEY. Set it in the user/machine environment or create bigseller-model-evaluator\.env.local from .env.example."
}

New-Item -ItemType Directory -Path $StableRunsPath -Force | Out-Null

if ($DryRun) {
  $dryRunArgs = @(
    $EvalScriptPath,
    "--dry-run",
    "--discover-models",
    "--discover-limit", $DiscoverLimit,
    "--titles", $TitlesPath,
    "--timeout-ms", $TimeoutMs,
    "--retries", $Retries,
    "--max-runtime-latency-ms", $MaxRuntimeLatencyMs,
    "--max-runtime-single-latency-ms", $MaxRuntimeSingleLatencyMs,
    "--min-runtime-success-rate", $MinRuntimeSuccessRate,
    "--max-timeout-failure-rate", $MaxTimeoutFailureRate
  )
  if ($MaxTitles -gt 0) {
    $dryRunArgs += @("--max-titles", $MaxTitles)
  }
  Invoke-NodeChecked -Arguments $dryRunArgs -Step "Stable dry run"
  Write-Host "Stable evaluation dry run finished."
  return
}

for ($round = 1; $round -le $Rounds; $round++) {
  $stamp = Get-Date -Format "yyyyMMdd-HHmmss"
  $prefix = "round-$($round)-$stamp"
  $RoundOutPath = Join-Path $StableRunsPath "$prefix-model-ranking.json"
  $RoundReportPath = Join-Path $StableRunsPath "$prefix-report.md"
  $RoundRuntimeConfigPath = Join-Path $StableRunsPath "$prefix-runtime-model-config.json"
  $RoundCsvPath = Join-Path $StableRunsPath "$prefix-title-results.csv"
  $RoundFailSummaryPath = Join-Path $StableRunsPath "$prefix-fail-summary.json"

  Write-Host ""
  Write-Host "Stable evaluation round $round/$Rounds"

  $evalArgs = @(
    $EvalScriptPath,
    "--discover-models",
    "--discover-limit", $DiscoverLimit,
    "--titles", $TitlesPath,
    "--out", $RoundOutPath,
    "--report", $RoundReportPath,
    "--runtime-config", $RoundRuntimeConfigPath,
    "--csv", $RoundCsvPath,
    "--fail-summary", $RoundFailSummaryPath,
    "--timeout-ms", $TimeoutMs,
    "--retries", $Retries,
    "--max-runtime-latency-ms", $MaxRuntimeLatencyMs,
    "--max-runtime-single-latency-ms", $MaxRuntimeSingleLatencyMs,
    "--min-runtime-success-rate", $MinRuntimeSuccessRate,
    "--max-timeout-failure-rate", $MaxTimeoutFailureRate
  )
  if ($MaxTitles -gt 0) {
    $evalArgs += @("--max-titles", $MaxTitles)
  }
  if ($MaxConsecutiveFailures -ge 0) {
    $evalArgs += @("--max-consecutive-failures", $MaxConsecutiveFailures)
  }

  Invoke-NodeChecked -Arguments $evalArgs -Step "Stable evaluation round $round"
  Invoke-NodeChecked -Arguments @($EvalScriptPath, "--validate-ranking", $RoundOutPath) -Step "Round $round ranking validation"

  if ($round -lt $Rounds -and $PauseSecondsBetweenRounds -gt 0) {
    Write-Host "Waiting $PauseSecondsBetweenRounds seconds before next round..."
    Start-Sleep -Seconds $PauseSecondsBetweenRounds
  }
}

Invoke-NodeChecked -Arguments @(
  $AggregateScriptPath,
  "--input-dir", $StableRunsPath,
  "--out", $OutPath,
  "--report", $ReportPath,
  "--runtime-config", $RuntimeConfigPath,
  "--fail-summary", $FailSummaryPath,
  "--min-stable-runtime-eligible-rate", $MinStableRuntimeEligibleRate
) -Step "Stable ranking aggregation"

Invoke-NodeChecked -Arguments @($EvalScriptPath, "--validate-ranking", $OutPath) -Step "Stable ranking validation"
Invoke-NodeChecked -Arguments @($EvalScriptPath, "--validate-runtime-config", $RuntimeConfigPath) -Step "Stable runtime validation"
Invoke-NodeChecked -Arguments @($VisualReportScriptPath, "--ranking", $OutPath, "--html", $VisualReportPath) -Step "Stable visual report generation"

Write-Host ""
Write-Host "BigSeller stable model evaluation finished."
Write-Host "Rounds:  $StableRunsPath"
Write-Host "Ranking: $OutPath"
Write-Host "Report:  $ReportPath"
Write-Host "Runtime: $RuntimeConfigPath"
Write-Host "Fails:   $FailSummaryPath"
Write-Host "Visual:  $VisualReportPath"
