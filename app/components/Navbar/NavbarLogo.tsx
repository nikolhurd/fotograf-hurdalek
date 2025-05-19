// components/Navbar/NavbarLogo.tsx
import React from "react";
import Link from "next/link";
import Logo from "../icons/Logo";

interface NavbarLogoProps {
  onClick?: () => void;
  href?: string;
  isScrolled: boolean;
  disableScrollEffect?: boolean; // <-- Nový volitelný prop
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({
  onClick,
  href = "/",
  isScrolled,
  disableScrollEffect = false, // <-- Výchozí hodnota je false
}) => {
  // Použijeme efekt jen pokud NENÍ disableScrollEffect true
  const transformClass =
    !disableScrollEffect && isScrolled ? "-translate-y-20" : "translate-y-0";

  return (
    // Přidáme transition a podmíněný transform
    <div
      className={`
      flex flex-shrink-0 items-center
      transition-transform duration-300 ease-in-out
      ${transformClass} // <-- Použijeme vypočítanou třídu
    `}
    >
      <Link
        href={href}
        onClick={onClick}
        aria-label="Logo Hurdalek"
        // Přidáme tabindex=-1 pokud je logo skryté A efekt NENÍ deaktivován
        tabIndex={!disableScrollEffect && isScrolled ? -1 : 0}
        className="inline-flex items-center"
      >
        <Logo className="h-10 w-32 text-white" />
      </Link>
    </div>
  );
};

export default NavbarLogo;
