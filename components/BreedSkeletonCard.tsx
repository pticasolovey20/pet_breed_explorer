import { classNames } from "@/utils/classNames";

import Skeleton from "@/ui/Skeleton";

const SkeletonItem = () => {
  return (
    <div
      className={classNames(
        "relative w-ful h-full flex flex-col",
        "rounded-xl shadow-lg bg-muted",
        "cursor-pointer overflow-hidden"
      )}
    >
      <Skeleton className="relative w-full h-50 sm:flex-1 rounded-b-none" />

      <div className="h-[60px] p-4">
        <Skeleton className="w-1/2 h-full  rounded-sm" />
      </div>
    </div>
  );
};

export default SkeletonItem;
