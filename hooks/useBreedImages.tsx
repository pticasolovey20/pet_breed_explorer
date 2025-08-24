"use client";

import { useState, useEffect } from "react";
import { BreadType, BreedImageData } from "@/types/breeds";

import { fetchCatBreedImages } from "@/API/catAPI";
import { fetchDogBreedImages } from "@/API/dogAPI";

export const useBreedImages = (
  breedId: string,
  breedType: BreadType,
  limit: number = 10
) => {
  const [images, setImages] = useState<BreedImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    if (!breedId || !breedType) return;

    setIsLoading(true);
    setError(null);

    try {
      let imagesData: BreedImageData[];

      if (breedType === "cat") {
        imagesData = await fetchCatBreedImages(breedId, limit);
      } else {
        imagesData = await fetchDogBreedImages(breedId, limit);
      }

      setImages(imagesData);
    } catch (error) {
      setError("Failed to fetch breed images");
      console.error(`Failed to fetch ${breedType} breed images:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    images,
    isLoading,
    error,
  };
};
