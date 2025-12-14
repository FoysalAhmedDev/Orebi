import React from 'react'
import Product from "../Product";
import Container from "../Container";
import Flex from "../Flex";
import product9 from "../../assets/product9.png";
import product10 from "../../assets/product10.png";
import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <>
      <div className="pt-32 pb-35">
        <Container>
          <h3 className="pb-12 font-bold text-[39px] text-mPrimary font-dm">
            Special Offers
          </h3>
          <Flex className={`gap-x-10`}>
            <div className="w-1/4">
              <Link to={`/shop`}>
                <Product
                  ProductImg={product9}
                  BadgeTxt={`New`}
                  BadgeTitle={`Basic Crew Neck Tee`}
                  BadgePrice={`$49.00`}
                />
              </Link>
            </div>
            <div className="w-1/4">
              <Link to={`/shop`}>
                <Product
                  ProductImg={product10}
                  BadgeTxt={`New`}
                  BadgeTitle={`Basic Crew Neck Tee`}
                  BadgePrice={`$80.00`}
                />
              </Link>
            </div>
            <div className="w-1/4">
              <Link to={`/shop`}>
                <Product
                  ProductImg={product11}
                  BadgeTxt={`New`}
                  BadgeTitle={`Basic Crew Neck Tee`}
                  BadgePrice={`$33.00`}
                />
              </Link>
            </div>
            <div className="w-1/4">
              <Link to={`/shop`}>
                <Product
                  ProductImg={product12}
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
  )
}

export default SpecialOffer