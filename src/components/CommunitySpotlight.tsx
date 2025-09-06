import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, Share2, ArrowRight } from 'lucide-react';

const CommunitySpotlight = () => {
  const featuredPosts = [
    {
      id: '1',
      title: 'Optimizing Binary Search: A Deep Dive',
      author: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      excerpt: 'Exploring advanced techniques for binary search optimization in competitive programming...',
      category: 'Algorithms',
      likes: 42,
      comments: 18,
      timeAgo: '2 hours ago'
    },
    {
      id: '2',
      title: 'React Patterns for Competitive UI Building',
      author: 'Sarah Kim',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      excerpt: 'Best practices and patterns for rapid frontend development in coding competitions...',
      category: 'Web Dev',
      likes: 38,
      comments: 25,
      timeAgo: '4 hours ago'
    },
    {
      id: '3',
      title: 'Machine Learning in 60 Minutes Challenge',
      author: 'David Park',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      excerpt: 'How I built a working ML model in under an hour during last week\'s sprint...',
      category: 'AI/ML',
      likes: 67,
      comments: 31,
      timeAgo: '6 hours ago'
    }
  ];

  const categoryColors = {
    'Algorithms': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    'Web Dev': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'AI/ML': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Community <span className="text-teal-500">Spotlight</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover insights, tips, and discussions from our coding community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full border-2 border-indigo-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{post.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.timeAgo}</p>
                </div>
              </div>

              <div className="mb-3">
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${categoryColors[post.category as keyof typeof categoryColors]}`}>
                  {post.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/community">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:shadow-lg transition-all duration-200"
            >
              <span>Join Discussion</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;