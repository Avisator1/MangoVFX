import React from "react";
import deco from '../assets/images/deco.png';
import japan from '../assets/images/masonry/a.JPG';
import oregon from '../assets/images/masonry/b.JPG';
import club from '../assets/images/masonry/12.jpg';
import sports from '../assets/images/masonry/scenic.JPG';

const FeaturedWork = () => {
  return (
    <div className="p-8 text-[#111] mt-20">
      <div className="max-w-[110rem] mx-auto helvetica py-6">
        <div className="">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <img src={deco} className="h-[20px] w-[20px] mb-10" alt="Decoration" />
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-5">
                  JOE'S FEATURED WORK
                </p>
                <h2 className="text-6xl font-[450] coolvetia-font tracking-loose text-black/50">
                  Through the <span className="text-black">lens</span> of <br />
                  <span className="text-black">adventure</span> and <br />
                  <span className="text-black">human</span> connection
                </h2>
              </div>
            </div>
            <div className="mt-12 text-left text-4xl space-y-5 text-gray-600 coolvetia-font">
              <p className="text-gray-900 opacity-90">Japan</p>
              <p className="opacity-70">Oregon</p>
              <p className="opacity-50">Ireland</p>
              <p className="opacity-30">Scotland</p>
              <p className="opacity-10">Cayman</p>
            </div>
          </div>

          {/* Travel Gallery */}
          <div className="flex relative justify-between items-end overflow-hidden">
            <div className="relative flex-1 px-10 min-h-[200px] mb-20 px-20">
              <div className="absolute bottom-0 w-full">
                <h1 className="text-3xl font-[450] !w-full coolvetia-font whitespace-nowrap">
                  Scotland
                </h1>
                <p className="text-xl text-gray-400 whitespace-nowrap">2024-2025</p>
              </div>
            </div>

            <div className="relative flex shrink-0 w-[1800px] ml-[400px] mb-20">
              <img
                src={japan}
                className="h-[600px] w-[700px] mt-10 object-cover"
                alt="Japan"
              />
              <img
                src={oregon}
                className="h-[600px] w-[700px] ml-4 mt-10 object-cover"
                alt="Oregon"
              />

            </div>
          </div>

          <div className="flex relative justify-between items-end overflow-hidden mt-40">
            <div className="relative flex-1 px-10 min-h-[200px] mb-20 px-20">
              <div className="absolute bottom-0 w-full">
                <h1 className="text-3xl font-[450] !w-full coolvetia-font whitespace-nowrap">
                  Tokyo, Japan
                </h1>
                <p className="text-xl text-gray-400 whitespace-nowrap">Senior Year</p>
              </div>
            </div>

            <div className="relative flex shrink-0 w-[1800px] ml-[400px] mb-20">
              <img
                src={club}
                className="h-[800px] w-[900px] object-cover"
                alt="Club Moments"
              />
            </div>
          </div>

          <div className="flex flex-col items-end mt-40 px-20">
            <div className="w-full flex justify-between mb-16">
              <div>
                <h3 className="text-4xl coolvetia-font font-[450] text-black/80">
                  Sawnee Mountain
                </h3>
                <p className="text-xl text-gray-400 mt-2">Senior Year</p>
              </div>
              <p className="max-w-md text-gray-800 text-sm md:text-base leading-relaxed helvetica">
                Showcasing the serene beauty and majestic contours of Sawnee Mountain, this shot captures the quiet grandeur of nature in perfect light—a moment of stillness, depth, and timeless perspective.              </p>
            </div>

            <div className="w-full relative h-[700px]">
              <img
                src={sports}
                className="h-full w-full object-cover"
                alt="Sports Photography"
              />
            </div>
          </div>

          {/* Closing Section */}
          <div className="flex justify-between items-end px-20 pt-40 pb-20">
            <div className="max-w-xl">
              <img src={deco} className="h-[20px] w-[20px] mb-6" alt="Decoration" />
              <h3 className="text-4xl coolvetia-font font-[450] text-black/80 mb-6">
                Every picture tells <br />
                <span className="text-black">a deeper story</span>
              </h3>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed helvetica">
                From global adventures to local moments, Joe's work captures the essence of experience through thoughtful composition and emotional depth.
              </p>
            </div>
            <button className="px-8 py-4 bg-black text-white coolvetia-font text-lg tracking-wide hover:bg-gray-800 transition-colors duration-300 mb-6">
              VIEW FULL PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;