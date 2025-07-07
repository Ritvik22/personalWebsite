'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-block"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-dark/80 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I'm Ritvik Shah, a Software Engineer and Robotics Enthusiast passionate about building innovative solutions that bridge the digital and physical worlds. With expertise in both software development and robotics engineering, I create intelligent systems that solve complex problems.
            </motion.p>
            
            <motion.p 
              className="text-dark/80 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              My journey in technology began with a fascination for how things work. This curiosity led me to explore software engineering, where I discovered my passion for creating elegant solutions through code. Simultaneously, I developed an interest in robotics, where software meets hardware to create autonomous systems.
            </motion.p>
            
            <motion.p 
              className="text-dark/80 mb-10 leading-relaxed"
              variants={itemVariants}
            >
              I'm particularly excited about the potential of modern technologies like computer vision, machine learning, and sensor fusion to revolutionize robotic systems. By combining cutting-edge software techniques with robotics, I'm working to build the next generation of intelligent machines that can navigate and interact with our world.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              {['Software Engineer', 'Robotics Engineer', 'AI Enthusiast', 'Problem Solver', 'Tech Explorer'].map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-light border border-primary-700/50 rounded-full text-sm text-dark/90"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <div className="w-full md:w-2/5 order-1 md:order-2 mb-10 md:mb-0">
            <motion.div 
              className="relative p-2 border-2 border-primary-600/30 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-square bg-light rounded-xl overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-primary-500 flex items-center justify-center">
                  <span className="text-8xl font-bold text-light">RS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 