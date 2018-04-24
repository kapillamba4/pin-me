'use strict';
const path = require('path');
process.env.NODE_CONFIG_DIR = path.join(__dirname, '/config');
const config = require('config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = exports = {
  User: require('./src/User')(sequelize, Sequelize.DataTypes),
  Pin: require('./src/Pin')(sequelize, Sequelize.DataTypes),
  Like: require('./src/Like')(sequelize, Sequelize.DataTypes),
  Comment: require('./src/Comment')(sequelize, Sequelize.DataTypes),
  syncDB: () => sequelize.sync()
};
