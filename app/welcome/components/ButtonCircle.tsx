import React, { useState } from "react";
interface ButtonCircleProps {
  textColor?: string;
  height: number;
  circleColor: any;
  content: string | React.ReactNode;
}

export function ButtonCircle({
  textColor,
  height,
  circleColor,
  content,
}: ButtonCircleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`flex relative uppercase cursor-pointer w-max`}
      style={{
        color: textColor,
        height: `${height}px`,
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
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
}
