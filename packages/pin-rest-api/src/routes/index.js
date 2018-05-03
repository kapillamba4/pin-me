'use strict';
const authRouter = require('./auth');
const pinsRouter = require('./pins');
const likesRouter = require('./like');
const commentsRouter = require('./comment');
const albumRouter = require('./album');

module.exports = exports = (app) => {
  app.use('/auth', authRouter);
  app.use('/pins', pinsRouter);
  app.use('/likes', likesRouter);
  app.use('/comments', commentsRouter);
  app.use('/albums', albumRouter);
};
