import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Services", "Work", "Blog", "Contact"];

  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 w-full z-[9999] px-6 py-5 flex justify-between items-center mix-blend-difference">
        {/* Logo */}
        <div className="text-white text-xl font-light tracking-wide">
          mint<span className="italic">lane.</span>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:underline"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 text-white z-[9998] flex flex-col justify-center items-center">
          <div className="absolute top-10 left-6 text-lg font-light">
            mint<span className="italic">lane.</span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-10 right-8 text-sm uppercase text-gray-400 hover:text-white transition"
          >
            close
          </button>

          <div className="w-full max-w-5xl px-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-5xl md:text-7xl font-light border-t border-gray-500 py-6 tracking-tight text-center hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="border-t border-gray-500"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
