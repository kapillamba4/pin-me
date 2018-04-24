'use strict';
const { Strategy: localStrategy } = require('passport-local');
const { User } = require('pin-models');

module.exports = exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      where: { id }
    }).then((user) => {
      if (!!user) {
        done(null, user);
        return;
      }

      done(new Error('Cannot deserialize user'), null);
    });
  });

  passport.use(
    'local-login',
    new localStrategy(
      {
        username: 'username',
        password: 'password',
        passReqToCallback: true
      },
      (req, username, password, done) => {
        User.findOne({
          where: { username }
        }).then((user) => {
          if (!!user && User.validPassword(password, user.password)) {
            done(null, user);
            return;
          }

          done(new Error('Login failed'), null);
        });
      }
    )
  );

  passport.use(
    'local-register',
    new localStrategy(
      {
        username: 'username',
        password: 'password',
        first_name: 'first_name',
        last_name: 'last_name',
        email: 'email',
        passReqToCallback: true
      },
      (req, username, password, done) => {
        User.findOrCreate({
          where: { username },
          defaults: {
            username,
            password: User.generateHash(password),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            created: Date.now()
          }
        }).then((user) => {
          if (!!user) {
            done(null, user[0]);
            return;
          }

          done(new Error('Registration failed'), null);
        });
      }
    )
  );
};
