import React, { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
  const [showMango, setShowMango] = useState(false);
  const [showFx, setShowFx] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMango(true), 100); // MANGO start
    const timer2 = setTimeout(() => setShowFx(true), 700); // FX appears

    const timer3 = setTimeout(() => {
      setFadeOut(true); // Start fade out after pause
      setTimeout(() => onFinish(), 700); // fade duration
    }, 1000); // 700 + 300ms pause

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999999] flex flex-col justify-center items-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top and Bottom Panels */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white" />

      {/* Center Text */}
      <div className="absolute top-[48.5%] flex flex-col items-center overflow-hidden w-full">
        <div className="flex items-center justify-center w-[200px] overflow-hidden">
          {/* MANGO */}
          <h1
            className={`text-xl sm:text-2xl font-[500] neue text-black tracking-wider transition-all duration-500 ease-out ${
              showMango
                ? "translate-x-0 opacity-100"
                : "-translate-x-[200px] opacity-0"
            }`}
          >
            MANGO
          </h1>

          {/* FX */}
          <h1
            className={`text-xl sm:text-2xl font-[500] neue gurt tracking-tight transition-all duration-500 ease-out ${
              showFx
                ? "translate-y-0 opacity-100"
                : "translate-y-[40px] opacity-0"
            }`}
          >
            FX
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
