@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
cd C:\project\vue\my-service

echo Building project...
call npm run build
cd dist

echo Initializing local repository...
call git init
call git add .
call git commit -m "%date% %time% update Github Page"
call git remote add origin https://github.com/eccentricpark/eccentricpark.github.io.git

echo Push in github...
call git branch -M main
call git push -u origin main --force