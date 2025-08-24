import { BreedData } from "@/types/breeds";
import { classNames } from "@/utils/classNames";

import Link from "next/link";
import Image from "next/image";

interface BreedCardProps {
  breed: BreedData;
}

const BreedCard = ({ breed }: BreedCardProps) => {
  return (
    <div
      className={classNames(
        "w-full h-full",
        "border border-gray-300/50 rounded-xl",
        "shadow-lg bg-white/60 overflow-hidden",
        "hover:shadow-xl hover:-translate-y-1",
        "transition-transform duration-300"
      )}
    >
      <Link
        href={`/breed/${breed.type}/${breed.id}`}
        aria-label={`Go to ${breed.type} breed details page`}
        className="w-full h-full flex flex-col"
      >
        <div className="relative shrink-0 h-50 sm:flex-1 bg-gray-200">
          <Image
            fill
            quality={75}
            loading="lazy"
            src={breed.image?.url || "/placeholder.webp"}
            alt={`${breed.name} image`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover z-[0]"
          />
        </div>

        <div className="w-full p-4 truncate">
          <span className="w-full text-xl font-medium uppercase">
            {breed.name}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BreedCard;
