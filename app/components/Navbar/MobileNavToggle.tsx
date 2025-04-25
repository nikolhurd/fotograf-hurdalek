// components/Navbar/MobileNavToggle.tsx
import React from "react";

interface MobileNavToggleProps {
  /** Whether the mobile menu is currently open */
  isOpen: boolean;
  /** Function to toggle the mobile menu state */
  onToggle: () => void;
}

const MobileNavToggle: React.FC<MobileNavToggleProps> = ({
  isOpen,
  onToggle,
}) => {
  return (
    <div className="flex items-center md:hidden ml-auto">
      {" "}
      {/* ml-auto pushes to right */}
      <button
        onClick={onToggle}
        type="button"
        className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {/* Conditional rendering for Hamburger/Close icons */}
        {!isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MobileNavToggle;
