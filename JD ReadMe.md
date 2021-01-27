# Getting this app going:

## nodemon index

Start the app with ```nodemon index```, or else I'm going to add the script:
```    "start": "cross-env NODE_ENV=production node index.js", ```
```     "dev": "nodemon server" ```

## Database

I had to run in psql ``` CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; ``` before the tables would run the uuid function

### db.js

I've changed the password to 'password' as 'kthl8822' doesn't match my own.

Change jwtauth to authtodo because they didn't match for some reason?

## database.sql

jwtauth


## AND NOW IT WORKS