import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Clients", to: "/#clients" },
    { name: "Testimonials", to: "/#testimonials" },
    { name: "Store", to: "/shop" },
    { name: "Gallery", to: "/work" },
    { name: "Contact", to: "/#socials" }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-full neue">
      {/* Desktop Navbar - With mix-blend-difference */}
      {!menuOpen && (
        <>
          {/* Desktop Version */}
          <nav className="hidden md:block fixed mix-blend-difference backdrop-blur-md transition-all duration-500 top-2 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] max-w-[112rem] rounded-lg px-8 z-[999999]">
            <div className="flex items-center justify-between py-3 relative z-[60]">
              {/* Left - Logo */}
              <a href="/" className="text-2xl font-[300] tracking-wide text-white">
                mangofx
              </a>

              {/* Center - Subtitle */}
              <div className="text-md font-[300] tracking-wide text-white absolute left-1/2 -translate-x-1/2">
                Thumbnail Designer
              </div>

              {/* Right - Links */}
              <div className="flex items-center gap-8 font-[300] text-white text-md tracking-wide">
                <Link
                  to="/"
                  smooth
                  className="hover:bg-white hover:text-black px-4 py-2 rounded-full transition duration-150"
                >
                  Home
                </Link>
                <Link
                  to="/work"
                  smooth
                  className="hover:bg-white hover:text-black px-4 py-2 rounded-full transition duration-150"
                >
                  Work
                </Link>

                <Link
                  to="/shop"
                  smooth
                  className="hover:bg-white hover:text-black px-4 py-2 rounded-full transition duration-150"
                >
                  Shop
                </Link>

                <Link
                  to="https://discord.com/users/767953235616202833"
                  smooth
                  className="group hover:bg-white hover:text-black px-4 py-2 rounded-full transition duration-150 flex items-center gap-2"
                >
                  Contact
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8 8"
                    className="w-3 h-3 stroke-current"
                    fill="none"
                  >
                    <path d="M7.822 0.063 L0.045 7.841" strokeWidth="0.84" />
                    <path d="M1.961 0.063 L7.823 0.063 L7.823 5.349" strokeWidth="1.64" strokeMiterlimit="10" />
                  </svg>
                </Link>

                <button
                  className="text-white text-md hover:bg-white hover:text-black py-2 px-4 cursor-pointer rounded-full"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle Menu"
                >
                  Menu
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Version - Without mix-blend-difference */}
          <nav className="md:hidden fixed backdrop-blur-md bg-black/90 border border-white/10 transition-all duration-500 top-2 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] rounded-lg px-6 z-[999999]">
            <div className="flex items-center justify-between py-3">
              {/* Left - Logo */}
              <a href="/" className="text-xl font-[300] tracking-wide text-white">
                mangofx
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="text-white text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </nav>
        </>
      )}

      {/* Fullscreen Overlay Menu - With Animation */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex flex-col">
          {/* Animated Radial Blur Background - Enhanced blur effect */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl transition-all duration-700 ease-out animate-fadeIn">
            {/* Radial gradient overlay for enhanced effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/80 animate-radialFade"></div>
          </div>
          
          {/* Content with Slide-in Animation */}
          <div className="relative z-10 flex flex-col h-full animate-slideUp">
            {/* Top Bar - Higher z-index to ensure visibility */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800/50 relative z-20">
              <div className="text-2xl font-[300] text-white">mangofx</div>
              <button
                className="text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Menu Links - Vertically centered on mobile, left aligned */}
            <div className="flex-1 flex items-center md:items-end md:mb-4 justify-start neue relative z-10 md:pt-20">
              <div className="w-full px-8 neue">
                <div className="space-y-2 w-full">
                  {menuItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-100/50 last:border-b-0 w-full animate-slideIn flex items-center justify-between"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Use HashLink for all items. smooth prop ensures smooth scroll when target is on same page.
                          HashLink also handles navigation to other routes with hashes. */}
                      <Link
                        to={item.to}
                        smooth
                        onClick={closeMenu}
                        className="block text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-[300] py-4 md:py-6 text-white hover:text-gray-300 transition-all duration-300 text-left hover:pl-4 flex-1"
                      >
                        {item.name}
                      </Link>

                      <span className="text-white text-xl md:text-2xl font-[300] pr-4">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
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