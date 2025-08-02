import React from 'react'
import Store from '../components/Store'
import Navbar from '../components/Navbar'
import Footer from '../components/FooterBlack'

function StorePage() {
  return (
    <div>
          <div className=" mx-auto bg-white">
            <Navbar />
          </div>

          <Store />
          <Footer />
    </div>
  )
}

export default StorePage