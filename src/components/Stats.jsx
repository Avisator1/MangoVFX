import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const formatLabel = (val, type) => {
    if (type === 'views') return `${Math.floor(val)}M+`;
    if (type === 'likes') return `${Math.floor(val)}k+`;
    return `400+`; // for orders, we don’t animate over 400
  };

  const stats = [
    { value: 705, label: 'LIKES', type: 'likes', format: (v) => formatLabel(v, 'likes') },
    { value: 33, label: 'VIEWS', type: 'views', format: (v) => formatLabel(v, 'views') },
    { value: 400, label: 'ORDERS', type: 'orders', format: () => '400+' },
  ];

  return (
    <div className="bg-black overflow-hidden">
      <section className="relative bg-black text-white py-12 md:py-[10vw] max-w-[112rem] mx-auto px-4">
        <div className='flex justify-between'>
        <p className=" neue text-8xl md:text-[12vw] font-[500] text-white/70 leading-none tracking-tight pointer-events-none select-none">
          04
        </p>
        <div className="mb-8 md:mb-[4vw]">
          <p className="neue text-right text-lg md:text-[1.5vw] font-[500] mb-2 md:mb-[1vw]">
            04. STATISTICS
          </p>

          <h1 className="neue text-[12vw] text-right md:text-[10vw] font-[500] leading-none tracking-tight">
          MY STATS
        </h1>
        </div>
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
                <AnimatedCounter to={stat.value} duration={2000} formatFn={stat.format} />
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
       
        </motion.div>

    
      </section>
    </div>
  );
};

export default Statistics;
