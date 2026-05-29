param(
  [Parameter(Mandatory = $true)]
  [ValidateSet("dev", "build", "start", "lint")]
  [string]$Task
)

$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $PSScriptRoot
$LogDir = Join-Path $ProjectRoot "logs"
$Timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$LogFile = Join-Path $LogDir "$Task-$Timestamp.log"

New-Item -ItemType Directory -Force -Path $LogDir | Out-Null

Write-Host "Running npm run $Task"
Write-Host "Writing log to $LogFile"

Push-Location $ProjectRoot
try {
  & npm.cmd run $Task 2>&1 | Tee-Object -FilePath $LogFile
  $ExitCode = $LASTEXITCODE
}
finally {
  Pop-Location
}

if ($ExitCode -ne 0) {
  Write-Host "Command failed. Check the log above or open $LogFile"
  exit $ExitCode
}

Write-Host "Done. Log saved to $LogFile"
