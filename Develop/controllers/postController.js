const { Post, Comment } = require('../models');

const postController = {
  // GET /post/:id
  async getPostById(req, res) {
    const { id } = req.params;
    try {
      const post = await Post.findByPk(id, { include: [Comment] });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.render('post', { post });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // POST /post/:id/comment
  async createComment(req, res) {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.session.user.id;
    try {
      const comment = await Comment.create({ content, postId: id, userId });
      res.redirect(`/post/${id}`);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // DELETE /post/:id
  async deletePost(req, res) {
    const { id } = req.params;
    try {
      await Post.destroy({ where: { id } });
      res.redirect('/dashboard');
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // PUT /post/:id
  async updatePost(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      await Post.update({ title, content }, { where: { id } });
      res.redirect('/dashboard');
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = postController;
