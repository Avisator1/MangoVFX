import React, { useState } from "react";
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
  const [sortBy, setSortBy] = useState("date"); // "date" or "views"
  const [selectedImage, setSelectedImage] = useState(null);
  
  const thumbnails = [
    { id: 1, imageUrl: one, views: "675", date: new Date("2025-08-1"), youtubeUrl: "https://www.youtube.com/watch?v=hN-pGejzvXM&ab_channel=ImShiba" },
    { id: 2, imageUrl: two, views: "587K", date: new Date("2025-06-17"), youtubeUrl: "https://www.youtube.com/watch?v=KZYKYnEmrfc&ab_channel=NotVixios" },
    { id: 3, imageUrl: three, views: null, date: new Date("2024-12-1"), youtubeUrl: null },
    { id: 4, imageUrl: four, views: "31.03K", date: new Date("2025-05-06"), youtubeUrl: "https://www.youtube.com/watch?v=2vcgnqarpas&ab_channel=Flux" },
    { id: 5, imageUrl: five, views: null, date: new Date("2025-07-25"), youtubeUrl: null },
    { id: 6, imageUrl: six, views: "1.03K", date: new Date("2024-06-14"), youtubeUrl: "https://www.youtube.com/watch?v=tyjXC6tuuBo&ab_channel=Cowarted" },
    { id: 7, imageUrl: seven, views: null, date: new Date("2025-04-30"), youtubeUrl: null },
    { id: 8, imageUrl: eight, views: "1.34M", date: new Date("2025-04-8"), youtubeUrl: "https://www.youtube.com/watch?v=7qDVO_fnyR4&ab_channel=Kiply" },
    { id: 9, imageUrl: nine, views: null, date: new Date("2024-06-14"), youtubeUrl: null },
    { id: 10, imageUrl: ten, views: "2.34K", date: new Date("2024-07-27"), youtubeUrl: "https://www.youtube.com/watch?v=xbYmVQF37pk&ab_channel=VireLock" },
    { id: 11, imageUrl: eleven, views: null, date: new Date("2025-02-18"), youtubeUrl: null },
    { id: 12, imageUrl: twelve, views: null, date: new Date("2025-06-5"), youtubeUrl: null },
    { id: 13, imageUrl: thirteen, views: "1.23K", date: new Date("2025-07-15"), youtubeUrl: "https://www.youtube.com/watch?v=6LzvppbX2qs&ab_channel=Flux" },
    { id: 14, imageUrl: fourteen, views: "1.6K", date: new Date("2024-012-1"), youtubeUrl: "https://www.youtube.com/watch?v=0ON7w8rCVhI&ab_channel=Pyrocelot" },
    { id: 15, imageUrl: fifteen, views: "801", date: new Date("2024-05-27"), youtubeUrl: "https://www.youtube.com/watch?v=dRWj6fK2V_U&ab_channel=Cowarted" }
  ];

  // Sort thumbnails based on selected option
  const sortedThumbnails = [...thumbnails].sort((a, b) => {
    if (sortBy === "date") {
      return b.date - a.date; // Newest first
    } else {
      // Sort by views (treat null as practice thumbnails)
      const viewsA = a.views ? parseFloat(a.views.replace(/[KM]/g, "")) * (a.views.includes("K") ? 1000 : a.views.includes("M") ? 1000000 : 1) : -1;
      const viewsB = b.views ? parseFloat(b.views.replace(/[KM]/g, "")) * (b.views.includes("K") ? 1000 : b.views.includes("M") ? 1000000 : 1) : -1;
      return viewsB - viewsA;
    }
  });

  const handleViewCountClick = (e, thumbnail) => {
    e.stopPropagation(); // Prevent triggering the thumbnail click
    if (thumbnail.youtubeUrl) {
      window.open(thumbnail.youtubeUrl, '_blank');
    }
  };

  const handleThumbnailClick = (thumbnail) => {
    setSelectedImage(thumbnail.imageUrl);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <div className="bg-white">
      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[99999999999999] flex items-center justify-center p-4 bg-black/90 cursor-pointer"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl z-50 hover:opacity-80 transition-opacity"
          >
            &times;
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Enlarged thumbnail"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="max-w-[112rem] mx-auto pt-20 md:pt-32 pb-16 px-4 mt-20">
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

      {/* Sorting Controls */}
      <div className="max-w-[112rem] mx-auto px-4 mb-8">
        <div className="flex items-center space-x-4">
          <p className="neue text-lg">Sort by:</p>
          <button
            onClick={() => setSortBy("date")}
            className={`neue px-4 py-2 rounded-md ${sortBy === "date" ? "bg-black text-white" : "bg-gray-100"}`}
          >
            Newest First
          </button>
          <button
            onClick={() => setSortBy("views")}
            className={`neue px-4 py-2 rounded-md ${sortBy === "views" ? "bg-black text-white" : "bg-gray-100"}`}
          >
            Most Views
          </button>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="max-w-[112rem] mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedThumbnails.map((thumbnail) => (
            <motion.div
              key={thumbnail.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* View Count Badge - Improved styling */}
              <div 
                onClick={(e) => handleViewCountClick(e, thumbnail)}
                className={`
                  absolute top-4 left-4 px-3 py-1 neue font-[500] text-sm z-10 rounded-md 
                  flex items-center shadow-lg backdrop-blur-sm cursor-pointer
                  ${thumbnail.views ? "bg-black/90 text-white hover:bg-black/80" : "bg-white/90 text-black border border-black/10"}
                `}
              >
                <span className="mr-1">{thumbnail.views ? "👁️" : "🖌️"}</span>
                <span>{thumbnail.views ? thumbnail.views : "Practice"}</span>
              </div>
              
              {/* Date Badge */}
              <div className="absolute top-4 right-4 bg-white/90 text-black px-2 py-1 neue font-[500] text-xs z-10 rounded-md shadow">
                {thumbnail.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </div>
              
              {/* Thumbnail Image */}
              <div 
                className="aspect-[16/9] bg-gray-100 overflow-hidden relative cursor-pointer"
                onClick={() => handleThumbnailClick(thumbnail)}
              >
                <img 
                  src={thumbnail.imageUrl} 
                  alt="Mango Effects thumbnail design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
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