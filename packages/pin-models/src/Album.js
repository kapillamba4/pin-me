'use strict';
const constants = require('./Constants');
module.exports = exports = (sequelize, Datatypes) => {
  const Album = sequelize.define(
    constants.albumModelName,
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      creator: {
        type: Datatypes.STRING,
        allowNull: false
      },
      title: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: false
      }
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );

  return Album;
};