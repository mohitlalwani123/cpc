import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
}

const ConfettiAnimation: React.FC<{ trigger: boolean }> = ({ trigger }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const colors = ['#6C63FF', '#00C9A7', '#FF6B6B', '#FFD93D', '#8B5CF6', '#06B6D4'];

  useEffect(() => {
    if (trigger) {
      const pieces: ConfettiPiece[] = [];
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -10,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
          rotation: Math.random() * 360
        });
      }
      setConfetti(pieces);

      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 3000);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            x: piece.x,
            y: piece.y,
            rotate: piece.rotation,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation + 720,
            opacity: 0
          }}
          transition={{
            duration: 3,
            ease: 'easeOut'
          }}
          className="absolute"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%'
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiAnimation;