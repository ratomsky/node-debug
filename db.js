require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    port: process.env.DB_PORT,
  }
);

sequelize.authenticate().then(
  function success() {
    console.log("Connected to DB");
  },

  function fail(err) {
    console.log(`Error: ${err}`);
  }
);

module.exports = sequelize;
