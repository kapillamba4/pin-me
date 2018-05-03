'use strict';
const constants = require('./Constants');
module.exports = exports = (sequelize, Datatypes) => {
  const PinTagBridge = sequelize.define(
    constants.pinTagBridgeModelName,
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      pin: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      tag: {
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

  return PinTagBridge;
};