// config/connection.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // If you are using environment variables

// Load database configuration from environment variables or config file
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: 'localhost', // Database host
    dialect: 'postgres', // Database dialect (e.g., 'postgres', 'mysql', 'sqlite')
    define: {
      timestamps: false, // Example global option
    },
    // Other global options can be added here
  }
);
module.exports = sequelize;