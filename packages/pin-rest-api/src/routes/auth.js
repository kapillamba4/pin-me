'use strict';
const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.send('Login');
});

router.get('/register', (req, res) => {
    res.send('Register');
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash : false
}));

router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/auth/login',
    failureRedirect: '/auth/register',
    failureFlash: false
}));

router.all('/logout', (req, res) => {
    delete req.user;
    res.send('Logout');
});

router.get('/profile', (req, res) => {
    if(req.isAuthenticated()) {
        res.status(200).json({ message: 'access granted' });
    } else {
        res.status(200).json({ message: 'access denied' });
    }
});

module.exports = exports = router;