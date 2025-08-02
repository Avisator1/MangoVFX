import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 1500 }) => {
  const [value, setValue] = useState(from);
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-100px', threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;

    let animationFrame;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = from + (to - from) * easedProgress;
      
      setValue(Math.floor(currentValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, from, to, duration]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
};

const Statistics = () => {
  const stats = [
    { value: 108, label: 'VIDEOS' },
    { value: 32850000, label: 'VIEWS' },
    { value: 705380, label: 'LIKES' },
  ];

  return (
    <div className="bg-black overflow-hidden">
      <section className="relative bg-black text-white py-12 md:py-[10vw] max-w-[112rem] mx-auto px-4">
        <div className="mb-8 md:mb-[4vw]">
          <p className="neue text-lg md:text-[1.5vw] font-[500] mb-2 md:mb-[1vw]">
            03. STATISTICS
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0 md:pl-[2vw] md:pr-[2vw]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-left pt-0 md:pt-[2vw] min-w-[150px]"
            >
              <p className="neue text-6xl md:text-[6vw] font-[500] leading-[0.9] tracking-tight mb-2 md:mb-[1vw]">
                <AnimatedCounter to={stat.value} duration={2000} />
              </p>
              <p className="neue text-lg md:text-[1.5vw] font-[500]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ margin: '-100px' }}
          className="mt-12 md:mt-[6vw]"
        >
          <a className="inline-block bg-white text-black px-8 py-4 md:px-[3vw] md:py-[1.5vw] neue font-[500] text-base md:text-[1.2vw] cursor-pointer hover:bg-gray-200 transition-colors">
            CONTACT ME
          </a>
        </motion.div>

        <p className="absolute bottom-[5%] md:bottom-[10%] right-[5%] md:right-[0%] neue text-8xl md:text-[12vw] font-[500] text-gray-100 leading-none tracking-tight pointer-events-none select-none">
          03
        </p>
      </section>
    </div>
  );
};

export default Statistics;