import { BreedData } from "@/types/breeds";
import { Fragment } from "react";
import { classNames } from "@/utils/classNames";

interface BreedAutoompleteProps {
  isOpen: boolean;
  handleClose: () => void;
  autoCompleteList: BreedData[];
  handleSelect: (name: string) => void;
}

const BreedAutoComplete = ({
  isOpen,
  handleClose,
  autoCompleteList,
  handleSelect,
}: BreedAutoompleteProps) => {
  return (
    <Fragment>
      <div
        onClick={handleClose}
        className={classNames(
          "fixed inset-0 bg-black/30 z-[10]",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "transition-opacity duration-200 ease-in-out"
        )}
      />

      <ul className="absolute top-12 w-full border rounded-lg shadow-lg bg-background z-[20]">
        {autoCompleteList.map((breed) => (
          <li
            key={breed.id}
            onClick={() => handleSelect(breed.name)}
            className="px-4 py-2 cursor-pointer hover:bg-accent/20"
          >
            {breed.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default BreedAutoComplete;
