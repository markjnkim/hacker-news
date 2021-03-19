const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.RDS_DB_NAME, process.env.RDS_USERNAME, process.env.RDS_PASSWORD, {
      host: process.env.RDS_HOSTNAME,
      dialect: 'mysql',
      port: process.env.RDS_PORT,
    });

module.exports = sequelize;
