import { BreedData, BreedImageData } from "@/types/breeds";

const BASE_URL = process.env.NEXT_PUBLIC_DOG_BASE_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_DOG_API_KEY as string;

export const fetchDogBreeds = async (): Promise<BreedData[]> => {
  const URL = `${BASE_URL}/breeds`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  });

  const data = await response.json();

  return data.map((dog: BreedData) => ({
    ...dog,
    type: "dog" as const,
  }));
};

export const fetchDogBreedById = async (id: string): Promise<BreedData> => {
  const URL = `${BASE_URL}/breeds/${id}`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  });

  const data = await response.json();

  return data;
};

export const fetchDogBreedImages = async (
  id: string,
  limit: number = 10
): Promise<BreedImageData[]> => {
  const URL = `${BASE_URL}/images/search?limit=${limit}&breed_ids=${id} `;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  });

  const data = await response.json();

  return data;
};
