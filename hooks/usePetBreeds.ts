"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { BreedData, BreadsErrorsData } from "@/types/breeds";

import { fetchCatBreeds } from "@/API/catAPI";
import { fetchDogBreeds } from "@/API/dogAPI";

export const usePetBreeds = (query: string) => {
  const [breeds, setBreeds] = useState<BreedData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<BreadsErrorsData>({
    cats: null,
    dogs: null,
  });

  const fetchBreeds = useCallback(async () => {
    setIsLoading(true);
    setErrors({
      cats: null,
      dogs: null,
    });

    try {
      const results = await Promise.allSettled([
        fetchCatBreeds(),
        fetchDogBreeds(),
      ]);

      const breeds = [];
      const newErrors = {
        cats: null,
        dogs: null,
      };

      if (results[0].status === "fulfilled") {
        breeds.push(...results[0].value);
      } else {
        newErrors.cats = results[0].reason?.message;
        console.error("Failed to fetch cat breeds:", results[0].reason);
      }

      if (results[1].status === "fulfilled") {
        breeds.push(...results[1].value);
      } else {
        newErrors.dogs = results[1].reason?.message;
        console.error("Failed to fetch dog breeds:", results[1].reason);
      }

      const sortedBreeds = breeds.sort((a, b) => a.name.localeCompare(b.name));

      setBreeds(sortedBreeds);
      setErrors(newErrors);
    } catch (error) {
      console.error("Unexpected error during breeds loading:", error);

      setErrors({
        cats: "Unexpected error occurred",
        dogs: "Unexpected error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  const filteredBreeds = useMemo(() => {
    if (!query) return breeds;

    return breeds.filter((breed) => {
      return breed.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [breeds, query]);

  return {
    breeds: filteredBreeds,
    isLoading,
    errors,
    isEmpty: filteredBreeds.length === 0,
  };
};
