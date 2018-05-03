const Clarifai = require('clarifai');
const config = require('config');
const fs = require('fs');

ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(403).json({
    success: false,
    message: 'authentication failed'
  });
};

classifyImage = async (req, res, next) => {
  try {
    const classificationData = { };
    classificationData.safe = (await (new Clarifai.App({
      apiKey: config.clarifai_app_key
    })).models.predict(Clarifai.MODERATION_MODEL, {
      base64: (new Buffer(fs.readFileSync(req.file.path))).toString('base64')
    })).outputs[0].data.concepts.filter(el => (el.name === 'safe'))[0].value;

    if (classificationData.safe < 0.2) {
      return res.status(403).json({
        success: false,
        safe: classificationData.safe * 100,
        message: 'Offensive image received'
      });
    }

    classificationData.tags = (await (new Clarifai.App({
      apiKey: config.clarifai_app_key
    })).models.predict(Clarifai.GENERAL_MODEL, {
      base64: (new Buffer(fs.readFileSync(req.file.path))).toString('base64')
    })).outputs[0].data.concepts.filter(el => (el.value > 0.5));

    req.clarifai = classificationData;
    next();
  } catch (error) {
    res.status(503).json({
      success: false,
      error,
      message: 'Image classification failed'
    });
  }
};

checkUpload = (req, res, next) => {
  if (!req.file) {
    return res.status(415).json({
      success: false,
      message: 'No file recieved'
    });
  }

  next();
};

module.exports = exports = {
  ensureAuthenticated,
  classifyImage,
  checkUpload
};
