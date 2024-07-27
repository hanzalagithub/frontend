const User = require('../models/User');


exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.updateUserProfile = async (req, res) => {
    const { username, email } = req.body;

    try {
        const user = await User.findById(req.user.id);

        user.username = username || user.username;
        user.email = email || user.email;

        await user.save();
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
