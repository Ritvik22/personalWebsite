'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Skill categories with corresponding icons and skills
const skillCategories = [
  {
    title: 'Software Development',
    icon: '💻',
    skills: ['C++', 'Python', 'Java', 'React', 'C', 'Matplotlib', 'Git'],
    color: 'from-primary-500/20 to-primary-700/20',
    borderColor: 'border-primary-600/30',
    hoverBorderColor: 'hover:border-primary-500/50',
  },
  {
    title: 'Robotics',
    icon: '🤖',
    skills: ['Computer Vision', 'Sensor Fusion', 'Control Systems', 'Embedded Systems', 'Arduino', 'Raspberry Pi', 'SLAM', 'Motion Planning'],
    color: 'from-tech-500/20 to-tech-700/20',
    borderColor: 'border-tech-600/30',
    hoverBorderColor: 'hover:border-tech-500/50',
  },
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision',  'Neural Networks', 'Data Analysis'],
    color: 'from-accent-500/20 to-accent-700/20',
    borderColor: 'border-accent-600/30',
    hoverBorderColor: 'hover:border-accent-500/50',
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute -z-10 opacity-10 bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary-500/30 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-light/70 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My expertise spans across software development, robotics engineering, and artificial intelligence.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-xl bg-gradient-to-b ${category.color} backdrop-blur-sm border ${category.borderColor} ${category.hoverBorderColor} transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10`}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-xl font-bold text-light">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-dark/50 rounded-full text-xs text-light/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 p-6 rounded-xl border border-primary-700/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 text-light">Professional Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Problem Solving', description: 'Analytical approach to complex technical challenges' },
              { title: 'Continuous Learning', description: 'Staying current with emerging technologies' },
              { title: 'Collaboration', description: 'Effective teamwork and communication skills' },
              { title: 'User-Centric', description: 'Focus on creating intuitive, valuable solutions' },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-dark/50 rounded-lg">
                <h4 className="text-primary-400 font-medium mb-2">{item.title}</h4>
                <p className="text-light/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 