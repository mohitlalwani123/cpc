import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Zap, Star, Target, Cpu, Database, Globe } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Code2, color: '#6C63FF', size: 40, delay: 0 },
    { Icon: Trophy, color: '#FFD93D', size: 35, delay: 0.5 },
    { Icon: Zap, color: '#FF6B6B', size: 30, delay: 1 },
    { Icon: Star, color: '#00C9A7', size: 25, delay: 1.5 },
    { Icon: Target, color: '#8B5CF6', size: 45, delay: 2 },
    { Icon: Cpu, color: '#06B6D4', size: 38, delay: 2.5 },
    { Icon: Database, color: '#F59E0B', size: 32, delay: 3 },
    { Icon: Globe, color: '#EF4444', size: 28, delay: 3.5 }
  ];

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(108, 99, 255, 0.3)',
        '0 0 40px rgba(108, 99, 255, 0.6)',
        '0 0 20px rgba(108, 99, 255, 0.3)'
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => {
        const { Icon, color, size, delay } = element;
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${10 + (index * 12)}%`,
              top: `${15 + (index * 8)}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ 
              opacity: [0, 0.7, 0.4, 0.8, 0.3],
              scale: [0, 1.2, 0.8, 1.1, 0.9],
              transition: { 
                duration: 4,
                delay: delay,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <motion.div
              className="relative"
              variants={glowVariants}
              animate="animate"
              whileHover={{ 
                scale: 1.3,
                rotate: 360,
                transition: { duration: 0.8 }
              }}
            >
              <div
                className="rounded-full p-3 backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${color}20, ${color}40)`,
                  border: `2px solid ${color}60`
                }}
              >
                <Icon 
                  size={size} 
                  color={color}
                  className="drop-shadow-lg"
                />
              </div>
              
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 opacity-30"
                style={{ borderColor: color }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: delay + 1
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
      
      {/* Additional floating geometric shapes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${colors[i % colors.length]}, ${colors[(i + 1) % colors.length]})`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const colors = ['#6C63FF', '#00C9A7', '#FF6B6B', '#FFD93D', '#8B5CF6', '#06B6D4', '#F59E0B', '#EF4444'];

export default FloatingElements;