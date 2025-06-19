import React from "react";

interface SphereProps {
  className?: string;
  style?: React.CSSProperties;
}

const Sphere: React.FC<SphereProps> = ({ className, style }) => {
  return (
    <div
      className={`absolute rounded-full ${className}`}
      style={{
        background: "linear-gradient(145deg, #fcd34d, #eab308)",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
        ...style,
      }}
    ></div>
  );
};

export default Sphere;
