import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sharpness",
      quote: "I appreciate the exceptional creativity and attention to detail demonstrated by Mango. Their dedication to delivering visually appealing and engaging thumbnails has greatly enhanced the overall quality of my content.",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/5100f391-2619-4090-a127-3a5cf7857c9e/13d3cb91925adcba9fe48d3b48ec322b.gif"
    },
    {
      name: "FlameFrags",
      quote: "Working with Mangofx has been a pleasure. Their dedication to detail & creativity truly shines through in their thumbnails. They also work very fast & always make deadlines no matter what!",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/81f71eab-6b00-4784-a008-691892c21b40/channels4_profile+%2812%29.jpg"
    },
    {
      name: "InfamousJJ",
      quote: "Very fast and high quality work. Very responsive and makes wanted changes. Would 100% recommend!",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/5ba11a90-0cab-46b0-a27d-3fc59b58bc3a/channels4_profile+%2813%29.jpg"
    },
    {
      name: "Tryhard",
      quote: "Very easy to work with, did everything I asked and put effort into it. Very respectable.",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/031e65ed-599c-47fc-bb5e-f9a986cf25e8/channels4_profile+%2811%29.jpg"
    },
    {
      name: "Ricefarmer",
      quote: "Mango was able to get me a thumbnail finished from idea to conception in less than 2 days, staying responsive and open-minded at every stage.",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/a3aa6d7a-1c8f-4da8-b86e-784184e06a7e/channels4_profile+%2810%29.jpg"
    },
    {
      name: "BeenTaken",
      quote: "Amazing stuff! This guy is great at his craft, replies quickly, and even allowed me to change some thumbnail concepts last-second with no extra fees or anything! 10/10 would recommend",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/c76888d8-9d7a-4234-a4c0-921daad0f942/channels4_profile+%282%29.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <div className='bg-black'>
      <section className="relative bg-black text-white py-20 md:py-[10vw] max-w-[112rem] mx-auto px-6 md:px-0">
        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-[6vw]'>
         
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="neue text-lg md:text-[1.5vw] font-[500] mb-2 md:mb-[1vw]">
              05. TESTIMONIALS
            </p>
            <h2 className="neue text-5xl md:text-[6vw] font-[500] leading-[0.9] tracking-tight">
              CLIENT <span className="text-gray-400">FEEDBACK</span>
            </h2>
          </motion.div>


          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="neue text-8xl md:text-[12vw] font-[500] text-white/70 leading-none tracking-tight mb-4 md:mb-0 md:mr-[2vw]"
          >
            05
          </motion.span>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-4 focus:outline-none hover:bg-white/10 rounded-full transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white w-8 h-8">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-4 focus:outline-none hover:bg-white/10 rounded-full transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white w-8 h-8">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[4vw] px-10 md:px-12">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="border-t border-gray-800 pt-8 hover:border-gray-400 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-[6vw] md:h-[6vw] rounded-full overflow-hidden bg-gray-100 hover:ring-2 hover:ring-white transition-all duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="neue text-xl md:text-[1.8vw] font-[500] mb-2 md:mb-[1vw]">
                      {testimonial.name}
                    </h3>
                    <p className="neue text-base md:text-[1.1vw] leading-relaxed text-gray-300">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 md:mt-[4vw] space-x-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white w-4' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;