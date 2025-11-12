@echo off
setlocal

if "%~1"=="" (
  powershell -ExecutionPolicy Bypass -File "%~dp0unpack-zip.ps1"
) else (
  powershell -ExecutionPolicy Bypass -File "%~dp0unpack-zip.ps1" -ZipPath "%~1"
)

endlocal
pause
