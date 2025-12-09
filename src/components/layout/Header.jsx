import React from "react";
import Image from "../Image";
import Logo from "/src/assets/OREBI©.png";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import BarIcon from "./BarIcon";
import Heading from "../Heading";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="py-8">
        <Container className={`pt-4`}>
          <Flex className={``}>
            <div className="">
              <Link to={`/`}>
                <Image imgSrc={Logo} />
              </Link>
            </div>
            <div className="mx-auto">
              <ul className="flex gap-x-10 items-center font-normal text-[14px] text-[#767676]">
                <li className="hover:font-bold hover:text-mPrimary ">
                  <Link to={`/`}>Home</Link>
                </li>
                <li className="hover:font-bold hover:text-mPrimary ">
                  <Link to={`shop`}>Shop</Link>
                </li>
                <li className="hover:font-bold hover:text-mPrimary ">
                  <Link to={`about`}>About</Link>
                </li>
                <li className="hover:font-bold hover:text-mPrimary ">
                  <Link to={`contacts`}>Contacts</Link>
                </li>
                <li className="hover:font-bold hover:text-mPrimary ">
                  <Link to={`journal`}>Journal</Link>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="py-10 bg-[#F5F5F3]">
        <Container>
          <Flex className={`justify-between`}>
            <div className="flex items-center gap-x-3">
              <BarIcon />
              <Heading
                className={`font-normal text-[14px] text-mPrimary`}
                text={"Shop by Category"}
                as={"h3"}
              />
            </div>
            <div className="flex justify-between items-center relative">
              <input
                type="text"
                placeholder="Search Products"
                className="py-4 pl-5 bg-white w-[600px] outline-none font-normal text-[14px] text-[#C4C4C4]"
              />
              <IoMdSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-mPrimary" />
            </div>
            <div className="flex items-center gap-x-5 text-mPrimary">
              <div className="flex items-center gap-x-1">
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <FaShoppingCart />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
