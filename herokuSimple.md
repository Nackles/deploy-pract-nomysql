## Simple Heroku Deploy
Today, we are going to walk through deploying a basic Node/Express server to Heroku.

## STEP 0
YA CAN'T DO CERTAIN THINGS WITH HEROKU ON AN UNSECURED NETWORK LIKE THE ONE AT SCHOOL. If you run into issues, using a phone (or any trusted wifi connection with a password) as a hotspot is one way to get around this.

## PRE-DEPLOYMENT STEPS
1) Test that the project works as expected locally.
2) Make sure you have a .gitignore file with at least node_modules entered. If you are using .env to hide any API keys or environmental variables, add .env as well. 
3) Make sure you have a package.json - if not, run "npm init" to create one.
4) Make sure that any packages used in your project are listed as dependancies in your package.json. If not, npm install those packages locally (no -g or -global tag).
5) Though it should be set by default when you "npm init", make sure you have ' "start": "node server.js" ' listed within '"scripts": {}' (Or "node filename.js" if your primary file is not named server.js)
6) Make sure your finished project is add/commit/push-ed to GitHub for version control.
7) If you haven't installed Heroku CLI, do that.

## DEPLOYMENT STEPS
1) In your repository's root, open Git Bash and type 'heroku create'. You should see "Creating app... done" followed by links to your app on Heroku. The first link is to your deployed website, the second link is to the remote git repository - think of this like creating a new repository on Github, but it's on Heroku instead. (You could also type 'heroku create app-name' if you don't want Heroku to select you a random name.)
2) Go to heroku.com and login. After you login, you should see a list of your apps. Click on the one you just created.
6) Practice your A-C-Ps: Add-Commit-Push your project to your GitHub repository.
7) With Git Bash operating from your repository root, type 'git push heroku master' to push your repository to Heroku. Watch the console as Heroku works its deployment magic, and if you get a success message...

## That's it!!!
Go to your website!!

## Final Note:
What is the difference between...
git push origin master
and...
git push heroku master
# Answer
One word that changes which service you upload to! Master is the branch name in both cases, git calls itself the origin, heroku calls itself itself. Origin master means "master branch on Github", heroku master means "master branch on Heroku".