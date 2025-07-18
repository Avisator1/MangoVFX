import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Images from '../components/Images'
import GallerySection from '../components/Gallery'
import Process from '../components/Process'
import FeaturedWork from '../components/FeaturedWork'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <div className='px-4'>
          <Hero />
          <GallerySection />
          <Process />
          <FeaturedWork />
          <Footer />
        </div>

    </div>
  )
}

export default Home