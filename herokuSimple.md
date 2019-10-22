## Simple Heroku Deploy
Today, we are going to walk through deploying a Node/Express server with a MySQL database using the Answers to the 14-Week/03-Seinfeld activity.

## STEP 0
YA CAN'T DO CERTAIN THINGS WITH HEROKU ON AN UNSECURED NETWORK LIKE THE ONE AT SCHOOL. Using a phone as a hotspot is one way to get around this.

## PRE-DEPLOYMENT STEPS
1) Test that the project works as expected locally.
2) Make sure you have a .gitignore file with at least node_modules entered. If you are using .env to hide any API keys or environmental variables, add .env as well. 
3) Make sure that any packages used in your project are listed as dependancies in your package.json. If not, npm install those packages locally (without the -g or -global tag).
4) Make sure you have ' "start": "node server.js" ' listed within '"scripts": {}' (Or "node filename.js" if your primary file is not named server.js)
5) Make sure your finished project is add/commit/push-ed to GitHub for version control.
6) If you haven't installed Heroku CLI, do that.

## DEPLOYMENT STEPS
1) In your repository's root, open Git Bash and type 'heroku create'. You should see "Creating app... done" followed by links to your app on Heroku. The first link is to your deployed website, the second link is to the remote git repository - think of this like creating a new repository on Github, but it's on Heroku instead. (You could also type 'heroku create app-name' if you don't want Heroku to select you a random name.)
2) Go to heroku.com and login. After you login, you should see a list of your apps. Click on the one you just created.
6) Practice your A-C-Ps: Add-Commit-Push your project to your GitHub repository.
7) With Git Bash operating from your repository root, type 'git push heroku master' to push your repository to Heroku.

## That's it!!!