export interface BreadsErrorsData {
  cats: string | null;
  dogs: string | null;
}

export type BreadType = "cat" | "dog";

export interface BreedData {
  id: string | number;
  name: string;
  type: BreadType;
}

export interface BreedDetailData {}
