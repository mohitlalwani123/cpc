import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Newspaper, TrendingUp, Megaphone } from 'lucide-react';
import { format } from 'date-fns';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { value: 'all', label: 'All News' },
    { value: 'events', label: 'Event Updates' },
    { value: 'results', label: 'Results' },
    { value: 'announcements', label: 'Announcements' },
    { value: 'features', label: 'New Features' }
  ];

  const newsArticles = [
    {
      id: '1',
      title: 'Coding Arena Reaches 10,000 Active Users Milestone',
      excerpt: 'We\'re thrilled to announce that our community has grown to over 10,000 active developers! Thank you for making Coding Arena the premier destination for competitive programming.',
      content: 'This milestone represents months of hard work from our team and incredible engagement from our community...',
      author: 'Coding Arena Team',
      authorAvatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'announcements',
      publishedAt: '2025-01-10',
      readTime: '3 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
      trending: true
    },
    {
      id: '2',
      title: 'Weekly DSA Challenge #47 Results: Record-Breaking Participation',
      excerpt: 'Last week\'s DSA challenge saw unprecedented participation with 445 developers competing for the top spot. Congratulations to all participants!',
      content: 'The Weekly DSA Challenge #47 featured complex algorithmic problems that tested participants\' knowledge...',
      author: 'Alex Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'results',
      publishedAt: '2025-01-09',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2'
    },
    {
      id: '3',
      title: 'Introducing Live Coding Sessions: Real-Time Problem Solving',
      excerpt: 'We\'re excited to launch live coding sessions where participants can solve problems in real-time with expert guidance and community interaction.',
      content: 'Our new live coding sessions feature will revolutionize how developers learn and compete...',
      author: 'Sarah Chen',
      authorAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'features',
      publishedAt: '2025-01-08',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2'
    },
    {
      id: '4',
      title: 'Annual Hackathon 2025: Registration Now Open',
      excerpt: 'Our biggest event of the year is coming! The Annual Hackathon 2025 features a $10,000 prize pool and exciting challenges across multiple domains.',
      content: 'Mark your calendars for the most anticipated coding event of the year...',
      author: 'David Kim',
      authorAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'events',
      publishedAt: '2025-01-07',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2'
    },
    {
      id: '5',
      title: 'Community Spotlight: Meet This Month\'s Top Contributors',
      excerpt: 'Discover the amazing developers who have been contributing exceptional content and helping fellow coders in our community forums.',
      content: 'This month we\'re highlighting some incredible community members who have gone above and beyond...',
      author: 'Emma Taylor',
      authorAvatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      category: 'announcements',
      publishedAt: '2025-01-06',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2'
    }
  ];

  const categoryColors = {
    events: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    results: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    announcements: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    features: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
  };

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Newspaper className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Arena <span className="text-yellow-300">News</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Stay updated with the latest events, results, and platform announcements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.length > 0 && filteredArticles[0].trending && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm">TRENDING</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {filteredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={filteredArticles[0].authorAvatar}
                      alt={filteredArticles[0].author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">{filteredArticles[0].author}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {format(new Date(filteredArticles[0].publishedAt), 'MMM dd, yyyy')} • {filteredArticles[0].readTime}
                      </p>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <div>
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(filteredArticles[0]?.trending ? 1 : 0).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category as keyof typeof categoryColors]}`}>
                      {categories.find(c => c.value === article.category)?.label}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={article.authorAvatar}
                        alt={article.author}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{article.author}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3 w-3" />
                          <span>{format(new Date(article.publishedAt), 'MMM dd')}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Megaphone className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Subscribe to our newsletter for the latest news, event announcements, and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;