import React from "react";
import deco from '../assets/images/deco.png'
import ice from '../assets/images/tysh/ice.JPG'
import horse from '../assets/images/tysh/horse.JPG'


const GallerySection = () => {
  return (
    <div className="p-8 text-[#fff] mt-20">
      <div className="max-w-[110rem] mx-auto bg-[#1e1e1e] helvetica py-6">
        <div className="">
          <div className="flex justify-between p-12 px-20">
            <div className="flex flex-col">
                <img src={deco} className="h-[20px] w-[20px] mb-10" alt="Decoration" />
                <div>
                <p className="text-sm uppercase tracking-wide text-gray-300 mb-5">
                    JOES EXPERTISE
                </p>
                <h2 className="text-6xl font-[450] coolvetia-font tracking-loose text-white/50">
                    When <span className="text-white">moments</span> captured <br />
                    every dreams <span className="text-white">crafted</span> into <br />
                    <span className="text-white">beautiful</span> reality
                </h2>
                </div>
            </div>
             <div className="mt-12 text-left text-4xl space-y-5 text-gray-300 coolvetia-font">
                <p className=" text-white opacity-90">Nature</p>
                <p className="opacity-70">Sports</p>
                <p className="opacity-50">Travel</p>
                <p className="opacity-30">Portrait</p>
                <p className="opacity-10">Architechual</p>

            </div>
          </div>


     <div className="flex relative justify-between items-end overflow-hidden ">
  {/* Text Block */}
  <div className="relative flex-1 px-10 min-h-[200px] mb-20"> {/* Add min-height */}
  <div className="absolute bottom-0 w-full">
    <h1 className="text-3xl font-[450] !w-full coolvetia-font whitespace-nowrap">
      River Bend County Park
    </h1>
    <p className="text-xl text-gray-400 whitespace-nowrap">Cascadia, Oregon</p>
  </div>
</div>


  {/* Image Block */}
  <div className="relative flex shrink-0 w-[1800px] ml-[400px] mb-20">
    {/* First Image */}
    <img
      src={ice}
      className="h-[600px] w-[900px] mt-10 object-cover"
      alt="Gallery Image"
    />

    {/* Second Image (half visible) */}
    <img
      src={horse} // <-- replace with actual image source
      className="h-[600px] w-[900px] ml-4 mt-10 object-cover"
      alt="Gallery Image 2"
    />
  </div>


     </div>








        

        
        </div>
      </div>
    </div>
  );
};

export default GallerySection;