"use client";

import { usePetBreeds } from "@/hooks/usePetBreeds";

import Link from "next/link";

const BreedList = () => {
  const { breeds } = usePetBreeds();

  return (
    <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {breeds.map(({ id, name, type }) => (
        <li key={id} className="min-w-0 sm:aspect-square">
          <div className="w-full h-full border">
            <Link href={`/breed/${type}/${id}`}>
              <span>{name}</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BreedList;
