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
            className="text-dark/70 mt-4 max-w-2xl mx-auto"
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
            className="bg-light/80 backdrop-blur-sm border border-primary-700/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-dark">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-dark/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light border border-primary-700/50 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 text-dark"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-dark/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light border border-primary-700/50 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 text-dark"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-dark/80 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-light border border-primary-700/50 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 text-dark resize-none"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-full bg-primary-600 text-light font-medium hover:bg-primary-500 transition-all duration-300 flex items-center justify-center"
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
              <h3 className="text-2xl font-bold mb-4 text-dark">Contact Information</h3>
              <p className="text-dark/70 mb-6">Feel free to reach out using any of the following methods:</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-900/50 border border-primary-700/50 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-dark/60">Email</p>
                    <a href="mailto:ritvikshah2009@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">ritvikshah2009@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-dark">Let's Connect</h3>
              <p className="text-dark/70 mb-6">I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-light/50 border border-primary-700/30 rounded-lg">
                  <h4 className="text-primary-400 font-medium mb-2">Project Collaboration</h4>
                  <p className="text-dark/70 text-sm">Looking for a software engineer or robotics specialist for your next project? Let's discuss how we can work together.</p>
                </div>
                
                <div className="p-4 bg-light/50 border border-primary-700/30 rounded-lg">
                  <h4 className="text-primary-400 font-medium mb-2">Technical Consultation</h4>
                  <p className="text-dark/70 text-sm">Need advice on software architecture, robotics implementation, or AI integration? I'm here to help.</p>
                </div>
                
                <div className="p-4 bg-light/50 border border-primary-700/30 rounded-lg">
                  <h4 className="text-primary-400 font-medium mb-2">Networking</h4>
                  <p className="text-dark/70 text-sm">Always excited to connect with fellow tech enthusiasts and professionals in the industry.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 