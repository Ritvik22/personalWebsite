'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="absolute top-0 right-0 -z-10 opacity-30 bg-gradient-radial from-accent-500/20 to-transparent w-[500px] h-[500px] blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 opacity-30 bg-gradient-radial from-primary-500/20 to-transparent w-[500px] h-[500px] blur-3xl" />
      
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