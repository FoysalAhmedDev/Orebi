import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/Banner.png)] h-[580px] bg-no-repeat bg-center bg-cover relative">
        <Link to={`/shop`}>
          <Button
            btnTxt={`Shop Now`}
            className={`font-bold text-[14px] absolute top-[350px] left-[290px] cursor-pointer`}
          />
        </Link>
      </div>
    </>
  );
};

export default Banner;
