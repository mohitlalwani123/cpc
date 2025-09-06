import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Award, ExternalLink, ArrowLeft, Target, Trophy, Zap } from 'lucide-react';
import { format } from 'date-fns';

const EventDetailPage = () => {
  const { id } = useParams();

  // Mock event data - in real app, this would come from API
  const event = {
    id: id || '1',
    title: 'Weekly DSA Challenge',
    description: 'Test your data structures and algorithms knowledge with challenging problems designed to push your problem-solving skills to the limit.',
    longDescription: 'This comprehensive coding challenge will test your understanding of fundamental data structures and algorithms. Participants will solve a series of progressively difficult problems covering topics like arrays, linked lists, trees, graphs, dynamic programming, and more. Perfect for both beginners looking to learn and experts wanting to sharpen their skills.',
    date: '2025-01-15',
    time: '18:00',
    duration: '3 hours',
    participants: 234,
    maxParticipants: 500,
    difficulty: 'Medium',
    status: 'upcoming',
    prizePool: '$500',
    prizes: ['$250 - 1st Place', '$150 - 2nd Place', '$100 - 3rd Place'],
    rules: [
      'No external libraries allowed except standard language libraries',
      'Solutions must be submitted within the time limit',
      'Code must be original and written during the contest',
      'Multiple programming languages supported (Python, Java, C++, JavaScript)',
      'Partial scoring available for incomplete solutions'
    ],
    schedule: [
      { time: '18:00', event: 'Registration closes & contest begins' },
      { time: '18:15', event: 'Problem statements released' },
      { time: '20:45', event: '15-minute warning' },
      { time: '21:00', event: 'Contest ends & solutions submitted' },
      { time: '21:30', event: 'Results announced' }
    ],
    registrationUrl: 'https://forms.google.com/contest-registration'
  };

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    Hard: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    Expert: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Back Button */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/events"
            className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Events</span>
          </Link>
        </div>
      </div>

      {/* Event Header */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[event.difficulty as keyof typeof difficultyColors]}`}>
                {event.difficulty}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{event.title}</h1>
            <p className="text-xl text-indigo-100 max-w-3xl">{event.description}</p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-lg font-semibold">{format(new Date(event.date), 'MMM dd, yyyy')}</div>
                <div className="text-indigo-200">{event.time}</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-lg font-semibold">{event.duration}</div>
                <div className="text-indigo-200">Duration</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-lg font-semibold">{event.participants}/{event.maxParticipants}</div>
                <div className="text-indigo-200">Participants</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-lg font-semibold">{event.prizePool}</div>
                <div className="text-indigo-200">Prize Pool</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-slate-700/50"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <Target className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span>About This Event</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.longDescription}
                </p>
              </motion.div>

              {/* Rules */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-slate-700/50"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contest Rules</h2>
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Schedule */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/20 dark:border-slate-700/50"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Event Schedule</h2>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-indigo-600 text-white px-3 py-1 rounded-lg font-mono text-sm font-medium">
                        {item.time}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">{item.event}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Registration Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Registration</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 dark:text-gray-300">Spots Available</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {event.maxParticipants - event.participants}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-600 to-teal-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200 group"
                  >
                    <span>Register Now</span>
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Prizes */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  <span>Prizes</span>
                </h3>
                <div className="space-y-3">
                  {event.prizes.map((prize, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-600'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{prize}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Difficulty</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[event.difficulty as keyof typeof difficultyColors]}`}>
                      {event.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Format</span>
                    <span className="text-gray-900 dark:text-white font-medium">Individual</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Platform</span>
                    <span className="text-gray-900 dark:text-white font-medium">Online</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Language</span>
                    <span className="text-gray-900 dark:text-white font-medium">Multi</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailPage;