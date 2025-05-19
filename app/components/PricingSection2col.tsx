import React from "react";
import PricingCard from "./PricingCard";
import type { PricingOption } from "./PricingSection";

interface PricingSection2ColProps {
  title?: string;
  options: PricingOption[];
}

const PricingSection2Col: React.FC<PricingSection2ColProps> = ({
  title,
  options,
}) => {
  if (!options || options.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-center text-white mb-10 md:mb-12 font-martel">
            {title}
          </h2>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`}>
          {options.map((option, index) => (
            <PricingCard key={index} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { PricingSection2Col };
