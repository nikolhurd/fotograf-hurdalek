"use client";

import React, { useState } from "react";
import { ColumnsPhotoAlbum, Photo } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// --- Props pro komponentu ---
interface GalleryGridProps {
  photos: Photo[];
}

// --- Komponenta Galerie ---
const GalleryGrid: React.FC<GalleryGridProps> = ({ photos }) => {
  const [index, setIndex] = useState(-1);

  const openLightbox = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };

  const closeLightbox = () => {
    setIndex(-1);
  };

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <ColumnsPhotoAlbum
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1;
          if (containerWidth < 1024) return 2;
          return 3;
        }}
        spacing={8}
        onClick={({ index: clickedIndex }) => openLightbox(clickedIndex)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={closeLightbox}
        slides={photos}
      />
    </div>
  );
};

export default GalleryGrid;
