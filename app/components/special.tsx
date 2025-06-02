import Image from "next/image";
import React from "react";

const special = () => {
  return (
    <div className="pl-5 mt-5 mb-6">
      <h2 className="text-[25px] tracking-wide font-semibold mb-1 md:text-3xl max-w-[90%]">
        Special stores.{" "}
        <span className="text-black/50 tracking-wide">
          Exclusive savings for students and educators.
        </span>
      </h2>
      <div className="flex gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[32rem] md:min-h-[34rem]">
        <div className="max-w-[19rem] md:min-w-[23rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-8 left-8">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
              Education
            </h2>
            <h2 className="font-Sf-semibold text-[20px] tracking-wide md:text-3xl max-w-[19rem] md:max-w-[95%]">
              Buy a new Mac or iPad <br /> with education savings.¹
            </h2>
          </div>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/special/savings.jpeg"
            alt="store"
          />
        </div>
      </div>
    </div>
  );
};

export default special;
