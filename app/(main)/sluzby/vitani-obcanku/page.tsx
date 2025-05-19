import React from "react";
import type { Metadata } from "next";

import { PricingSection2Col } from "@/app/components/PricingSection2col";
import { PricingOption } from "@/app/components/PricingSection";
import GalleryGrid from "../../../components/GalleryGrid";
import { getGalleryPhotosByCategory } from "../../../../fotograf-hurdalek/.sanity/utils";

export const metadata: Metadata = {
  title: "Vítání občánků | Fotograf Martin Hurdálek",
};

const vitaniObcankuPricingOptions: PricingOption[] = [
  {
    title: "Základní balíček",
    price: "2 500 Kč",
    description:
      "Fotografování samotného slavnostního aktu vítání občánků a společné fotografie rodiny.",
    features: [
      "cca 1 hodina focení",
      "Min. 20 upravených fotografií",
      "Online galerie ke stažení",
    ],
  },
  {
    title: "Rozšířený balíček",
    price: "4 000 Kč",
    description:
      "Zahrnuje focení aktu, společné fotografie rodiny a navíc krátké focení miminka a rodiny v blízkém exteriéru nebo u vás doma (po domluvě).",
    features: [
      "cca 1,5 - 2 hodiny focení",
      "Min. 40 upravených fotografií",
      "Online galerie ke stažení",
      "Tištěná fotografie 13x18 cm",
    ],
  },
];

// --- Komponenta stránky ---
export default async function VitaniObcankuPage() {
  const photos = await getGalleryPhotosByCategory("vitani");

  return (
    <div>
      <h1 className="heading">Vítání občánků</h1>

      <p className="container mx-auto px-4 text-center text-lg text-gray-300 mb-12 max-w-3xl">
        Zachytím první slavnostní okamžiky vašeho miminka při oficiálním
        přivítání mezi občany. Vytvořím památku na tento jedinečný den pro celou
        vaši rodinu.
      </p>

      {photos && photos.length > 0 ? (
        <GalleryGrid photos={photos} />
      ) : (
        <p className="text-center text-gray-400 my-8">
          Žádné fotografie z vítání občánků k zobrazení.
        </p>
      )}

      <PricingSection2Col
        title="Ceník - Vítání občánků"
        options={vitaniObcankuPricingOptions}
      />
    </div>
  );
}
