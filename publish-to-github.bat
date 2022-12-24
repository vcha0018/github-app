@echo off
echo Deleting previous files from vcha0018.github.io
cd "../vcha0018.github.io"
del /q *.js
del /q *.html
del /q *.ico
del /q *.txt
del /q *.css
echo Running ng build
cd "../github-app"
call npm run build
echo Commiting new changes to vcha0018.github.io
cd "../vcha0018.github.io"
:loop
set /p "msg=Enter Commit Message: "
if "%msg%"=="" (goto :loop)
git add .
git commit -m "%msg%"
git push origin master
echo Done
exit
