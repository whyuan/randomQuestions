
cd /d %~dp0
call password.bat
pscp.exe -pw %Password% -r root@23.235.133.108:/var/web/randomQuestion/config/* ..\config\
pause
