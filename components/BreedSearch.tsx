"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";
import { useDebounce } from "@/hooks/useDebounce";

const BreedSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("query") || "";
  const [inputValue, setInputValue] = useState(initialQuery);
  const debouncedValue = useDebounce(inputValue, 400);

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

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="w-full lg:max-w-1/2">
      <input
        type="text"
        placeholder="Search breeds..."
        value={inputValue}
        onChange={handleSearchChange}
        className="w-full px-3 py-2 rounded-lg border-2 border-foreground bg-background outline-none"
      />
    </div>
  );
};

export default BreedSearch;
