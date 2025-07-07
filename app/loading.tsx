'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-light flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold gradient-text"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="flex items-center gap-2"
        >
          <span>R</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          >
            |
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
} 