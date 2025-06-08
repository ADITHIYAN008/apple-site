import React from "react";
import { BsCreditCard, BsTruck } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";

const moreReason = () => {
  return (
    <div className="pl-5 xl:pl-0  pr-5 xl:mt-10 mt-5 mb-6">
      <h2 className="text-[25px] tracking-wide font-semibold max-w-[90%] xl:ml-[11.5rem] md:text-3xl mb-1">
        The Apple Store difference.{" "}
        <span className="text-black/50 tracking-wide">
          Even more reasons to shop with us.
        </span>
      </h2>
      <div className="flex xl:pl-[11.5rem] gap-5 overflow-x-scroll items-center no-scrollbar md:min-h-[19rem] min-h-[17rem]">
        <div className="max-w-[19rem] cursor-pointer md:min-w-[23rem] min-w-[19rem] h-[15rem] md:min-h-[17rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all pl-8 pt-10">
          <BsCreditCard className="size-13 text-green-700" />
          <h2 className="font-Sf-semibold text-[20px] tracking-wide mt-2 md:text-2xl">
            No Cost EMI.§ Plus Instant Cashback.§§
          </h2>
        </div>
        <div className="max-w-[20rem] cursor-pointer md:min-w-[23rem] min-w-[20rem] md:min-h-[17rem] h-[15rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all px-8 pt-10">
          <MdComputer className="size-13 text-blue-500" />
          <h2 className="font-Sf-semibold text-[20px] tracking-wide mt-1 md:text-2xl text-blue-500">
            Exchange your smartphone,
            <span className="text-black ml-1">
              get ₹5000.00-₹67500.00 in credit towards a new one.*
            </span>
          </h2>
        </div>
        <div className="max-w-[19rem] cursor-pointer md:min-w-[23rem] min-w-[19rem] md:min-h-[17rem] h-[15rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all pl-8 pt-10">
          <FaApple className="size-13 text-[#ec5544]" />
          <h2 className="font-Sf-semibold bg-gradient-to-r from-[#ec5544] via-blue-500 to-green-700 text-transparent bg-clip-text md:text-2xl text-[20px] tracking-wide mt-2">
            Customise your Mac.
          </h2>
        </div>
        <div className="max-w-[20rem] cursor-pointer md:min-w-[23rem] min-w-[20rem] md:min-h-[17rem] h-[15rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all px-8 pt-10">
          <FaRegFaceSmileBeam className="size-13 text-purple-500" />
          <h2 className="font-Sf-semibold text-[20px] tracking-wide mt-1 md:text-2xl text-black">
            Make them yours.
            <span className="text-purple-500 ml-1">
              Engrave a mix of emoji, names, and numbers for free.
            </span>
          </h2>
        </div>
        <div className="max-w-[20rem] cursor-pointer md:min-w-[23rem] min-w-[20rem] md:min-h-[17rem] h-[15rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all px-8 pt-10">
          <BsTruck className="size-13 text-green-600" />
          <h2 className="font-Sf-semibold text-[20px] tracking-wide mt-1 md:text-2xl text-green-600">
            Enjoy free delivery, or easy pickup
            <span className=" ml-1 text-black">
              from an <br /> Apple Store.
            </span>
          </h2>
        </div>
        <div className="max-w-[20rem] cursor-pointer md:min-w-[23rem] min-w-[20rem] md:min-h-[17rem] h-[15rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all px-8 pt-10">
          <MdComputer className="size-13 text-blue-500" />
          <h2 className="font-Sf-semibold text-[20px] tracking-wide mt-1 md:text-2xl text-blue-500">
            Trade in your eligible Mac, Apple Watch or iPad for instant credit.*
            <span className=" ml-1 text-black">In-store only.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default moreReason;
