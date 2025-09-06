import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Trophy, Users, Zap, Target, Star } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';
import EventCard from '../components/EventCard';
import CommunitySpotlight from '../components/CommunitySpotlight';
import AnimatedCounter from '../components/AnimatedCounter';

const HomePage = () => {
  const upcomingEvents = [
    {
      id: '1',
      title: 'Weekly DSA Challenge',
      description: 'Test your data structures and algorithms knowledge with challenging problems',
      date: '2025-01-15',
      time: '18:00',
      participants: 234,
      difficulty: 'Medium' as const,
      status: 'upcoming' as const,
      prizePool: '$500'
    },
    {
      id: '2',
      title: 'Frontend Showdown',
      description: 'Build amazing UIs in this rapid development contest',
      date: '2025-01-18',
      time: '15:00',
      participants: 156,
      difficulty: 'Hard' as const,
      status: 'upcoming' as const,
      prizePool: '$750'
    },
    {
      id: '3',
      title: 'AI/ML Sprint',
      description: 'Create intelligent solutions to real-world problems',
      date: '2025-01-20',
      time: '10:00',
      participants: 89,
      difficulty: 'Expert' as const,
      status: 'upcoming' as const,
      prizePool: '$1000'
    }
  ];

  const features = [
    {
      icon: Trophy,
      title: 'Competitive Events',
      description: 'Join exciting coding competitions with real prizes and recognition',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Vibrant Community',
      description: 'Connect with developers, share knowledge, and grow together',
      color: 'from-teal-400 to-blue-500'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Improve your coding skills with challenging problems and feedback',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Star,
      title: 'Achievement System',
      description: 'Earn badges, climb leaderboards, and showcase your progress',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Code.
                <br />
                <span className="text-yellow-300">Compete.</span>
                <br />
                <span className="text-teal-300">Conquer.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-indigo-100 mb-8 max-w-lg"
              >
                Join the ultimate coding battlefield where developers compete, learn, and celebrate achievements together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/events">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 hover:shadow-2xl transition-all duration-200"
                  >
                    <Zap className="h-6 w-6" />
                    <span>Start Competing</span>
                  </motion.button>
                </Link>
                <Link to="/community">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 hover:bg-white hover:text-indigo-600 transition-all duration-200"
                  >
                    <Users className="h-6 w-6" />
                    <span>Join Community</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                <AnimatedCounter end={12500} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">Active Developers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-teal-500">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">Competitions</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                <AnimatedCounter end={25000} prefix="$" suffix="+" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">Prize Pool</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-green-500">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-indigo-600 dark:text-indigo-400">Coding Arena</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of competition, learning, and community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${feature.color} rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming <span className="text-teal-500">Events</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't miss out on these exciting coding competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:shadow-lg transition-all duration-200"
              >
                <span>View All Events</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Spotlight */}
      <CommunitySpotlight />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Code2 className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Enter the Arena?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of developers competing, learning, and growing together
            </p>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 mx-auto hover:shadow-xl transition-all duration-200"
              >
                <Trophy className="h-6 w-6" />
                <span>Join the Arena</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;