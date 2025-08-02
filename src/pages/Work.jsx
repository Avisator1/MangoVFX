import React from 'react'
import ThumbnailPortfolio from '../components/Thumbnail'
import Footer from '../components/FooterBlack'
import Navbar from '../components/Navbar'

function Work() {
  return (
    <div>
          <div className=" mx-auto bg-white">
            <Navbar />
          </div>

          <ThumbnailPortfolio />
          <Footer />
    </div>
  )
}

export default Work