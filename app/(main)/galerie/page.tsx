import React from "react";
import { client } from "../../../fotograf-hurdalek/.sanity/client.ts";
import { Photo } from "react-photo-album";
import GalleryGrid from "@/app/components/GalleryGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie | Fotograf Martin Hurdálek",
  description: "Prohlédněte si ukázky práce fotografa Martina Hurdálka.",
};

// Definujeme typ pro data vrácená ze Sanity
interface SanityGalleryImage {
  _id: string;
  title?: string;
  alt?: string;
  imageUrl: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
      aspectRatio: number;
    };
  };
  category?: string;
}

// Funkce pro načtení dat ze Sanity
async function getGalleryPhotos(): Promise<Photo[]> {
  const query = `*[_type == "galleryImage"]{
          _id,
          title,
          alt,
          "imageUrl": image.asset->url,
          "metadata": image.asset->metadata { dimensions }
        }`;

  try {
    const sanityData: SanityGalleryImage[] = await client.fetch(query);

    const photosForAlbum: Photo[] = sanityData
      .filter((img) => img.metadata?.dimensions)
      .map((img) => ({
        key: img._id,
        src: img.imageUrl,
        width: img.metadata.dimensions.width,
        height: img.metadata.dimensions.height,
        alt: img.alt || img.title || "Galerie fotografie",
      }));

    return photosForAlbum;
  } catch (error) {
    console.error("Error fetching Sanity data:", error);
    return [];
  }
}

// Komponenta stránky
export default async function GaleriePage() {
  const photos = await getGalleryPhotos();

  return (
    <div>
      <h1 className="heading">Galerie</h1>

      {photos && photos.length > 0 ? (
        <GalleryGrid photos={photos} />
      ) : (
        <p className="text-center text-gray-400">
          V galerii zatím nejsou žádné fotografie nebo nastala chyba při
          načítání.
        </p>
      )}
    </div>
  );
}
