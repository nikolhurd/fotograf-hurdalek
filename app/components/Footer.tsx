// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Logo from "./icons/Logo";

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    aria-label={`Odkaz na sociální síť ${href}`}
  >
    {children}
  </a>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const listBlockStyle =
    "bg-gray-800/50 backdrop-blur-sm rounded-xl px-6 py-6 border border-gray-700/50";

  return (
    <footer className="text-gray-400 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 rou">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {" "}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left justify-center">
            <Link
              href="/"
              aria-label="Logo Hurdalek - Domů"
              className="inline-block mb-2"
            >
              {" "}
              <Logo className="h-10 w-auto text-white" />{" "}
            </Link>
            <p className="text-sm max-w-xs mx-auto md:mx-0">
              {" "}
              Zachycuji vaše jedinečné okamžiky.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-4 pt-4 w-full">
              <SocialIcon href="#">
                {" "}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </SocialIcon>

              <p className="text-xs"> &copy; {currentYear} Martin Hurdálek</p>
            </div>
          </div>
          <div className={`hidden md:block ${listBlockStyle}`}>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 underline decoration-red-700 decoration-2 underline-offset-4">
              Navigace
            </h3>
            <ul className="space-y-3">
              {" "}
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Domů
                </Link>
              </li>
              <li>
                <Link
                  href="/o-mne"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  O mně
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div className={`hidden md:block ${listBlockStyle}`}>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 underline decoration-red-700 decoration-2 underline-offset-4">
              Služby
            </h3>
            <ul className="space-y-3">
              {" "}
              <li>
                <Link
                  href="/sluzby/skoly-skolky"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Školy a Školky
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby/svatby"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Svatby
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby/maturitni-plesy"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Maturitní plesy
                </Link>
              </li>
              <li>
                <Link
                  href="/sluzby/vitani-obcanku"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Vítání občánků
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-center mt-8 md:mt-12">
          Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
