'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  once = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
        return {};
      default:
        return { y: distance };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, ...getInitialOffset() }}
        animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialOffset() }}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInSection; 