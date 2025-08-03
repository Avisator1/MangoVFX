import React from 'react';
import { motion } from 'framer-motion';

const PatreonPromo = () => {
  return (
    <div className="bg-black overflow-hidden">
      <section className="relative bg-black text-white py-12 md:py-[10vw] max-w-[112rem] mx-auto px-4">
        <div className="flex justify-between items-center">

        <p className="neue text-8xl md:text-[12vw] font-[500] text-white/70 leading-none tracking-tight pointer-events-none select-none">
            06
          </p>
          <div className="mb-8 md:mb-[4vw] w-full text-right">
            <p className="neue text-lg md:text-[1.5vw] font-[500] mb-2 md:mb-[1vw]">
              06. COMMUNITY
            </p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
               MY PATREON
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 md:gap-[4vw] mt-8 md:mt-[4vw]">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="bg-white/10 border border-white/20 p-6 md:p-8 rounded-lg">
              <h3 className="neue text-3xl md:text-[3vw] font-[500] leading-tight tracking-tight mb-4">
                EXCLUSIVE BENEFITS
              </h3>
              
              <ul className="space-y-4 neue text-lg md:text-[1.5vw]">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Early access to all new effects packs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Behind-the-scenes design process</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Monthly Q&A sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Exclusive tutorials and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Direct input on future products</span>
                </li>
              </ul>

              <motion.a
                href="https://patreon.com/youraccount" // Replace with your actual Patreon link
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-white text-black neue font-[500] px-8 py-4 md:px-10 md:py-5 rounded-full mt-8 md:mt-[3vw] text-lg md:text-[1.5vw] transition-colors duration-200"
              >
                BECOME A PATRON
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="neue text-2xl md:text-[2vw] font-[500] mb-4 md:mb-[2vw]">
              SUPPORT MY WORK
            </p>
            <p className="neue text-lg md:text-[1.5vw] leading-relaxed opacity-90 mb-6 md:mb-[3vw]">
              By joining my Patreon, you're not just getting exclusive content - you're helping fuel the creation of more high-quality effects and resources for the entire creator community.
            </p>
            <p className="neue text-lg md:text-[1.5vw] leading-relaxed opacity-90">
              Your support allows me to dedicate more time to developing innovative visual effects that help creators stand out in an increasingly competitive space.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PatreonPromo;