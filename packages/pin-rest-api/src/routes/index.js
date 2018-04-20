'use strict';
const authRouter = require('./auth');

module.exports = exports = (app) => {
    app.use('/auth', authRouter);
};
