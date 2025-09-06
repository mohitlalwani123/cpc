const express = require('express');
const News = require('../models/News');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/news
// @desc    Get all news articles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10, featured } = req.query;
    
    // Build query
    const query = { isPublished: true };
    
    if (category && category !== 'all') query.category = category;
    if (featured === 'true') query.isFeatured = true;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } }
      ];
    }

    const articles = await News.find(query)
      .populate('author', 'name email avatar')
      .sort({ isTrending: -1, publishedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await News.countDocuments(query);

    res.json({
      articles,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/news/:id
// @desc    Get single news article
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const article = await News.findById(req.params.id)
      .populate('author', 'name email avatar');

    if (!article || !article.isPublished) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Increment views
    article.views += 1;
    await article.save();

    res.json(article);
  } catch (error) {
    console.error('Get article error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/news
// @desc    Create news article
// @access  Admin
router.post('/', adminAuth, async (req, res) => {
  try {
    const articleData = {
      ...req.body,
      author: req.user._id
    };

    const article = new News(articleData);
    await article.save();

    const populatedArticle = await News.findById(article._id)
      .populate('author', 'name email avatar');

    res.status(201).json({
      message: 'Article created successfully',
      article: populatedArticle
    });
  } catch (error) {
    console.error('Create article error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/news/:id
// @desc    Update news article
// @access  Admin
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    Object.assign(article, req.body);
    await article.save();

    const updatedArticle = await News.findById(article._id)
      .populate('author', 'name email avatar');

    res.json({
      message: 'Article updated successfully',
      article: updatedArticle
    });
  } catch (error) {
    console.error('Update article error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;