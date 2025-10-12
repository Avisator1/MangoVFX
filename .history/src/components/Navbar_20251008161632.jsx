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
    <div className="w-full neue">
      {/* Main Navbar */}
      <nav className="fixed mix-blend-difference backdrop-blur-md transition-all duration-500 top-2 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-[112rem] rounded-lg px-8 z-[999999]">
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
              className="text-white text-sm hover:underline"
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
      </nav>

      {/* Fullscreen Overlay Menu - Improved Design */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-[999998] flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
            <div className="text-2xl font-[500] text-white font-sans">mangofx</div>
            <button
              className="text-white text-2xl hover:text-gray-300 transition-colors font-sans"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <FiX size={28} />
            </button>
          </div>

          {/* Menu Links - Left Aligned with Borders */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-6xl mx-auto px-8">
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-800 last:border-b-0">
                    <a
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[400] py-4 md:py-6 text-white hover:text-gray-300 transition-all duration-300 text-left font-sans hover:pl-4"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 px-8 py-6">
            <div className="max-w-6xl mx-auto">
              <p className="text-gray-400 text-sm font-sans">
                Professional Thumbnail Design Services
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;