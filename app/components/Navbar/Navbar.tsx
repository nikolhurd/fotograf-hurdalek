// components/Navbar/Navbar.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// Import sub-components
import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import MobileNavToggle from "./MobileNavToggle";
import MobileNavPanel from "./MobileNavPanel";
import { NavItemType } from "./types";

// --- Props pro Navbar ---
interface NavbarProps {
  disableScrollEffect?: boolean; // <-- Nový volitelný prop
}

// --- Navigation Data ---
const navItemsData: NavItemType[] = [
  // ... (tvoje navigační data zůstávají stejná)
  { name: "Domů", path: "/" },
  { name: "O mně", path: "/o-mne" },
  {
    name: "Služby",
    path: "#",
    dropdown: [
      { name: "Svatby", path: "/sluzby/svatby" },
      { name: "Školy a školky", path: "/sluzby/skoly-skolky" },
      { name: "Maturitní plesy", path: "/sluzby/maturitni-plesy" },
      { name: "Vítání občánků", path: "/sluzby/vitani-obcanku" },
      { name: "Další služby", path: "/sluzby/dalsi-sluzby" },
    ],
  },
  { name: "Galerie", path: "/galerie" },
  { name: "Kontakt", path: "/kontakt" },
];

// --- Main Navbar Container Component ---
const Navbar: React.FC<NavbarProps> = ({ disableScrollEffect = false }) => {
  // <-- Přijmeme prop
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // --- Scroll Detection Effect ---
  useEffect(() => {
    // Pokud je efekt deaktivován, nic neděláme
    if (disableScrollEffect) {
      setIsScrolled(false); // Zajistíme, že je vždy false
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Spustíme hned na začátku pro případ, že stránka je už odscrollovaná
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [disableScrollEffect]); // <-- Závislost na novém propu

  // --- Ostatní Event Handlers (zůstávají stejné) ---
  // ... (toggleMobileMenu, closeMobileMenu, atd.) ...
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };
  const handleMobileDropdownToggle = (path: string) => {
    setOpenDropdown((prev) => (prev === path ? null : path));
  };
  const handleDesktopMouseEnter = (path: string) => {
    if (window.innerWidth < 768) return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(path);
  };
  const handleDesktopMouseLeave = () => {
    if (window.innerWidth < 768) return;
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };
  const handleLinkClick = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(null);
    closeMobileMenu();
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isMobileMenuOpen]);
  // --- Render ---
  return (
    // Podmíněné třídy pro pozadí aplikujeme jen pokud efekt NENÍ deaktivován
    <nav
      ref={navRef}
      className={`
        sticky top-0 p-3 z-50
        transition-all duration-300 ease-in-out
        ${
          !disableScrollEffect && isScrolled ? "" : "bg-transparent shadow-none"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo Component - předáme oba propy */}
          <NavbarLogo
            onClick={closeMobileMenu}
            isScrolled={isScrolled}
            disableScrollEffect={disableScrollEffect} // <-- Předání propu
          />

          {/* Desktop Navigation Component */}
          <DesktopNav
            navItems={navItemsData}
            currentPathname={pathname}
            openDropdownPath={openDropdown}
            onItemMouseEnter={handleDesktopMouseEnter}
            onItemMouseLeave={handleDesktopMouseLeave}
            onLinkClick={handleLinkClick}
          />

          {/* Mobile Navigation Toggle Button */}
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
          />

          {/* Optional: Placeholder */}
          <div
            className="hidden md:flex flex-shrink-0 justify-end"
            style={{ width: "80px" }}
          ></div>
        </div>
      </div>

      {/* Mobile Navigation Panel Component */}
      <MobileNavPanel
        isOpen={isMobileMenuOpen}
        navItems={navItemsData}
        currentPathname={pathname}
        openDropdownPath={openDropdown}
        onDropdownToggle={handleMobileDropdownToggle}
        onLinkClick={handleLinkClick}
      />
    </nav>
  );
};

// Exportuj jako default, pokud je to hlavní export souboru
export default Navbar;
