cd build
git init 
git remote add origin git@github.com:xQuotes/react-redux-starter-kit.git
git add .
git commit -m "deploy"
git checkout -b portal-deploy
git push origin HEAD -f



