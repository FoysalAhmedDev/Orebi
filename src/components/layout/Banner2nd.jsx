import React from "react";
import Image from "../Image";
import Container from "../Container";
import { Link } from "react-router-dom";

const Banner2nd = () => {
  return (
    <>
      <div>
        <Container>
          <Link to={`/about`}>
        <div className="bg-[url(/src/assets/Banner2nd.png)] h-[370px] bg-no-repeat bg-center bg-cover"></div>
      </Link>
        </Container>
      </div>
    </>
  );
};

export default Banner2nd;
