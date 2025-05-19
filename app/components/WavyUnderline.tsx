import React from "react";

interface WavyUnderlineProps {
  className?: string;
  color?: string;
}

const WavyUnderline: React.FC<WavyUnderlineProps> = ({
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      className={`w-full h-3 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 0 6 C 20 0, 40 12, 60 6 S 80 0, 100 6"
        stroke={color === "currentColor" ? "currentColor" : color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WavyUnderline;
