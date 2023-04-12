const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  exports.createUser = async (req, res) => {
    const { username, email, phone } = req.body;
    const user = new User({ username, email, phone });
    try {
      await user.save();
      res.json({ message: 'User saved successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }