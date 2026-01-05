import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div className={`animate-pulse bg-zinc-700/70 ${className}`} />
  );
};

export default Skeleton;
