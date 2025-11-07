const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// GET all comments
router.get('/', async (req, res, next) => {
  try {
    const comments = await Comment.find()
      .populate('author')
      .sort({ createdAt: 'desc' });
    
    return res.json({
      comments: comments.map(comment => comment.toJSONFor())
    });
  } catch (err) {
    next(err);
  }
});

// DELETE a comment
router.delete('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    
    await comment.remove();
    
    return res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
