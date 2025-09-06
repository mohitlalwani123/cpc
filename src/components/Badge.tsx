import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'gradient';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  title,
  description,
  icon: Icon,
  color = 'primary',
  size = 'md',
  variant = 'solid',
  className = ''
}) => {
  const colorClasses = {
    primary: {
      solid: 'bg-indigo-600 text-white',
      outline: 'border-indigo-600 text-indigo-600 dark:text-indigo-400',
      gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
    },
    secondary: {
      solid: 'bg-teal-600 text-white',
      outline: 'border-teal-600 text-teal-600 dark:text-teal-400',
      gradient: 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
    },
    success: {
      solid: 'bg-green-600 text-white',
      outline: 'border-green-600 text-green-600 dark:text-green-400',
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
    },
    warning: {
      solid: 'bg-yellow-600 text-white',
      outline: 'border-yellow-600 text-yellow-600 dark:text-yellow-400',
      gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
    },
    error: {
      solid: 'bg-red-600 text-white',
      outline: 'border-red-600 text-red-600 dark:text-red-400',
      gradient: 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
    }
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const baseClasses = `inline-flex items-center space-x-1 font-medium rounded-full transition-all duration-200 ${
    variant === 'outline' ? 'border bg-transparent' : ''
  }`;

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`${baseClasses} ${colorClasses[color][variant]} ${sizeClasses[size]} ${className}`}
    >
      {Icon && <Icon className={`${size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'}`} />}
      <span>{title}</span>
    </motion.span>
  );
};

export default Badge;