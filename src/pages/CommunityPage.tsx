import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Share2, Search, Plus, TrendingUp, Users, Filter } from 'lucide-react';

const CommunityPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All Posts', count: 234 },
    { value: 'dsa', label: 'DSA', count: 89 },
    { value: 'web-dev', label: 'Web Dev', count: 67 },
    { value: 'ai-ml', label: 'AI/ML', count: 45 },
    { value: 'competitive', label: 'Competitive', count: 33 }
  ];

  const posts = [
    {
      id: '1',
      title: 'Optimizing Binary Search: A Deep Dive',
      content: 'I\'ve been working on optimizing binary search algorithms for competitive programming. Here are some advanced techniques I discovered...',
      author: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'dsa',
      likes: 42,
      comments: 18,
      shares: 7,
      timeAgo: '2 hours ago',
      isLiked: false,
      badges: ['Problem Solver', 'DSA Expert']
    },
    {
      id: '2',
      title: 'React Patterns for Competitive UI Building',
      content: 'During the last frontend challenge, I learned some amazing React patterns that helped me build UIs faster. Let me share them with you...',
      author: 'Sarah Kim',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'web-dev',
      likes: 38,
      comments: 25,
      shares: 12,
      timeAgo: '4 hours ago',
      isLiked: true,
      badges: ['UI Wizard', 'React Pro']
    },
    {
      id: '3',
      title: 'Machine Learning in 60 Minutes Challenge',
      content: 'Last week\'s ML sprint was intense! Here\'s how I managed to build a working model in under an hour...',
      author: 'David Park',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'ai-ml',
      likes: 67,
      comments: 31,
      shares: 19,
      timeAgo: '6 hours ago',
      isLiked: false,
      badges: ['ML Engineer', 'Data Scientist']
    },
    {
      id: '4',
      title: 'Dynamic Programming Visualization Tool',
      content: 'I created a tool to visualize DP problems and solutions. It\'s been really helpful for understanding complex algorithms...',
      author: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'dsa',
      likes: 89,
      comments: 43,
      shares: 28,
      timeAgo: '8 hours ago',
      isLiked: true,
      badges: ['Algorithm Master', 'Tool Builder']
    }
  ];

  const categoryColors = {
    'dsa': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    'web-dev': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'ai-ml': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    'competitive': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-500 via-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Community <span className="text-yellow-300">Hub</span>
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Connect, share knowledge, and learn from fellow developers in our vibrant community
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Create Post Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200"
              >
                <Plus className="h-5 w-5" />
                <span>New Post</span>
              </motion.button>

              {/* Categories */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Categories</span>
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between ${
                        selectedCategory === category.value
                          ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span className="text-xs bg-gray-200 dark:bg-slate-600 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Trending</span>
                </h3>
                <div className="space-y-3">
                  {['#BinarySearch', '#ReactHooks', '#MLAlgorithms', '#CompetitiveProgramming'].map((tag, index) => (
                    <div key={tag} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full border-2 border-indigo-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{post.author}</h4>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">•</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{post.timeAgo}</span>
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${categoryColors[post.category as keyof typeof categoryColors]}`}>
                          {categories.find(c => c.value === post.category)?.label}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.badges.map((badge, badgeIndex) => (
                          <span
                            key={badgeIndex}
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.content}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button className={`flex items-center space-x-1 transition-colors ${
                            post.isLiked
                              ? 'text-red-500 hover:text-red-600'
                              : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
                          }`}>
                            <Heart className={`h-5 w-5 ${post.isLiked ? 'fill-current' : ''}`} />
                            <span className="text-sm font-medium">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <MessageCircle className="h-5 w-5" />
                            <span className="text-sm font-medium">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors">
                            <Share2 className="h-5 w-5" />
                            <span className="text-sm font-medium">{post.shares}</span>
                          </button>
                        </div>
                        <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                Load More Posts
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <section className="py-12 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">12.5K+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Members</div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-teal-500 to-indigo-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">2.3K+</div>
              <div className="text-gray-600 dark:text-gray-400">Discussions</div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">94%</div>
              <div className="text-gray-600 dark:text-gray-400">Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;