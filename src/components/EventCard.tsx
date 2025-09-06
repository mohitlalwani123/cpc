import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  participants: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  status: 'upcoming' | 'live' | 'ended';
  prizePool?: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    Hard: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    Expert: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };

  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    live: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    ended: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
  };

  return (
    <motion.div
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02
      }}
      className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, #6C63FF, #00C9A7, #FF6B6B, #FFD93D)',
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Floating particles on hover */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>

      <div className="flex items-start justify-between mb-4">
        <div className="flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[event.status]}`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[event.difficulty]}`}>
            {event.difficulty}
          </span>
        </div>
        {event.status === 'live' && (
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-red-500 font-medium">LIVE</span>
          </div>
        )}
      </div>

      <motion.h3 
        className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10"
        whileHover={{
          scale: 1.05,
          textShadow: '0 0 10px rgba(108, 99, 255, 0.8)'
        }}
      >
        {event.title}
      </motion.h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {event.description}
      </p>

      <div className="space-y-2 mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="h-4 w-4" />
          <span>{format(new Date(event.date), 'MMM dd, yyyy')}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Users className="h-4 w-4" />
          <span>{event.participants} participants</span>
        </div>
        {event.prizePool && (
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Award className="h-4 w-4" />
            <span>{event.prizePool} prize pool</span>
          </div>
        )}
      </div>

      <Link to={`/events/${event.id}`}>
        <motion.button
          whileHover={{ 
            x: 5,
            scale: 1.02,
            boxShadow: '0 10px 30px rgba(108, 99, 255, 0.4)'
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <span>View Details</span>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default EventCard;