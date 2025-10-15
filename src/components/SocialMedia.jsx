import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDiscord, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa';

const SocialMediaSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const socialLinks = [
    {
      platform: "Discord",
      handle: "@mangofx",
      url: "https://discord.com/users/767953235616202833",
      description: "DM for thumbnail inquiries or general questions",
      icon: <FaDiscord size={28} />,
      color: "#5865F2",
    },
    {
      platform: "Instagram",
      handle: "@actuallymangofx",
      url: "https://www.instagram.com/actuallymangofx/",
      description: "Daily updates, quick tips, and visual effect breakdowns",
      icon: <FaInstagram size={28} />,
      color: "#E1306C"
    },
    {
      platform: "Twitter",
      handle: "@realmangofx",
      url: "https://x.com/realmangofx",
      description: "Daily updates, quick tips, and visual effect breakdowns",
      icon: <FaTwitter size={28} />,
      color: "#1DA1F2"
    },
    {
      platform: "Behance",
      handle: "mango_fx",
      url: "https://www.behance.net/mango_fx",
      description: "Full portfolio featuring all my work",
      icon: <FaBehance size={28} />,
      color: "#1769FF"
    }
  ];

  const handleSocialClick = (social) => {
    if (social.url) {
      window.open(social.url, '_blank', 'noopener,noreferrer');
    } else if (social.onClick) {
      social.onClick();
    }
  };

  return (
    <div 
      className="relative bg-black text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Scroll-linked number */}
      <motion.div 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-0"
        style={{ y, opacity }}
      >
        <p className="neue text-[30vw] text-right md:text-[25vw] font-[500] text-white/10 leading-none">
          08
        </p>
      </motion.div>

      <div className="relative max-w-[112rem] mx-auto px-4 py-32 md:py-48 min-h-[100vh] flex flex-col justify-center z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="neue text-xl md:text-2xl font-[500] text-right">07. CONNECT</p>
          <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight text-right">
            SOCIAL<br/>MEDIA
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          {/* Intro */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="neue text-4xl md:text-6xl font-[500] tracking-tight">
              Stay Connected
            </h2>
            <p className="neue text-xl md:text-2xl leading-relaxed opacity-90">
              Follow across platforms for different types of content, updates, 
              and behind-the-scenes looks at my creative process.
            </p>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl mt-12">
              <h3 className="neue text-2xl md:text-3xl font-[500] mb-4">
                Let's create together
              </h3>
              <p className="neue text-lg opacity-90 leading-relaxed">
                If you'd like to commission a thumbnail, please DM me on Discord. Follow me on my socials for thumbnail-related content. 
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-6 p-6 border-b border-white/10 hover:border-white/30 group transition-all duration-300 cursor-pointer"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialClick(social)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSocialClick(social);
                  }
                }}
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-3xl">{social.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="neue text-xl md:text-2xl font-[500]">
                        {social.platform}
                      </p>
                      <span className="text-sm opacity-50">
                        {social.handle}
                      </span>
                    </div>
                    <p className="neue text-lg opacity-70 leading-relaxed">
                      {social.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: social.color }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <motion.span
                    className="text-xl"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="h-20 md:h-32 bg-black"></div>
    </div>
  );
};

export default SocialMediaSection;
