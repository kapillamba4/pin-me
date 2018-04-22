'use strict';
const constants = require('./Constants');
module.exports = exports = (sequelize, Datatypes) => {
    const Comment = sequelize.define(constants.commentsModelName, {
        "id": {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        "pin_id": {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
        "username": {
            type: Datatypes.STRING,
            allowNull: false
        },
        "time_stamp": {
            type: Datatypes.BIGINT,
            allowNull: false,
        },
        "comment": {
            type: Datatypes.STRING,
            allowNull: false
        }
    }, {
        "freezeTableName": true,
        "underscored": true,
        "timestamps": false
    });

    return Comment;
};