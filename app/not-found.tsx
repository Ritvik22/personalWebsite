'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-dark mb-4">Page Not Found</h2>
          <p className="text-dark/70 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <Link href="/" className="px-6 py-3 bg-primary-600 rounded-full text-light font-medium hover:bg-primary-500 transition-all duration-300">
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 