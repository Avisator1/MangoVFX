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
          <div className="flex items-center justify-between py-5 relative z-[60]">
            <div className="text-2xl font-[500] tracking-wide text-white">
              mangofx
            </div>
            <div className="hidden md:block text-md font-[500] tracking-wide text-white absolute left-1/2 -translate-x-1/2">
              Thumbnail Designer
            </div>
            <div className="hidden md:flex items-center gap-8 font-[500] text-white text-sm tracking-wide">
              <a href="/" className="hover:underline">Home</a>
              <a href="/work" className="hover:underline">Work</a>
              <a href="/shop" className="hover:underline">Shop</a>
              <button
                className="text-white text-sm hover:underline"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                Menu
              </button>
            </div>
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

      {/* Simple Menu - Just Clean Nav Links */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex flex-col">
          {/* Clean Background */}
          <div className="absolute inset-0 bg-white"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-8 py-6">
              <div className="text-2xl font-[500] text-gray-900">mangofx</div>
              <button
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Simple Nav Links */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-2xl mx-auto px-8">
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="block text-4xl md:text-5xl font-[400] py-3 text-gray-900 hover:text-[#e1794a] transition-colors duration-300 text-center"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
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