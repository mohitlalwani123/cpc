const express = require('express');
const Post = require('../models/Post');
const { auth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/community/posts
// @desc    Get all posts
// @access  Public
router.get('/posts', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;
    
    // Build query
    const query = { isActive: true };
    
    if (category && category !== 'all') query.category = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    const posts = await Post.find(query)
      .populate('author', 'name email avatar achievements')
      .populate('comments.user', 'name avatar')
      .sort({ isPinned: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Post.countDocuments(query);

    res.json({
      posts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/community/posts/:id
// @desc    Get single post
// @access  Public
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'name email avatar achievements')
      .populate('comments.user', 'name avatar');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Increment views
    post.views += 1;
    await post.save();

    res.json(post);
  } catch (error) {
    console.error('Get post error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/community/posts
// @desc    Create post
// @access  Private
router.post('/posts', auth, async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;

    // Validation
    if (!title || !content || !category) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const post = new Post({
      title,
      content,
      category,
      tags: tags || [],
      author: req.user._id
    });

    await post.save();

    const populatedPost = await Post.findById(post._id)
      .populate('author', 'name email avatar achievements');

    res.status(201).json({
      message: 'Post created successfully',
      post: populatedPost
    });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/community/posts/:id/like
// @desc    Like/unlike post
// @access  Private
router.post('/posts/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const likeIndex = post.likes.findIndex(
      like => like.user.toString() === req.user._id.toString()
    );

    if (likeIndex > -1) {
      // Unlike
      post.likes.splice(likeIndex, 1);
    } else {
      // Like
      post.likes.push({ user: req.user._id });
    }

    await post.save();

    res.json({
      message: likeIndex > -1 ? 'Post unliked' : 'Post liked',
      likes: post.likes.length,
      isLiked: likeIndex === -1
    });
  } catch (error) {
    console.error('Like post error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/community/posts/:id/comment
// @desc    Add comment to post
// @access  Private
router.post('/posts/:id/comment', auth, async (req, res) => {
  try {
    const { content } = req.body;
    
    if (!content) {
      return res.status(400).json({ message: 'Comment content is required' });
    }

    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.comments.push({
      user: req.user._id,
      content
    });

    await post.save();

    const updatedPost = await Post.findById(post._id)
      .populate('comments.user', 'name avatar');

    res.status(201).json({
      message: 'Comment added successfully',
      comments: updatedPost.comments
    });
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;