"use client";

import { BreedImageData } from "@/types/breeds";
import { useState, useEffect } from "react";
import { classNames } from "@/utils/classNames";

import Image from "next/image";

interface BreedGalleryProps {
  images: BreedImageData[];
}

const BreedGallery = ({ images }: BreedGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleSelectImage = (index: number) => setSelectedImage(index);

  useEffect(() => {
    setSelectedImage(0);
  }, [images]);

  return (
    <div className="w-full space-y-4 mt-4">
      <div className="relative w-full rounded-lg shadow-lg bg-muted overflow-hidden">
        {/* MAIN IMAGE */}
        <div
          className={classNames(
            "w-full h-[300px] sm:h-[400px] md:h-[500px]",
            "relative flex items-center justify-center"
          )}
        >
          <Image
            fill
            priority={selectedImage === 0}
            src={images[selectedImage].url}
            alt={`image ${selectedImage + 1}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-contain transition-opacity duration-300"
          />
        </div>
      </div>

      {/* INDICATOR */}
      {images.length > 1 && (
        <div className="flex justify-center items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Show image ${index + 1}`}
              onClick={() => handleSelectImage(index)}
              className={classNames(
                "w-4 h-4 rounded-full border-2 cursor-pointer",
                "hover:scale-110 transition-all duration-300 ease-in-out",
                index === selectedImage
                  ? "border-muted-foreground bg-primary scale-125"
                  : "border-muted bg-muted-foreground hover:bg-muted-foreground/70"
              )}
            />
          ))}
        </div>
      )}

      {/* THUMBNAINS */}
      {images.length > 1 && (
        <div className="hidden md:flex flex-wrap gap-4">
          {images.map((image, index) => (
            <div
              role="button"
              key={index}
              aria-label={`Select image ${index + 1}`}
              onClick={() => handleSelectImage(index)}
              className={classNames(
                "relative flex-shrink-0",
                "w-40 h-40 rounded-xl border-3 shadow-lg overflow-hidden",
                "hover:scale-105 transition-all duration-300",
                index === selectedImage
                  ? "border-muted-foreground shadow-lg"
                  : "border-muted hover:border-muted-foreground"
              )}
            >
              <Image
                fill
                loading="lazy"
                src={image?.url}
                alt={`thumbnail ${index + 1}`}
                className="object-cover"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BreedGallery;
