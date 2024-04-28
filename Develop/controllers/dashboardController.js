const { Post } = require('../models');

const dashboardController = {
  // GET /dashboard
  async getDashboardPage(req, res) {
    try {
      const userId = req.session.user.id;
      const posts = await Post.findAll({ where: { userId }, raw: true });
      res.render('dashboard', { posts });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = dashboardController;
