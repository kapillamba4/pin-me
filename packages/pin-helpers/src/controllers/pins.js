'use strict';
const { Pin } = require('pin-models');
const path = require('path');

async function addPin(req, res) {
  if (!req.file) {
    return res.status(415).json({
      success: false,
      message: 'No file recieved'
    });
  }

  try {
    await Pin.create({
      title: req.body.title,
      description: req.body.description,
      creator_username: req.user.dataValues.username,
      published_on: Date.now(),
      path: req.file.path,
      filename: req.file.filename
    });

    return res.json({
      success: true,
      message: 'Pin uploaded'
    });
  } catch (error) {
    // TODO: remove file from filesystem
    return res.status(500).json({
      success: false,
      message: 'Pin not added to the database',
      error: error.message
    });
  }
}

module.exports = exports = {
  addPin
};
