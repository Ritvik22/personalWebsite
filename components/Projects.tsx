'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeInSection from './FadeInSection';

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
            className="text-dark/70 mt-4 max-w-2xl mx-auto"
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
              className={`overflow-hidden rounded-xl border ${project.color} ${project.hoverBorderColor} transition-all duration-300 hover:shadow-lg bg-light/90 backdrop-blur-sm`}
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
                    <div className="absolute inset-0 bg-dark/50 hover:opacity-75 transition-opacity duration-300">
                      <div className="absolute bottom-2 right-2 bg-light/80 text-dark text-xs px-2 py-1 rounded">
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
                    <div className="w-full h-full bg-primary-500 flex items-center justify-center">
                      <div className="text-center text-light p-4">
                        <h3 className="text-xl font-bold mb-2">FloodSense</h3>
                        <p className="text-sm opacity-90">AI-Powered Flood Risk Prediction</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                  <span className="text-sm text-dark/60 bg-light/50 px-2 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                
                <p className="text-dark/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {project.achievements && (
                  <div className="mb-4">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center mb-1">
                        <span className="text-primary-400 mr-2">🏆</span>
                        <span className="text-sm text-dark/80">{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {project.publication && (
                  <div className="mb-4 p-3 bg-light/50 rounded-lg border border-primary-700/30">
                    <h4 className="text-sm font-semibold text-dark mb-1">{project.publication.journal}</h4>
                    <p className="text-xs text-dark/60">{project.publication.volume}, {project.publication.issue}</p>
                    <a 
                      href={`https://doi.org/${project.publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      DOI: {project.publication.doi}
                    </a>
                  </div>
                )}
                
                {project.coauthors && (
                  <div className="mb-4">
                    <p className="text-xs text-dark/60 mb-1">Co-authors:</p>
                    <p className="text-sm text-dark/80">{project.coauthors.join(', ')}</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-light/50 border border-primary-700/30 rounded-full text-xs text-dark/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-full text-light font-medium text-sm transition-all duration-300 ${project.buttonBg}`}
                      data-cursor-text="Visit"
                    >
                      View Project
                    </a>
                  )}
                  
                  {project.title === 'Modeling Biomimetic Locomotion Using Non-Euclidean Transformations' && (
                    <button
                      onClick={() => openImageModal(project.image, project.imageDescription)}
                      className="px-4 py-2 rounded-full bg-accent-600 hover:bg-accent-500 text-light font-medium text-sm transition-all duration-300"
                      data-cursor-text="View Details"
                    >
                      View Details
                    </button>
                  )}
                  
                  {project.title === 'FloodSense' && (
                    <button
                      onClick={() => openImageModal(project.image, project.description, project.features)}
                      className="px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-500 text-light font-medium text-sm transition-all duration-300"
                      data-cursor-text="View Details"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] overflow-auto bg-light rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-dark hover:text-primary-400 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <img 
                src={selectedImage} 
                alt="Project detail"
                className="w-full h-auto rounded-lg mb-4"
              />
              
              {selectedDescription && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-dark mb-2">Description</h3>
                  <p className="text-dark/70 text-sm leading-relaxed">{selectedDescription}</p>
                </div>
              )}
              
              {selectedFeatures && (
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-dark/70 text-sm space-y-1">
                    {selectedFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects; 