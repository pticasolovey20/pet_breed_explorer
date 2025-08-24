export interface BreadsErrorsData {
  cats: string | null;
  dogs: string | null;
}

export interface BreedData {
  id: string | number;
  name: string;
  type: "cat" | "dog";
}
