'use strict';
const router = require('express').Router();
const authMiddleware = require('../middlewares').ensureAuthenticated;
const { likesController } = require('pin-helpers');

router.post('/toggle', authMiddleware, (req, res) => {
    likesController.toggle(req, res);
});

module.exports = exports = router;
