import { BreedData } from "@/types/breeds";

const BASE_URL = process.env.NEXT_PUBLIC_CAT_BASE_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_CAT_API_KEY as string;

export const fetchCatBreeds = async (): Promise<BreedData[]> => {
  const URL = `${BASE_URL}/breeds`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  });

  const data = await response.json();

  return data.map((cat: BreedData) => ({
    ...cat,
    type: "cat" as const,
  }));
};
