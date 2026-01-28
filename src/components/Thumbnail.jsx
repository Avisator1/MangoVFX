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
import sixteen from '../assets/thumbnails/16.png';
import seventeen from '../assets/thumbnails/17.png';
import eighteen from '../assets/thumbnails/18.png';
import nineteen from '../assets/thumbnails/19.png';
import twenty from '../assets/thumbnails/20.png';

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
    { id: 15, imageUrl: fifteen, views: "801", date: new Date("2024-05-27"), youtubeUrl: "https://www.youtube.com/watch?v=dRWj6fK2V_U&ab_channel=Cowarted" },
    { id: 16, imageUrl: sixteen, views: "1.2M", date: new Date("2026-01-23"), youtubeUrl: "https://youtu.be/p3xIY9NsFS0?si=3kmU7o-svy3N4sh3" },
    { id: 17, imageUrl: seventeen, views: "4.5K", date: new Date("2025-10-20"), youtubeUrl: "https://youtu.be/hhOoge2rKmM?si=iS4AIMamgEqmSRVE" },
    { id: 18, imageUrl: eighteen, views: "947K", date: new Date("2025-08-22"), youtubeUrl: "https://youtu.be/-rKW4oYNqeU?si=in5skA3Qzyvrc1U9" },
    { id: 19, imageUrl: nineteen, views: "794K", date: new Date("2025-06-27"), youtubeUrl: "https://youtu.be/KJtp7x_cJPo?si=c0tM9byaaY9K3pYh" },
    { id: 20, imageUrl: twenty, views: "1.12M", date: new Date("2025-04-25"), youtubeUrl: "https://youtu.be/hBZqlRjT8Kw?si=Qh1yPdgpmFgGFOX2" }
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
          <div className="relative max-w-[90vw] max-h-[90vh] rounded-lg">
            <img 
              src={selectedImage} 
              alt="Enlarged thumbnail"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="max-w-[112rem] mx-auto pt-20 md:pt-32 pb-16 px-4 mt-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="neue text-2xl font-[500] mb-3">PORTFOLIO</p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight">
              <span style={{ color: '#e1794a' }}>THUMBNAIL</span>
              <br />
              GALLERY
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
            className={`neue px-4 py-2 rounded-md ${sortBy === "date" ? "bg-[#e1794a] text-white" : "bg-gray-100"}`}
          >
            Newest First
          </button>
          <button
            onClick={() => setSortBy("views")}
            className={`neue px-4 py-2 rounded-md ${sortBy === "views" ? "bg-[#e1794a] text-white" : "bg-gray-100"}`}
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
                className="aspect-[16/9] bg-gray-100 overflow-hidden relative cursor-pointer rounded-lg"
                onClick={() => handleThumbnailClick(thumbnail)}
              >
                <img 
                  src={thumbnail.imageUrl} 
                  alt="Mango Effects thumbnail design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black pt-12">
          <div className="text-center">
            <p className="neue text-[10vw] md:text-[6vw] font-[500] leading-none">400+</p>
            <p className="neue text-xl uppercase tracking-wider">Thumbnails</p>
          </div>
          <div className="text-center">
            <p className="neue text-[10vw] md:text-[6vw] font-[500] leading-none">47M+</p>
            <p className="neue text-xl uppercase tracking-wider">Total Views</p>
          </div>
          <div className="text-center">
            <p className="neue text-[10vw] md:text-[6vw] font-[500] leading-none">750K+</p>
            <p className="neue text-xl uppercase tracking-wider">Likes</p>
          </div>
          <div className="text-center">
            <p className="neue text-[10vw] md:text-[6vw] font-[500] leading-none">100+</p>
            <p className="neue text-xl uppercase tracking-wider">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailPortfolio;
