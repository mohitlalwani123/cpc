const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const sessionId = req.header('X-Session-ID');
    
    if (!sessionId) {
      return res.status(401).json({
        success: false,
        message: 'No session ID provided, authorization denied'
      });
    }

    const user = await User.findOne({ sessionId, isActive: true });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid session - user not found'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error in authentication'
    });
  }
};

const adminAuth = async (req, res, next) => {
  try {
    await new Promise((resolve, reject) => {
      auth(req, res, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Admin access required'
      });
    }

    next();
  } catch (error) {
    console.error('Admin auth middleware error:', error);
    res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
};

const optionalAuth = async (req, res, next) => {
  try {
    const sessionId = req.header('X-Session-ID');
    
    if (!sessionId) {
      req.user = null;
      return next();
    }

    const user = await User.findOne({ sessionId, isActive: true });
    req.user = user || null;
    next();
  } catch (error) {
    console.error('Optional auth middleware error:', error);
    req.user = null;
    next();
  }
};

module.exports = { auth, adminAuth, optionalAuth };