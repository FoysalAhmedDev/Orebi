import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Ads1 from "/src/assets/Ads1.jpg";
import Ads2 from "/src/assets/Ads2.png";
import Ads3 from "/src/assets/Ads3.jpg";
import { Link } from "react-router-dom";
import Button from "../Button";

const Sales = () => {
  return (
    <>
      <div className="pt-35 pb-32">
        <Container>
          {/* <Flex className={`gap-x-10`}>
            <div className="relative">
              <Image imgSrc={Ads1} />
              <Link to={`/shop`}>
                <Button
                  btnTxt={`Shop Now`}
                  className={`absolute left-[45px] bottom-[45px]`}
                />
              </Link>
            </div>
            <div className="space-y-9">
              <div className="relative">
                <Image imgSrc={Ads2} />
                <Link to={`/shop`}>
                  <Button
                    btnTxt={`Shop Now`}
                    className={`absolute left-[45px] bottom-[45px]`}
                  />
                </Link>
              </div>
              <div className="relative">
                <Image imgSrc={Ads3} />
                <Link to={`/shop`}>
                  <Button
                    btnTxt={`Shop Now`}
                    className={`absolute left-[45px] bottom-[45px]`}
                  />
                </Link>
              </div>
            </div>
          </Flex> */}
          <Flex className={`gap-x-10`}>
            <div className="">
              <Link to={`/shop`}>
                <Image imgSrc={Ads1} />
              </Link>
            </div>
            <div className="space-y-9">
              <div className="">
                <Link to={`/shop`}>
                  <Image imgSrc={Ads2} />
                </Link>
              </div>
              <div className="">
                <Link to={`/shop`}>
                  <Image imgSrc={Ads3} />
                </Link>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Sales;
