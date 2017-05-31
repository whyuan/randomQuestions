
cd /d %~dp0
call password.bat
pscp.exe -pw %Password% -r ..\config\ root@23.235.133.108:/var/web/randomQuestion/config
pscp.exe -pw %Password% -r ..\js root@23.235.133.108:/var/web/randomQuestion/js
pscp.exe -pw %Password% -r ..\index.html root@23.235.133.108:/var/web/randomQuestion/index.html
pause
