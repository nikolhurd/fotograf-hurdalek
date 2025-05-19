import React from "react";

interface PricingListItem {
  name: string;
  price: string;
  description?: string;
}

// Props pro celou sekci seznamu
interface PricingListProps {
  title?: string;
  items: PricingListItem[];
}

const PricingList: React.FC<PricingListProps> = ({ title, items }) => {
  if (!items || items.length === 0) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 font-martel">
            {title}
          </h2>
          <p className="text-gray-400">Žádné položky k zobrazení.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {" "}
        <h2 className="text-3xl font-bold text-white mb-8 font-martel">
          {title}
        </h2>
        <div className="space-y-4">
          {" "}
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start gap-4 pb-4 border-b border-gray-700/50"
            >
              <div className="flex-1">
                {" "}
                <h3 className="text-lg font-medium text-white">{item.name}</h3>
                {item.description && (
                  <p className="text-sm text-gray-400 mt-1">
                    {item.description}
                  </p>
                )}
              </div>

              <p className="text-lg font-semibold text-red-500 flex-shrink-0 text-right">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PricingList }; // Pojmenovaný export
export type { PricingListItem }; // Export typu pro použití jinde
