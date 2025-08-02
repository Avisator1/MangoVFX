import React from "react";
import { motion } from "framer-motion";
import one from '../assets/thumbnails/1.png';
import two from '../assets/thumbnails/2.png';
import three from '../assets/thumbnails/3.png';
import four from '../assets/thumbnails/4.png';
import five from '../assets/thumbnails/5.png';
import six from '../assets/thumbnails/6.png';
import seven from '../assets/thumbnails/7.png';
import eight from '../assets/thumbnails/8.png';
import nine from '../assets/thumbnails/9.png';
import ten from '../assets/thumbnails/10.png';
import eleven from '../assets/thumbnails/11.png';
import twelve from '../assets/thumbnails/12.png';
import thirteen from '../assets/thumbnails/13.png';
import fourteen from '../assets/thumbnails/14.png';
import fifteen from '../assets/thumbnails/15.png';

const ThumbnailPortfolio = () => {
  const thumbnails = [
    { id: 1, imageUrl: one },
    { id: 2, imageUrl: two },
    { id: 3, imageUrl: three },
    { id: 4, imageUrl: four },
    { id: 5, imageUrl: five },
    { id: 6, imageUrl: six },
    { id: 7, imageUrl: seven },
    { id: 8, imageUrl: eight },
    { id: 9, imageUrl: nine },
    { id: 10, imageUrl: ten },
    { id: 11, imageUrl: eleven },
    { id: 12, imageUrl: twelve },
    { id: 13, imageUrl: thirteen },
    { id: 14, imageUrl: fourteen },
    { id: 15, imageUrl: fifteen }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-[112rem] mx-auto pt-20 md:pt-32 pb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="neue text-2xl font-[500] mb-3">04. PORTFOLIO</p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
              THUMBNAIL<br />GALLERY
            </h1>
          </div>
          <p className="neue text-xl md:text-2xl max-w-md text-right">
            Selected works that increased views and click-through rates.
          </p>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="max-w-[112rem] mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {thumbnails.map((thumbnail) => (
            <motion.div
              key={thumbnail.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Thumbnail Image */}
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                <img 
                  src={thumbnail.imageUrl} 
                  alt="Mango Effects thumbnail design"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black pt-12">
          <div className="text-center">
            <p className="neue text-[10vw] md:text-[6vw] font-[500] leading-none">250+</p>
            <p className="neue text-xl uppercase tracking-wider">Thumbnails</p>
          </div>
          <div className="text-center">
            <p className="neue text-[10vw] md:text-[6vw] font-[500] leading-none">32.5M+</p>
            <p className="neue text-xl uppercase tracking-wider">Total Views</p>
          </div>
          <div className="text-center">
            <p className="neue text-[10vw] md:text-[6vw] font-[500] leading-none">12%</p>
            <p className="neue text-xl uppercase tracking-wider">Avg. CTR Increase</p>
          </div>
          <div className="text-center">
            <p className="neue text-[10vw] md:text-[6vw] font-[500] leading-none">50+</p>
            <p className="neue text-xl uppercase tracking-wider">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailPortfolio;