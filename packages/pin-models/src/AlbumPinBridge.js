'use strict';
const constants = require('./Constants');
module.exports = exports = (sequelize, Datatypes) => {
  const AlbumPinBridge = sequelize.define(
    constants.albumPinBridgeModelName,
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      album: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      pin: {
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

  return AlbumPinBridge;
};