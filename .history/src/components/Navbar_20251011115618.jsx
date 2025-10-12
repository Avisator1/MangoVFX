import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full neue">
      {/* Main Navbar - Fixed visibility */}
      {!menuOpen && (
        <nav 
          className={`fixed transition-all duration-500 top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[112rem] rounded-2xl px-6 md:px-8 z-[999999] ${
            scrolled 
              ? "bg-white/95 backdrop-blur-md shadow-lg border border-white/20" 
              : "bg-black/95 backdrop-blur-md border border-gray-800/50"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between py-4 md:py-5 relative z-[60]">
            {/* Left - Logo */}
            <div className={`text-2xl font-[500] tracking-wide transition-colors ${
              scrolled ? "text-[#e1794a]" : "text-white"
            }`}>
              mangofx
            </div>

            {/* Center - Subtitle */}
            <div className={`hidden md:block text-md font-[500] tracking-wide absolute left-1/2 -translate-x-1/2 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}>
              Thumbnail Designer
            </div>

            {/* Right - Links */}
            <div className={`hidden md:flex items-center gap-8 font-[500] text-sm tracking-wide transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}>
              <a href="/" className="hover:text-[#e1794a] transition-colors duration-300">
                Home
              </a>
              <a href="/work" className="hover:text-[#e1794a] transition-colors duration-300">
                Work
              </a>
              <a href="/shop" className="hover:text-[#e1794a] transition-colors duration-300">
                Shop
              </a>
              <button
                className="hover:text-[#e1794a] transition-colors duration-300 group"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                <span className="flex items-center gap-2">
                  Menu
                  <div className="w-1 h-1 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden text-2xl z-[60] transition-colors ${
                scrolled ? "text-[#e1794a]" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </nav>
      )}

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex flex-col overflow-hidden">
          {/* Solid background for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-[#1a0f0b]">
            {/* Animated overlay pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e1794a] rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e1794a] rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-gray-700/50">
              <div className="text-2xl font-[500] text-white">mangofx</div>
              <button
                className="text-white text-2xl hover:text-[#e1794a] transition-colors duration-300 p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-4xl mx-auto px-6 md:px-8">
                <div className="space-y-2 md:space-y-4">
                  {menuItems.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden">
                      <a
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="block relative py-4 md:py-6 text-white hover:text-[#e1794a] transition-all duration-300 ease-out group"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="relative text-3xl md:text-5xl lg:text-6xl font-[400] tracking-tight">
                          {item}
                        </span>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xl md:text-2xl text-gray-500 group-hover:text-[#e1794a] transition-colors duration-300">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </a>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-[#e1794a] transition-all duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Footer section */}
                <div className="mt-16 pt-8 border-t border-gray-700/50">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <p className="text-gray-400 neue text-lg mb-2">Ready to transform your visuals?</p>
                      <a 
                        href="#contact" 
                        className="inline-flex items-center gap-3 bg-[#e1794a] text-white px-6 py-3 rounded-lg hover:bg-[#d16a3b] transition-colors duration-300 neue font-[500]"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>Start a Project</span>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </a>
                    </div>
                    
                    <div className="flex gap-6">
                      <a href="#" className="text-gray-400 hover:text-[#e1794a] transition-colors duration-300">Instagram</a>
                      <a href="#" className="text-gray-400 hover:text-[#e1794a] transition-colors duration-300">Twitter</a>
                      <a href="#" className="text-gray-400 hover:text-[#e1794a] transition-colors duration-300">YouTube</a>
                    </div>
                  </div>
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