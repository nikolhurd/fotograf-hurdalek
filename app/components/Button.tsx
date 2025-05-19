import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="
        inline-block
        border border-gray-700 
        bg-transparent 
        text-gray-300 
        text-sm
        font-medium
        uppercase
        px-6
        py-3
        rounded-full 
        transition-all duration-300 ease-in-out 
        hover:border-red-600 
        hover:bg-red-900/30 
        hover:text-white 
        focus:outline-none
        focus:ring-2
        focus:ring-red-500 
        focus:ring-offset-2
        focus:ring-offset-black 
      "
    >
      {children}
    </Link>
  );
};

export default Button;
