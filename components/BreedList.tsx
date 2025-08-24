"use client";

import { usePetBreeds } from "@/hooks/usePetBreeds";

import BreedCard from "./BreedCard";

const BreedList = () => {
  const { breeds } = usePetBreeds();

  return (
    <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {breeds.map((breed) => (
        <li key={breed.id} className="min-w-0 sm:aspect-square">
          <BreedCard breed={breed} />
        </li>
      ))}
    </ul>
  );
};

export default BreedList;
