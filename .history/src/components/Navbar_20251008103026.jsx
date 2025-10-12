import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="fixed mix-blend-difference neue backdrop-blur-md transition-transform duration-500 top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-[112rem] bg-white/3 rounded-lg px-8 z-[999999]">
        {/* Header with Logo, Center Text, and Navigation */}
        <div className="flex items-center justify-between py-6 relative z-[60]">
          {/* Left - Logo */}
          <div className="text-2xl font-[500] tracking-wide text-white">
            mangofx
          </div>

          {/* Center - Thumbnail Designer */}
          <div className="hidden md:block text-lg font-[500] tracking-wide text-white absolute left-1/2 -translate-x-1/2">
            Thumbnail Designer
          </div>

          {/* Right - Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-[500] text-white text-2xl tracking-wide">
            <a href="/" className="hover:underline lowercase">home</a>
            <a href="/work" className="hover:underline lowercase">work</a>
            <a href="/shop" className="hover:underline lowercase">shop</a>
            <a href="#" className="hover:underline lowercase">contact</a>
            <button
              className="text-white text-2xl lowercase"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              menu
            </button>
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
                className="block py-4 text-2xl uppercase hover:underline lowercase"
                onClick={() => setMenuOpen(false)}
              >
                home
              </a>
              <a 
                href="/work" 
                className="block py-4 text-2xl uppercase hover:underline lowercase"
                onClick={() => setMenuOpen(false)}
              >
                work
              </a>
              <a 
                href="/shop" 
                className="block py-4 text-2xl uppercase hover:underline lowercase"
                onClick={() => setMenuOpen(false)}
              >
                shop
              </a>
              <a 
                href="#" 
                className="block py-4 text-2xl uppercase hover:underline lowercase"
                onClick={() => setMenuOpen(false)}
              >
                contact
              </a>
            </div>
            
            <div className="mt-auto pb-12">
              <div className="text-lg font-[500] tracking-wide text-black py-4">
                Thumbnail Designer
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;