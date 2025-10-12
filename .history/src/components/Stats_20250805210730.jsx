import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 1500, formatFn }) => {
  const [value, setValue] = useState(from);
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    threshold: 0.2,
  });

  useEffect(() => {
    if (!inView) return;

    let animationFrame;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = from + (to - from) * easedProgress;

      setValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [inView, from, to, duration]);

  return <span ref={ref}>{formatFn ? formatFn(value) : Math.floor(value)}</span>;
};

const Statistics = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const formatLabel = (val, type) => {
    if (type === 'views') return `${Math.floor(val)}M+`;
    if (type === 'likes') return `${Math.floor(val)}k+`;
    if (type === 'orders') return `${Math.floor(val)}+`;
    return `${Math.floor(val)}`;
  };

  const stats = [
    { value: 705, label: 'LIKES', type: 'likes', format: (v) => formatLabel(v, 'likes') },
    { value: 33, label: 'VIEWS', type: 'views', format: (v) => formatLabel(v, 'views') },
    { value: 400, label: 'ORDERS', type: 'orders', format: (v) => formatLabel(v, 'orders') },
  ];

  return (
    <div 
      className="relative bg-black text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative number (scroll-linked) */}
     

      {/* Content container */}
      <div className="relative max-w-[112rem] mx-auto px-4 py-32 md:py-48 min-h-[100vh] z-10">
        {/* Sticky header */}
        <div className="sticky top-0 pt-32 pb-16">
          <div className="flex justify-between items-start">
            <div>
              <p className="neue text-xl md:text-2xl font-[500]">04. STATISTICS</p>
              <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
                MY<br/>IMPACT
              </h1>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="md:flex-row flex flex-col  justify-between gap-8 md:gap-16 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="border-b border-white/10 pb-8"
            >
              <p className="neue text-[15vw] md:text-[12vw] font-[500] text-gray-200 leading-none mb-2">
                0{i+1}
              </p>
              <p className="neue text-6xl md:text-[6vw] font-[500] leading-[0.9] tracking-tight mb-4">
                <AnimatedCounter 
                  to={stat.value} 
                  duration={2000} 
                  formatFn={stat.format} 
                />
              </p>
              <p className="neue text-xl md:text-2xl font-[500]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.a
            href="https://ytjobs.co/@mangofx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              backgroundColor: "#ffffff",
              color: "#000000"
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block border-2 border-white px-12 py-4 rounded-full neue font-[500] text-xl transition-colors duration-300"
          >
            VIEW YT JOBS PROFILE
          </motion.a>
        </motion.div>
      </div>

      {/* Footer spacer */}
      <div className="h-20 md:h-32 bg-black"></div>
    </div>
  );
};

export default Statistics;