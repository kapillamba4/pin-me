'use strict';
const { Pin } = require('pin-models');
const path = require('path');
const _ = require('lodash');

async function addPin(req, res) {
  if (!req.file) {
    return res.status(415).json({
      success: false,
      message: 'No file recieved'
    });
  }

  req.clarifai = req.clarifai.tags.map(el => _.pick(el, ['name', 'value'])).splice(10);
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
      message: 'Image uploaded'
    });
  } catch (error) {
    // TODO: remove file from filesystem
    return res.status(500).json({
      success: false,
      message: 'Image is not added to the database',
      error: error.message
    });
  }
}

async function getPins(req, res) {
  try {
    if (!req.query.pin) {
      const pins = await Pin.findAll({ where: { creator_username: req.user.username } });
      res.json(pins);
    } else {
      const pin = await Pin.findOne({ where: { id: req.query.pin } });
      res.sendFile(path.join(req.baseImagePath, pin.filename));
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Cannot retrieve image(s)',
      error: error.message
    });
  }
}

module.exports = exports = {
  addPin,
  getPins
};
