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

# Getting app going on Heroku:

## server.js

Change listen. to ```process.env.PORT || 5000```

add cors options.

## db.js

require process.env ``` require('dotenv').config(); ``` and add required process.env if in production.

## .env

``` DATABASE_URL=postgres://gfsjtmbdcflimh:7456d26613d9422a0f4f8f7934eeef3c26a288659c827254855b1bf84cd28328@ec2-54-228-170-125.eu-west-1.compute.amazonaws.com:5432/d44ms0q9va233b ```


loginwith:
henryly213@gmail.com
kthl8822   