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
  DATABASE_URL = process.env.DATABASE_URL
}

console.log({
  nodeEnv: process.env.NODE_ENV,
  DATABASE_URL,
  processEnvDatabaseUrl: process.env.DATABASE_URL
});

const pool = new Pool(DATABASE_URL);

module.exports = pool;
