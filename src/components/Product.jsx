import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ ProductImg, BadgeTxt, BadgeTitle, BadgePrice }) => {
  return (
    <>
      <div className="relative group">
        <Image imgSrc={ProductImg} />
        <Badge BadgeTxt={BadgeTxt} className={`absolute top-5 left-5`} />
        <div className="p-5 absolute bottom-0 left-0 w-full invisible group-hover:visible group-hover:bg-white group-hover:text-mPrimary duration-500 ease-in-out transition">
          <Flex className={`justify-end pb-4`}>
            <h3 className="pr-4 font-normal text-[16px] text-[#767676] font-dm hover:text-mPrimary duration-500 ease-in-out transition">
              Add to Wish List
            </h3>
            <FaHeart />
          </Flex>
          <Flex className={`justify-end pb-4`}>
            <h3 className="pr-4 font-normal text-[16px] text-[#767676] font-dm hover:text-mPrimary duration-500 ease-in-out transition">
              Compare
            </h3>
            <LuRefreshCcw />
          </Flex>
          <Flex className={`justify-end`}>
            <h3 className="pr-4 font-normal text-[16px] text-[#767676] font-dm hover:text-mPrimary duration-500 ease-in-out transition">
              Add to Cart
            </h3>
            <FaShoppingCart />
          </Flex>
        </div>
      </div>
      <Flex className={`justify-between mt-6`}>
        <h3 className="font-bold text-[20px] text-mPrimary font-dm">
          {BadgeTitle}
        </h3>
        <h3 className="font-normal text-[16px] leading-[30px] text-[#767676] font-dm">
          {BadgePrice}
        </h3>
      </Flex>
    </>
  );
};

export default Product;
