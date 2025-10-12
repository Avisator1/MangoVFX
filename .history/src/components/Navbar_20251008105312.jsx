import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Process",
    "Clients",
    "Impact",
    "Feedback",
    "Community",
    "Store",
    "Socials",
  ];

  return (
    <div className="w-full">
      <nav className="fixed mix-blend-difference neue backdrop-blur-md transition-transform duration-500 top-2 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-[112rem] rounded-lg px-8 z-[999999]">
        {/* Header */}
        <div className="flex items-center justify-between py-5 relative z-[60]">
          {/* Left - Logo */}
          <div className="text-2xl font-[500] tracking-wide text-white">
            mangofx
          </div>

          {/* Center - Subtitle */}
          <div className="hidden md:block text-md font-[500] tracking-wide text-white absolute left-1/2 -translate-x-1/2">
            Thumbnail Designer
          </div>

          {/* Right - Links */}
          <div className="hidden md:flex items-center gap-8 font-[500] text-white text-sm tracking-wide">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/work" className="hover:underline">
              Work
            </a>
            <a href="/shop" className="hover:underline">
              Shop
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <button
              className="text-white text-sm"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              Menu
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Fullscreen Overlay Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/90 text-white z-[99999] flex flex-col justify-center">
            {/* Top Section */}
            <div className="absolute top-10 left-8 text-xl font-[500]">
              mangofx
            </div>
            <button
              className="absolute top-10 right-10 text-sm uppercase text-gray-400 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              close
            </button>

            {/* Menu Links */}
            <div className="flex flex-col justify-center w-full max-w-6xl mx-auto px-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-5xl md:text-7xl font-[400] border-t border-gray-600 py-6 hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="border-t border-gray-600"></div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
