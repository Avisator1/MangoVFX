import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    'Home',
    'About',
    'Process',
    'Clients',
    'Impact',
    'Feedback',
    'Community',
    'Store',
    'Socials'
  ];

  return (
    <div className="w-full">
      <nav className="fixed mix-blend-difference neue backdrop-blur-md transition-transform duration-500 top-2 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-[112rem] rounded-lg px-8 z-[999999]">
        {/* Header with Logo, Center Text, and Navigation */}
        <div className="flex items-center justify-between py-5 relative z-[60]">
          {/* Left - Logo */}
          <div className="text-2xl font-[500] tracking-wide text-white">
            mangofx
          </div>

          {/* Center - Thumbnail Designer */}
          <div className="hidden md:block text-md font-[500] tracking-wide text-white absolute left-1/2 -translate-x-1/2">
            Thumbnail Designer
          </div>

          {/* Right - Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-[500] text-white text-sm tracking-wide">
            <a href="/" className="hover:underline">Home</a>
            <a href="/work" className="hover:underline ">Work</a>
            <a href="/shop" className="hover:underline ">Shop</a>
            <a href="#" className="hover:underline ">Contact</a>
            <button
              className="text-white text-sm"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              Menu
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

        {/* Full Screen Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl px-6">
              {/* Menu Items */}
              <div className="space-y-4 md:space-y-6">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="block text-4xl md:text-6xl lg:text-7xl font-bold text-black hover:text-gray-700 transition-colors duration-300 text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              {/* Footer Section */}
              <div className="mt-16 md:mt-24 text-center">
                <div className="text-xl md:text-2xl font-[500] tracking-wide text-gray-600">
                  Thumbnail Designer
                </div>
                <div className="mt-4 text-lg text-gray-500">
                  mangofx © {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;