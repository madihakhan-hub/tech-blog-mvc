const { Post } = require('../models');

const homeController = {
  // GET /
  async getHomePage(req, res) {
    try {
      const posts = await Post.findAll({ raw: true });
      res.render('home', { posts });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = homeController;
