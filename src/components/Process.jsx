import React from 'react'
import deco from '../assets/images/deco.png'
import four from '../assets/images/masonry/4.JPG'
import { FaArrowRight } from 'react-icons/fa'

function Process() {
  return (
    <div className='max-w-[110rem] mx-auto helvetica mt-28 px-4'>
      <img src={deco} className='w-[20px] h-[20px] mb-10' alt="Decoration" />
      <p className="text-sm uppercase tracking-wide text-gray-500 mb-5">JOES PROCESS</p>
      <div className='flex flex-col md:flex-row justify-between mb-20'>
        <div>
          <h1 className='text-6xl font-[450] text-black/80 max-w-3xl coolvetia-font'>
            Refining <span className='libre-baskerville-regular-italic'>Beauty</span> in Every Detail
          </h1>
        </div>

        <p className='max-w-xl text-gray-800 text-sm md:text-lg leading-relaxed helvetica mt-6 md:mt-0'>
          Joe's editing process is where creativity meets precision. Every photo is thoughtfully refined to enhance color, light, and emotion—bringing out the full story behind each shot. It's not just about polishing an image; it's about transforming it into something timeless.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
        <div className="border-t border-[#dddddd] pt-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl coolvetia-font font-[450]">01. Capture</h3>
            <span className="text-gray-400 text-xl"><FaArrowRight /></span>
          </div>
          <p className="text-gray-600 mt-4 helvetica text-sm">
            Raw moments captured with technical expertise and artistic vision, ensuring the foundation for exceptional imagery.
          </p>
        </div>

        <div className="border-t border-[#dddddd] pt-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl coolvetia-font font-[450]">02. Refine</h3>
            <span className="text-gray-400 text-xl"><FaArrowRight /></span>
          </div>
          <p className="text-gray-600 mt-4 helvetica text-sm">
            Meticulous color grading and composition adjustments to enhance the emotional impact of each photograph.
          </p>
        </div>

        <div className="border-t border-[#dddddd] pt-6">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl coolvetia-font font-[450]">03. Deliver</h3>
            <span className="text-gray-400 text-xl"><FaArrowRight /></span>
          </div>
          <p className="text-gray-600 mt-4 helvetica text-sm">
            Final artwork delivered in multiple formats, ready for print or digital display with preserved quality.
          </p>
        </div>
      </div>

      {/* Image Section - Updated text width */}
      <div className="relative flex justify-between items-end overflow-hidden mb-20">
        {/* Text Block */}


        {/* Image Block */}
        <div className="relative flex shrink-0 w-full md:w-[1800px] md:-ml-[400px]">
          <img
            src={four}
            className="h-[500px] md:h-[400px] w-full object-cover"
            alt="Editing Process"
          />
        </div>
        
        <div className="relative flex-1 text-right min-h-[400px]">
          <div className="absolute top-0 w-full">
            <h1 className="text-3xl font-[450] coolvetia-font whitespace-nowrap">
              Sawnee Mountain
            </h1>
            <p className="text-xl text-gray-400 whitespace-nowrap mt-1">Cumming, Georgia</p>

          </div>

          <div className='absolute bottom-0 w-full'>
            <button className="px-8 py-4 bg-[#1e1e1e] text-white coolvetia-font text-lg tracking-wide hover:bg-gray-800 transition-colors duration-300">
              CONTACT ME
            </button>
          </div>

        </div>

      
      </div>

      
    </div>
  )
}

export default Process