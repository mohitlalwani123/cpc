import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Calendar, Star, Crown, Zap } from 'lucide-react';

const WinnersPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('recent');

  const periods = [
    { value: 'recent', label: 'Recent Winners' },
    { value: 'monthly', label: 'This Month' },
    { value: 'yearly', label: 'Hall of Fame' }
  ];

  const winners = [
    {
      id: '1',
      name: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      position: 1,
      event: 'Weekly DSA Challenge #47',
      date: '2025-01-08',
      prize: '$250',
      score: 95,
      timeCompleted: '2h 15m',
      achievements: ['Perfect Score', 'Speed Demon', 'Problem Crusher']
    },
    {
      id: '2',
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      position: 2,
      event: 'Weekly DSA Challenge #47',
      date: '2025-01-08',
      prize: '$150',
      score: 92,
      timeCompleted: '2h 28m',
      achievements: ['Algorithm Master', 'Consistent Performer']
    },
    {
      id: '3',
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      position: 3,
      event: 'Weekly DSA Challenge #47',
      date: '2025-01-08',
      prize: '$100',
      score: 88,
      timeCompleted: '2h 45m',
      achievements: ['Rising Star', 'Logic Wizard']
    },
    {
      id: '4',
      name: 'Emma Taylor',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      position: 1,
      event: 'Frontend Showdown #23',
      date: '2025-01-05',
      prize: '$300',
      score: 98,
      timeCompleted: '3h 12m',
      achievements: ['UI Genius', 'Creative Excellence', 'Performance Pro']
    },
    {
      id: '5',
      name: 'Michael Zhang',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      position: 1,
      event: 'AI/ML Sprint #12',
      date: '2025-01-03',
      prize: '$500',
      score: 94,
      timeCompleted: '4h 30m',
      achievements: ['ML Mastermind', 'Innovation Leader', 'Data Wizard']
    }
  ];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="h-8 w-8 text-yellow-500" />;
      case 2:
        return <Medal className="h-8 w-8 text-gray-400" />;
      case 3:
        return <Award className="h-8 w-8 text-orange-600" />;
      default:
        return <Trophy className="h-8 w-8 text-indigo-500" />;
    }
  };

  const getPositionBg = (position: number) => {
    switch (position) {
      case 1:
        return 'bg-gradient-to-br from-yellow-400 to-orange-500';
      case 2:
        return 'bg-gradient-to-br from-gray-300 to-gray-500';
      case 3:
        return 'bg-gradient-to-br from-orange-400 to-red-500';
      default:
        return 'bg-gradient-to-br from-indigo-400 to-purple-500';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Trophy className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Champions <span className="text-yellow-200">Gallery</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Celebrating the brilliant minds who conquered our coding challenges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-2 bg-gray-100 dark:bg-slate-700 p-1 rounded-xl">
              {periods.map((period) => (
                <button
                  key={period.value}
                  onClick={() => setSelectedPeriod(period.value)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedPeriod === period.value
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Winners Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <motion.div
                key={winner.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
                  {/* Position Badge */}
                  <div className="absolute -top-4 -right-4">
                    <div className={`${getPositionBg(winner.position)} rounded-full p-3 shadow-lg`}>
                      {getPositionIcon(winner.position)}
                    </div>
                  </div>

                  {/* Winner Info */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <img
                        src={winner.avatar}
                        alt={winner.name}
                        className="w-20 h-20 rounded-full border-4 border-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-1">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {winner.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                      {winner.event}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      {new Date(winner.date).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-300">Score</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">{winner.score}/100</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-300">Time</span>
                      <span className="font-bold text-teal-600 dark:text-teal-400">{winner.timeCompleted}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-300">Prize</span>
                      <span className="font-bold text-yellow-600 dark:text-yellow-400">{winner.prize}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span>Achievements</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {winner.achievements.map((achievement, achievementIndex) => (
                        <span
                          key={achievementIndex}
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Preview */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Crown className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join the Hall of Fame
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Compete in our events and earn your place among the coding elite!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 mx-auto hover:shadow-xl transition-all duration-200"
            >
              <Trophy className="h-6 w-6" />
              <span>Start Competing</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WinnersPage;