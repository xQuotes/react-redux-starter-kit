cd dist
git init 
git remote add origin git@github.com:xQuotes/react-redux-starter-kit.git
git add .
git commit -m "deploy"
git checkout -b admin-deploy
git push origin HEAD