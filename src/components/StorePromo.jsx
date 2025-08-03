import React from 'react';
import { motion } from 'framer-motion';

const StorePromo = () => {
  return (
    <div className="bg-black overflow-hidden">
      <section className="relative bg-black text-white py-12 md:py-[10vw] max-w-[112rem] mx-auto px-4">
        <div className="flex justify-between items-center mb-12 md:mb-[6vw]">
          <div className="mb-8 md:mb-0 w-full">
            <p className="neue text-lg md:text-[1.5vw] font-[500] mb-2 md:mb-[1vw]">
              07. STORE
            </p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
              MY STORE
            </h1>
          </div>
          <p className="neue text-8xl md:text-[12vw] font-[500] text-white/70 leading-none tracking-tight pointer-events-none select-none">
            07
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="neue text-4xl md:text-[3.5vw] font-[500] leading-tight tracking-tight mb-6">
              PREMIUM GFX PACKS FOR CONTENT CREATORS
            </h2>
            
            <ul className="space-y-4 neue text-xl md:text-[1.5vw] mb-8">
              <li className="flex items-start">
                <span className="mr-3 text-[white]">•</span>
                <span>Professional color correction LUTs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[white]">•</span>
                <span>Thumbnail design templates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[white]">•</span>
                <span>Exclusive visual effects packs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[white]">•</span>
                <span>Ready-to-use design elements</span>
              </li>
            </ul>

            <motion.a
              href="/shop"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[white] text-black neue font-[500] px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-[1.5vw] transition-colors duration-200"
            >
              EXPLORE THE STORE
            </motion.a>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className="neue text-2xl md:text-[2.5vw] font-[500] mb-4">WHY OUR STORE?</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="neue text-xl md:text-[1.5vw] font-[500] text-[white] mb-2">PROVEN RESULTS</h4>
                <p className="neue text-lg md:text-[1.2vw] opacity-90">
                  Used by top creators to boost click-through rates and engagement
                </p>
              </div>
              
              <div>
                <h4 className="neue text-xl md:text-[1.5vw] font-[500] text-[white] mb-2">SAVE TIME</h4>
                <p className="neue text-lg md:text-[1.2vw] opacity-90">
                  Professional-quality thumbnails in minutes, not hours
                </p>
              </div>
              
              <div>
                <h4 className="neue text-xl md:text-[1.5vw] font-[500] text-[white] mb-2">EASY TO USE</h4>
                <p className="neue text-lg md:text-[1.2vw] opacity-90">
                  Works with Photoshop, Premiere, and other standard tools
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ margin: '-100px' }}
          className="mt-16 md:mt-[6vw] text-center"
        >
          <p className="neue text-xl md:text-[1.5vw] font-[500] mb-4">
            NEED CUSTOM WORK?
          </p>
          <motion.a
            href="#contact" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block border-2 border-white text-white neue hover:bg-white hover:text-black font-[500] px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-[1.2vw] transition-all duration-200"
          >
            CONTACT US
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default StorePromo;