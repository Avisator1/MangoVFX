import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="fixed mix-blend-difference neue backdrop-blur-md transition-transform duration-500 top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-[112rem] bg-white/5 rounded-md px-8 z-[999999]">
        {/* Header with Logo and Button - Always visible */}
        <div className="flex items-center justify-between py-6 relative z-[60]">
          <div className="text-2xl font-semibold tracking-wide text-white">
            MANGOFX
          </div>

          {/* Desktop Nav Links - UNTOUCHED */}
          <div className="hidden md:flex items-center gap-8 font-[500] text-white text-sm uppercase">
            <a href="/" className="hover:underline">HOME</a>
            <a href="/work" className="hover:underline">WORK</a>
            <a href="/shop" className="hover:underline">SHOP</a>
            <a href="#" className="font-bold underline text-sm flex items-center gap-1 ml-20">
              <span className="-rotate-45 inline-block">↘</span> Contact
            </a>
          </div>

          {/* Mobile Menu Button - Always visible */}
          <button
            className="md:hidden text-white text-2xl z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay - Appears below header */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 pt-32 px-6 flex flex-col">
            <div className="border-t border-black/10 pt-6">
              <a 
                href="/" 
                className="block py-4 text-2xl uppercase hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </a>
              <a 
                href="/work" 
                className="block py-4 text-2xl uppercase hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                WORK
              </a>
              <a 
                href="/shop" 
                className="block py-4 text-2xl uppercase hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                SHOP
              </a>
            </div>
            
            <div className="mt-auto pb-12">
              <a 
                href="#" 
                className="font-bold text-2xl uppercase underline flex items-center gap-2 py-4"
                onClick={() => setMenuOpen(false)}
              >
                <span className="-rotate-45 inline-block">↘</span> CONTACT
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;