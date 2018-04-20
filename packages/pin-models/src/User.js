'use strict';
const constants = require('./Constants');
const bcrypt = require('bcrypt-nodejs');
module.exports = exports = (sequelize, Datatypes) => {
    const User = sequelize.define(constants.userModelName, {
        "id": {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        "username": {
            type: Datatypes.STRING,
            allowNull: false
        },
        "password": {
            type: Datatypes.STRING,
            allowNull: false
        },
        "first_name": {
            type: Datatypes.STRING,
            allowNull: false,
        },
        "last_name": Datatypes.STRING,
        "email": Datatypes.STRING,
        "created": {
            type: Datatypes.BIGINT,
            allowNull: false
        },
        "updated": Datatypes.BIGINT

    }, {
        "freezeTableName": true,
        "underscored": true,
        "timestamps": false
    });

    User.generateHash = (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    };

    User.validPassword = (password, actualPassword) => {
        console.log(password, actualPassword);
        return bcrypt.compareSync(password, actualPassword);
    };

    return User;
};
