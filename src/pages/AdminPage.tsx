import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  Trophy, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  TrendingUp,
  Activity,
  Award,
  MessageCircle
} from 'lucide-react';

const AdminPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Redirect if not admin
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'winners', label: 'Winners', icon: Trophy },
    { id: 'community', label: 'Community', icon: MessageCircle }
  ];

  const stats = [
    { label: 'Total Users', value: '12,547', change: '+12%', icon: Users, color: 'from-blue-500 to-indigo-600' },
    { label: 'Active Events', value: '23', change: '+3', icon: Calendar, color: 'from-green-500 to-teal-600' },
    { label: 'Total Prizes', value: '$25,340', change: '+$2,100', icon: Trophy, color: 'from-yellow-500 to-orange-600' },
    { label: 'Community Posts', value: '2,341', change: '+89', icon: MessageCircle, color: 'from-purple-500 to-pink-600' }
  ];

  const recentEvents = [
    { id: '1', name: 'Weekly DSA Challenge', participants: 234, status: 'live', date: '2025-01-15' },
    { id: '2', name: 'Frontend Showdown', participants: 156, status: 'upcoming', date: '2025-01-18' },
    { id: '3', name: 'AI/ML Sprint', participants: 89, status: 'upcoming', date: '2025-01-20' }
  ];

  const recentUsers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', joinDate: '2025-01-10', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', joinDate: '2025-01-09', status: 'active' },
    { id: '3', name: 'Bob Wilson', email: 'bob@example.com', joinDate: '2025-01-08', status: 'inactive' }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-green-500 text-sm font-medium">{stat.change}</p>
                </div>
                <div className={`bg-gradient-to-r ${stat.color} rounded-2xl p-3`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Events */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Events</h3>
            <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{event.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{event.participants} participants</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {event.status}
                  </span>
                  <button className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Users */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Users</h3>
            <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{user.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                  }`}>
                    {user.status}
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Event Management</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
        >
          <Plus className="h-5 w-5" />
          <span>Create Event</span>
        </motion.button>
      </div>

      <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Event</th>
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Participants</th>
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Status</th>
                <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.map((event) => (
                <tr key={event.id} className="border-b border-gray-100 dark:border-slate-700/50">
                  <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">{event.name}</td>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{new Date(event.date).toLocaleDateString()}</td>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{event.participants}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'live'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'events':
        return renderEvents();
      case 'users':
        return <div className="text-center py-16 text-gray-500 dark:text-gray-400">User management coming soon...</div>;
      case 'winners':
        return <div className="text-center py-16 text-gray-500 dark:text-gray-400">Winner management coming soon...</div>;
      case 'community':
        return <div className="text-center py-16 text-gray-500 dark:text-gray-400">Community management coming soon...</div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Admin <span className="text-yellow-300">Dashboard</span>
            </h1>
            <p className="text-xl text-indigo-100">
              Manage events, users, and community content
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Navigation</h3>
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                        activeTab === tab.id
                          ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;