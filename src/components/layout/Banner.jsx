import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Link to={`/about`}>
        <div className="bg-[url(/src/assets/Banner.png)] h-[580px] bg-no-repeat bg-center bg-cover"></div>
      </Link>
    </>
  );
};

export default Banner;
