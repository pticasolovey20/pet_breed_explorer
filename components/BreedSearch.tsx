"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, ChangeEvent, useMemo } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { usePetBreeds } from "@/hooks/usePetBreeds";

import BreedAutoComplete from "@/components/BreedAutoComplete";

const BreedSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("query") || "";
  const [inputValue, setInputValue] = useState(initialQuery);
  const debouncedValue = useDebounce(inputValue, 400);

  const { breeds } = usePetBreeds(debouncedValue);

  const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState<boolean>(false);

  useEffect(() => {
    setInputValue(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedValue) {
      params.set("query", debouncedValue);
    } else {
      params.delete("query");
    }

    router.push("?" + params.toString());
  }, [debouncedValue, router, searchParams]);

  const handleOpenAutoComplete = () => setIsAutoCompleteOpen(true);
  const handleCloseAutoComplete = () => setIsAutoCompleteOpen(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    handleOpenAutoComplete();
  };

  const handleSelect = (breedName: string) => {
    setInputValue(breedName);
    handleCloseAutoComplete();
  };

  const autoCompleteList = useMemo(() => {
    if (!debouncedValue.trim()) return [];

    return breeds
      .filter((breed) => {
        return breed.name
          .toLowerCase()
          .startsWith(debouncedValue.toLowerCase());
      })
      .slice(0, 5);
  }, [breeds, debouncedValue]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search breeds..."
        value={inputValue}
        onChange={handleSearchChange}
        className="w-full px-3 py-2 rounded-lg border-2 border-foreground bg-background outline-none"
      />

      {autoCompleteList.length > 0 && isAutoCompleteOpen && (
        <BreedAutoComplete
          isOpen={isAutoCompleteOpen}
          handleClose={handleCloseAutoComplete}
          autoCompleteList={autoCompleteList}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default BreedSearch;
