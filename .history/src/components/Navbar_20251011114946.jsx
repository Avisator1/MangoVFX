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
      {/* Main Navbar - Keep original */}
      {!menuOpen && (
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
              <FiMenu size={28} />
            </button>
          </div>
        </nav>
      )}

      {/* Clean Menu - Minimal enhancements */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex flex-col">
          {/* Simple background like original */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl">
            {/* Just a subtle orange accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e1794a] rounded-full blur-3xl opacity-10"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800/50 relative z-20">
              <div className="text-2xl font-[500] text-white">mangofx</div>
              <button
                className="text-white text-2xl hover:text-[#e1794a] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Menu Links - Just add orange hover states */}
            <div className="flex-1 flex items-center neue relative z-10">
              <div className="w-full max-w-6xl mx-auto px-8 neue">
                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-800/50 last:border-b-0"
                    >
                      <a
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="block text-4xl md:text-5xl lg:text-6xl xl:text-4xl font-[400] py-4 md:py-6 text-white hover:text-[#e1794a] transition-all duration-300 text-left"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </div>
                  ))}
                </div>

                {/* Simple contact section */}
                <div className="mt-16 pt-8 border-t border-gray-800/50">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-3 bg-[#e1794a] text-white px-6 py-4 rounded-lg hover:bg-[#d16a3b] transition-colors duration-300 neue font-[500]"
                    onClick={() => setMenuOpen(false)}
                  >
                    CONTACT ME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;