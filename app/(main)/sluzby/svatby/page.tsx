import React from "react";
import type { Metadata } from "next";

import { PricingSection3Col } from "@/app/components/PricingSection3Col";
import { PricingList } from "../../../components/PricingList";
import GalleryGrid from "../../../components/GalleryGrid";
import { getGalleryPhotosByCategory } from "@/studio/lib/utils";
import { weddingPricingOptions, weddingAddons } from "./data";

export const metadata: Metadata = {
  title: "Svatební fotografie | Martin Hurdálek",
  description: "Profesionální svatební fotograf pro váš velký den.",
};

export default async function SvatbyPage() {
  const photos = await getGalleryPhotosByCategory("svatby");

  return (
    <div>
      <h1 className="heading">Svatební fotografie</h1>
      <p className="container mx-auto px-4 text-center text-lg text-gray-300 mb-12 max-w-3xl">
        Zachytím neopakovatelnou atmosféru vašeho svatebního dne, od ranních
        příprav až po večerní oslavu. Mým cílem jsou autentické a emotivní
        snímky, které vám budou připomínat každý detail.
      </p>

      {photos && photos.length > 0 ? (
        <GalleryGrid photos={photos} />
      ) : (
        <p className="text-center text-gray-400 my-8">
          Žádné svatební fotografie k zobrazení.
        </p>
      )}

      <PricingSection3Col
        title="Svatební balíčky"
        options={weddingPricingOptions}
      />

      <PricingList title="Doplňkové služby" items={weddingAddons} />
    </div>
  );
}
