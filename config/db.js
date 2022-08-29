const Postgre = require("pg").Pool;

const connection = new Postgre({
  user: "jafarammer",
  host: "localhost",
  database: "recipe_food",
  password: "admin",
  port: 5432,
});

module.exports = connection;
