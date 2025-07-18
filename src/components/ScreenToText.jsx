import React, { useEffect, useRef } from "react";

export const ScreenFitText = ({ children }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;

      if (!container || !text) return;

      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";

        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      text.style.fontSize = max + "px";
    };

    resizeText();
    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, []);

  return (
    <div
      className="w-full flex justify-center px-4 overflow-hidden"
      ref={containerRef}
    >
      <span
        className="whitespace-nowrap font-[400] coolvetia-font text-center text-slate-900 leading-none"
        ref={textRef}
      >
        {children}
      </span>
    </div>
  );
};
