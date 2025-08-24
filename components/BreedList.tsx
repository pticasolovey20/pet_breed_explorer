"use client";

import { usePetBreeds } from "@/hooks/usePetBreeds";

import BreedSkeletonList from "@/components/BreedSkeletonList";
import Empty from "@/ui/Empty";
import { Fragment } from "react";
import BreedErrorNotification from "@/components/BreedErrorNotification";
import BreedCard from "@/components/BreedCard";

const BreedList = () => {
  const { breeds, isLoading, errors, isEmpty } = usePetBreeds();

  if (isLoading) return <BreedSkeletonList />;

  if (isEmpty) {
    return (
      <Empty content="No breeds available at the moment. Please try again later" />
    );
  }

  return (
    <Fragment>
      {errors.dogs && !isEmpty && (
        <BreedErrorNotification
          className="mt-4"
          content="Dog breeds temporarily unavailable"
        />
      )}

      {errors.cats && !isEmpty && (
        <BreedErrorNotification
          className="mt-4"
          content="Cat breeds temporarily unavailable"
        />
      )}

      <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {breeds.map((breed) => (
          <li key={breed.id} className="min-w-0 sm:aspect-square">
            <BreedCard breed={breed} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default BreedList;
