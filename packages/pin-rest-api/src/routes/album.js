'use strict';
const router = require('express').Router();
const passport = require('passport');
const authMiddleware = require('../middlewares').ensureAuthenticated;
const { albumsController } = require('pin-helpers');
router.get('/get', (req, res) => {
  albumsController.getAll(req, res);
});

router.post('/create', authMiddleware, (req, res) => {
  albumsController.create(req, res);
});

router.post('/edit', authMiddleware, (req, res) => {
  res.send('Edit album');
});

router.post('/pins', authMiddleware, (req, res) => {
  albumsController.addPin(req, res);
});

router.get('/pins', authMiddleware, (req, res) => {
  albumsController.getPinsFromAlbum(req, res);
});

module.exports = exports = router;
