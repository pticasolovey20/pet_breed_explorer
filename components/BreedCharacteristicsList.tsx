import { BreedData } from "@/types/breeds";

interface BreedCharacteristicsListProps {
  breed: BreedData;
}

const BreedCharacteristicsList = ({ breed }: BreedCharacteristicsListProps) => {
  return (
    <ul className="space-y-1 text-lg mt-6">
      {breed?.bred_for && (
        <li>
          <span className="font-semibold">Bred for:</span> {breed.bred_for}
        </li>
      )}

      {breed?.breed_group && (
        <li>
          <span className="font-semibold">Breed group:</span>{" "}
          {breed.breed_group}
        </li>
      )}

      {breed?.height && (
        <li>
          <span className="font-semibold">Height:</span> {breed.height.imperial}{" "}
          ({breed.height.metric} cm)
        </li>
      )}

      {breed?.weight && (
        <li>
          <span className="font-semibold">Weight:</span> {breed.weight.imperial}{" "}
          lbs ({breed.weight.metric} kg)
        </li>
      )}

      {breed?.life_span && (
        <li>
          <span className="font-semibold">Life span:</span> {breed.life_span}
        </li>
      )}

      {breed?.origin && (
        <li>
          <span className="font-semibold">Origin:</span> {breed.origin}
        </li>
      )}

      {breed?.temperament && (
        <li>
          <span className="font-semibold">Temperament:</span>{" "}
          {breed.temperament}
        </li>
      )}
    </ul>
  );
};

export default BreedCharacteristicsList;
