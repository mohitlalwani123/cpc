import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { getInitials } from '../utils/formatters';

interface AvatarProps {
  src?: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBorder?: boolean;
  borderColor?: string;
  fallbackBg?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  className = '',
  showBorder = false,
  borderColor = 'border-indigo-500',
  fallbackBg = 'bg-gradient-to-r from-indigo-500 to-purple-500'
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl'
  };

  const borderClass = showBorder ? `border-2 ${borderColor}` : '';

  if (src) {
    return (
      <motion.img
        whileHover={{ scale: 1.05 }}
        src={src}
        alt={name}
        className={`${sizeClasses[size]} rounded-full object-cover ${borderClass} ${className}`}
        onError={(e) => {
          // Fallback to initials if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${sizeClasses[size]} ${fallbackBg} rounded-full flex items-center justify-center text-white font-semibold ${borderClass} ${className}`}
    >
      {name ? getInitials(name) : <User className="w-1/2 h-1/2" />}
    </motion.div>
  );
};

export default Avatar;