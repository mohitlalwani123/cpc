import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Crown, Star } from 'lucide-react';

interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  score: number;
  rank: number;
  achievements: string[];
  eventsWon: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  title?: string;
  showRanks?: number;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ 
  entries, 
  title = 'Leaderboard',
  showRanks = 10 
}) => {
  const getPositionIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-orange-600" />;
      default:
        return <Trophy className="h-6 w-6 text-indigo-500" />;
    }
  };

  const getPositionBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-500';
      case 3:
        return 'bg-gradient-to-r from-orange-400 to-red-500';
      default:
        return 'bg-gradient-to-r from-indigo-400 to-purple-500';
    }
  };

  const displayEntries = entries.slice(0, showRanks);

  return (
    <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <span>{title}</span>
      </h3>

      <div className="space-y-4">
        {displayEntries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
              entry.rank <= 3
                ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800/50'
                : 'bg-gray-50 dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600'
            }`}
          >
            {/* Rank */}
            <div className="flex items-center space-x-2">
              <div className={`${getPositionBg(entry.rank)} rounded-full p-2 flex items-center justify-center min-w-[40px] h-10`}>
                {entry.rank <= 3 ? (
                  getPositionIcon(entry.rank)
                ) : (
                  <span className="text-white font-bold text-sm">#{entry.rank}</span>
                )}
              </div>
            </div>

            {/* Avatar */}
            <img
              src={entry.avatar}
              alt={entry.name}
              className="w-12 h-12 rounded-full border-2 border-indigo-500"
            />

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {entry.name}
                </h4>
                {entry.rank === 1 && (
                  <Star className="h-4 w-4 text-yellow-500" />
                )}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>{entry.score.toLocaleString()} points</span>
                <span>•</span>
                <span>{entry.eventsWon} wins</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="hidden sm:flex flex-wrap gap-1 max-w-[200px]">
              {entry.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                <span
                  key={achievementIndex}
                  className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {achievement}
                </span>
              ))}
              {entry.achievements.length > 2 && (
                <span className="text-gray-500 dark:text-gray-400 text-xs">
                  +{entry.achievements.length - 2}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {entries.length === 0 && (
        <div className="text-center py-8">
          <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">No entries found</p>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;