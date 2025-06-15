import Image from "next/image";
import React from "react";

const storeDifference = () => {
  return (
    <div className="flex pl-5 gap-5 pr-5 xl:pl-[11rem] overflow-x-scroll items-center no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      <div className="max-w-[19rem] xl:min-w-[60rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 xl:left-1/3 top-6 left-8">
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide  max-w-[20rem] md:max-w-[90%]">
            Customise your Mac.
          </h2>
          <h2>Choose your chip, memory, storage and even colour.</h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/store-difference/customise.png"
          alt="specialist"
        />
      </div>
    </div>
  );
};

export default storeDifference;
