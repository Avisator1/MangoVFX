import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-[115rem]">
      <div className="fixed w-full px-4 z-[999999] mix-blend-difference transition-transform duration-500">
        {/* Main Navbar Container */}
        <div className="max-w-[115rem] coolvetia-font mx-auto h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="text-[24px] coolvetia-font text-white">JM</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 coolvetia-font font-[450] text-[24px] text-white items-center">
            <a href="#service" className="hover:underline">HOME</a>
            <a href="#work" className="hover:underline opacity-75">WORK</a>
            <a href="#contact" className="hover:underline opacity-75">SERVICE</a>
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center text-[24px] opacity-75 text-white">CONTACT</div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 pb-6 flex flex-col space-y-6 coolvetia-font font-[450] text-sm text-black">
            <a 
              href="#service" 
              className="hover:underline pt-2"
              onClick={() => setIsOpen(false)}
            >
              Service
            </a>
            <a 
              href="#work" 
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="text-sm text-black pt-4 border-t border-gray-200">
              +1 (678) 333-8925
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
