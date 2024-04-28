const router = require('express').Router();
const postController = require('../../controllers/postController');

// Post routes
router.get('/post/:id', postController.getPostById);
router.post('/post/:id/comment', postController.createComment);
router.delete('/post/:id', postController.deletePost);
router.put('/post/:id', postController.updatePost);

module.exports = router;
