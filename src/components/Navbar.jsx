import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#dddddd]">
      <div className="max-w-[110rem] helvetica mx-auto px-6 py-4 bg-white flex items-center justify-between">
        {/* Left: Logo */}
        <div className="font-semibold text-lg coolvetia-font text-black">JM</div>

        {/* Center: Nav Links */}
        <div className="flex space-x-8 helvetica font-[450] text-sm text-black">
          <a href="#service" className="hover:underline">Service</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Right: Phone Number */}
        <div className="text-sm text-black">+1 (678) 333-8925</div>
      </div>
    </nav>
  );
};

export default Navbar;
