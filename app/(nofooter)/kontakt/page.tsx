import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Fotograf Martin Hurdálek",
};

// Komponenta pro jednotlivý kontaktní údaj
const ContactInfoItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}> = ({ icon, label, value, href }) => (
  <div className="flex items-center space-x-3">
    <span className="text-red-500 flex-shrink-0">{icon}</span>
    <div className="flex items-baseline space-x-2">
      <dt className="text-sm font-semibold text-white uppercase tracking-wider flex-shrink-0">
        {label}:
      </dt>
      {href ? (
        <dd className="text-base text-gray-300 hover:text-white transition-colors break-words">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        </dd>
      ) : (
        <dd className="text-base text-gray-300 break-words">{value}</dd>
      )}
    </div>
  </div>
);

export default function KontaktPage() {
  const contactDetails = {
    name: "Martin Hurdálek",
    ico: "12345678", // Doplnit ICO
    phone: "+420 606 331 482",
    email: "m.hurdalek@gmail.com",
  };

  const mailtoLink = `mailto:${contactDetails.email}?subject=Poptávka focení`;

  return (
    <section className="flex flex-grow items-center justify-center min-h-[calc(100vh_-_6rem)] text-white">
      <div className="container px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold font-martel text-white mb-4">
              Spojme se!
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Máte zájem o mé služby, nebo jen dotaz? Jsem tu pro vás. Rád si
              poslechnu vaše představy a připravím nabídku na míru.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Napište mi email nebo zavolejte. Ozvu se vám co nejdříve!
            </p>

            <a
              href={mailtoLink}
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Napsat email
            </a>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-md rounded-lg p-6 md:p-8 border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-white mb-6 font-martel">
              Kontaktní údaje
            </h2>

            <dl className="space-y-4">
              <ContactInfoItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                label="Jméno"
                value={contactDetails.name}
              />
              <ContactInfoItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                label="IČO"
                value={contactDetails.ico}
              />
              <ContactInfoItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                }
                label="Telefon"
                value={contactDetails.phone}
                href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} // Odkaz pro volání
              />
              <ContactInfoItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {" "}
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />{" "}
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                }
                label="Email"
                value={contactDetails.email}
                href={`mailto:${contactDetails.email}`}
              />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
