import React from "react";
import deco from '../assets/images/deco.png';
import ice from '../assets/images/tysh/ice.JPG';
import horse from '../assets/images/tysh/horse.JPG';

const GallerySection = () => {
  return (
    <div className="text-[#fff] mt-[clamp(2rem,5vw,5rem)]">
      <div className="max-w-[115rem] mx-auto bg-[#1e1e1e] helvetica py-[clamp(1rem,3vw,1.5rem)] px-4">
        {/* Top Section - unchanged */}
        <div className="flex flex-col lg:flex-row justify-between p-[clamp(1rem,3vw,3rem)]">
          {/* Left Text - unchanged */}
          <div className="flex flex-col mb-8 lg:mb-0">
            <img 
              src={deco} 
              className="h-[clamp(16px,1.25vw,20px)] w-[clamp(16px,1.25vw,20px)] mb-[clamp(2rem,5vw,2.5rem)]" 
              alt="Decoration" 
            />
            <div>
              <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-wide text-gray-300 mb-[clamp(1rem,2vw,1.25rem)]">
                JOES EXPERTISE
              </p>
              <h2 className="text-[clamp(3rem,5vw,3.75rem)] font-[450] coolvetia-font leading-[1.1] tracking-loose text-white/50">
                When <span className="text-white"> moments</span> captured <br className="hidden sm:block" />
                every dreams <span className="text-white">crafted</span> into<br className="hidden sm:block" />
                <span className="text-white"> beautiful</span> reality
              </h2>
            </div>
          </div>
          
          {/* Right Categories - unchanged */}
          <div className="mt-0 lg:mt-12 text-left text-[clamp(1.5rem,3vw,2.25rem)] space-y-[clamp(0.5rem,1vw,1.25rem)] text-gray-300 coolvetia-font">
            <p className="text-white opacity-90">Nature</p>
            <p className="opacity-70">Sports</p>
            <p className="opacity-50">Travel</p>
            <p className="opacity-30">Portrait</p>
            <p className="opacity-10">Architechual</p>
          </div>
        </div>

        {/* Image Section - modified for mobile only */}
        <div className="flex flex-col lg:flex-row relative justify-between items-end overflow-hidden">
          {/* Text Block - hidden on mobile, shown on desktop */}
          <div className="hidden lg:block relative flex-1 px-[clamp(1rem,2vw,2.5rem)] min-h-[clamp(100px,15vw,200px)] mb-[clamp(1rem,5vw,5rem)]">
            <div className="absolute bottom-0 w-full">
              <h1 className="text-[clamp(1.25rem,2vw,1.875rem)] font-[450] coolvetia-font whitespace-nowrap">
                River Bend County Park
              </h1>
              <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400 whitespace-nowrap">
                Cascadia, Oregon
              </p>
            </div>
          </div>

          {/* Image Block - unchanged */}
          <div className="relative w-full lg:w-auto flex overflow-x-hidden lg:overflow-hidden pb-4 lg:pb-0">
            <div className="flex lg:shrink-0 lg:w-[1800px] lg:ml-[400px] mb-[clamp(1rem,5vw,5rem)] gap-[clamp(0.5rem,1vw,1rem)]">
              <img
                src={ice}
                className="h-[clamp(300px,50vw,600px)] w-[clamp(300px,75vw,900px)] lg:mt-[clamp(1rem,2vw,2.5rem)] object-cover"
                alt="Gallery Image"
              />
              <img
                src={horse}
                className="h-[clamp(300px,50vw,600px)] w-[clamp(300px,75vw,900px)] lg:mt-[clamp(1rem,2vw,2.5rem)] object-cover"
                alt="Gallery Image 2"
              />
            </div>
          </div>

          {/* Mobile-only Text Block - shown below images on mobile */}
          <div className="lg:hidden w-full px-[clamp(1rem,2vw,2.5rem)] mt-4 mb-[clamp(1rem,5vw,5rem)]">
            <h1 className="text-[clamp(1.25rem,2vw,1.875rem)] font-[450] coolvetia-font whitespace-nowrap">
              River Bend County Park
            </h1>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400 whitespace-nowrap">
              Cascadia, Oregon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;