import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
      handle: "@yourusername",
      url: "https://discord.gg/yourinvite",
      description: "Join our creative community for real-time chats, feedback, and exclusive content",
      icon: "💬",
      color: "#5865F2"
    },
    {
      platform: "YouTube",
      handle: "@yourchannel",
      url: "https://youtube.com/yourchannel",
      description: "Tutorials, behind-the-scenes, and visual effect breakdowns",
      icon: "🎥",
      color: "#FF0000"
    },
    {
      platform: "Twitter",
      handle: "@yourhandle",
      url: "https://twitter.com/yourhandle",
      description: "Daily updates, quick tips, and industry insights",
      icon: "🐦",
      color: "#1DA1F2"
    },
    {
      platform: "Behance",
      handle: "yourprofile",
      url: "https://behance.net/yourprofile",
      description: "Full project case studies and portfolio work",
      icon: "🎨",
      color: "#1769FF"
    }
  ];

  return (
    <div 
      className="relative bg-black text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative number (scroll-linked) */}
      <motion.div 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-0"
        style={{ y, opacity }}
      >
        <p className="neue text-[30vw] text-right md:text-[25vw] font-[500] text-white/10 leading-none">
          07
        </p>
      </motion.div>

      {/* Content container */}
      <div className="relative max-w-[112rem] mx-auto px-4 py-32 md:py-48 min-h-[100vh] flex flex-col justify-between z-10">
        {/* Header section (sticky) */}
        <div className="sticky top-0 pt-32 pb-16">
          <div className="">
            <p className="neue text-xl md:text-2xl font-[500] text-right">07. CONNECT</p>
            <h1 className="neue text-[12vw] md:text-[10vw] font-[500] leading-none tracking-tight text-right">
              SOCIAL<br/>MEDIA
            </h1>
          </div>
        </div>

        {/* Main content - single column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-32">
          {/* Left column - intro text */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="neue text-4xl md:text-6xl font-[500] tracking-tight mb-8">
              Stay Connected
            </h2>
            <p className="neue text-xl md:text-2xl leading-relaxed opacity-90">
              Follow across platforms for different types of content, updates, 
              and behind-the-scenes looks at my creative process.
            </p>
          </motion.div>

          {/* Right column - social links */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl backdrop-blur-sm">
              <h3 className="neue text-3xl md:text-4xl font-[500] mb-8 tracking-tight">
                Let's create together
              </h3>
              
              <p className="neue text-xl mb-12 leading-relaxed opacity-90">
                Each platform offers unique content and ways to engage. 
                Pick your favorite or follow everywhere for the full experience.
              </p>

              <div className="space-y-6">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ 
                      x: 10,
                      backgroundColor: `${social.color}15` // subtle color tint
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-3xl">{social.icon}</span>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
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
                    <motion.div className="flex items-center gap-4">
                      <motion.div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: social.color }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      />
                      <motion.span
                        className="text-2xl"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              <p className="neue text-lg mt-12 opacity-70 text-center border-t border-white/10 pt-8">
                Choose your platform · Regular updates · Creative community
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer spacer */}
      <div className="h-20 md:h-32 bg-black"></div>
    </div>
  );
};

export default SocialMediaSection;