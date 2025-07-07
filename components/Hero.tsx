'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import FadeInSection from './FadeInSection';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
  
  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 5;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
      
      // Scale
      scaleArray[i / 3] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      sizeAttenuation: true,
      color: 0x38bdf8, // primary-400
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Set camera position
    camera.position.z = 3;
    
    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
    });
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update particles
      particlesMesh.rotation.x = elapsedTime * 0.05 + mouseY * 0.5;
      particlesMesh.rotation.y = elapsedTime * 0.07 + mouseX * 0.5;
      
      // Render
      renderer.render(scene, camera);
      
      // Call animate again on the next frame
      window.requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      // Update camera
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      
      // Update renderer
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', () => {});
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.clear();
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      
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
                <p className="text-xl md:text-2xl text-light/80 mb-8 max-w-md leading-relaxed">
                  Software Engineer & Robotics Enthusiast with a passion for intelligent systems
                </p>
              </FadeInSection>
              
              <div className="flex space-x-4">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full text-light font-medium hover:from-primary-500 hover:to-accent-500 transition-all duration-300"
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
                  className="px-6 py-3 border border-primary-600 rounded-full text-light font-medium hover:bg-primary-900/30 transition-all duration-300"
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
              className="relative w-64 h-64 md:w-80 md:h-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              data-cursor-text="Hi!"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 animate-pulse-slow aura-glow" />
              <div className="absolute inset-5 rounded-full bg-gradient-to-r from-primary-500/30 to-accent-500/30" />
              <div className="absolute inset-10 rounded-full bg-gradient-to-r from-primary-500/40 to-accent-500/40" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-r from-primary-500/50 to-accent-500/50 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text text-shimmer">RS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 