'use strict';
require('dotenv').config();
const path = require('path');
process.env.NODE_CONFIG_DIR = path.join(__dirname, '/config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('config');
const session = require('express-session');
const passport = require('passport');
const compression = require('compression');
const cors = require('cors')

require('pin-models').syncDB();

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

app.use(cors({
  origin: 'http://localhost:3000',
  methods:['GET','POST'],
  credentials: true 
}))
app.use(morgan(config.environment === 'development' ? 'dev' : 'prod'));
app.use(compression());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
const sessionOpts = {
  secret: config.session_secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: new Date(253402300000000),
    secure: false
  }
};

app.use(session(sessionOpts));
app.use(passport.initialize());
app.use(passport.session());

require('./src/passport')(passport);

app.get('/', (req, res) => {
  res.send('Hello!');
});

require('./src/routes/index')(app);

app.listen(config.port, function() {
  console.log(`Listening at ${config.port}`);
});
