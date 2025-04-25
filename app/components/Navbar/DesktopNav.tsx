// components/Navbar/DesktopNav.tsx
import React from "react";
import NavItem from "./NavItem"; // Relative path
import { NavItemType } from "./types"; // Relative path

interface DesktopNavProps {
  /** Array of navigation items */
  navItems: NavItemType[];
  /** The currently active pathname */
  currentPathname: string;
  /** The path of the currently open dropdown (or null) */
  openDropdownPath: string | null;
  /** Function to call when mouse enters a dropdown trigger */
  onItemMouseEnter: (path: string) => void;
  /** Function to call when mouse leaves a dropdown trigger or the dropdown menu */
  onItemMouseLeave: () => void;
  /** Function to call when a link is clicked (closes dropdown) */
  onLinkClick: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  navItems,
  currentPathname,
  openDropdownPath,
  onItemMouseEnter,
  onItemMouseLeave,
  onLinkClick,
}) => {
  return (
    // Centered container for desktop nav items
    <div className="hidden md:flex flex-1 items-center justify-center">
      {/* The rounded, blurred background container */}
      <ul className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-800">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            item={item}
            currentPathname={currentPathname}
            isDropdownOpen={openDropdownPath === item.path}
            isMobile={false}
            onMouseEnter={() => onItemMouseEnter(item.path)} // Pass path up
            onMouseLeave={onItemMouseLeave}
            onClick={() => {
              /* Desktop click on dropdown parent doesn't toggle */
            }}
            onLinkClick={onLinkClick} // Pass the handler down
          />
        ))}
      </ul>
    </div>
  );
};

export default DesktopNav;
