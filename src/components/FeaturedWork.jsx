import React from "react";
import deco from '../assets/images/deco.png';
import japan from '../assets/images/masonry/a.JPG';
import oregon from '../assets/images/masonry/b.JPG';
import club from '../assets/images/masonry/12.jpg';
import sports from '../assets/images/masonry/scenic.JPG';

const images = [
  { src: japan, title: "Dotonbori", loc: "Osaka, Japan" },
  { src: club, title: "Osaka Castle", loc: "Osaka, Japan" },
  { src: oregon, title: "Crater Lake", loc: "Oregon, USA" },
  { src: sports, title: "Sawnee Mountain", loc: "Georgia, USA" },
  { src: japan, title: "Tokyo Nights", loc: "Tokyo, Japan" },
  { src: oregon, title: "Foggy Forest", loc: "Oregon, USA" },
];

const FeaturedWork = () => {
  return (
    <div className="flex flex-col lg:flex-row text-[#111] coolvetia-font mt-20 max-w-[115rem] mx-auto px-4 lg:px-0">
      {/* Sidebar */}
      <div className="w-full lg:w-[35%] lg:sticky top-0 h-fit self-start mb-10 lg:mb-0">
        <div className="max-w-[40rem] coolvetia-font">
          <img src={deco} className="h-5 w-5 mb-10" alt="Decoration" />
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-5">
            Joe's Featured Work
          </p>
          <h2 className="text-4xl lg:text-6xl font-[450] coolvetia-font tracking-normal lg:tracking-loose text-black/50 leading-tight">
            Through the <span className="text-black">lens</span> of {' '}
            <span className="text-black">adventure</span> and{' '}
            <span className="text-black">human</span> connection
          </h2>

          <div className="mt-8 lg:mt-12 text-3xl lg:text-[48px] space-y-2 lg:space-y-[10px] text-gray-600 coolvetia-font">
            <p className="text-gray-900 opacity-90">Japan</p>
            <p className="opacity-70">Oregon</p>
            <p className="opacity-50">Ireland</p>
            <p className="opacity-30">Scotland</p>
          </div>

          <button className="mt-8 lg:mt-12 px-6 py-3 lg:px-4 lg:py-2 border border-black text-black hover:bg-black hover:text-white transition">
            View Full Portfolio
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-full lg:w-[65%] lg:py-10">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {images.map((img, i) => (
            <div key={i}>
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover"
              />
              <div className="mt-4">
                <p className="text-2xl lg:text-[36px] leading-[130%] coolvetia-font">
                  {img.title}
                </p>
                <p className="text-lg lg:text-[24px] text-gray-500">{img.loc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-10 pt-[25%]">
            {images.filter((_, i) => i % 2 === 0).map((img, i) => (
              <div key={i}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <p className="text-[36px] leading-[130%] coolvetia-font mt-3">
                  {img.title}
                </p>
                <p className="text-[24px] text-gray-500">{img.loc}</p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10">
            {images.filter((_, i) => i % 2 === 1).map((img, i) => (
              <div key={i}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <p className="text-[36px] leading-[130%] coolvetia-font mt-3">
                  {img.title}
                </p>
                <p className="text-[24px] text-gray-500">{img.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;