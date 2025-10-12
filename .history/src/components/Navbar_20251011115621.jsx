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
      {/* Main Navbar - Enhanced to match theme */}
      {!menuOpen && (
        <nav 
          className={`fixed transition-all duration-500 top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[112rem] rounded-2xl px-6 md:px-8 z-[999999] ${
            scrolled 
              ? "bg-white/90 backdrop-blur-md shadow-lg border border-white/20" 
              : "bg-transparent"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between py-4 md:py-5 relative z-[60]">
            {/* Left - Logo with theme colors */}
            <div className={`text-2xl font-[500] tracking-wide transition-colors ${
              scrolled ? "text-[#e1794a]" : "text-white mix-blend-difference"
            }`}>
              mangofx
            </div>

            {/* Center - Subtitle */}
            <div className={`hidden md:block text-md font-[500] tracking-wide absolute left-1/2 -translate-x-1/2 transition-colors ${
              scrolled ? "text-gray-700" : "text-white mix-blend-difference"
            }`}>
              Thumbnail Designer
            </div>

            {/* Right - Links */}
            <div className={`hidden md:flex items-center gap-8 font-[500] text-sm tracking-wide transition-colors ${
              scrolled ? "text-gray-700" : "text-white mix-blend-difference"
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
                scrolled ? "text-[#e1794a]" : "text-white mix-blend-difference"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </nav>
      )}

      {/* Enhanced Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex flex-col overflow-hidden">
          {/* Animated Gradient Background matching hero theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-[#1a0f0b]">
            {/* Animated overlay pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e1794a] rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e1794a] rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(#e1794a 1px, transparent 1px),
                                linear-gradient(90deg, #e1794a 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            ></div>
          </div>
          
          {/* Content with Enhanced Animation */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top Bar - Enhanced styling */}
            <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-gray-700/50 relative z-20">
              <div className="text-2xl font-[500] text-white">mangofx</div>
              <button
                className="text-white text-2xl hover:text-[#e1794a] transition-colors duration-300 group p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FiX size={28} />
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Enhanced Menu Links */}
            <div className="flex-1 flex items-center justify-center neue relative z-10">
              <div className="w-full max-w-4xl mx-auto px-6 md:px-8">
                <div className="space-y-2 md:space-y-4">
                  {menuItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="group relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-1/2 w-2 h-2 bg-[#e1794a] rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100"></div>
                      
                      <a
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="block relative py-4 md:py-6 text-white hover:text-[#e1794a] transition-all duration-500 ease-out transform hover:translate-x-8 group"
                        onClick={() => setMenuOpen(false)}
                      >
                        {/* Background hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e1794a]/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Main text */}
                        <span className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[400] tracking-tight">
                          {item}
                        </span>
                        
                        {/* Number indicator */}
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl md:text-3xl text-gray-500 group-hover:text-[#e1794a] transition-colors duration-300 opacity-60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </a>
                      
                      {/* Bottom border */}
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-[#e1794a] transition-all duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Footer section with contact/socials */}
                <div className="mt-16 pt-8 border-t border-gray-700/50">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <p className="text-gray-400 neue text-lg mb-2">Ready to transform your visuals?</p>
                      <a 
                        href="#contact" 
                        className="inline-flex items-center gap-3 bg-[#e1794a] text-white px-6 py-3 rounded-lg hover:bg-[#d16a3b] transition-colors duration-300 neue font-[500] group"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>Start a Project</span>
                        <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
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