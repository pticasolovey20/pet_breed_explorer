"use client";

import { BreadType } from "@/types/breeds";
import { useBreedDetails } from "@/hooks/useBreedDetails";
import { useBreedImages } from "@/hooks/useBreedImages";

interface BreedDetailsProps {
  id: string;
  type: BreadType;
}

const BreedDetails = ({ id, type }: BreedDetailsProps) => {
  const { breed } = useBreedDetails(id, type);
  const { images } = useBreedImages(id, type);

  console.log(breed);
  console.log(images);

  return (
    <div>
      <h1>{breed?.name}</h1>
      <h2>{type}</h2>
    </div>
  );
};

export default BreedDetails;
