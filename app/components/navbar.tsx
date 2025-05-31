import React from "react";
import { BsBag } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiOutlineSearch } from "react-icons/hi";

type Props = {};

const navbar = (props: Props) => {
  return (
    <div className="h-16 p-5">
      <div className="flex justify-between items-center">
        <FaApple className="size-5.5" />
        <div className="flex flex-row gap-7 items-center">
          <HiOutlineSearch className="size-5 text-black/70" />
          <BsBag className="size-4 text-black/70" />
          <HiOutlineMenuAlt4 className="size-5 text-black/70" />
        </div>
      </div>
    </div>
  );
};

export default navbar;
