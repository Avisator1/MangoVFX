import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Preloader from '../components/PreLoader';
import Process from '../components/Scroll';
import Statistics from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Clients from '../components/Clients';
import PatreonPromo from '../components/Pateron';
import StorePromo from '../components/StorePromo';

function Home() {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Trigger animation after preloader fades out
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 100); // small delay so the preloader fully disappears
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div
          className={`transition-opacity duration-700 ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
        >

          <div>
          <div className=" mx-auto bg-white">
            <Navbar />
            <Hero />
          </div>
          <Process />
          <Clients />
          <Statistics />
          <Testimonials />
          <PatreonPromo />
          <StorePromo />
          
          <Footer />
          </div>
      
        </div>
      )}
    </>
  );
}

export default Home;
