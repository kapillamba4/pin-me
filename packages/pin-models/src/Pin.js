'use strict';
const constants = require('./Constants');
module.exports = exports = (sequelize, Datatypes) => {
  const Pin = sequelize.define(
    constants.pinsModelName,
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      title: {
        type: Datatypes.STRING,
        allowNull: false
      },
      description: Datatypes.STRING,
      creator_username: {
        type: Datatypes.STRING,
        allowNull: false
      },
      published_on: {
        type: Datatypes.BIGINT,
        allowNull: false
      },
      path: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
      },
      filename: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
      },
      url: Datatypes.STRING,
      height: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      width: {
        type: Datatypes.INTEGER,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );

  return Pin;
};
