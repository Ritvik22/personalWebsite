'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute -z-10 opacity-10 bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary-500/30 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-light/70 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you!
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-dark/80 backdrop-blur-sm border border-primary-700/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-light">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-light/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-primary-700/50 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 text-light"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-light/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-primary-700/50 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 text-light"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-light/80 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-primary-700/50 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 text-light resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-light font-medium hover:from-primary-500 hover:to-accent-500 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
              
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-tech-900/50 border border-tech-500/50 rounded-lg text-center text-tech-400"
                >
                  Thanks for your message! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitError && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-900/50 border border-red-500/50 rounded-lg text-center text-red-400"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-light">Contact Information</h3>
              <p className="text-light/70 mb-6">Feel free to reach out using any of the following methods:</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-900/50 border border-primary-700/50 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-light/60">Email</p>
                    <a href="mailto:ritvikshah2009@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">ritvikshah2009@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-light">Connect Online</h3>
              <p className="text-light/70 mb-6">Find me on these platforms:</p>
              
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', link: 'https://github.com/ritvikshah' },
                  { name: 'LinkedIn', icon: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z', link: 'https://www.linkedin.com/in/ritvik-shah-329811293/' },
                  { name: 'Twitter', icon: 'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z', link: 'https://twitter.com/ritvikshah' },
                  { name: 'Medium', icon: 'M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm6.24 3.76a4.82 4.82 0 011.1 3.01c.02.15.03.31.03.47 0 2.17-1.13 4.07-2.84 5.16a.75.75 0 01-.91-.19l-1.11-1.4a.49.49 0 01.09-.68c1.07-.73 1.77-1.94 1.77-3.31 0-2.21-1.87-4.01-4.18-4.01-2.31 0-4.18 1.8-4.18 4.01 0 1.37.7 2.58 1.77 3.31a.49.49 0 01.09.68l-1.11 1.4a.75.75 0 01-.91.19 6.46 6.46 0 01-2.84-5.16c0-.16.01-.32.03-.47a4.82 4.82 0 011.1-3.01A6.47 6.47 0 018 1.5a6.47 6.47 0 014.24 1.26z', link: 'https://medium.com/@ritvikshah' },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-dark border border-primary-700/50 flex items-center justify-center text-light/70 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
                    aria-label={platform.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d={platform.icon}></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 