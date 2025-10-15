import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Design Process",
    "Clients", 
    "Testimonials",
    "Store",
  ];

  return (
    <div className="w-full neue">
      {/* Main Navbar - Completely hidden when menu is open */}
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
              <a href="/" className="hover:bg-white hover:text-black px-2 py-2 rounded-xl transition duration-150">
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
              <FiMenu size={28} />
            </button>
          </div>
        </nav>
      )}

      {/* Fullscreen Overlay Menu - With Animation */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex flex-col">
          {/* Animated Radial Blur Background */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl transition-all duration-700 ease-out animate-fadeIn">
            {/* Radial gradient overlay for enhanced effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/80 animate-radialFade"></div>
          </div>
          
          {/* Content with Slide-in Animation */}
          <div className="relative z-10 flex flex-col h-full animate-slideUp">
            {/* Top Bar - Higher z-index to ensure visibility */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800/50 relative z-20">
              <div className="text-2xl font-[500] text-white">mangofx</div>
              <button
                className="text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Menu Links with Staggered Animation - Left Aligned */}
            <div className="flex-1 flex items-start neue relative z-10 pt-20">
              <div className="w-full max-w-6xl mx-auto px-8 neue">
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-100/50 last:border-b-0 animate-slideIn"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <a
                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[400] py-4 md:py-6 text-white hover:text-gray-300 transition-all duration-300 text-left hover:pl-4"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes radialFade {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-radialFade {
          animation: radialFade 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Navbar;