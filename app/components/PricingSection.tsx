import React from "react";
import PricingCard from "./PricingCard";

export interface PricingOption {
  title: string;
  price: string;
  description: string;
  features?: string[];
  cta?: {
    text: string;
    href: string;
  };
}

interface PricingSectionProps {
  title?: string;
  options: PricingOption[];
  desktopCols?: 1 | 2 | 3;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  options,
  desktopCols = 3,
}) => {
  if (!options || options.length === 0) {
    return null;
  }

  const validDesktopCols = Math.max(1, Math.min(desktopCols, 3));
  const lgColsClass = `lg:grid-cols-${validDesktopCols}`;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-center text-white mb-10 md:mb-12 font-martel">
            {title}
          </h2>
        )}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${lgColsClass} gap-6 md:gap-8`}
        >
          {options.map((option, index) => (
            <PricingCard key={index} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { PricingSection };
