$node = if (Test-Path "C:\Users\forev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe") {
    "C:\Users\forev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
} else {
    "C:\Users\forev\.gemini\antigravity-ide\bin\node.exe"
}
$pnpm = "C:\Users\forev\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs"
& $node $pnpm @args

