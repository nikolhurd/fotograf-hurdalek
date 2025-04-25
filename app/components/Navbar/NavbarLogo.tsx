import React from "react";
import Link from "next/link";
import Logo from "../icons/Logo";

interface NavbarLogoProps {
  /** Function to call when the logo is clicked (e.g., close mobile menu) */
  onClick?: () => void;
  /** Href for the logo link */
  href?: string;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ onClick, href = "/" }) => {
  return (
    // This outer div helps align the logo area within the navbar's main flex container
    <div className="flex flex-shrink-0 items-center">
      {" "}
      <Link
        href={href}
        onClick={onClick}
        aria-label="Logo Hurdalek"
        className="inline-flex items-center"
      >
        <Logo className="h-10 w-32 text-white" />{" "}
      </Link>
    </div>
  );
};

export default NavbarLogo;
