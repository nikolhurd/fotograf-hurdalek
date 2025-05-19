import React from "react";
import type { Metadata } from "next";

// Importujeme komponenty (uprav cesty podle potřeby)
import { PricingList, PricingListItem } from "../../../components/PricingList";
import GalleryGrid from "../../../components/GalleryGrid";
import { getGalleryPhotosByCategory } from "@/studio/lib/utils";
import { Photo } from "react-photo-album";

// Metadata pro stránku
export const metadata: Metadata = {
  title: "Focení ve Školách a Školkách | Martin Hurdálek",
  description:
    "Nabídka fotografování ve školách a školkách - třídní fotky, tabla, vánoční a jarní focení.",
};

// --- Definice dat pro jednotlivé ceníky ---

const vanocniPricingItems: PricingListItem[] = [
  {
    name: "Sada vánočních fotografií (3 ks)",
    price: "250 Kč",
    description: "Včetně digitální verze.",
  },
  { name: "Společná vánoční fotografie třídy", price: "60 Kč / ks" },
];

const jarniPricingItems: PricingListItem[] = [
  {
    name: "Sada jarních fotografií (3 ks)",
    price: "250 Kč",
    description: "Včetně digitální verze.",
  },
  { name: "Společná jarní fotografie třídy", price: "60 Kč / ks" },
];

const prvnacciPricingItems: PricingListItem[] = [
  {
    name: 'Památeční sada "Můj první školní den"',
    price: "300 Kč",
    description: "Portrét a momentky.",
  },
  { name: "Společná fotografie 1. třídy", price: "60 Kč / ks" },
];

const tablaPricingItems: PricingListItem[] = [
  {
    name: "Fotografování na tablo (portrét)",
    price: "100 Kč / žák",
    description: "Včetně základní retuše.",
  },
  { name: "Grafický návrh tabla", price: "dle domluvy" },
];

const konecRokuPricingItems: PricingListItem[] = [
  { name: "Společná fotografie třídy", price: "60 Kč / ks" },
  { name: "Fotografie skupinky", price: "40 Kč / ks" },
];

// --- Komponenta stránky ---
export default async function SkolySkolkyPage() {
  const [
    vanocniPhotos,
    jarniPhotos,
    prvnacciPhotos,
    tablaPhotos,
    konecRokuPhotos,
  ] = await Promise.all([
    getGalleryPhotosByCategory("skoly-vanocni"),
    getGalleryPhotosByCategory("skoly-jarni"),
    getGalleryPhotosByCategory("skoly-prvnacci"),
    getGalleryPhotosByCategory("skoly-tabla"),
    getGalleryPhotosByCategory("skoly-konec-roku"),
  ]);

  const renderThemeSection = (
    title: string,
    description: string,
    photos: Photo[],
    pricingItems: PricingListItem[]
  ) => (
    <section
      className="mb-16 md:mb-20 scroll-mt-20"
      id={title.toLowerCase().replace(/\s+/g, "-")}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-4 font-martel">
        {title}
      </h2>
      <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      {photos && photos.length > 0 ? (
        <div className="mb-8">
          <GalleryGrid photos={photos} />
        </div>
      ) : (
        <p className="text-center text-gray-500 my-4 italic">
          Galerie pro toto téma je zatím prázdná.
        </p>
      )}
      {pricingItems && pricingItems.length > 0 && (
        <PricingList items={pricingItems} /> // Nadpis ceníku zde není potřeba
      )}
      <hr className="my-16 md:my-20 border-gray-700/50 max-w-xl mx-auto" />
    </section>
  );

  return (
    <div>
      <h1 className="heading">Školy a Školky</h1>

      <p className="container mx-auto px-4 text-center text-lg text-gray-300 mb-12 max-w-3xl">
        Nabízím různé typy fotografování pro mateřské a základní školy v průběhu
        celého roku. Podívejte se na jednotlivé možnosti níže.
      </p>

      <div className="container mx-auto px-4">
        {renderThemeSection(
          "Vánoční focení",
          "Zachytíme kouzelnou vánoční atmosféru s vašimi dětmi. Nabízíme individuální i skupinové fotografie s tématickými rekvizitami.",
          vanocniPhotos,
          vanocniPricingItems
        )}

        {renderThemeSection(
          "Jarní focení",
          "Veselé a barevné fotografie na přivítání jara. Ideální pro vytvoření krásných portrétů a skupinových snímků.",
          jarniPhotos,
          jarniPricingItems
        )}

        {renderThemeSection(
          "Focení prvňáčků",
          "Památka na první školní den nebo první vysvědčení. Zachytíme hrdost a radost vašich malých školáků.",
          prvnacciPhotos,
          prvnacciPricingItems
        )}

        {renderThemeSection(
          "Fotografování na tabla",
          "Stylové portrétní fotografie pro maturitní tabla. Možnost focení v ateliéru nebo exteriéru.",
          tablaPhotos,
          tablaPricingItems
        )}

        {renderThemeSection(
          "Konec školního roku",
          "Společné fotografie tříd a skupinek kamarádů jako vzpomínka na uplynulý školní rok.",
          konecRokuPhotos,
          konecRokuPricingItems
        )}
      </div>
    </div>
  );
}
