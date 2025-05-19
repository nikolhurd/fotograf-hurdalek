import React from "react";
import SpotlightCard from "./SpotLightCard";
import Link from "next/link";

const services = [
  {
    title: "Svatební fotografie",
    description: "Zachycení vašeho jedinečného dne plného emocí.",
    href: "/sluzby/svatby",
    spotlightColor: "rgba(0, 0, 139, 0.15)",
  },
  {
    title: "Školy a Školky",
    description: "Od prvního dne po tabla a společné zážitky.",
    href: "/sluzby/skoly-skolky",
    spotlightColor: "rgba(139, 0, 0, 0.15)",
  },
  {
    title: "Maturitní plesy",
    description: "Vzpomínky na nezapomenutelný večer dospělosti.",
    href: "/sluzby/maturitni-plesy",
    spotlightColor: "rgba(0, 0, 139, 0.15)",
  },
  {
    title: "Další služby",
    description: "Rodinné focení, portréty, interiéry a více.",
    href: "/sluzby/dalsi-sluzby",
    spotlightColor: "rgba(139, 0, 0, 0.15)",
  },
];

const ServiceCardsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="block group">
              <SpotlightCard
                spotlightColor={service.spotlightColor}
                className="h-full group-hover:border-neutral-600 transition-colors duration-300"
              >
                {/* Obsah karty */}
                <h3 className="text-xl font-semibold text-white mb-2 font-martel">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
