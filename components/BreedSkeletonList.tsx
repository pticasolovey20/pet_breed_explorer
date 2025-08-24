import BreedSkeletonCard from "@/components/BreedSkeletonCard";

const BreedSkeletonList = () => {
  return (
    <ul className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <li key={index} className="min-w-0 sm:aspect-square">
          <BreedSkeletonCard />
        </li>
      ))}
    </ul>
  );
};

export default BreedSkeletonList;
