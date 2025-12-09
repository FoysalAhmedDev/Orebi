import React from "react";
import Image from "../Image";
import Err from "/src/assets/error.jpg";

const Error = () => {
  return <Image className={`h-screen`} imgSrc={Err} />;
};

export default Error;
