const Pool = require("pg").Pool;

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

const pool = new Pool(DATABASE_URL);

module.exports = pool;
