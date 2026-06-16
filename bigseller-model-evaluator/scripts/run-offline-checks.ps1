param(
  [string]$Root = ""
)

$ErrorActionPreference = "Stop"

if (-not $Root) {
  $Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
}

$ScriptPath = Join-Path $Root "evaluate-nvidia-models.mjs"
$AggregateScriptPath = Join-Path $Root "scripts\aggregate-rankings.mjs"
$VisualReportScriptPath = Join-Path $Root "scripts\generate-visual-report.mjs"
$RankingExample = Join-Path $Root "examples\model-ranking.example.json"
$RuntimeExample = Join-Path $Root "examples\runtime-model-config.example.json"
$TempRuntime = Join-Path ([System.IO.Path]::GetTempPath()) "bigseller-runtime-model-config.offline-check.json"
$TempCsv = Join-Path ([System.IO.Path]::GetTempPath()) "bigseller-title-results.offline-check.csv"
$TempFailSummary = Join-Path ([System.IO.Path]::GetTempPath()) "bigseller-fail-summary.offline-check.json"
$TempVisualReport = Join-Path ([System.IO.Path]::GetTempPath()) "bigseller-visual-report.offline-check.html"
$TempAggregateRanking = Join-Path ([System.IO.Path]::GetTempPath()) "bigseller-aggregate-ranking.offline-check.json"
$TempAggregateRuntime = Join-Path ([System.IO.Path]::GetTempPath()) "bigseller-aggregate-runtime.offline-check.json"
$TempAggregateReport = Join-Path ([System.IO.Path]::GetTempPath()) "bigseller-aggregate-report.offline-check.md"
$TempAggregateFails = Join-Path ([System.IO.Path]::GetTempPath()) "bigseller-aggregate-fail-summary.offline-check.json"

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

Invoke-NodeChecked -Arguments @("--check", $ScriptPath) -Step "Syntax check"
Invoke-NodeChecked -Arguments @("--check", $AggregateScriptPath) -Step "Aggregate syntax check"
Invoke-NodeChecked -Arguments @("--check", $VisualReportScriptPath) -Step "Visual report syntax check"
Invoke-NodeChecked -Arguments @($ScriptPath, "--self-test") -Step "Self-test"
Invoke-NodeChecked -Arguments @($ScriptPath, "--validate-ranking", $RankingExample) -Step "Ranking example validation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--validate-runtime-config", $RuntimeExample) -Step "Runtime example validation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--runtime-from-ranking", $RankingExample, "--runtime-config", $TempRuntime) -Step "Runtime config generation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--validate-runtime-config", $TempRuntime) -Step "Generated runtime validation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--csv-from-ranking", $RankingExample, "--csv", $TempCsv) -Step "CSV generation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--fail-summary-from-ranking", $RankingExample, "--fail-summary", $TempFailSummary) -Step "Fail summary generation"
Invoke-NodeChecked -Arguments @($AggregateScriptPath, "--input", $RankingExample, "--input", $RankingExample, "--out", $TempAggregateRanking, "--runtime-config", $TempAggregateRuntime, "--report", $TempAggregateReport, "--fail-summary", $TempAggregateFails) -Step "Aggregate generation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--validate-ranking", $TempAggregateRanking) -Step "Aggregate ranking validation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--validate-runtime-config", $TempAggregateRuntime) -Step "Aggregate runtime validation"
Invoke-NodeChecked -Arguments @($VisualReportScriptPath, "--ranking", $RankingExample, "--html", $TempVisualReport) -Step "Visual report generation"
Invoke-NodeChecked -Arguments @($ScriptPath, "--dry-run", "--discover-models", "--discover-limit", 5) -Step "Dry run"

Write-Host "BigSeller model evaluator offline checks passed."
