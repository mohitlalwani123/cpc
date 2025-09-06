import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: 'typewriter' | 'wave' | 'glow' | 'bounce';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.05,
  variant = 'typewriter'
}) => {
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay
      }
    }
  };

  const getLetterVariants = () => {
    switch (variant) {
      case 'wave':
        return {
          hidden: { y: 50, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              damping: 12,
              stiffness: 200
            }
          }
        };
      
      case 'glow':
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 100
            }
          }
        };
      
      case 'bounce':
        return {
          hidden: { y: -100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              damping: 8,
              stiffness: 300,
              bounce: 0.6
            }
          }
        };
      
      default: // typewriter
        return {
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: 'tween',
              ease: 'easeOut'
            }
          }
        };
    }
  };

  const letterVariants = getLetterVariants();

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className={`inline-block ${
            variant === 'glow' 
              ? 'drop-shadow-[0_0_10px_rgba(108,99,255,0.8)]' 
              : ''
          }`}
          whileHover={
            variant === 'glow' 
              ? {
                  scale: 1.2,
                  textShadow: '0 0 20px rgba(108,99,255,1)',
                  transition: { duration: 0.2 }
                }
              : variant === 'bounce'
              ? {
                  y: -10,
                  transition: { duration: 0.2 }
                }
              : {}
          }
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;