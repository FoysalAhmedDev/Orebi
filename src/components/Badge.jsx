import React from "react";

const Badge = ({ className, BadgeTxt }) => {
  return (
    <div
      className={`w-23 bg-black py-2.25 px-7.5 text-white font-bold text-sm font-dm ${className}`}
    >
      {BadgeTxt}
    </div>
  );
};

export default Badge;
