import React from "react";
import Skeleton from "./Skeleton";

const UserCardSkeleton = () => {
  return (
    <div className="group bg-[#212123] rounded-2xl p-3 px-4 py-5 w-120 max-w-120 flex gap-5 items-center hover:bg-[#36363A] transition-all duration-300 cursor-pointer">
      {/* user image */}
      <Skeleton className={"rounded-full size-12"} />

      {/* userdetails */}
      <div className="details flex flex-col gap-1.5">
        <Skeleton className={"w-28 h-4 rounded-md"} />
        <Skeleton className={"w-38 h-2.25 rounded-md"} />
      </div>

      {/* button and status */}
      <div className="extra-details flex items-center gap-2 text-xs whitespace-nowrap">

        <Skeleton className={"w-18 h-6.5 rounded-full"} />
        <Skeleton className={"w-24 h-7 rounded-full"} />
      </div>

    </div>
  );
};

export default UserCardSkeleton;
