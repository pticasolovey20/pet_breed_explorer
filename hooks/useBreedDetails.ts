"use client";

import { useState, useCallback, useEffect } from "react";
import { BreadType, BreedData } from "@/types/breeds";

import { fetchCatBreedById } from "@/API/catAPI";
import { fetchDogBreedById } from "@/API/dogAPI";

export const useBreedDetails = (breedId: string, breedType: BreadType) => {
  const [breed, setBreed] = useState<BreedData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBreedDetail = useCallback(async () => {
    if (!breedId || !breedType) return;

    setIsLoading(true);
    setError(null);

    try {
      let breedData: BreedData;

      if (breedType === "cat") {
        breedData = await fetchCatBreedById(breedId);
      } else {
        breedData = await fetchDogBreedById(breedId);
      }

      setBreed(breedData);
    } catch (error) {
      setError("Failed to fetch breed details");
      console.error(`Failed to fetch ${breedType} breed details:`, error);
    } finally {
      setIsLoading(false);
    }
  }, [breedId, breedType]);

  useEffect(() => {
    fetchBreedDetail();
  }, [fetchBreedDetail]);

  return {
    breed,
    isLoading,
    error,
  };
};
