import { Fragment } from "react";
import BreedSearch from "@/components/BreedSearch";
import BreedList from "@/components/BreedList";

const HomePage = () => {
  return (
    <Fragment>
      <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold uppercase">
        Breeds list
      </h1>

      <BreedSearch />
      <BreedList />
    </Fragment>
  );
};

export default HomePage;
