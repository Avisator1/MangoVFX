import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      name: "Sharpness",
      quote: "Mango really understands how to make thumbnails that grab attention.",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/5100f391-2619-4090-a127-3a5cf7857c9e/13d3cb91925adcba9fe48d3b48ec322b.gif"
    },
    {
      name: "FlameFrags",
      quote: "Mango's dedication to detail & creativity truly shines through in their thumbnails.",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/81f71eab-6b00-4784-a008-691892c21b40/channels4_profile+%2812%29.jpg"
    },
    {
      name: "InfamousJJ",
      quote: "Very fast and high quality work. Very responsive and makes wanted changes. Would 100% recommend!",
      image: "https://images.squarespace-cdn.com/content/v1/658f5d8b4313f00569e7534b/5ba11a90-0cab-46b0-a27d-3fc59b58bc3a/channels4_profile+%2813%29.jpg"
    },
    {
      name: "Tryhard",
      quote: "This guy is great at his craft, replies quickly, and even allowed me to change some thumbnail concepts last-second!",
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
    },
    {
      name: "Kiply",
      quote: "Mango makes the cleanest thumbnails, will definitely be working with again.",
      image: "https://yt3.ggpht.com/KLGjabbw14Zlv01jonWOQ_j8Rv9sou2zKiMWxfvXbjhErmo8MfWrnMaUizYc_2_gaXyeylLQxto=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
      name: "Vixios",
      quote: "Solid.",
      image: "https://yt3.ggpht.com/LCci3yzrf7mXofG5FN4QFfHEpDxV6_I3tL_2z2qVijXy6Rj_Ac12CGxb3xzQxUCkWOSuNKmmVxk=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
      name: "Krustydavid",
      quote: "Super creative and does amazing work with what you envision and have in mind.",
      image: "https://yt3.ggpht.com/q0Tmok06qCLdoE7JqGuyiBW8rY15E_pO1i4JYhfJlKKFXaVFxMmTeOZXpa_8IksPGIzQqabzuQ=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
      name: "ArtualCM",
      quote: "Went above and beyond with my thumbnail.",
      image: "https://yt3.ggpht.com/0xoPZV5afD_Mj9zQsNhgGLwoE6QuIIz5dwx9ETcetdHkbdRDzPMjk0p_Akj8USpmPzoHxM-YCg=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
      name: "Tai",
      quote: "Super reliable and always able to revision when needed.",
      image: "https://yt3.ggpht.com/Ed01sVs8RuxTu_5dosZphDQl502jL_PN5601kvrfWBzrtAbYugOhp0eAVbFyha7eec34T6xoNA=s176-c-k-c0x00ffffff-no-rj-mo"
    }
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const start = currentPage * testimonialsPerPage;
  const visibleTestimonials = testimonials.slice(start, start + testimonialsPerPage);

  return (
    <div className='bg-black'>
      <section id='testimonials' className="relative bg-black text-white py-20 md:py-[10vw] max-w-[112rem] mx-auto px-6 md:px-0">
        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-[6vw]'>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="neue text-lg md:text-[1.5vw] font-[500] mb-2 md:mb-[1vw]">
              04. TESTIMONIALS
            </p>
            <h2 className="neue text-5xl md:text-[6vw] font-[500] leading-[0.9] tracking-tight">
              CLIENT FEEDBACK
            </h2>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="neue text-8xl md:text-[12vw] font-[500]  text-white/10 leading-none tracking-tight mb-4 md:mb-0 md:mr-[2vw]"
          >
            05
          </motion.span>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Arrows */}
          <button 
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-4 hover:bg-white/10 rounded-full"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white w-8 h-8">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:p-4 hover:bg-white/10 rounded-full"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white w-8 h-8">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[4vw] px-10 md:px-12">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-t border-gray-800 pt-8 hover:border-gray-400 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 md:w-[6vw] md:h-[6vw] rounded-full overflow-hidden bg-gray-100 hover:ring-2 hover:ring-white transition-all">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="neue text-xl md:text-[1.8vw] font-[500] mb-2">
                      {testimonial.name}
                    </h3>
                    <p className="neue text-base md:text-[1.1vw] text-gray-300 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentPage === index ? 'bg-white w-4' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
