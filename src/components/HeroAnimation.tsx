import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroAnimation = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    'function compete() {',
    '  return victory;',
    '}',
    '',
    'while (coding) {',
    '  level.up();',
    '}',
    '',
    'if (passion === true) {',
    '  achieve.greatness();',
    '}'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-slate-900 rounded-2xl p-8 font-mono text-sm overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Code lines */}
      <div className="relative space-y-2">
        {texts.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: index <= currentText ? 1 : 0.3,
              x: index <= currentText ? 0 : -20
            }}
            transition={{ duration: 0.3 }}
            className={`${
              index <= currentText 
                ? 'text-green-400' 
                : 'text-gray-600'
            }`}
          >
            <span className="text-gray-500 mr-4">{(index + 1).toString().padStart(2, '0')}</span>
            {text}
            {index === currentText && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-green-400"
              >
                |
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
            animate={{
              x: [0, Math.random() * 400],
              y: [0, Math.random() * 300],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroAnimation;