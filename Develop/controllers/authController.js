const { User } = require('../models');
const bcrypt = require('bcrypt');

const authController = {
  // POST /login
  async login(req, res) {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
      req.session.user = user;
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // POST /signup
  async signup(req, res) {
    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, password: hashedPassword });
      req.session.user = newUser;
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // GET /logout
  logout(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
};

module.exports = authController;
