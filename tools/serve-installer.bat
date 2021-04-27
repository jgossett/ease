ECHO off
SET EASE_PATH=dist\packages\ease.exe

:: Verify the ease application exists.
IF NOT EXIST %EASE_PATH% (
  ECHO.
  ECHO ERROR: The Ease installer is not found. Verify "%EASE_PATH%" exists. If not, run "npm run build:installer".
  ECHO.

  EXIT 1
)

ECHO on

%EASE_PATH%
