@echo off
rem run-dev.bat - Install deps and start dev server (pnpm preferred, npm fallback)
setlocal
cd /d "%~dp0"

echo.
echo === Project run script ===
echo Checking for pnpm...
where pnpm >nul 2>&1
if %ERRORLEVEL%==0 (
  echo pnpm found - using pnpm to install and run
  pnpm install || (
    echo pnpm install failed
    pause
    exit /b 1
  )
  echo Running typecheck...
  pnpm run typecheck || echo Typecheck reported errors (see output)
  echo Starting dev server...
  pnpm run dev
) else (
  echo pnpm not found - falling back to npm
  npm install || (
    echo npm install failed
    pause
    exit /b 1
  )
  echo Running typecheck...
  npm run typecheck || echo Typecheck reported errors (see output)
  echo Starting dev server...
  npm run dev
)

endlocal
pause
