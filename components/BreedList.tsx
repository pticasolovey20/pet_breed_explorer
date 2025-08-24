"use client";

import { usePetBreeds } from "@/hooks/usePetBreeds";

const BreedList = () => {
  const { breeds, errors } = usePetBreeds();

  console.log(breeds);
  console.log(errors);

  return (
    <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {breeds.map(({ id, name }) => (
        <li key={id} className="min-w-0 sm:aspect-square">
          <div className="w-full h-full border">
            <span>{name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BreedList;
