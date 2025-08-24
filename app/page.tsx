import { Fragment, Suspense } from "react";
import BreedSearch from "@/components/BreedSearch";
import BreedList from "@/components/BreedList";

const HomePage = () => {
  return (
    <Fragment>
      <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold uppercase">
        Breeds list
      </h1>

      <Suspense>
        <BreedSearch />
      </Suspense>

      <Suspense>
        <BreedList />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
