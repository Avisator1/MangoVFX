import React from 'react';
import { FaXTwitter, FaFacebookF, FaDribbble, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-20 px-6 md:px-12 lg:px-24 max-w-[110rem] mx-auto mb-10 mt-20 helvetica">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-lg text-neutral-400 mb-2">Let’s</p>
        <h2 className="text-5xl md:text-9xl text-white/90 leading-tight coolvetia-font">
          <span className="">Get in </span>
          <span className="libre-baskerville-regular-italic text-white">touch</span>
        </h2>

        {/* Email */}
        <div className="mt-8">
          <p className="text-xl md:text-2xl border-b border-neutral-600 inline-block pb-1">hello@joemcdavid.com</p>
        </div>

        {/* Socials */}
        <div className="mt-10 flex gap-4 text-neutral-300">
          <FaXTwitter className="text-xl hover:text-white cursor-pointer" />
          <FaFacebookF className="text-xl hover:text-white cursor-pointer" />
          <FaDribbble className="text-xl hover:text-white cursor-pointer" />
          <FaLinkedinIn className="text-xl hover:text-white cursor-pointer" />
          <FaInstagram className="text-xl hover:text-white cursor-pointer" />
        </div>

        {/* Bottom bar */}
        <div className="mt-20 border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 space-y-4 md:space-y-0">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Service</a>
            <a href="#" className="hover:text-white">Work</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <div className="text-white font-semibold">Joe McDavid</div>
          <div>+1 (555) 123-4567</div>
        </div>
      </div>
    </footer>
  );
}
