import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
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

  return (
    <div className='bg-black'>
      {/* Container with proper height calculation */}
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

        {/* Left column - scrollable with proper spacing */}
        <div className="md:absolute static top-[50vh] md:top-0 left-0 w-full md:w-1/2 pb-20 md:pb-0">
          {steps.map((step, index) => (
            <section 
              key={index} 
              className="min-h-[50vh] md:h-screen flex items-center pt-[5%] px-6 md:px-0"
              style={index === steps.length - 1 ? { minHeight: 'calc(50vh + 80px)' } : {}}
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
      </div>
      
      {/* Spacer to prevent overlap with next sections */}
      <div className="h-20 md:h-0 bg-black"></div>
    </div>
  );
};

export default Process;