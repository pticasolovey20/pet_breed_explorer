import { ReactNode } from "react";
import { classNames } from "@/utils/classNames";

interface SkeletonProps {
  className?: string;
  children?: ReactNode;
}

const Skeleton = ({ className, children }: SkeletonProps) => {
  return (
    <div className={classNames("rounded bg-gray-200 animate-pulse", className)}>
      {children}
    </div>
  );
};

export default Skeleton;
