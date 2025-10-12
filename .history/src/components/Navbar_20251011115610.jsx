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

      {/* Modern UI/UX Focused Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex flex-col">
          {/* Clean White Background */}
          <div className="absolute inset-0 bg-white backdrop-blur-sm">
            {/* Subtle Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.03)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top Bar - Clean and Minimal */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
              <div className="text-2xl font-[500] text-gray-900">mangofx</div>
              <button
                className="text-gray-600 hover:text-[#e1794a] transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Main Menu Grid */}
            <div className="flex-1 flex items-center">
              <div className="w-full max-w-6xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Navigation Column */}
                  <div className="space-y-2">
                    <p className="text-gray-500 neue text-sm font-[500] mb-6 uppercase tracking-wide">Navigation</p>
                    {menuItems.slice(0, 6).map((item, index) => (
                      <a
                        key={index}
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="block text-2xl lg:text-3xl font-[400] py-3 text-gray-900 hover:text-[#e1794a] transition-all duration-300 hover:translate-x-2 group"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#e1794a] group-hover:scale-125 transition-all duration-300"></span>
                          {item}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Additional Links Column */}
                  <div className="space-y-2">
                    <p className="text-gray-500 neue text-sm font-[500] mb-6 uppercase tracking-wide">More</p>
                    {menuItems.slice(6).map((item, index) => (
                      <a
                        key={index}
                        href={`/${item.toLowerCase()}`}
                        className="block text-2xl lg:text-3xl font-[400] py-3 text-gray-900 hover:text-[#e1794a] transition-all duration-300 hover:translate-x-2 group"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#e1794a] group-hover:scale-125 transition-all duration-300"></span>
                          {item}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Contact CTA Column */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-500 neue text-sm font-[500] mb-4 uppercase tracking-wide">Get Started</p>
                      <p className="text-gray-700 neue text-lg mb-6 leading-relaxed">
                        Ready to transform your visuals with attention-grabbing thumbnails?
                      </p>
                      <a 
                        href="#contact" 
                        className="inline-flex items-center gap-4 bg-[#e1794a] text-white px-8 py-4 rounded-lg hover:bg-[#d16a3b] transition-all duration-300 neue font-[500] shadow-lg hover:shadow-xl group"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>Start a Project</span>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14m-7-7l7 7-7 7"/>
                          </svg>
                        </div>
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-gray-500 neue text-sm font-[500] mb-4 uppercase tracking-wide">Follow</p>
                      <div className="flex gap-6">
                        {['Instagram', 'Twitter', 'YouTube'].map((platform) => (
                          <a
                            key={platform}
                            href="#"
                            className="text-gray-600 hover:text-[#e1794a] transition-colors duration-300 neue text-sm font-[500]"
                          >
                            {platform}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="border-t border-gray-100 px-8 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 neue text-sm">© 2024 Mango Effects. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="/privacy" className="text-gray-500 hover:text-gray-700 neue text-sm transition-colors">Privacy</a>
                  <a href="/terms" className="text-gray-500 hover:text-gray-700 neue text-sm transition-colors">Terms</a>
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