import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div>
        {/* Logo */}
        <div>
          <Link href="/">MojeLogo</Link>
        </div>

        {/* Menu */}
        <ul>
          <li>
            <Link href="/">Domů</Link>
          </li>
          <li>
            <Link href="/o-mne">O mně</Link>
          </li>
          <li>
            <Link href="/sluzby">Služby</Link>
          </li>
          <li>
            <Link href="/galerie">Galerie</Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
}
