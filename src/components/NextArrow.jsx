import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={`absolute top-1/2 -right-3 -translate-1/2`}
      onClick={onClick}
    >
      <FaArrowRight className="text-5xl" />
    </div>
  );
};

export default NextArrow;
