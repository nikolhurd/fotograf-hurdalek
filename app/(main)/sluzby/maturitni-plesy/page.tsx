import React from "react";
import type { Metadata } from "next";

import { PricingSection2Col } from "@/app/components/PricingSection2col";
import { PricingOption } from "@/app/components/PricingSection";
import GalleryGrid from "../../../components/GalleryGrid";
import { getGalleryPhotosByCategory } from "@/sanityUtils";

export const metadata: Metadata = {
  title: "Fotografování Maturitních plesů | Martin Hurdálek",
};

const plesPricingOptions: PricingOption[] = [
  {
    title: "Standardní balíček",
    price: "od 10 000 Kč",
    description:
      "Kompletní reportáž z plesu, včetně nástupu, šerpování, předtančení a volné zábavy.",
    features: [
      "Focení po celou dobu plesu (cca 6-8 hodin)",
      "Skupinové fotografie tříd",
      "Min. 300 upravených fotografií",
      "Online galerie pro maturanty i hosty",
    ],
    cta: { text: "Nezávazně poptat", href: "/kontakt" },
  },
  {
    title: "Balíček s fotokoutkem",
    price: "od 14 000 Kč",
    description:
      "Standardní balíček rozšířený o populární fotokoutek s rekvizitami a okamžitým náhledem.",
    features: [
      "Vše ze Standardního balíčku",
      "Provoz fotokoutku (cca 3 hodiny)",
      "Zábavné rekvizity",
      "Okamžitý náhled fotek z fotokoutku",
    ],
    cta: { text: "Nezávazně poptat", href: "/kontakt" },
  },
];

export default async function MaturitniPlesyPage() {
  const photos = await getGalleryPhotosByCategory("plesy");

  return (
    <div>
      <h1 className="heading">Maturitní plesy</h1>
      <p className="container mx-auto px-4 text-center text-lg text-gray-300 mb-12 max-w-3xl">
        Zachytím jedinečnou atmosféru vašeho maturitního plesu, od slavnostního
        nástupu až po bujarou zábavu. Vytvořím vzpomínky, ke kterým se budete
        rádi vracet.
      </p>

      {photos && photos.length > 0 ? (
        <GalleryGrid photos={photos} />
      ) : (
        <p className="text-center text-gray-400 my-8">
          Žádné fotografie z maturitních plesů k zobrazení.
        </p>
      )}

      <PricingSection2Col
        title="Ceník - Maturitní plesy"
        options={plesPricingOptions}
      />
    </div>
  );
}
