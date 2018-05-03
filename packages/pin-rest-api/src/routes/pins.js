'use strict';
const router = require('express').Router();
const authMiddleware = require('../middlewares').ensureAuthenticated;
const classifierMiddleware = require('../middlewares').classifyImage;
const uploadCheckMiddleware = require('../middlewares').checkUpload;
const { pinsController } = require('pin-helpers');
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const storage = multer.diskStorage({
  destination: './images',
  filename: function(req, file, cb) {
    crypto.randomBytes(8, function(err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString('hex') + '-' + file.originalname);
    });
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 2000000
  }
});

router.get('/me', (req, res) => {
  pinsController.getPins(req, res);
});

router.post('/me', authMiddleware, upload.single('pin'), uploadCheckMiddleware, classifierMiddleware, (req, res) => {
  pinsController.addPin(req, res);
});

router.get('/', authMiddleware, (req, res) => {
  if (req.param('username')) {
    res.send(`List of pins by user ${req.param('username')}`);
  } else {
    res.redirect(`${req.baseUrl}/me`);
  }
});

router.get('/download', authMiddleware, (req, res) => {
  req.baseImagePath = path.resolve('./images');
  pinsController.getPins(req, res);
});

module.exports = exports = router;
