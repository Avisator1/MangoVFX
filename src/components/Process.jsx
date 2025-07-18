import React from 'react'
import deco from '../assets/images/deco.png'
import four from '../assets/images/masonry/4.JPG'
import { FaArrowRight } from 'react-icons/fa'

function Process() {
  return (
    <div className='max-w-[115rem] mx-auto helvetica mt-[clamp(2rem,5vw,7rem)] '>
      {/* Header section */}
      <img src={deco} className='w-[clamp(16px,1.25vw,20px)] h-[clamp(16px,1.25vw,20px)] mb-[clamp(2rem,3vw,2.5rem)]' alt="Decoration" />
      <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-wide text-gray-500 mb-[clamp(1rem,2vw,1.25rem)]">JOES PROCESS</p>

      {/* Main Heading and Description */}
      <div className='flex flex-col md:flex-row justify-between mb-[clamp(2rem,5vw,5rem)]'>
        <div>
          <h1 className='text-[clamp(2.5rem,5vw,3.75rem)] font-[450] text-black/80 max-w-3xl coolvetia-font leading-[1.1]'>
            Refining <span className='libre-baskerville-regular-italic'>Beauty</span> in Every Detail
          </h1>
        </div>
        <p className='max-w-xl text-gray-800 text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed helvetica mt-6 md:mt-0'>
          Joe's editing process is where creativity meets precision.
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1rem,2vw,2rem)] mb-[clamp(2rem,5vw,7rem)]">
        {['01. Capture', '02. Refine', '03. Deliver'].map((step, index) => (
          <div key={index} className="border-t border-[#dddddd] pt-6">
            <div className="flex justify-between items-start">
              <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] coolvetia-font font-[450]">{step}</h3>
              <span className="text-gray-400 text-xl"><FaArrowRight /></span>
            </div>
            <p className="text-gray-600 mt-4 helvetica text-[clamp(0.875rem,1.5vw,1rem)]">
              {step === '01. Capture' && 'Raw moments captured with technical expertise.'}
              {step === '02. Refine' && 'Meticulous color grading and adjustments.'}
              {step === '03. Deliver' && 'Final artwork delivered in multiple formats.'}
            </p>
          </div>
        ))}
      </div>

      {/* Image Section - Corrected layout */}
      <div className="relative mb-[clamp(2rem,5vw,5rem)]">
        {/* Container for image + text/button */}
        <div className="relative">
          {/* Image with constrained width */}
          <div className="w-full md:w-[calc(100%-300px)]">
            <img
              src={four}
              className="h-[clamp(300px,50vw,400px)] w-full object-cover"
              alt="Editing Process"
            />
          </div>

          {/* Desktop Location Text (top-right) */}
          <div className="hidden md:block absolute top-0 right-8 pt-4 !text-right w-[200px]">
            <h1 className="text-[clamp(1.5rem,3vw,1.875rem)] font-[450] coolvetia-font whitespace-nowrap">
              Sawnee Mountain
            </h1>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400 whitespace-nowrap mt-1">
              Cumming, Georgia
            </p>
          </div>

          {/* Desktop Contact Button (bottom-right) */}
          <div className='hidden md:block absolute bottom-0 right-0 pb-4 w-[200px] text-right'>
            <button className="px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.5rem)] bg-[#1e1e1e] text-white coolvetia-font text-[clamp(1rem,1.5vw,1.125rem)] tracking-wide hover:bg-gray-800 transition-colors duration-300">
              CONTACT ME
            </button>
          </div>
        </div>

        {/* Mobile Location Text and Button (below image) */}
        <div className="md:hidden w-full mt-6 space-y-4">
          <div>
            <h1 className="text-[clamp(1.5rem,3vw,1.875rem)] font-[450] coolvetia-font whitespace-nowrap">
              Sawnee Mountain
            </h1>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400 whitespace-nowrap mt-1">
              Cumming, Georgia
            </p>
          </div>
          <button className="w-full px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.5rem)] bg-[#1e1e1e] text-white coolvetia-font text-[clamp(1rem,1.5vw,1.125rem)] tracking-wide hover:bg-gray-800 transition-colors duration-300">
            CONTACT ME
          </button>
        </div>
      </div>
    </div>
  )
}

export default Process