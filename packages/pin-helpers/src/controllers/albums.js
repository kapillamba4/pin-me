const { Album } = require('pin-models');
const { AlbumPinBridge } = require('pin-models');

async function create(req, res) {
  try {
    const albumData = {
      creator: req.user.username,
      title: req.body.title
    };

    const album = await Album.findOrCreate({ where: albumData });
    if (album[1] === false) {
      return res.status(409).json({
        success: false,
        message: 'Album with same name already exists'
      });
    }

    return res.json({
      success: true,
      message: 'Album created successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Album was not created successfully'
    });
  }
}

async function getAll(req, res) {
  try {
    const albums = await AlbumPinBridge.findAll({
      where: {
        creator: req.user.username
      }
    });

    res.json({
      success: true,
      data: albums
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Album was not created successfully'
    });
  }
}

async function addPin(req, res) {
  try {
    const bridgeData = {
      album: req.body.album,
      pin: req.body.pin
    };

    await AlbumPinBridge.create(bridgeData);
    return res.json({
      success: true,
      message: 'Cannot add pin to album'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Album was not created successfully'
    });
  }
}

async function getPinsFromAlbum(req, res) {
  try {
    const bridgeData = {
      album: req.query.album
    };

    const pins = await AlbumPinBridge.findAll({ where: bridgeData });
    return res.json({
      success: true,
      data: pins
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Album was not created successfully'
    });
  }
}

module.exports = exports = {
  create,
  getAll,
  addPin,
  getPinsFromAlbum
};
