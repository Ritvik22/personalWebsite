'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check which section is currently visible
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-light/80 backdrop-blur-md border-b border-primary-800/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.a
              href="#home"
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              data-magnetic
              data-magnetic-strength="0.3"
            >
              <span className="text-2xl font-bold gradient-text">RS</span>
            </motion.a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative
                  ${activeSection === link.href.substring(1) 
                    ? 'text-primary-400' 
                    : 'text-dark/80 hover:text-primary-400'}`}
                whileHover={{ scale: 1.05 }}
                data-cursor-text="Navigate"
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 transform origin-left transition-transform duration-300 
                    ${activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="ml-4 px-4 py-2 rounded-full bg-primary-600 text-light font-medium text-sm hover:bg-primary-500 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              data-magnetic
              data-magnetic-strength="0.2"
              data-cursor-text="Contact"
            >
              Get in Touch
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-5">
                <span 
                  className={`absolute h-0.5 w-full bg-dark rounded-lg transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
                  }`}
                />
                <span 
                  className={`absolute h-0.5 w-full bg-dark rounded-lg transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                />
                <span 
                  className={`absolute h-0.5 w-full bg-dark rounded-lg transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <motion.div 
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light/90 backdrop-blur-md border-b border-primary-800/30">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-dark/80 hover:bg-primary-900/30 hover:text-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-3 py-2 mt-4 rounded-md text-base font-medium text-center bg-primary-600 text-light hover:bg-primary-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 