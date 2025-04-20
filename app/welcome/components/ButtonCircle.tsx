import React, { useState, memo, useCallback } from "react";

interface ButtonCircleProps {
  textColor?: string;
  height: number;
  circleColor: any;
  content: string | React.ReactNode;
}

// Use memo to prevent unnecessary re-renders
export const ButtonCircle = memo(({
  textColor,
  height,
  circleColor,
  content,
}: ButtonCircleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use useCallback to memoize the handler functions
  const handleMouseOver = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseOut = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <button
      className={`flex relative uppercase cursor-pointer w-max`}
      style={{
        color: textColor,
        height: `${height}px`,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        className={`circle flex absolute z-4 rounded-[100%] hover:bg-red-500`}
        style={{
          background: circleColor,
          height: `${height}px`,
          width: isHovered ? "100%" : `${height}px`,
          borderRadius: isHovered ? "999px" : "100%",
          transition: "all 0.3s ease",
        }}
      ></div>
      {content}
    </button>
  );
});

ButtonCircle.displayName = "ButtonCircle";