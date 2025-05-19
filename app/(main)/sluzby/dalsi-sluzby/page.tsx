import React from "react";
import type { Metadata } from "next";

import { PricingList, PricingListItem } from "../../../components/PricingList"; // Cesta k PricingList
import GalleryGrid from "../../../components/GalleryGrid";
import { getGalleryPhotosByCategory } from "@/sanityUtils";

export const metadata: Metadata = {
  title: "Další Služby | Fotograf Martin Hurdálek",
  description:
    "Nabídka rodinného focení, fotografování interiérů, produktové fotografie a dalších služeb.",
};

const otherServicesPricingItems: PricingListItem[] = [
  {
    name: "Rodinné focení (exteriér/interiér)",
    price: "od 3 500 Kč",
    description:
      "Zachycení přirozených momentů vaší rodiny, cca 1-1,5 hodiny focení.",
  },
  {
    name: "Fotografování interiérů/nemovitostí",
    price: "dle rozsahu",
    description:
      "Profesionální fotografie pro realitní kanceláře, hotely, restaurace nebo soukromé účely.",
  },
  {
    name: "Produktová fotografie",
    price: "dle domluvy",
    description:
      "Fotografie produktů pro e-shopy, katalogy nebo reklamní materiály.",
  },
  {
    name: "Reportáž z akce (firemní, oslavy)",
    price: "od 5 000 Kč",
    description: "Diskrétní zachycení atmosféry vaší akce.",
  },
];

export default async function DalsiSluzbyPage() {
  const photos = await getGalleryPhotosByCategory("ostatni");

  return (
    <div>
      <h1 className="heading">Další služby</h1>
      <p className="container mx-auto px-4 text-center text-lg text-gray-300 mb-12 max-w-3xl">
        Kromě hlavních specializací nabízím i další fotografické služby. Pokud
        máte specifické přání nebo projekt, neváhejte mě kontaktovat.
      </p>

      {photos && photos.length > 0 ? (
        <GalleryGrid photos={photos} />
      ) : (
        <p className="text-center text-gray-400 my-8">
          Žádné další ukázkové fotografie k zobrazení.
        </p>
      )}

      <PricingList title="Orientační ceník" items={otherServicesPricingItems} />
    </div>
  );
}
