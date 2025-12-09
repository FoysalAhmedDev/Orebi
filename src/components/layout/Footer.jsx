import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "/src/components/Heading";
import { Link } from "react-router-dom";
import Image from "../Image";
import Logo from "/src/assets/OREBI©.png";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    // <div className='bg-amber-400 text-center p-10 text-3xl capitalize'>Footer</div>
    <>
      <div className="pt-14 pb-16 bg-[#F5F5F3]">
        <Container>
          <Flex className={`justify-between`}>
            <div className="">
              <Heading
                text={`MENU`}
                as={`h2`}
                className={`pb-4 font-bold text-[16px] leading-[23px] text-mPrimary`}
              />
              <ul>
                <li>
                  <Link
                    to={`/`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={`shop`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to={`about`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={`contacts`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    to={`journal`}
                    className="font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Heading
                text={`SHOP`}
                as={`h2`}
                className={`pb-4 font-bold text-[16px] leading-[23px] text-mPrimary`}
              />
              <ul>
                <li>
                  <Link
                    // to={`/`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link
                    // to={`shop`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Category 2
                  </Link>
                </li>
                <li>
                  <Link
                    // to={`about`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Category 3
                  </Link>
                </li>
                <li>
                  <Link
                    // to={`contacts`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Category 4
                  </Link>
                </li>
                <li>
                  <Link
                    // to={`journal`}
                    className="font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Category 5
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Heading
                text={`HELP`}
                as={`h2`}
                className={`pb-4 font-bold text-[16px] leading-[23px] text-mPrimary`}
              />
              <ul>
                <li>
                  <Link
                    // to={`/`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    // to={`shop`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    // to={`about`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Special E-shop
                  </Link>
                </li>
                <li>
                  <Link
                    // to={`contacts`}
                    className="pb-1.5 font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link
                    // to={`journal`}
                    className="font-normal text-[14px] leading-[23px] text-[#6D6D6D] hover:font-bold hover:text-mPrimary duration-500 ease-in-out transition"
                  >
                    Secure Payments3
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Link
                to={``}
                className="pb-4 font-bold text-[16px] leading-[27px] text-mPrimary"
              >
                <h2 className="">(052) 611-5711</h2>
              </Link>
              <Link
                to={`mailto:foysalmoktadir2019@gmail.com`}
                className="pb-4 font-bold text-[16px] leading-[27px] text-mPrimary"
              >
                company@domain.com
              </Link>
              <Heading
                text={`575 Crescent Ave. Quakertown, PA 18951`}
                as={`address`}
                className={`font-normal text-[14px] leading-[23px] text-[#6D6D6D]`}
              />
            </div>
            <div className="">
              <Link to={`/`}>
                <Image imgSrc={Logo} />
              </Link>
            </div>
          </Flex>
          <CopyRight/>
        </Container>
      </div>
    </>
  );
};

export default Footer;
