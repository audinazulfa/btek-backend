const {Pool} = require("pg");

const db = new Pool({
  connectionString: "postgresql://postgres:1@localhost:5432/db?schema=public"
});

module.exports = db;
