# Noteful-api

This is the api for the noteful-app client

## To seed database with preliminary data in cli:

psql  -U dunder_mifflin -d noteful -f ./seeds/seed.noteful_folders.sql

and

psql -U dunder_mifflin -d noteful -f ./seeds/seed.noteful_notes.sql

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch. 