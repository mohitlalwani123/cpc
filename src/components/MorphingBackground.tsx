import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MorphingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Create morphing gradient blobs
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.3 + Math.cos(time * 0.8) * 80,
        0,
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.3 + Math.cos(time * 0.8) * 80,
        300 + Math.sin(time * 1.2) * 50
      );
      
      gradient1.addColorStop(0, `rgba(108, 99, 255, ${0.15 + Math.sin(time) * 0.05})`);
      gradient1.addColorStop(0.5, `rgba(0, 201, 167, ${0.1 + Math.cos(time * 1.1) * 0.03})`);
      gradient1.addColorStop(1, 'rgba(108, 99, 255, 0)');
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 1.3) * 120,
        canvas.height * 0.6 + Math.sin(time * 0.9) * 90,
        0,
        canvas.width * 0.7 + Math.cos(time * 1.3) * 120,
        canvas.height * 0.6 + Math.sin(time * 0.9) * 90,
        250 + Math.cos(time * 0.7) * 40
      );
      
      gradient2.addColorStop(0, `rgba(255, 107, 107, ${0.12 + Math.cos(time * 1.4) * 0.04})`);
      gradient2.addColorStop(0.5, `rgba(255, 217, 61, ${0.08 + Math.sin(time * 0.6) * 0.02})`);
      gradient2.addColorStop(1, 'rgba(255, 107, 107, 0)');
      
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.5) * 150,
        canvas.height * 0.8 + Math.cos(time * 1.1) * 100,
        0,
        canvas.width * 0.5 + Math.sin(time * 0.5) * 150,
        canvas.height * 0.8 + Math.cos(time * 1.1) * 100,
        200 + Math.sin(time * 1.5) * 60
      );
      
      gradient3.addColorStop(0, `rgba(139, 92, 246, ${0.1 + Math.sin(time * 1.8) * 0.03})`);
      gradient3.addColorStop(0.5, `rgba(6, 182, 212, ${0.06 + Math.cos(time * 0.8) * 0.02})`);
      gradient3.addColorStop(1, 'rgba(139, 92, 246, 0)');
      
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = 'source-over';
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    />
  );
};

export default MorphingBackground;