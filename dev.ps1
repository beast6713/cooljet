$nodePath = "C:\Users\forev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
$pnpmCli = "C:\Users\forev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs"
$env:PATH = "$nodePath;$env:PATH"

# Auto-clean stale lock if Next dev was interrupted
if (Test-Path ".next\dev\lock") {
    $conn = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if (-not $conn) {
        Remove-Item ".next\dev\lock" -Force -ErrorAction SilentlyContinue
    }
}

Write-Host "Starting CoolJet development server on http://localhost:3000..." -ForegroundColor Cyan
& "$nodePath\node.exe" $pnpmCli run dev

