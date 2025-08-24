export interface BreadsErrorsData {
  cats: string | null;
  dogs: string | null;
}

export type BreadType = "cat" | "dog";

export interface BreedImageData {
  id: string;
  width: number;
  height: string;
  url: string;
}

export interface BreedData {
  id: string | number;
  name: string;
  type: BreadType;
  image: BreedImageData;

  description: string;
}
