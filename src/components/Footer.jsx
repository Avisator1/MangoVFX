import React from "react";
import { ScreenFitText } from "./ScreenToText";

const Footer = () => {
  return (
    <footer className="bg-white neue text-black w-full relative z-10">
      <div className="max-w-[112rem] mx-auto px-6 md:px-8">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start py-8 md:py-10 text-xs md:text-sm font-medium uppercase tracking-wide">
          {/* Far Left */}
          <div className="min-w-[120px] md:min-w-[150px] mb-4 md:mb-0">
            <p className="mb-2 md:mb-3">Mango</p>
            <p>Thumbnail Artist</p>
          </div>

          {/* Middle - Spaced evenly */}
          <div className="flex justify-center flex-1 px-0 md:px-8 gap-4 md:gap-16 my-4 md:my-0">
            {/* Empty middle section as per original */}
          </div>

          {/* Far Right */}
          <div className="min-w-[120px] md:min-w-[150px] text-left md:text-right mt-4 md:mt-0">
            <p className="mb-2 md:mb-3">Home</p>
            <div className="space-y-1">
              <p className="cursor-pointer hover:opacity-80 transition">Work</p>
              <p className="cursor-pointer hover:opacity-80 transition">Contact</p>
            </div>
          </div>
        </div>

        {/* BIG TEXT */}
        <div className="py-4 md:py-6">
          <ScreenFitText>
            MANGO
          </ScreenFitText>
        </div>

        {/* Bottom Row */}
        <div className="w-full py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm font-medium uppercase text-black/80 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <p>Over</p>
            <p>250</p>
            <p>Orders</p>
            <p>Completed</p>
          </div>

          <p>© 2025 Mango</p>

          <div className="flex gap-3 md:gap-6">
            <p className="cursor-pointer hover:opacity-80 transition">Terms</p>
            <p className="cursor-pointer hover:opacity-80 transition">Privacy</p>
          </div>

          <p className="cursor-pointer hover:opacity-80 transition">Mango Studios</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;