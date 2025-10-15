import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PatreonPromo = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div 
      className="relative bg-black text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative number (scroll-linked) */}
      <motion.div 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-0"
        style={{ y, opacity }}
      >
        <p className="neue text-[30vw] text-right md:text-[25vw] font-[500] text-white/10 leading-none">
          06
        </p>
      </motion.div>

      {/* Content container */}
      <div className="relative max-w-[112rem] mx-auto px-4 py-32 md:py-48 min-h-[150vh] flex flex-col justify-between z-10">
        {/* Header section (sticky) */}
        <div className="sticky top-0 pt-32 pb-16">
          <div className="">
            <p className="neue text-xl md:text-2xl font-[500] text-right">06. COMMUNITY</p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight text-right">
              PATREON<br/>PERKS
            </h1>
          </div>
        </div>

        {/* Scrolling content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {/* Left column - benefits */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="neue text-4xl md:text-6xl font-[500] tracking-tight">
              Why Join
            </h2>
            <p className="neue text-xl md:text-2xl leading-relaxed">
              Your support directly fuels new effect development and helps me create 
              resources for the entire creator community.
            </p>
            
            <div className="pt-8 space-y-6">
              {[
                "Early access to all new packs",
                "Exclusive behind-the-scenes",
                "Monthly design breakdowns",
                "Direct input on future products",
                "Private Discord community"
              ].map((item, i) => (
                <div key={i} className="flex items-start border-b border-white/10 pb-6">
                  <span className="neue text-2xl mr-4 text-white/50">0{i+1}</span>
                  <p className="neue text-xl md:text-2xl font-[500]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - CTA */}
          <motion.div 
            className="md:sticky md:top-32 self-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl backdrop-blur-sm">
              <h3 className="neue text-3xl md:text-4xl font-[500] mb-6 tracking-tight">
                Ready to upgrade<br/>your visuals?
              </h3>
              
              <motion.a
                href="https://patreon.com/youraccount"
                whileHover={{ 
                  backgroundColor: "#ffffff",
                  color: "#000000"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-block border-2 border-white px-12 py-4 rounded-full neue font-[500] text-xl transition-colors duration-300"
              >
                JOIN PATREON
              </motion.a>

              <p className="neue text-lg mt-8 opacity-70">
                Cancel anytime · Exclusive content · Direct support
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer spacer */}
      <div className="h-20 md:h-32 bg-black"></div>
    </div>
  );
};

export default PatreonPromo;