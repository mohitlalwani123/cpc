import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Users, Award } from 'lucide-react';
import EventCard from '../components/EventCard';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
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
    },
    {
      id: '4',
      title: 'Hackathon 2025',
      description: '48-hour coding marathon with amazing prizes and networking',
      date: '2025-01-12',
      time: '09:00',
      participants: 445,
      difficulty: 'Hard' as const,
      status: 'live' as const,
      prizePool: '$5000'
    },
    {
      id: '5',
      title: 'Python Challenge',
      description: 'Solve complex problems using Python in this timed challenge',
      date: '2025-01-08',
      time: '16:00',
      participants: 302,
      difficulty: 'Easy' as const,
      status: 'ended' as const,
      prizePool: '$300'
    },
    {
      id: '6',
      title: 'Database Design Contest',
      description: 'Design efficient database schemas for real-world scenarios',
      date: '2025-01-10',
      time: '14:00',
      participants: 187,
      difficulty: 'Medium' as const,
      status: 'ended' as const,
      prizePool: '$400'
    }
  ];

  const filters = [
    { value: 'all', label: 'All Events' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'live', label: 'Live' },
    { value: 'ended', label: 'Past' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || event.status === selectedFilter;
    return matchesSearch && matchesFilter;
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Coding <span className="text-yellow-300">Events</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Join exciting coding competitions, learn from challenges, and compete with developers worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex space-x-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFilter(filter.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedFilter === filter.value
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
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
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="bg-gray-100 dark:bg-slate-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-indigo-100 to-teal-100 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Total Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-500">12.5K+</div>
              <div className="text-gray-600 dark:text-gray-300">Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">$25K+</div>
              <div className="text-gray-600 dark:text-gray-300">Prize Pool</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;