"use client";

import { BreadType } from "@/types/breeds";
import { useBreedDetails } from "@/hooks/useBreedDetails";
import { useBreedImages } from "@/hooks/useBreedImages";

import Empty from "@/ui/Empty";
import { Fragment } from "react";
import Skeleton from "@/ui/Skeleton";

interface BreedDetailsProps {
  id: string;
  type: BreadType;
}

const BreedDetails = ({ id, type }: BreedDetailsProps) => {
  const { breed, isLoading, error } = useBreedDetails(id, type);
  const { images } = useBreedImages(id, type);

  console.log(images);

  if (!!error) {
    return (
      <Empty content="Sorry, we couldn't load information about this breed" />
    );
  }

  return (
    <div>
      {isLoading ? (
        <Fragment>
          <Skeleton className="w-[250px] h-10 mt-6" />
          <Skeleton className="w-[400px] h-14 mt-4" />
        </Fragment>
      ) : (
        <Fragment>
          {breed?.name && (
            <h1 className="text-2xl md:text-3xl font-semibold mt-6">
              Breed name: {breed.name}
            </h1>
          )}

          {breed?.description && (
            <p className="text-lg mt-4">
              Breed deescription: {breed.description}
            </p>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default BreedDetails;
