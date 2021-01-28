const Pool = require("pg").Pool;
require('dotenv').config();

let DATABASE_URL = {
  host: "localhost",
  user: "postgres",
  password: "password",
  port: 5432,
  database: "authtodo"
}

if (process.env.NODE_ENV === 'production') {
  console.log({
    status: "IF has worked and now we're changinge DATABASE_URL",
    DATABASE_URL,
  });
  DATABASE_URL = { connectionString: process.env.DATABASE_URL }
}

const pool = new Pool(DATABASE_URL);


console.log({
  status: "We've fired Pool and now exporting with a DATABASE_URL of:",
  DATABASE_URL,
});

module.exports = pool;
