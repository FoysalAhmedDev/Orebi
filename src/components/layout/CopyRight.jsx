import React from "react";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const CopyRight = () => {
  return (
    <div className="pt-16 pb-15">
      <Flex className={`justify-between`}>
        <div className="flex gap-x-6 text-mPrimary">
          <Link className="hover:text-[20px] hover:duration-500 hover:ease-in-out hover:transition">
            <FaFacebookF />
          </Link>
          <Link className="hover:text-[20px] hover:duration-500 hover:ease-in-out hover:transition">
            <FaLinkedinIn />
          </Link>
          <Link className="hover:text-[20px] hover:duration-500 hover:ease-in-out hover:transition">
            <FaInstagram />
          </Link>
        </div>
        <div className="">
          <Link to={``}>
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default CopyRight;
