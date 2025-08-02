import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
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

  return (
    <div className='bg-black'>
      <section className="relative bg-black text-white py-20 md:py-[10vw] max-w-[112rem] mx-auto px-6 md:px-0">
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-[6vw]'>
          <span className="neue text-8xl md:text-[12vw] font-[500] text-gray-100 leading-none tracking-tight mb-4 md:mb-0 md:mr-[2vw]">
            04
          </span>
          <div className="text-right">
            <p className="neue text-lg md:text-[1.5vw] font-[500] mb-2 md:mb-[1vw]">
              04. TESTIMONIALS
            </p>
            <h2 className="neue text-5xl md:text-[6vw] font-[500] leading-[0.9] tracking-tight">
              CLIENT <span className="text-gray-400">FEEDBACK</span>
            </h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[4vw]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-20%" }}
              className="border-t border-gray-800 pt-6 md:pt-[3vw]"
            >
              <div className="flex items-start gap-4 md:gap-[2vw]">
                <div className="flex-shrink-0 w-16 h-16 md:w-[8vw] md:h-[8vw] rounded-full overflow-hidden bg-gray-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="neue text-xl md:text-[2vw] font-[500] mb-2 md:mb-[1vw]">
                    {testimonial.name}
                  </h3>
                  <p className="neue text-base md:text-[1.2vw] leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;