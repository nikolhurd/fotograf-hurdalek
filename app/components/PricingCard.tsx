import React from "react";
import Link from "next/link";
import type { PricingOption } from "./PricingSection";

interface PricingCardProps {
  option: PricingOption;
}

const cardStyle =
  "bg-gray-800/60 backdrop-blur-md rounded-lg p-6 border border-gray-700/50 flex flex-col h-full";

const PricingCard: React.FC<PricingCardProps> = ({ option }) => {
  return (
    <div className={cardStyle}>
      <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>

      <p className="text-3xl font-bold text-red-500 mb-4">{option.price}</p>

      <p className="text-gray-300 mb-6 flex-grow">{option.description}</p>

      {option.features && option.features.length > 0 && (
        <ul className="space-y-2 mb-6 text-sm text-gray-400">
          {option.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-red-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Volitelné CTA tlačítko */}
      {option.cta && (
        <div className="mt-auto pt-4">
          <Link
            href={option.cta.href}
            className="block w-full text-center bg-white text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {option.cta.text}
          </Link>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
