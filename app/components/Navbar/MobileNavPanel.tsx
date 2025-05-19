// components/Navbar/MobileNavPanel.tsx
import React from "react";
import NavItem from "./NavItem"; // Relative path
import { NavItemType } from "./types"; // Relative path

interface MobileNavPanelProps {
  isOpen: boolean;
  navItems: NavItemType[];
  currentPathname: string;
  openDropdownPath: string | null;
  onDropdownToggle: (path: string) => void;

  onLinkClick: () => void;
}

const MobileNavPanel: React.FC<MobileNavPanelProps> = ({
  isOpen,
  navItems,
  currentPathname,
  openDropdownPath,
  onDropdownToggle,
  onLinkClick,
}) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:hidden absolute top-full left-0 w-full bg-gray-800/50 backdrop-blur-md pb-3 z-40 shadow-lg border-t border-gray-700/50`}
      id="mobile-menu"
    >
      <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            item={item}
            currentPathname={currentPathname}
            isDropdownOpen={openDropdownPath === item.path}
            isMobile={true}
            onMouseEnter={() => {
              /* No hover effect needed on mobile */
            }}
            onMouseLeave={() => {
              /* No hover effect needed on mobile */
            }}
            onClick={(e) => {
              // Only toggle dropdown if the item actually has one
              if (item.dropdown) {
                e.preventDefault(); // Prevent navigation if it's just a toggle
                onDropdownToggle(item.path);
              } else {
                // If it's a regular link, let the default Link behavior happen
                // but still call onLinkClick to ensure menu closes
                onLinkClick();
              }
            }}
            onLinkClick={onLinkClick} // Pass down the main close handler
          />
        ))}
      </ul>
    </div>
  );
};

export default MobileNavPanel;
