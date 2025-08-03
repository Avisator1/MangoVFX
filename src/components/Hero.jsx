import React, { useEffect, useState, useRef } from "react";
import mango from "../assets/images/resize.gif";

function Hero() {
  const [scale, setScale] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const textSectionRef = useRef(null);
  const [animation, setAnimation] = useState({
    isSticky: false,
    wordOpacities: Array(30).fill(0.3),
    animationStarted: false,
    sectionVisible: false
  });

  const animationRef = useRef(animation);

  useEffect(() => {
    animationRef.current = animation;
  }, [animation]);

  const words =
    "I'M A US-BASED GRAPHICS DESIGNER WITH EXTENSIVE EXPERIENCE IN MINECRAFT DESIGNS AND HAVE COMPLETED OVER 250 ORDERS.".split(" ");

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const MAX_SCALE = 2.5;
    const MAX_SCROLL = isMobile ? windowHeight * 0.5 : windowHeight * 3;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      if (!isMobile) {
        const progress = Math.min(y / MAX_SCROLL, 1);
        const clampedScale = 1 + progress * (MAX_SCALE - 1);
        setScale(clampedScale);
      }

      if (textSectionRef.current) {
        const rect = textSectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionInView = rect.top < viewportHeight && rect.bottom > 0;

        let newOpacities = [...animationRef.current.wordOpacities];
        let isSticky = animationRef.current.isSticky;
        let animationStarted = animationRef.current.animationStarted;
        let sectionVisible = animationRef.current.sectionVisible;

        if (sectionInView) {
          sectionVisible = true;
          isSticky = true;
          animationStarted = true;

          const scrollProgressRaw = 1 - rect.bottom / (viewportHeight + rect.height);
          const scrollProgress = Math.min(Math.max(scrollProgressRaw, 0), 1);
          const textSectionHeight = rect.height;
          const scrolledThrough = viewportHeight - rect.top;
          const sectionProgress = Math.min(scrolledThrough / textSectionHeight, 1);
          const progressPerWord = 1 / words.length;

          newOpacities = words.map((_, index) => {
            const wordStart = index * progressPerWord;
            const wordEnd = (index + 1) * progressPerWord;

            if (sectionProgress >= wordEnd) {
              return 1;
            } else if (sectionProgress >= wordStart) {
              const wordProgress = (sectionProgress - wordStart) / progressPerWord;
              return 0.3 + 0.7 * wordProgress;
            } else {
              return 0.3;
            }
          });
        } else if (rect.bottom < 0) {
          const allWordsVisible = newOpacities.every(opacity => opacity >= 1);
          if (allWordsVisible) {
            isSticky = false;
            animationStarted = false;
            sectionVisible = false;
          } else {
            newOpacities = Array(words.length).fill(1);
            isSticky = true;
            animationStarted = true;
            sectionVisible = true;
          }
        }

        setAnimation({
          isSticky,
          wordOpacities: newOpacities,
          animationStarted,
          sectionVisible
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowHeight, isMobile, words.length]);

  const fadeOutStart = isMobile ? windowHeight * 1.5 : windowHeight * 4;

  return (
    <>
      {/* Hero Section */}
      <div className="">
        <div
          className={`max-w-[112rem] mx-auto px-4 ${
            isMobile ? "relative h-screen" : "fixed inset-0"
          } bg-white z-10 overflow-hidden flex items-center justify-center`}
          style={{
            opacity: scrollY > fadeOutStart ? 0 : 1,
            transition: "opacity 300ms ease",
            pointerEvents: scrollY > fadeOutStart ? "none" : "auto",
          }}
        >
          {isMobile ? (
            <div className="w-full h-full flex flex-col items-center justify-center px-4">
              <h1 className="text-[15vw] neue font-[500] leading-none tracking-tight mb-4">
                MANGO
              </h1>
              <div className="w-full max-w-[400px] aspect-[16/9] my-4">
                <img src={mango} alt="Visual" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-[15vw] neue font-[500] leading-none tracking-tight mt-4">
                EFFECTS
              </h2>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Container for image and text positioning */}
              <div className="relative flex items-center justify-center">
                {/* Image */}
                <div
                  className="relative"
                  style={{
                    width: isTablet ? "500px" : "min(40vw, 800px)",
                    height: isTablet ? "281px" : "min(22.5vw, 450px)", // 16:9 aspect ratio
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                    transition: "transform 75ms ease-out, opacity 300ms ease",
                    opacity: scrollY > fadeOutStart ? 0 : 1,
                    zIndex: 20,
                  }}
                >
                  <img src={mango} alt="Visual" className="w-full h-full object-cover" />
                </div>

                {/* MANGO text - positioned relative to image */}
                <h1
                  className={`absolute neue font-[500] leading-none tracking-tight ${
                    isTablet ? "text-[160px]" : "text-[min(12vw,300px)]"
                  }`}
                  style={{
                    top: "-25%", // moved down a bit from -35%
                    right: "45%", // end of MANGO text aligns with just past the image center
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                >
                  MANGO
                </h1>

                {/* EFFECTS text - positioned relative to image */}
                <h2
                  className={`absolute neue font-[500] leading-none tracking-tight ${
                    isTablet ? "text-[160px]" : "text-[min(12vw,300px)]"
                  }`}
                  style={{
                    bottom: "-25%", // moved up a bit from -35%
                    left: "45%", // start of EFFECTS text aligns with just past the image center
                    transform: "translateY(50%)",
                    zIndex: 10,
                  }}
                >
                  EFFECTS
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isMobile && <div className="relative z-0 h-[400vh] bg-white"></div>}

      {/* Text Reveal Section */}
      <div
        className="text-reveal-section bg-white"
        ref={textSectionRef}
        style={{
          position: animation.isSticky ? "sticky" : "relative",
          top: 0,
          zIndex: 20,
          opacity: animation.sectionVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="w-full min-h-screen bg-black flex justify-between items-center px-4 md:px-8">
          <div className="max-w-[112rem] mx-auto w-full flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="neue text-2xl font-[500] text-white mb-3">01. ABOUT ME</p>
              <p className="text-4xl md:text-6xl neue text-left text-white leading-relaxed flex flex-wrap gap-x-2 max-w-6xl">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="transition-all duration-300 text-white inline-block neue font-[500]"
                    style={{
                      color: `rgba(255,255,255,${animation.wordOpacities[index] ?? 0.3})`,
                    }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            <div className="self-end mb-[0.75rem] mt-8 md:mt-0">
              <a className="bg-white text-black px-6 py-4 md:px-4 md:py-3 neue font-[500] cursor-pointer">
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;