import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaTruck } from "react-icons/fa6";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaUndoAlt } from "react-icons/fa";


const Terms = () => {
  return (
    <>
     <div className="py-5 font-normal text-[16px] text-[#6D6D6D]">
         <Container>
        <Flex className={`justify-between`}>
          <div className="flex gap-x-2 items-center">
            <PiNumberTwoBold className="text-mPrimary"/>
            Two years warranty
          </div>
          <div className="flex gap-x-2 items-center">
            <FaTruck className="text-mPrimary"/>
            Free shipping
          </div>
          <div className="flex gap-x-2 items-center">
            <FaUndoAlt className="text-mPrimary"/>
            Return policy in 30 days
          </div>
        </Flex>
      </Container>
     </div>
    </>
  );
};

export default Terms;
