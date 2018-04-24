'use strict';
const router = require('express').Router();
const authMiddleware = require('../middlewares').ensureAuthenticated;
const { commentsController } = require('pin-helpers');

router.post('/add', authMiddleware, (req, res) => {
  commentsController.add(req, res);
});

router.post('/remove', authMiddleware, (req, res) => {
  commentsController.remove(req, res);
});

module.exports = exports = router;
