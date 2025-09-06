import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type: 'card' | 'list' | 'profile' | 'text';
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type, count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
            <div className="animate-pulse">
              <div className="flex space-x-2 mb-4">
                <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded-full w-20"></div>
                <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded-full w-16"></div>
              </div>
              <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-full mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-2/3"></div>
              </div>
              <div className="h-12 bg-gray-300 dark:bg-slate-600 rounded-xl"></div>
            </div>
          </div>
        );

      case 'list':
        return (
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
            <div className="animate-pulse">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-12 w-12 bg-gray-300 dark:bg-slate-600 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-1/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 dark:bg-slate-600 rounded w-1/6"></div>
                </div>
              </div>
              <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-5/6"></div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
            <div className="animate-pulse text-center">
              <div className="h-20 w-20 bg-gray-300 dark:bg-slate-600 rounded-full mx-auto mb-4"></div>
              <div className="h-6 bg-gray-300 dark:bg-slate-600 rounded w-1/2 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-1/3 mx-auto mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 dark:bg-slate-600 rounded w-4/6"></div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {renderSkeleton()}
        </motion.div>
      ))}
    </>
  );
};

export default SkeletonLoader;