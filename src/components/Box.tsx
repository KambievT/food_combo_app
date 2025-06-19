import React from "react";

interface BoxProps {
  className?: string;
  style?: React.CSSProperties;
}

const Box: React.FC<BoxProps> = ({ className, style }) => {
  return (
    <div
      className={`absolute bg-gray-600 ${className}`}
      style={{
        transform: "rotate(45deg) skewX(15deg) scaleY(0.8)",
        background: "linear-gradient(145deg, #4b5563, #374151)",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
        ...style,
      }}
    ></div>
  );
};

export default Box;
