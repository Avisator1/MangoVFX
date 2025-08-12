import React, { useState, useEffect } from 'react';
import ThumbnailPortfolio from '../components/Thumbnail';
import Footer from '../components/FooterBlack';
import Navbar from '../components/Navbar';

function Work() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger fade-in after a small delay
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50); // adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mx-auto bg-white">
        <Navbar />
      </div>

      <ThumbnailPortfolio />
      <Footer />
    </div>
  );
}

export default Work;
