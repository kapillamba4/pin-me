'use strict';
const constants = require('./Constants');
module.exports = exports = (sequelize, Datatypes) => {
  const Tag = sequelize.define(
    constants.tagsModelName,
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: Datatypes.STRING,
        allowNull: false
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    }
  );

  return Tag;
};