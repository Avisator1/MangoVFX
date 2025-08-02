import React, { useEffect, useRef } from "react";

export const ScreenFitText = ({ children }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();
    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = `${mid}px`;

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = `${max}px`;
  };

  return (
    <div
      className="flex h-[40vh]  mx-auto w-full items-center neue justify-center overflow-hidden bg-white"
      ref={containerRef}
    >
      <span
        className="whitespace-nowrap text-center neue font-bold uppercase text-black neue"
        ref={textRef}
      >
        {children}
      </span>
    </div>
  );
};
