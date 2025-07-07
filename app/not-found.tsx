'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-light p-4">
      <div className="absolute top-0 right-0 -z-10 opacity-30 bg-gradient-radial from-accent-500/20 to-transparent w-[500px] h-[500px] blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 opacity-30 bg-gradient-radial from-primary-500/20 to-transparent w-[500px] h-[500px] blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-light/70 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-light font-medium hover:from-primary-500 hover:to-accent-500 transition-all duration-300">
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 