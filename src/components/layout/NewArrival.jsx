import React from "react";
import Product from "../Product";
import Container from "../Container";
import Flex from "../Flex";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <>
      <Container>
        <h3 className="pb-12 font-bold text-[39px] text-mPrimary font-dm">
          New Arrivals
        </h3>
        <Flex className={`gap-x-10`}>
          <div className="w-1/4">
            <Link to={`/shop`}>
              <Product
                ProductImg={product1}
                BadgeTxt={`New`}
                BadgeTitle={`Basic Crew Neck Tee`}
                BadgePrice={`$49.00`}
              />
            </Link>
          </div>
          <div className="w-1/4">
            <Link to={`/shop`}>
              <Product
                ProductImg={product2}
                BadgeTxt={`New`}
                BadgeTitle={`Basic Crew Neck Tee`}
                BadgePrice={`$80.00`}
              />
            </Link>
          </div>
          <div className="w-1/4">
            <Link to={`/shop`}>
              <Product
                ProductImg={product3}
                BadgeTxt={`New`}
                BadgeTitle={`Basic Crew Neck Tee`}
                BadgePrice={`$33.00`}
              />
            </Link>
          </div>
          <div className="w-1/4">
            <Link to={`/shop`}>
              <Product
                ProductImg={product4}
                BadgeTxt={`New`}
                BadgeTitle={`Basic Crew Neck Tee`}
                BadgePrice={`$27.00`}
              />
            </Link>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default NewArrival;
