'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading (for animation purposes)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="relative overflow-hidden">
      {isLoading ? (
        <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
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
      ) : (
        <>
          <div className="absolute top-0 right-0 -z-10 opacity-30 bg-gradient-radial from-accent-500/20 to-transparent w-[500px] h-[500px] blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 opacity-30 bg-gradient-radial from-primary-500/20 to-transparent w-[500px] h-[500px] blur-3xl" />
          
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
} 