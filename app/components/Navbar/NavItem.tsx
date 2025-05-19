// components/Navbar/NavItem.tsx
import React from "react";
import Link from "next/link";
import { NavItemType } from "./types"; // Relative path

interface NavItemProps {
  /** The navigation item data */
  item: NavItemType;
  /** The currently active pathname */
  currentPathname: string;
  /** Whether this item's dropdown is currently open (controlled by parent) */
  isDropdownOpen: boolean;
  /** Whether the item is being rendered in the mobile menu */
  isMobile: boolean;
  /** Function to call when the mouse enters the item (for desktop hover) */
  onMouseEnter: () => void;
  /** Function to call when the mouse leaves the item (for desktop hover) */
  onMouseLeave: () => void;
  /** Function to call when the item is clicked (e.g., toggle mobile dropdown) */
  onClick: (e: React.MouseEvent) => void;
  /** Function to call when a link is clicked (to close menus) */
  onLinkClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  currentPathname,
  isDropdownOpen,
  isMobile,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onLinkClick,
}) => {
  // Determine if the current item or one of its children is active
  const isActive = () => {
    if (currentPathname === item.path && item.path !== "#") return true; // Exact match (ignore if path is just #)
    if (item.dropdown) {
      // Check if main path is a prefix OR if any dropdown item matches exactly or is a prefix
      return (
        // Check if the main path itself is active or a parent of the active path
        (item.path !== "/" && currentPathname.startsWith(item.path + "/")) ||
        // Check if any dropdown item is the active path or a parent of the active path
        item.dropdown.some(
          (subItem) =>
            currentPathname === subItem.path ||
            (subItem.path !== "/" &&
              currentPathname.startsWith(subItem.path + "/"))
        )
      );
    }
    // Check for prefix match for non-dropdown items (excluding base '/')
    return item.path !== "/" && currentPathname.startsWith(item.path + "/");
  };

  const active = isActive();

  // Base classes for links/buttons - using your updated padding px-4 py-3
  const commonLinkClasses = `
    px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out relative block w-full text-left md:w-auto md:text-center
    ${
      active
        ? "text-white" // Active text color
        : "text-gray-200 hover:bg-red-900/30 hover:text-white md:hover:bg-transparent md:hover:text-white"
    }
  `;

  // Active indicator shown only on desktop - using red-700 as per your code
  const activeIndicatorClass =
    !isMobile && active
      ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-1 after:w-5 after:rounded-full after:bg-red-700"
      : "";

  return (
    <li
      className={`relative ${isMobile ? "w-full" : ""}`}
      // Attach hover handlers only to the LI for desktop dropdowns
      onMouseEnter={!isMobile && item.dropdown ? onMouseEnter : undefined}
      onMouseLeave={!isMobile && item.dropdown ? onMouseLeave : undefined}
    >
      {item.dropdown ? (
        <>
          {/* Dropdown Parent Button */}
          <button
            onClick={onClick} // Handles mobile toggle / potential desktop nav
            className={`${commonLinkClasses} ${
              isMobile
                ? "flex justify-between items-center"
                : activeIndicatorClass
            } cursor-pointer`}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <span>{item.name}</span>
            {/* Arrow Icon */}
            <svg
              className={`ml-1 h-4 w-4 inline-block transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : ""
              } ${isMobile ? "" : " flex-shrink-0"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* --- Dropdown Menu --- */}
          {/* Desktop Dropdown */}
          {!isMobile && isDropdownOpen && (
            // Přidáno overflow-hidden pro správné zaoblení rohů
            // Použito bg-gray-800 a ring-gray-700 podle tvého kódu
            <ul
              className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700 ring-opacity-5 z-60 overflow-hidden"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {item.dropdown.map((subItem) => {
                // Znovu kontrolujeme aktivní stav pro každý subItem
                const isSubItemActive =
                  currentPathname === subItem.path ||
                  currentPathname.startsWith(subItem.path + "/");
                return (
                  <li key={subItem.path}>
                    <Link
                      href={subItem.path}
                      onClick={onLinkClick} // Use parent's handler to close dropdown
                      // Použity tvé třídy pro aktivní a hover stavy
                      className={`
                        block w-full text-left px-4 py-2 text-sm
                        transition-colors duration-150
                        ${
                          isSubItemActive
                            ? "bg-red-700 text-white" // Aktivní styl
                            : "text-gray-200 hover:bg-red-900/30 hover:text-white" // Neaktivní a hover styl (odebráno hover:border-red-600, protože Link nemá border)
                        }
                      `}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          {/* Mobile Dropdown (Accordion style) */}
          {isMobile && isDropdownOpen && (
            <ul className="pl-4 mt-1 space-y-1">
              {item.dropdown.map((subItem) => (
                <li key={subItem.path}>
                  <Link
                    href={subItem.path}
                    onClick={onLinkClick} // Use parent's handler to close mobile menu
                    // Použity tvé třídy pro aktivní a hover stavy
                    className={`
                      block px-3 py-2 rounded-md text-sm font-medium
                      transition-colors duration-150
                      ${
                        currentPathname === subItem.path ||
                        currentPathname.startsWith(subItem.path + "/")
                          ? "bg-red-700 text-white" // Aktivní styl
                          : "text-gray-200 hover:bg-red-900/30 hover:text-white" // Neaktivní a hover styl
                      }
                    `}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        // Regular Link (No Dropdown)
        <Link
          href={item.path}
          className={`${commonLinkClasses} ${activeIndicatorClass}`}
          onClick={onLinkClick} // Use parent's handler to close mobile menu
        >
          {item.name}
        </Link>
      )}
    </li>
  );
};

export default NavItem;
