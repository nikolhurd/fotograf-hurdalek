import React from "react";
import Button from "./Button";
import GalleryGrid from "./GalleryGrid";
import { getLatestPhotosForHomepage } from "@/studio/lib/utils";

const HomepageGalleryPreview: React.FC = async () => {
  // Načte 6 nejnovějších fotek z definovaných kategorií
  const previewPhotos = await getLatestPhotosForHomepage(6, [
    "svatby",
    "ostatni",
    "vitani",
  ]);

  return (
    <section className="py-12 md:py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {previewPhotos && previewPhotos.length > 0 ? (
          <GalleryGrid photos={previewPhotos} />
        ) : (
          <p className="text-center text-gray-400">
            Momentálně nejsou k dispozici žádné ukázkové fotografie.
          </p>
        )}

        {/* Tlačítko pro přechod do celé galerie */}
        <div className="text-center mt-10 md:mt-12">
          <Button href="/galerie">Zobrazit celou galerii</Button>
        </div>
      </div>
    </section>
  );
};

export default HomepageGalleryPreview;
