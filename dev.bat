@echo off
set "NODE_PATH=C:\Users\forev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "PNPM_CLI=C:\Users\forev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs"
set "PATH=%NODE_PATH%;%PATH%"

echo Starting CoolJet website dev server...
"%NODE_PATH%\node.exe" "%PNPM_CLI%" run dev
