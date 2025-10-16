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
    sectionVisible: false,
    sectionPassed: false,
    heroVisible: true
  });

  const animationRef = useRef(animation);

  useEffect(() => {
    animationRef.current = animation;
  }, [animation]);

  const words =
    "I design VISUALS THAT DEMAND ATTENTION. Every project is built to spark curiosity and fuel growth for creators to stand out.".split(" ");

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
    const MAX_SCROLL = windowHeight * 1.5;

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
        const sectionPassed = rect.bottom <= 0;

        let newOpacities = [...animationRef.current.wordOpacities];
        let isSticky = animationRef.current.isSticky;
        let animationStarted = animationRef.current.animationStarted;
        let sectionVisible = animationRef.current.sectionVisible;
        let heroVisible = animationRef.current.heroVisible;

        if (sectionInView) {
          sectionVisible = true;
          isSticky = true;
          animationStarted = true;
          heroVisible = true;

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
        } else if (sectionPassed) {
          // Section has been completely scrolled past - hide hero
          newOpacities = Array(words.length).fill(1);
          isSticky = false;
          animationStarted = true;
          sectionVisible = true;
          heroVisible = false;
        } else {
          // Section not yet in view but hero should be visible
          heroVisible = true;
        }

        setAnimation({
          isSticky,
          wordOpacities: newOpacities,
          animationStarted,
          sectionVisible,
          sectionPassed,
          heroVisible
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowHeight, isMobile, isTablet, words.length]);

  return (
    <>
      {/* Hero Section - Only show when heroVisible is true */}
      {animation.heroVisible && (
        <div
          className={`max-w-[112rem] mt-18 mx-auto px-4 ${
            isMobile || isTablet ? "relative h-screen" : "fixed inset-0"
          } bg-white z-10 overflow-hidden flex items-center justify-center`}
          style={{
            display: !isMobile && !isTablet && !animation.heroVisible ? 'none' : 'flex'
          }}
        >
          {(isMobile || isTablet) ? (
            <div className="w-full h-full flex flex-col items-center justify-center px-4">
              <h1 className="text-[15vw] text-[#e1794a] neue font-[500]  leading-none tracking-tight mb-4">
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
                {/* Image with fixed size */}
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    width: "clamp(300px, 40vw, 550px)",
                    aspectRatio: "16 / 9",
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                    transition: "transform 75ms ease-out",
                    zIndex: 20,
                  }}
                >
                  <img
                    src={mango}
                    alt="Visual"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h1
                  className="absolute neue font-[500] text-[#e1794a]  leading-none tracking-tight text-[min(11vw,300px)]"
                  style={{
                    top: "-30%",
                    right: "35%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                >
                  MANGO
                </h1>
                <h2
                  className="absolute neue font-[500] text-[#e1794a]  leading-none tracking-tight text-[min(11vw,300px)]"
                  style={{
                    bottom: "-30%",
                    left: "35%",
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
      )}

      {/* Spacer for desktop to push content below hero - Only show when hero is visible */}
      {!isMobile && !isTablet && animation.heroVisible && (
        <div className="relative z-0 h-screen bg-transparent"></div>
      )}

      {/* Text Reveal Section */}
      <div
        className="text-reveal-section neue uppercase"
        ref={textSectionRef}
        style={{
          position: animation.isSticky ? "sticky" : "relative",
          top: 0,
          zIndex: 30,
          opacity: animation.sectionVisible || isMobile || isTablet ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="w-full min-h-screen bg-black flex justify-between items-center px-4 md:px-8">
          <div className="max-w-[112rem] mx-auto w-full flex flex-col md:flex-row">
            <div className="flex-1">
              <p className="neue text-2xl text-[#f5d6c7] font-[500]  mb-3">01. ABOUT ME</p>
              <p className="text-4xl md:text-6xl neue text-left text-white leading-relaxed flex flex-wrap gap-x-2 max-w-6xl">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="transition-all duration-300 text-white  inline-block neue font-[500]"
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
              <a className="bg-[#e1794a] text-white px-6 py-4 md:px-4 md:py-3 neue rounded-lg font-[500] cursor-pointer">
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content after about section */}
      <div className="relative z-20 bg-black min-h-screen">
        <div className="w-full min-h-screen flex items-center justify-center">
          <p className="text-white text-2xl">Next section content...</p>
        </div>
      </div>
    </>
  );
}

export default Hero;