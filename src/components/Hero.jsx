import React from 'react'
import deco from '../assets/images/deco.png'
import { FaXTwitter, FaDribbble, FaInstagram } from 'react-icons/fa6'
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import one from '../assets/images/hero/1.JPG'
import { ScreenFitText } from './ScreenToText';

function Hero() {
  return (
    <div className="bg-white mx-auto max-w-[115rem] items-center justify-center">
      
      <div className="pt-20 md:pt-10">
        <ScreenFitText>
          JOE MCDAVID
        </ScreenFitText>
      </div>

      {/* IMAGE + BIO */}
      <div className='max-w-[115rem] mx-auto pt-10 coolvetia-font'>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[clamp(1rem,3vw,3rem)]">
          <div className="space-y-4">
            <div className="w-full max-w-[707.91px] h-[clamp(15rem,24vw,472px)] flex-shrink-0 border border-gray-200 overflow-hidden relative">
              <img src={one} alt="Left card" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="max-w-xl">
            <p className="opacity-75 text-[clamp(0.875rem,4vw,1.5rem)] leading-[130%]">
              Joe McDavid is a passionate photographer known for capturing authentic moments with depth and creativity.
              From portraits to landscapes, he brings stories to life through powerful visual storytelling that connects emotionally with viewers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
