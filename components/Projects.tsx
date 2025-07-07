'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Manta ray simulation image data
const MANTA_RAY_IMAGE_SRC = "/manta-ray-simulation.png"; // Path to the image in public folder

// Project data
const projects = [
  {
    title: 'FloodSense',
    description: 'An AI-powered flood risk prediction & visualization platform. FloodSense analyzes environmental parameters like rainfall, water levels, humidity, and temperature to provide accurate flood risk assessments with multiple visualization methods, similar location identification, and future scenario simulation.',
    tags: ['AI', 'Machine Learning', 'Web Development', 'Data Visualization', 'Environmental Science'],
    image: '/floodsense.jpg',
    color: 'border-primary-600/30',
    hoverBorderColor: 'hover:border-primary-500/60',
    buttonBg: 'bg-primary-600 hover:bg-primary-500',
    link: 'https://www.floodsenseai.com/',
    date: '2024-2025',
    coauthors: ['Rishi Yedavalli'],
    features: [
      'Real-time flood risk prediction',
      'Multiple visualization methods',
      'Similar location identification',
      'Historical comparison',
      'Future scenario simulation'
    ]
  },
  {
    title: 'Topological and Numerical Approaches to Surface Transformations',
    description: 'Published in Journal of Geometry and Physics (Volume 213, July 2023). This research explores transforming points between surfaces while preserving geometric constraints like arc-lengths and angles. We introduce a "distortion" metric that quantifies how closely a transformation preserves prescribed geometric relationships and prove that topologically different surfaces have a positive lower bound on minimal distortion.',
    tags: ['Topology', 'Differential Geometry', 'Published Research', 'Numerical Methods', 'Swarm Robotics'],
    image: '/math-paper2.jpg',
    color: 'border-tech-600/30',
    hoverBorderColor: 'hover:border-tech-500/60',
    buttonBg: 'bg-tech-600 hover:bg-tech-500',
    link: 'https://doi.org/10.1016/j.geomphys.2023.105472',
    date: 'July 2023',
    achievements: ['Published in Journal of Geometry and Physics'],
    publication: {
      journal: 'Journal of Geometry and Physics',
      volume: 'Volume 213',
      issue: 'July 2023, 105472',
      doi: '10.1016/j.geomphys.2023.105472'
    },
    coauthors: ['Selcuk Koyuncu', 'Cenap Ozel']
  },
  {
    title: 'On Sub-defect of Hadamard Product of Doubly Substochastic Matrices',
    description: 'Published research paper in Advances in Mathematics: Scientific Journal (Vol. 13, 2024). This paper investigates the sub-defect properties of Hadamard products of doubly substochastic matrices, proving that for matrices A and B, their Hadamard product is also doubly substochastic, with bounds on the sub-defect relationship.',
    tags: ['Matrix Theory', 'Substochastic Matrices', 'Published Research', 'Mathematical Analysis', 'Linear Algebra'],
    image: '/math-paper.jpg',
    color: 'border-primary-600/30',
    hoverBorderColor: 'hover:border-primary-500/60',
    buttonBg: 'bg-primary-600 hover:bg-primary-500',
    link: 'https://doi.org/10.37418/amsj.13.1.4',
    date: '2024',
    achievements: ['Published in Advances in Mathematics: Scientific Journal'],
    publication: {
      journal: 'Advances in Mathematics: Scientific Journal',
      volume: '13 (2024)',
      issue: 'no.1, 51-59',
      doi: '10.37418/amsj.13.1.4'
    }
  },
  {
    title: 'Modeling Biomimetic Locomotion Using Non-Euclidean Transformations',
    description: 'First place winner in Mathematics Category at the Science Fair. This research models the movement of manta ray fins by determining the positions of points on the fins while preserving both their arc-distance from a reference point and their angles relative to that point. Used non-Euclidean methods—specifically differential geometry—to model geodesics and maintain the geometric integrity of the fin throughout its movement.',
    tags: ['Mathematics', 'Computational Modeling', 'Differential Geometry', 'Biomimetics', 'Robotics'],
    image: '/Screenshot 2025-05-15 at 1.24.27 PM.png', // Direct reference to the screenshot which is in public/
    hasRealImage: true,
    color: 'border-accent-600/30',
    hoverBorderColor: 'hover:border-accent-500/60',
    buttonBg: 'bg-accent-600 hover:bg-accent-500',
    link: '#',
    date: '2023',
    achievements: ['First place winner in Mathematics Category', 'Presented at Spark Symposium'],
    imageDescription: 'Visualization of the manta ray fin movement simulation across three different time frames. The colored surface plots show how the fin deforms while tracking data points (in red) that maintain geometric properties like arc-length and angle preservation during movement.'
  },
  {
    title: 'Plant Bot',
    description: 'Designed and built a robot to water plants using image recognition. This autonomous robot detects plants using computer vision, travels to them, and delivers precise watering. Each plant is marked with a different colored flag for the Plant Bot to detect it and also determine the amount of water to deliver to the plant. Made using VEX Hardware parts.',
    tags: ['Robotics', 'Computer Vision', 'VEX Hardware', 'Autonomous Navigation', 'Image Recognition'],
    image: '/plant-bot.jpg',
    color: 'border-tech-600/30',
    hoverBorderColor: 'hover:border-tech-500/60',
    buttonBg: 'bg-tech-600 hover:bg-tech-500',
    link: '#',
    date: 'Oct 2023 - Mar 2024'
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[] | null>(null);
  
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
  
  const openImageModal = (imagePath: string, description: string | null = null, features: string[] | null = null) => {
    setSelectedImage(imagePath);
    setSelectedDescription(description);
    setSelectedFeatures(features);
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedDescription(null);
    setSelectedFeatures(null);
  };
  
  // Inline styles for the manta ray image container to ensure proper display
  const mantaRayImageStyle = {
    backgroundImage: `url('/Screenshot 2025-05-15 at 1.24.27 PM.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  };
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute -z-10 opacity-10 top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-accent-500/30 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects & Publications
          </motion.h2>
          <motion.p 
            className="text-light/70 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of my research, publications and projects in mathematics, robotics, and software engineering.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`overflow-hidden rounded-xl border ${project.color} ${project.hoverBorderColor} transition-all duration-300 hover:shadow-lg bg-dark/90 backdrop-blur-sm`}
              data-cursor-text="View"
            >
              <div className="h-48 overflow-hidden relative">
                {project.title === 'Modeling Biomimetic Locomotion Using Non-Euclidean Transformations' ? (
                  <div 
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => openImageModal(project.image, project.imageDescription)}
                    data-cursor-text="Enlarge"
                    style={mantaRayImageStyle}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/50 hover:opacity-75 transition-opacity duration-300">
                      <div className="absolute bottom-2 right-2 bg-dark/80 text-light text-xs px-2 py-1 rounded">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                ) : project.title === 'FloodSense' ? (
                  <div 
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => openImageModal(project.image, project.description, project.features)}
                    data-cursor-text="Details"
                  >
                    <div className={`w-full h-full bg-gradient-to-r from-primary-900 via-tech-900 to-primary-800 flex items-center justify-center`}>
                      <div className="text-center">
                        <span className="text-3xl font-bold gradient-text">FloodSense</span>
                        <div className="text-sm text-light/70 mt-2">AI-powered flood risk prediction</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/50 hover:opacity-75 transition-opacity duration-300">
                      <div className="absolute bottom-2 right-2 bg-dark/80 text-light text-xs px-2 py-1 rounded">
                        View details
                      </div>
                    </div>
                  </div>
                ) : project.hasRealImage ? (
                  <div 
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => openImageModal(project.image, project.imageDescription)}
                    data-cursor-text="Enlarge"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/50 hover:opacity-75 transition-opacity duration-300">
                      <div className="absolute bottom-2 right-2 bg-dark/80 text-light text-xs px-2 py-1 rounded">
                        Click to enlarge
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-r from-primary-900 via-dark to-accent-900 flex items-center justify-center`}>
                    {project.title === 'Topological and Numerical Approaches to Surface Transformations' ? (
                      <span className="text-6xl" role="img" aria-label="Math">🔢</span>
                    ) : project.title === 'On Sub-defect of Hadamard Product of Doubly Substochastic Matrices' ? (
                      <span className="text-6xl" role="img" aria-label="Matrix">📊</span>
                    ) : project.title === 'Plant Bot' ? (
                      <span className="text-6xl" role="img" aria-label="Robot">🤖</span>
                    ) : (
                      <span className="text-2xl font-bold text-light/70">Project Image</span>
                    )}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-light">{project.title}</h3>
                  {project.date && (
                    <span className="text-xs text-primary-400 font-mono">{project.date}</span>
                  )}
                </div>
                
                {project.title === 'FloodSense' && (
                  <div className="mb-3">
                    <span 
                      className="inline-block mr-2 mb-2 px-2 py-1 bg-primary-500/20 rounded-md text-xs text-primary-300 font-medium"
                    >
                      🌊 Live Website
                    </span>
                  </div>
                )}
                
                {project.achievements && (
                  <div className="mb-3">
                    {project.achievements.map((achievement, i) => (
                      <span 
                        key={i}
                        className="inline-block mr-2 mb-2 px-2 py-1 bg-accent-500/20 rounded-md text-xs text-accent-300 font-medium"
                      >
                        {achievement.includes('Published') ? '📄' : '🏆'} {achievement}
                      </span>
                    ))}
                  </div>
                )}
                
                {project.publication && (
                  <div className="mb-3 p-2 border border-primary-800/30 rounded-md bg-primary-900/20">
                    <div className="text-xs text-light/70">
                      <p><span className="font-semibold">Journal:</span> {project.publication.journal}</p>
                      <p><span className="font-semibold">Volume:</span> {project.publication.volume}</p>
                      <p><span className="font-semibold">Issue:</span> {project.publication.issue}</p>
                      <p><span className="font-semibold">DOI:</span> {project.publication.doi}</p>
                      {project.coauthors && (
                        <p className="mt-1">
                          <span className="font-semibold">Co-authors:</span> {project.coauthors.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                
                {project.title === 'FloodSense' && project.coauthors && (
                  <div className="mb-3">
                    <p className="text-xs text-light/70">
                      <span className="font-semibold">Collaboration with:</span> {project.coauthors.join(', ')}
                    </p>
                  </div>
                )}
                
                <p className="text-light/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-dark/80 rounded-full text-xs text-light/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={project.link}
                  target={project.link.startsWith('http') ? "_blank" : ""}
                  rel={project.link.startsWith('http') ? "noopener noreferrer" : ""}
                  className={`inline-flex items-center py-2 px-4 rounded-full text-sm font-medium text-light ${project.buttonBg} transition-colors duration-200`}
                  whileHover={{ scale: 1.05 }}
                  data-cursor-text={project.link.startsWith('http') ? "Open Link" : "View"}
                  data-magnetic
                  data-magnetic-strength="0.2"
                >
                  {project.title === 'FloodSense' ? 'Visit Website' : 
                   project.link.startsWith('http') ? 'View Publication' : 'View Project'}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-dark/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] rounded-xl overflow-hidden bg-dark"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-dark/80 text-light rounded-full p-2 z-10 hover:bg-primary-900 transition-colors duration-300"
                onClick={closeImageModal}
                data-cursor-text="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-4 bg-dark border-b border-primary-800/30">
                <h3 className="text-lg font-bold text-light">
                  {selectedImage.includes('Screenshot') ? 'Manta Ray Fin Simulation' : 
                   selectedImage === MANTA_RAY_IMAGE_SRC ? 'Manta Ray Fin Simulation' : 'FloodSense AI Platform'}
                </h3>
              </div>
              
              <div className="p-8 flex justify-center bg-dark/50">
                {selectedImage.includes('Screenshot') || selectedImage === MANTA_RAY_IMAGE_SRC ? (
                  <img 
                    src="/Screenshot 2025-05-15 at 1.24.27 PM.png" 
                    alt="Manta Ray Fin Simulation" 
                    className="max-w-full max-h-[60vh] object-contain"
                  />
                ) : selectedFeatures ? (
                  <div className="w-full max-w-lg">
                    <div className="bg-primary-900/20 border border-primary-800/30 rounded-lg p-4 mb-4">
                      <h4 className="text-primary-400 font-medium mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary-400 mr-2">•</span>
                            <span className="text-light/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <a 
                        href="https://www.floodsenseai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center py-2 px-6 rounded-full bg-gradient-to-r from-primary-600 to-tech-600 text-light font-medium hover:from-primary-500 hover:to-tech-500 transition-all duration-300"
                      >
                        Visit FloodSense Website
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={selectedImage} 
                    alt="Detailed view" 
                    className="max-w-full max-h-[60vh] object-contain"
                  />
                )}
              </div>
              
              {selectedDescription && !selectedFeatures && (
                <div className="p-4 bg-dark border-t border-primary-800/30">
                  <p className="text-sm text-light/80">{selectedDescription}</p>
                </div>
              )}
            </div>
          </div>
        )}
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a 
            href="https://github.com/ritvikshah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center py-2 px-6 rounded-full bg-dark border border-primary-600/30 hover:border-primary-500/50 text-light transition-all duration-300"
            data-cursor-text="GitHub"
            data-magnetic
            data-magnetic-strength="0.2"
          >
            View More on GitHub
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 