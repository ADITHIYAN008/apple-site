import React from "react";
import { FaAngleRight, FaApple } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";

type Props = {};

const footer = (props: Props) => {
  return (
    <div className="px-5 mt-3 mb-[20rem]">
      <div className="w-full h-[1px] bg-black/20"></div>
      <div className="flex items-center  mt-4 mb-4">
        <FaApple className="text-black/80" />
        <LuChevronRight className="text-black/60" />
        <h2 className="text-[13px] text-black/60">App Store online</h2>
      </div>
      <div className="w-full h-[1px] bg-black/20"></div>
    </div>
  );
};

export default footer;
