// components/Navbar/Navbar.tsx
"use client"; // Needed for hooks like useState, useEffect, usePathname

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// Import sub-components using relative paths
import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import MobileNavToggle from "./MobileNavToggle";
import MobileNavPanel from "./MobileNavPanel";
import { NavItemType } from "./types"; // Import shared types using relative path

// --- Navigation Data ---
// Consider moving this to a constants.ts file if it grows large
const navItemsData: NavItemType[] = [
  { name: "Domů", path: "/" },
  { name: "O mně", path: "/o-mne" },
  {
    name: "Služby",
    path: "#", // Use '#' if the parent itself isn't clickable, or '/sluzby' if it is
    dropdown: [
      { name: "Svatby", path: "/sluzby/svatby" },
      { name: "Školy a školky", path: "/sluzby/skoly-skolky" },
      { name: "Maturitní plesy", path: "/sluzby/maturitni-plesy" },
      { name: "Reportáže", path: "/sluzby/reportaze" },
      { name: "Vítání občánků", path: "/sluzby/vitani-obcanku" },
    ],
  },
  { name: "Galerie", path: "/galerie" },
  { name: "Kontakt", path: "/kontakt" },
];

// --- Main Navbar Container Component ---
const Navbar: React.FC = () => {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for currently open dropdown (path identifies which one)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Ref for the delayed close timer (desktop hover)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Ref for the main nav element (for click outside detection)
  const navRef = useRef<HTMLDivElement>(null);
  // Get current route pathname
  const pathname = usePathname();

  // --- Event Handlers ---

  // Toggle mobile menu open/closed
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close any open dropdown when toggling mobile menu
  };

  // Close mobile menu (used by logo click, link clicks)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null); // Ensure dropdowns are closed too
  };

  // Toggle mobile dropdown accordion style
  const handleMobileDropdownToggle = (path: string) => {
    setOpenDropdown((prev) => (prev === path ? null : path));
  };

  // Handle mouse entering a desktop dropdown trigger area (LI)
  const handleDesktopMouseEnter = (path: string) => {
    if (window.innerWidth < 768) return; // Guard for desktop only
    // Clear any pending close timer
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    // Open the target dropdown
    setOpenDropdown(path);
  };

  // Handle mouse leaving a desktop dropdown trigger area (LI) or the dropdown menu (UL)
  const handleDesktopMouseLeave = () => {
    if (window.innerWidth < 768) return; // Guard for desktop only
    // Set a timer to close the dropdown after a delay
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Adjust delay as needed
  };

  // Handler for clicking any link (desktop dropdown item or mobile item)
  const handleLinkClick = () => {
    // Clear any pending close timer immediately
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(null); // Close dropdown state
    closeMobileMenu(); // Close mobile menu state
  };

  // Effect to handle clicks outside the mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the navRef element
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMobileMenu(); // Close mobile menu and dropdowns
      }
    };

    // Add listener if mobile menu is open
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove listener if mobile menu is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove listener and clear timeout on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isMobileMenuOpen]); // Re-run effect when mobile menu state changes

  // --- Render ---
  return (
    <nav ref={navRef} className="bg-gray-900 shadow-md sticky top-0 p-3 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo Component */}
          <NavbarLogo onClick={closeMobileMenu} />

          {/* Desktop Navigation Component */}
          <DesktopNav
            navItems={navItemsData}
            currentPathname={pathname}
            openDropdownPath={openDropdown}
            onItemMouseEnter={handleDesktopMouseEnter}
            onItemMouseLeave={handleDesktopMouseLeave}
            onLinkClick={handleLinkClick} // Pass link click handler
          />

          {/* Mobile Navigation Toggle Button */}
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
          />

          {/* Optional: Placeholder for right side content on desktop */}
          <div
            className="hidden md:flex flex-shrink-0 justify-end"
            style={{ width: "80px" }}
          >
            {/* Add icons, login, etc. here */}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel Component */}
      <MobileNavPanel
        isOpen={isMobileMenuOpen}
        navItems={navItemsData}
        currentPathname={pathname}
        openDropdownPath={openDropdown}
        onDropdownToggle={handleMobileDropdownToggle}
        onLinkClick={handleLinkClick} // Pass link click handler
      />
    </nav>
  );
};

export default Navbar; // Export the main container
