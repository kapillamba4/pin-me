const { Like } = require('pin-models');

async function toggle(req, res) {
    try {
        const likeData = {
            pin_id: parseInt(req.body.pinId),
            username: req.user.dataValues.username,
        };

        const like = await Like.findOne({
            where: likeData
        });

        console.log(like);
        if (like) {
            await like.destroy();
            return res.json({
                success: true,
                message: 'Unliked successfully'        
            });
        } else {
            await Like.create(likeData);
            return res.json({
                success: true,
                message: 'Liked successfully'        
            });
        }
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: 'Like was not added successfully',
            error: error.message
        });
    }
};

module.exports = exports = {
    toggle
};
