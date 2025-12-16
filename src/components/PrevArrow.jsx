import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={`absolute top-1/2 left-10 -translate-1/2 z-10`}
      onClick={onClick}
    >
      <FaArrowLeft className="text-5xl" />
    </div>
  );
};

export default PrevArrow;
