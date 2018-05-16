'use strict';
const router = require('express').Router();
const passport = require('passport');
const authMiddleware = require('../middlewares').ensureAuthenticated;

router.get('/login', (req, res) => {
  res.send('Login');
});

router.get('/register', (req, res) => {
  res.send('Register');
});

router.post(
  '/login',
  passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: false
  })
);

router.post(
  '/register',
  passport.authenticate('local-register', {
    successRedirect: '/auth/login',
    failureRedirect: '/auth/register',
    failureFlash: false
  })
);

router.get('/logout', authMiddleware, (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'authentication failed'
      });
    }

    delete req.user;
    return res.status(200).json({
      success: true,
      message: 'authentication successful'
    });
  });
});

router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'access granted'
  });
});

module.exports = exports = router;
