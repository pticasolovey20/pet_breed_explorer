import { ReactNode, Fragment } from "react";
import HomeButton from "@/ui/HomeButton";

interface BreedLayoutProps {
  children: ReactNode;
}

const BreedLayout = ({ children }: BreedLayoutProps) => {
  return (
    <Fragment>
      <HomeButton />
      {children}
    </Fragment>
  );
};

export default BreedLayout;
