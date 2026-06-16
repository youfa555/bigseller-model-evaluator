param(
  [string]$TaskName = "BigSeller NVIDIA Model Evaluation",
  [string]$Root = "",
  [string]$Time = "03:00",
  [string]$DayOfWeek = "Monday"
)

$ErrorActionPreference = "Stop"

if (-not $Root) {
  $Root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
}

$Runner = Join-Path $Root "scripts\run-stable-evaluation.ps1"
if (-not (Test-Path $Runner)) {
  throw "Runner not found: $Runner"
}

$Action = New-ScheduledTaskAction `
  -Execute "powershell.exe" `
  -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Runner`" -Root `"$Root`""

$Trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek $DayOfWeek -At $Time
$Settings = New-ScheduledTaskSettingsSet `
  -StartWhenAvailable `
  -DontStopIfGoingOnBatteries `
  -AllowStartIfOnBatteries

Register-ScheduledTask `
  -TaskName $TaskName `
  -Action $Action `
  -Trigger $Trigger `
  -Settings $Settings `
  -Description "Run stable BigSeller NVIDIA model evaluation and validate model-ranking.json." `
  -Force

Write-Host "Scheduled task installed: $TaskName"
Write-Host "Schedule: every $DayOfWeek at $Time"
Write-Host "Runner: $Runner"
