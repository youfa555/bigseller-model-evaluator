param(
  [int]$DiscoverLimit = 0,
  [int]$MaxTitles = 0,
  [int]$TimeoutMs = 15000,
  [int]$Retries = 1,
  [int]$MaxConsecutiveFailures = 3,
  [int]$MaxRuntimeLatencyMs = 6000,
  [int]$MaxRuntimeSingleLatencyMs = 8000,
  [double]$MinRuntimeSuccessRate = 0.8,
  [double]$MaxTimeoutFailureRate = 0,
  [string]$Root = "",
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

if (-not $Root) {
  $Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
}

$ScriptPath = Join-Path $Root "evaluate-nvidia-models.mjs"
$VisualReportScriptPath = Join-Path $Root "scripts\generate-visual-report.mjs"
$TitlesPath = Join-Path $Root "data\shoe-titles.sample.txt"
$OutPath = Join-Path $Root "out\model-ranking.json"
$ReportPath = Join-Path $Root "out\report.md"
$RuntimeConfigPath = Join-Path $Root "out\runtime-model-config.json"
$CsvPath = Join-Path $Root "out\title-results.csv"
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

if ($DryRun) {
  $dryRunArgs = @(
    $ScriptPath,
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

  Invoke-NodeChecked -Arguments $dryRunArgs -Step "Dry run"

  Write-Host "BigSeller model evaluation dry run finished."
  return
}

$evalArgs = @(
  $ScriptPath,
  "--discover-models",
  "--discover-limit", $DiscoverLimit,
  "--titles", $TitlesPath,
  "--out", $OutPath,
  "--report", $ReportPath,
  "--runtime-config", $RuntimeConfigPath,
  "--csv", $CsvPath,
  "--fail-summary", $FailSummaryPath,
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

Invoke-NodeChecked -Arguments $evalArgs -Step "Model evaluation"

Invoke-NodeChecked -Arguments @($ScriptPath, "--validate-ranking", $OutPath) -Step "Ranking validation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--validate-runtime-config", $RuntimeConfigPath) -Step "Runtime config validation"
Invoke-NodeChecked -Arguments @($VisualReportScriptPath, "--ranking", $OutPath, "--html", $VisualReportPath) -Step "Visual report generation"

Write-Host "BigSeller model evaluation finished."
Write-Host "Ranking: $OutPath"
Write-Host "Report:  $ReportPath"
Write-Host "Runtime: $RuntimeConfigPath"
Write-Host "CSV:     $CsvPath"
Write-Host "Fails:   $FailSummaryPath"
Write-Host "Visual:  $VisualReportPath"
