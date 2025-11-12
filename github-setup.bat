@echo off
echo Setting up Git repository and pushing to GitHub...

REM Initialize Git repository if not already initialized
git init

REM Add all files
git add .

REM Create initial commit
git commit -m "Initial commit: Project setup with AboutProduct integration"

echo.
echo ========================================
echo Now, create a new repository on GitHub:
echo 1. Go to: https://github.com/new
echo 2. Name your repository
echo 3. Do NOT initialize with README, .gitignore, or license
echo 4. After creating, run these commands:
echo.
echo git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
echo git branch -M main
echo git push -u origin main
echo ========================================