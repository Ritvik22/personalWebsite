'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Ritvik Shah";
  
  useEffect(() => {
    // Typing animation effect
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 150); // Speed of typing
      
      return () => clearTimeout(timeout);
    }
  }, [displayedText, fullText]);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block text-sm md:text-base font-mono text-primary-400 mb-4 reveal-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                data-cursor-text="👋"
              >
                Hello, World!
              </motion.span>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block mb-2">I'm</span>
                <div className="gradient-text block">
                  {displayedText}
                </div>
              </h1>
              
              <FadeInSection delay={0.3} duration={0.5}>
                <p className="text-xl md:text-2xl text-dark/80 mb-8 max-w-md leading-relaxed">
                  Software Engineer & Robotics Enthusiast with a passion for intelligent systems
                </p>
              </FadeInSection>
              
              <div className="flex space-x-4">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-primary-600 rounded-full text-light font-medium hover:bg-primary-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  data-magnetic
                  data-magnetic-strength="0.2"
                  data-cursor-text="Projects"
                >
                  View My Work
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="px-6 py-3 border border-primary-600 rounded-full text-dark font-medium hover:bg-primary-900/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  data-magnetic
                  data-magnetic-strength="0.2"
                  data-cursor-text="Contact"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              data-cursor-text="Hi!"
            >
              <img
                src="/images/20250704_191839_1.jpg"
                alt="Ritvik Shah"
                className="w-full h-full object-cover"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 