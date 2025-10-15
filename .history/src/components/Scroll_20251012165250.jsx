import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredStep, setHoveredStep] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Example images for each step (replace with your actual image paths)
  const stepImages = [
    "/images/color-correction-example.jpg",
    "/images/shading-depth-example.jpg",
    "/images/lighting-example.jpg",
    "/images/highlights-glow-example.jpg"
  ];

  const steps = [
    {
      title: "COLOR CORRECTION",
      description: "Every thumbnail starts with precise color tuning — adjusting tones, contrast, and saturation to make each visual pop while staying true to the creator's aesthetic.",
      stats: [
        "Balanced color tones",
        "Brand-consistent palettes",
        "Optimized for visibility"
      ]
    },
    {
      title: "SHADING & DEPTH",
      description: "To create dimension and realism, advanced shading techniques are used. This gives the characters and elements a 3D feel that stands out in crowded feeds.",
      stats: [
        "Soft shadows added manually",
        "Depth layers for focus",
        "Enhanced character separation"
      ]
    },
    {
      title: "LIGHTING",
      description: "Strategic lighting directs attention and sets the mood. Highlights and shadows are placed with intention to control visual flow.",
      stats: [
        "Cinematic lighting placement",
        "Directional highlights",
        "Mood-based tone mapping"
      ]
    },
    {
      title: "HIGHLIGHTS & GLOW",
      description: "Key elements are emphasized using rim light, soft glows, and edge highlights — making sure viewers' eyes land exactly where they should.",
      stats: [
        "Rim lights on characters",
        "Glow effects for energy",
        "Clickable contrast enhancements"
      ]
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleStepClick = (index) => {
    setSelectedImage(stepImages[index]);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectedImage && !e.target.closest('.image-modal-content')) {
        closeImageModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

  return (
    <div className='bg-black'>
      {/* Main container */}
      <div className="relative max-w-[112rem] mx-auto bg-black px-4 text-white min-h-[100vh] md:min-h-[400vh] z-[99999]">
        
        {/* Right column - sticky on desktop */}
        <div className="md:sticky static top-0 h-[50vh] md:h-screen w-full md:w-1/2 ml-auto flex items-center px-6 md:px-0">
          <div className="text-right w-full pt-[5%]">
            <p className="neue text-xl md:text-2xl font-[500] mb-3">02. PROCESS</p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
              DESIGN<br />SYSTEM
            </h1>
          </div>
        </div>

        {/* Left column - scrollable with steps */}
        <div className="md:absolute static top-[50vh] md:top-0 left-0 w-full md:w-1/2 pb-20 md:pb-0">
          {steps.map((step, index) => (
            <section 
              key={index}
              className="min-h-[50vh] md:h-screen flex items-center pt-[5%] px-6 md:px-0 relative group cursor-pointer"
              style={index === steps.length - 1 ? { minHeight: 'calc(50vh + 80px)' } : {}}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => handleStepClick(index)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 }
                }}
                viewport={{ margin: "-100px", once: true }}
                className="w-full max-w-2xl"
              >
                <p className="neue text-[15vw] md:text-[12vw] font-[500] text-gray-200 leading-none mb-2 md:mb-8">
                  0{index + 1}
                </p>
                
                <h2 className="neue text-3xl md:text-6xl font-[500] leading-none mb-2 md:mb-8 tracking-tight">
                  {step.title}
                </h2>
                
                <p className="neue text-base md:text-2xl leading-relaxed mb-4 md:mb-12">
                  {step.description}
                </p>
                
                <div className="space-y-1 md:space-y-4">
                  {step.stats.map((stat, i) => (
                    <div key={i} className="flex items-start">
                      <span className="neue text-base md:text-2xl mr-2">•</span>
                      <p className="neue text-base md:text-2xl font-[500]">{stat}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          ))}
        </div>

        {/* Cursor-following button */}
        {hoveredStep !== null && (
          <motion.div
            className="fixed z-50 pointer-events-none mix-blend-difference"
            style={{
              left: cursorPosition.x,
              top: cursorPosition.y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              transition: { type: 'spring', stiffness: 500, damping: 25 }
            }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <path 
                  d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Spacer to prevent overlap with next sections */}
      <div className="h-20 md:h-0 bg-black"></div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-95 z-[999999] flex items-center justify-center p-4"
        >
          <div className="image-modal-content relative max-w-6xl w-full">
            <button 
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors neue text-xl"
            >
              CLOSE [×]
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Process example" 
              className="w-full h-auto max-h-[80vh] object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            />
            <div className="text-white text-center mt-6 neue text-xl md:text-2xl tracking-tight">
              {steps[stepImages.indexOf(selectedImage)].title}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Process;