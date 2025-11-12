@echo off
setlocal

if "%~1"=="" (
  set "SRC=%USERPROFILE%\Downloads\spark-sanctuary.zip"
) else (
  set "SRC=%~1"
)

set "DEST=%~dp0spark-sanctuary.zip"

if not exist "%SRC%" (
  echo Source zip not found: %SRC%
  echo Provide full path as argument or place spark-sanctuary.zip in your Downloads.
  pause
  exit /b 1
)

copy /Y "%SRC%" "%DEST%"
if %ERRORLEVEL%==0 (
  echo Copied to %DEST%
) else (
  echo Copy failed
)

pause
endlocal
