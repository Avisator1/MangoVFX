import React, { useEffect, useState, useRef } from "react";
import mango from "../assets/images/resize.gif";

function Hero() {
  const [scale, setScale] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const textSectionRef = useRef(null);
  const [animation, setAnimation] = useState({
    isSticky: false,
    wordOpacities: Array(30).fill(0.3),
    animationStarted: false,
    sectionVisible: false
  });
  
  // Create ref for animation state
  const animationRef = useRef(animation);
  
  // Sync ref with animation state
  useEffect(() => {
    animationRef.current = animation;
  }, [animation]);

  const words =
    "I'M A US-BASED GRAPHICS DESIGNER WITH EXTENSIVE EXPERIENCE IN MINECRAFT DESIGNS AND HAVE COMPLETED OVER 250 ORDERS.".split(" ");

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 768);
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

          // NEW: SIMPLIFIED AND RELIABLE SCROLL PROGRESS CALCULATION
          const scrollProgressRaw = 1 - rect.bottom / (viewportHeight + rect.height);
          const scrollProgress = Math.min(Math.max(scrollProgressRaw, 0), 1);

          // NEW: FIXED WORD OPACITY CALCULATION
          // Calculate the total height of the text section
          const textSectionHeight = rect.height;
          
          // Calculate how much of the section has been scrolled through
          const scrolledThrough = viewportHeight - rect.top;
          
          // Calculate percentage of section scrolled through
          const sectionProgress = Math.min(scrolledThrough / textSectionHeight, 1);
          
          // NEW: PROGRESS PER WORD
          const progressPerWord = 1 / words.length;
          
          newOpacities = words.map((_, index) => {
            // Calculate the start and end points for each word
            const wordStart = index * progressPerWord;
            const wordEnd = (index + 1) * progressPerWord;
            
            if (sectionProgress >= wordEnd) {
              return 1; // Word fully visible
            } else if (sectionProgress >= wordStart) {
              // Calculate progress within this word's range
              const wordProgress = (sectionProgress - wordStart) / progressPerWord;
              return 0.3 + 0.7 * wordProgress;
            } else {
              return 0.3; // Word not yet visible
            }
          });
        } else if (rect.bottom < 0) {
          // Check if all words are fully visible
          const allWordsVisible = newOpacities.every(opacity => opacity >= 1);
          
          if (allWordsVisible) {
            // Animation complete - release section
            isSticky = false;
            animationStarted = false;
            sectionVisible = false;
          } else {
            // Force complete animation and keep section sticky
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
        className={`max-w-[112rem] mx-auto px-4  ${
          isMobile ? "relative h-screen" : "fixed inset-0"
        } bg-white z-10 overflow-hidden flex items-center justify-center`}
        style={{
          opacity: scrollY > fadeOutStart ? 0 : 1,
          transition: "opacity 300ms ease",
          pointerEvents: scrollY > fadeOutStart ? "none" : "auto",
        }}
      >
        {!isMobile ? (
          <>
            <div className="absolute top-1/2 left-4 -translate-y-1/2 text-md font-medium neue z-10">
              A CREATIVE <strong>THUMBNAIL DESIGNER</strong>
            </div>

            <div className="absolute top-1/2 right-4 -translate-y-1/2 text-md font-medium neue z-10 text-right">
              INCREASING VIEWS <strong>DRAMATICALLY</strong>
            </div>

            <h1 className="absolute top-[5%] left-[6%] text-[12vw] neue font-[500] leading-none tracking-tight z-10">
              MANGO
            </h1>

            <div
              className="absolute z-20 pointer-events-none overflow-hidden"
              style={{
                width: "40vw",
                maxWidth: "650px",
                aspectRatio: "16 / 9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                transition: "transform 75ms ease-out, opacity 300ms ease",
                opacity: scrollY > fadeOutStart ? 0 : 1,
              }}
            >
              <img src={mango} alt="Visual" className="w-full h-full object-cover" />
            </div>

            <h2 className="absolute bottom-[5%] right-[6%] text-[12vw] neue font-[500] leading-none tracking-tight text-right z-10">
              EFFECTS
            </h2>
          </>
        ) : (
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
        )}
      </div>
      </div>

      {!isMobile && <div className="relative z-0 h-[400vh] bg-white"></div>}

      {/* Text reveal section */}
      <div 
        className="text-reveal-section bg-white"
        ref={textSectionRef}
        style={{
          position: animation.isSticky ? 'sticky' : 'relative',
          top: 0,
          zIndex: 20,
          opacity: animation.sectionVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
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
                      color: `rgba(255,255,255,${animation.wordOpacities[index] ?? 0.3})`
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