import React from "react";
import { ScreenWhite } from "./ScreenWhite";

const Footer = () => {
  return (
    <footer className="bg-black neue text-white w-full relative z-10">
      <div className="max-w-[112rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-between items-start py-10 text-xs sm:text-sm font-medium uppercase tracking-wide">
          <div className="min-w-[150px]">
            <p className="mb-2 sm:mb-3">Mango</p>
            <p>Thumbnail Artist</p>
          </div>

          <div className="flex justify-center flex-1 px-8 gap-8 sm:gap-16">


          </div>

          <div className="min-w-[150px] text-right text-white">
            <p className="mb-2 sm:mb-3">Home</p>
            <div className="space-y-1">
              <p className="cursor-pointer hover:opacity-80 transition">Work</p>
              <p className="cursor-pointer hover:opacity-80 transition">Contact</p>
            </div>
          </div>
        </div>

        {/* BIG TEXT */}
        <div className="py-4 sm:py-6">
          <ScreenWhite>
            MANGO
          </ScreenWhite>
        </div>

        {/* Bottom Row */}
        <div className="w-full py-6 sm:py-8 flex flex-col sm:flex-row text-white justify-between items-center gap-4 text-xs sm:text-sm font-medium uppercase text-black/80 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <p>Over</p>
            <p>250</p>
            <p>Orders</p>
            <p>Completed</p>
          </div>

          <p>© 2025 Mango</p>

          <div className="flex gap-4 sm:gap-6 text-white">
            <p className="cursor-pointer hover:opacity-80 transition">Terms</p>
            <p className="cursor-pointer hover:opacity-80 transition">Privacy</p>
          </div>

          <p className="cursor-pointer hover:opacity-80 text-white transition">Mango Studios</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;