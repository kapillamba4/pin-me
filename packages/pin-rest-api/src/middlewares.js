ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(403).json({
    success: false,
    message: 'authentication failed'
  });
};

module.exports = exports = {
  ensureAuthenticated
};
