import React from 'react'
import deco from '../assets/images/deco.png'
import { FaXTwitter, FaDribbble, FaInstagram } from 'react-icons/fa6'
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import one   from '../assets/images/hero/1.JPG'


function Hero() {
  return (
    <div className='max-w-[110rem] mx-auto helvetica py-16 px-4  bg-[white]'>
      <div className='flex justify-between text-left'>
        <h1 className='text-[300px] coolvetia-font -mt-10 font-bold'>JOE MCDAVID</h1>
        <div className='space-x-2 flex mt-10'>
          <img className='h-[20px] w-[20px]' src={deco} />
          <img className='h-[20px] w-[20px]' src={deco} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-between helvetica py-12 gap-12">
        <div className="space-y-4">
          <div className="w-[900px] h-[500px] flex-shrink-0
                                   border border-gray-200  overflow-hidden relative">
              <img src={one} alt="Left card" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="max-w-xl ">
          <p className="text-gray-800 text-sm md:text-base leading-relaxed helvetica">
            Joe McDavid is a passionate photographer known for capturing authentic moments with depth and creativity.
            From portraits to landscapes, he brings stories to life through powerful visual storytelling that connects emotionally with viewers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
