import React from "react";
import Product from "../Product";
import product9 from "../../assets/product9.png";
import product10 from "../../assets/product10.png";
import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "../Container";
import PrevArrow from "../PrevArrow";
import NextArrow from "../NextArrow";

const SpecialOffer = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="pt-32 pb-35">
        <Container>
          <div className="-mx-4">
            <Slider {...settings}>
              <div className="">
                <Link to={`/shop`}>
                  <Product
                    ProductImg={product9}
                    BadgeTxt={`New`}
                    BadgeTitle={`Basic Crew Neck Tee`}
                    BadgePrice={`$49.00`}
                  />
                </Link>
              </div>
              <div className="">
                <Link to={`/shop`}>
                  <Product
                    ProductImg={product10}
                    BadgeTxt={`New`}
                    BadgeTitle={`Basic Crew Neck Tee`}
                    BadgePrice={`$80.00`}
                  />
                </Link>
              </div>
              <div className="">
                <Link to={`/shop`}>
                  <Product
                    ProductImg={product11}
                    BadgeTxt={`New`}
                    BadgeTitle={`Basic Crew Neck Tee`}
                    BadgePrice={`$33.00`}
                  />
                </Link>
              </div>
              <div className="">
                <Link to={`/shop`}>
                  <Product
                    ProductImg={product12}
                    BadgeTxt={`New`}
                    BadgeTitle={`Basic Crew Neck Tee`}
                    BadgePrice={`$27.00`}
                  />
                </Link>
              </div>
              <div className="">
                <Link to={`/shop`}>
                  <Product
                    ProductImg={product9}
                    BadgeTxt={`New`}
                    BadgeTitle={`Basic Crew Neck Tee`}
                    BadgePrice={`$49.00`}
                  />
                </Link>
              </div>
              <div className="">
                <Link to={`/shop`}>
                  <Product
                    ProductImg={product10}
                    BadgeTxt={`New`}
                    BadgeTitle={`Basic Crew Neck Tee`}
                    BadgePrice={`$80.00`}
                  />
                </Link>
              </div>
              <div className="">
                <Link to={`/shop`}>
                  <Product
                    ProductImg={product11}
                    BadgeTxt={`New`}
                    BadgeTitle={`Basic Crew Neck Tee`}
                    BadgePrice={`$33.00`}
                  />
                </Link>
              </div>
              <div className="">
                <Link to={`/shop`}>
                  <Product
                    ProductImg={product12}
                    BadgeTxt={`New`}
                    BadgeTitle={`Basic Crew Neck Tee`}
                    BadgePrice={`$27.00`}
                  />
                </Link>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SpecialOffer;
