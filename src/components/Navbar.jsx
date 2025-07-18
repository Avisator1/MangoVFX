import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-[115rem]">
      <div className="fixed w-full bg-white/10 z-[999999] px-4">
        {/* Main Navbar Container */}
        <div className="max-w-[115rem] helvetica mx-auto h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="font-semibold text-lg coolvetia-font text-black">JM</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 helvetica font-[450] text-sm text-black items-center">
            <a href="#service" className="hover:underline">Service</a>
            <a href="#work" className="hover:underline">Work</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center text-sm text-black">+1 (678) 333-8925</div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black focus:outline-none flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 pb-6 flex flex-col space-y-6 helvetica font-[450] text-sm text-black">
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
