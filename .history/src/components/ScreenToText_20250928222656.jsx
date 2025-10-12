import React, { useEffect, useRef } from "react";

export const ScreenFitText = ({
  children,
  firstColor = "#e1794a",
  secondColor = "#000000",
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();
    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, [children]);

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

  const getSplitText = (text) => {
    const midpoint = Math.ceil(text.length / 2);
    return [text.slice(0, midpoint), text.slice(midpoint)];
  };

  const [firstHalf, secondHalf] = getSplitText(String(children));

  return (
    <div
      className="flex h-[40vh] mx-auto w-full items-center justify-center overflow-hidden bg-white"
      ref={containerRef}
    >
      <span
        className="whitespace-nowrap text-center font-bold uppercase"
        ref={textRef}
      >
        <span style={{ color: firstColor }}>{firstHalf}</span>
        <span style={{ color: secondColor }}>{secondHalf}</span>
      </span>
    </div>
  );
};
