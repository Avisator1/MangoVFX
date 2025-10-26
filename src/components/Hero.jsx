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
    "I design visuals that demand attention, spark curiosity, and fuel growth for creators who defy the ordinary.".split(" ");

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
    if (isMobile || isTablet) return;

    const MAX_SCALE = 2.5;
    const MAX_SCROLL = isMobile ? windowHeight * 0.3 : windowHeight * 1.5;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      const progress = Math.min(y / MAX_SCROLL, 1);
      const clampedScale = 1 + progress * (MAX_SCALE - 1);
      setScale(clampedScale);

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

          const scrolledThrough = viewportHeight - rect.top;
          const sectionProgress = Math.min(scrolledThrough / rect.height, 1);
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
  }, [windowHeight, isMobile, isTablet, words.length]);

  // === NEW FADE LOGIC ===
  const getHeroOpacity = () => {
    if (!textSectionRef.current) return 1;

    const rect = textSectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Start fading when the about section starts overlapping hero
    const fadeStart = viewportHeight * 0.8;
    // Fully faded when about section fully covers the hero
    const fadeEnd = viewportHeight * 0.3;

    if (rect.top >= fadeStart) return 1; // hero fully visible
    if (rect.top <= fadeEnd) return 0; // fully covered
    return (rect.top - fadeEnd) / (fadeStart - fadeEnd); // smooth fade
  };

  const getTextOpacity = () => {
    if (!textSectionRef.current) return 1;

    const rect = textSectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Text fades much quicker - more aggressive values
    const fadeStart = viewportHeight * 0.9; // Start fading much earlier
    const fadeEnd = viewportHeight * 0.6; // End fading much earlier

    if (rect.top >= fadeStart) return 1; // text fully visible
    if (rect.top <= fadeEnd) return 0; // fully covered
    return (rect.top - fadeEnd) / (fadeStart - fadeEnd); // smooth fade
  };

  const heroOpacity = getHeroOpacity();
  const textOpacity = getTextOpacity();
  const shouldAboutBeOnTop = animation.sectionVisible || heroOpacity < 1;

  return (
    <>
      {/* Hero Section */}
      <div className="">
        <div
          className={`max-w-[112rem] mt-18 mx-auto px-4 ${
            isMobile || isTablet ? "relative h-screen" : "fixed inset-0"
          } bg-white overflow-hidden flex items-center justify-center`}
          style={{
            opacity: heroOpacity,
            transition: "opacity 300ms ease-out",
            zIndex: shouldAboutBeOnTop ? 10 : 40,
            visibility: heroOpacity <= 0 ? "hidden" : "visible",
          }}
        >
          {(isMobile || isTablet) ? (
            <div className="w-full h-full flex flex-col items-center justify-center px-4">
              <h1 className="text-[15vw] text-[#e1794a] neue font-[500] leading-none tracking-tight mb-4">
                MANGO
              </h1>
              <div className="w-full max-w-[400px] aspect-[16/9] my-4 rounded-lg overflow-hidden">
                <img src={mango} alt="Visual" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-[15vw] text-[#e1794a] neue font-[500] leading-none tracking-tight mt-4">
                EFFECTS
              </h2>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Text elements - behind the image */}
                <h1
                  className="absolute neue font-[500] text-[#e1794a] leading-none tracking-tight text-[min(11vw,300px)]"
                  style={{
                    top: "-30%",
                    right: "35%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    opacity: textOpacity, // Apply quicker fade to text
                    transition: "opacity 100ms ease-out", // Much faster transition for text
                  }}
                >
                  MANGO
                </h1>
                <h2
                  className="absolute neue font-[500] text-[#e1794a] leading-none tracking-tight text-[min(11vw,300px)]"
                  style={{
                    bottom: "-30%",
                    left: "35%",
                    transform: "translateY(50%)",
                    zIndex: 10,
                    opacity: textOpacity, // Apply quicker fade to text
                    transition: "opacity 100ms ease-out", // Much faster transition for text
                  }}
                >
                  EFFECTS
                </h2>

                {/* Image container */}
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    width: "clamp(300px, 40vw, 550px)",
                    aspectRatio: "16 / 9",
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                    transition: "transform 75ms ease-out, opacity 300ms ease",
                    opacity: heroOpacity,
                    zIndex: 20,
                  }}
                >
                  <img
                    src={mango}
                    alt="Visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Spacer for non-mobile/tablet */}
      {!isMobile && !isTablet && <div className="relative z-0 h-[200vh] bg-white"></div>}

      {/* Text Reveal Section */}
      <div
        className="text-reveal-section neue uppercase"
        ref={textSectionRef}
        style={{
          position: animation.isSticky ? "sticky" : "relative",
          top: 0,
          zIndex: shouldAboutBeOnTop ? 50 : 5,
          opacity: 1,
          transition: "opacity 0.3s ease, z-index 0.3s ease",
          background: "black",
          isolation: "isolate",
        }}
      >
        <div 
          className="w-full min-h-screen flex justify-between items-center px-4 md:px-8"
          style={{
            background: "black",
          }}
        >
          <div className="max-w-[112rem] mx-auto w-full flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="neue text-2xl text-[#f5d6c7] font-[500] mb-3">01. ABOUT ME</p>
              <p className="text-4xl md:text-6xl neue text-left text-white leading-relaxed flex flex-wrap gap-x-2 max-w-6xl">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="transition-all duration-300 text-white inline-block neue font-[500]"
                    style={{
                      color:
                        isMobile || isTablet
                          ? `rgba(255,255,255,1)`
                          : `rgba(255,255,255,${animation.wordOpacities[index] ?? 0.3})`,
                    }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>

            <div className="self-end mb-[0.75rem] mt-8 md:mt-0">
              <a target="_blank" rel="noopener noreferrer" href="https://discord.com/users/767953235616202833" className="bg-[#e1794a] text-white px-6 py-4 md:px-4 md:py-3 neue rounded-lg font-[500] cursor-pointer">
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
