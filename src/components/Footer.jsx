import React from "react";
import logo from "../assets/images/footer/shiny.png";
import _ from "../assets/images/footer/_.png"

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white max-w-[115rem] mx-auto mb-20 mt-20">
      {/* Top Section */}
      <div className="pt-12 relative z-10 px-8">
        <div className="flex flex-col items-start gap-6 coolvetia-font" style={{ fontSize: 'clamp(2rem, 6vw, 64px)' }}>
          {/* Let's Work and Email */}
          <div>
            <h2 className="mb-2">Let’s Work</h2>
            <a
              href="mailto:hello@joemcdavid.com"
              className="hover:underline block"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 65px)' }}
            >
              Hello@joemcdavid.com
            </a>
          </div>

          {/* Links Section now underneath */}
          <div
            className="grid grid-cols-2 gap-x-16 gap-y-4 mt-6"
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 14px)' }}
          >
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Work</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Linkedin</a>
              <a href="#" className="hover:underline">Dribble</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Infinite Scrolling Text */}
      <div className="relative overflow-hidden text-white w-full h-[15vw] flex items-center">
        <div className="absolute top-0 left-0 whitespace-nowrap animate-infinite-scroll leading-none font-[400] coolvetia-font" style={{ fontSize: '15vw' }}>
          {"JOE MCDAVID  ".repeat(50)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
