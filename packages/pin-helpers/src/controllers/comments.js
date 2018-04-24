const { Comment } = require('pin-models');
const _ = require('lodash');

async function toggle(req, res) {
  try {
    const commentData = {
      pin_id: parseInt(req.body.pinId),
      username: req.user.dataValues.username,
      time_stamp: parseInt(req.body.time_stamp),
      comment: req.body.comment
    };

    const comment = await Comment.findOne({
      where: _.pick(commentData, ['pin_id', 'time_stamp', 'username'])
    });

    if (comment) {
      await comment.destroy();
      return res.json({
        success: true,
        message: 'Comment removed successfully'
      });
    } else {
      await Comment.create(commentData);
      return res.json({
        success: true,
        message: 'Comment added successfully'
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Operation failed'
    });
  }
}

async function add(req, res) {
  try {
    const commentData = {
      pin_id: parseInt(req.body.pinId),
      username: req.user.dataValues.username,
      time_stamp: Date.now(),
      comment: req.body.comment
    };

    await Comment.create(commentData);
    return res.json({
      success: true,
      message: 'Comment was added successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Comment was not added successfully'
    });
  }
}

async function remove(req, res) {
  try {
    const commentData = {
      pin_id: parseInt(req.body.pinId),
      username: req.user.dataValues.username,
      time_stamp: parseInt(req.body.time_stamp),
      comment: req.body.comment
    };

    const comment = await Comment.find({
      where: commentData
    });

    await comment.destroy();
    return res.json({
      success: true,
      message: 'Comment was removed successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Comment removal failed',
      error: error.message
    });
  }
}

module.exports = exports = {
  toggle,
  add,
  remove
};
