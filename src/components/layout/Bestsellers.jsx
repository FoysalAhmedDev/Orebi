import React from "react";
import Product from "../Product";
import Container from "../Container";
import Flex from "../Flex";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import product7 from "../../assets/product7.png";
import product8 from "../../assets/product8.png";
import { Link } from "react-router-dom";

const Bestsellers = () => {
  return (
    <>
      <div className="pt-29.5 pb-32.5">
        <Container>
          <h3 className="pb-12 font-bold text-[39px] text-mPrimary font-dm">
            Our Bestsellers
          </h3>
          <Flex className={`gap-x-10`}>
            <div className="w-1/4">
              <Link to={`/shop`}>
                <Product
                  ProductImg={product5}
                  BadgeTxt={`New`}
                  BadgeTitle={`Basic Crew Neck Tee`}
                  BadgePrice={`$49.00`}
                />
              </Link>
            </div>
            <div className="w-1/4">
              <Link to={`/shop`}>
                <Product
                  ProductImg={product6}
                  BadgeTxt={`New`}
                  BadgeTitle={`Basic Crew Neck Tee`}
                  BadgePrice={`$80.00`}
                />
              </Link>
            </div>
            <div className="w-1/4">
              <Link to={`/shop`}>
                <Product
                  ProductImg={product7}
                  BadgeTxt={`New`}
                  BadgeTitle={`Basic Crew Neck Tee`}
                  BadgePrice={`$33.00`}
                />
              </Link>
            </div>
            <div className="w-1/4">
              <Link to={`/shop`}>
                <Product
                  ProductImg={product8}
                  BadgeTxt={`New`}
                  BadgeTitle={`Basic Crew Neck Tee`}
                  BadgePrice={`$27.00`}
                />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Bestsellers;
