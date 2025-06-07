import Image from "next/image";
import Link from "next/link";
import React from "react";

const models = () => {
  return (
    <div className="flex pl-5 gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="px-7 pt-7">
          <h2 className="uppercase text-[12px] text-amber-700 font-Sf-semibold mb-1">
            NEW
          </h2>
          <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl">
            MacBook Air
          </h2>
        </div>
        <div className=" mt-5 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/mac/all-models/macbook-air.jpeg"
            alt="macbook air"
          />
        </div>
        <div className="flex gap-1 mt-7 justify-center">
          <div className="w-3 h-3 bg-[#c8d8e0] rounded-full"></div>
          <div className="w-3 h-3 bg-[#2f3642] rounded-full"></div>
          <div className="w-3 h-3 bg-[#f0e4d3] rounded-full"></div>
          <div className="w-3 h-3 bg-[#e3e4e5] rounded-full"></div>
        </div>

        <h2 className="pl-7 mb-3 mt-3">
          From ₹7908.00/mo. with instant cashback§§ and No Cost EMI§ or
          ₹99900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px] py-2 ml-7 items-end rounded-3xl text-white"
          href=""
        >
          Buy
        </Link>
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="px-7 pt-7">
          <h2 className="font-Sf-semibold text-xl tracking-wide pt-5 md:text-3xl">
            MacBook Pro
          </h2>
        </div>
        <div className=" mt-5 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/mac/all-models/macbook-pro.jpeg"
            alt="macbook pro"
          />
        </div>
        <div className="flex gap-1 mt-7 justify-center">
          <div className="w-3 h-3 bg-[#2f3642] rounded-full"></div>
          <div className="w-3 h-3 bg-[#c8d8e0] rounded-full"></div>
        </div>

        <h2 className="pl-7 mb-3 mt-3">
          From ₹13492.00/mo. with instant cashback§§ and No Cost EMI§ or
          ₹169900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px]  py-2 ml-7 items-end rounded-3xl text-white"
          href=""
        >
          Buy
        </Link>
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="px-7 pt-7">
          <h2 className="font-Sf-semibold text-xl tracking-wide pt-5 md:text-3xl">
            iMac
          </h2>
        </div>
        <div className=" mt-5 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/mac/all-models/imac.jpeg"
            alt="imac"
          />
        </div>
        <div className="flex gap-1 mt-7 justify-center">
          <div className="w-3 h-3 overflow-clip bg-[#2f3642] rounded-full">
            <div className="w-1/2 h-full bg-[#547eae]"></div>
            <div className="w-1/2 h-full bg-[#acbfd8]"></div>
          </div>
          <div className="w-3 h-3 bg-[#c8d8e0] overflow-clip rounded-full">
            <div className="w-1/2 h-full bg-[#827fb2]"></div>
            <div className="w-1/2 h-full bg-[#b7b1ce]"></div>
          </div>
          <div className="w-3 h-3 bg-[#c8d8e0] overflow-clip rounded-full">
            <div className="w-1/2 h-full bg-[#de5f7d]"></div>
            <div className="w-1/2 h-full bg-[#f3b5c3]"></div>
          </div>
          <div className="w-3 h-3 bg-[#c8d8e0] overflow-clip rounded-full">
            <div className="w-1/2 h-full bg-[#edd243]"></div>
            <div className="w-1/2 h-full bg-[#f5e3ad]"></div>
          </div>
          <div className="w-3 h-3 bg-[#c8d8e0] overflow-clip rounded-full">
            <div className="w-1/2 h-full bg-[#f5e3ad]"></div>
            <div className="w-1/2 h-full bg-[#f6c1a7]"></div>
          </div>
          <div className="w-3 h-3 bg-[#c8d8e0] overflow-clip rounded-full">
            <div className="w-1/2 h-full bg-[#3d945c]"></div>
            <div className="w-1/2 h-full bg-[#a4c2af]"></div>
          </div>
          <div className="w-3 h-3 bg-[#e3e4e5] rounded-full"></div>
        </div>

        <h2 className="pl-7 mb-3 mt-3">
          From ₹10658.00/mo. with instant cashback§§ and No Cost EMI§ or
          ₹134900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px]  py-2 ml-7 items-end rounded-3xl text-white"
          href=""
        >
          Buy
        </Link>
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="px-7 pt-7">
          <h2 className="font-Sf-semibold text-xl tracking-wide pt-5 md:text-3xl">
            Mac mini
          </h2>
        </div>
        <div className=" mt-5 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/mac/all-models/mac-mini.jpeg"
            alt="mac-mini"
          />
        </div>

        <h2 className="pl-7 pt-10 mb-3 mt-3">
          From ₹4742.00/mo. with instant cashback§§ and No Cost EMI§ or
          ₹59900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px]  py-2 ml-7 items-end rounded-3xl text-white"
          href=""
        >
          Buy
        </Link>
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="px-7 pt-7">
          <h2 className="uppercase text-[12px] text-amber-700 font-Sf-semibold mb-1">
            NEW
          </h2>
          <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl">
            Mac Studio
          </h2>
        </div>
        <div className=" mt-5 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/mac/all-models/mac-studio.jpeg"
            alt="mac-studio"
          />
        </div>

        <h2 className="pl-7 pt-10 mb-3 mt-3">
          From ₹17492.00/mo. with instant cashback§§ and No Cost EMI§ or
          ₹214900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px]  py-2 ml-7 items-end rounded-3xl text-white"
          href=""
        >
          Buy
        </Link>
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="px-7 pt-7">
          <h2 className="font-Sf-semibold text-xl tracking-wide pt-5 md:text-3xl">
            Studio Display
          </h2>
        </div>
        <div className=" mt-5 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/mac/all-models/studio-display.jpeg"
            alt="studio-display"
          />
        </div>

        <h2 className="pl-7 pt-10 mb-3 mt-3">
          From ₹14507.00/mo. with EMI◊◊, or ₹159900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px]  py-2 ml-7 items-end rounded-3xl text-white"
          href=""
        >
          Buy
        </Link>
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="px-7 pt-7">
          <h2 className="font-Sf-semibold text-xl tracking-wide pt-5 md:text-3xl">
            Mac Pro
          </h2>
        </div>
        <div className=" mt-5 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/mac/all-models/mac-pro.jpeg"
            alt="mac-pro"
          />
        </div>

        <h2 className="pl-7 pt-10 mb-3 mt-3">
          From ₹66221.00/mo. with EMI◊◊, or ₹729900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px]  py-2 ml-7 items-end rounded-3xl text-white"
          href=""
        >
          Buy
        </Link>
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="px-7 pt-7">
          <h2 className="font-Sf-semibold text-xl tracking-wide pt-5 md:text-3xl">
            Pro Display XDR
          </h2>
        </div>
        <div className=" mt-5 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/mac/all-models/pro-display.jpeg"
            alt="mac-pro"
          />
        </div>

        <h2 className="pl-7 pt-10 mb-3 mt-3">
          From ₹40818.00/mo. with EMI◊◊, or ₹449900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px]  py-2 ml-7 items-end rounded-3xl text-white"
          href=""
        >
          Buy
        </Link>
      </div>
    </div>
  );
};

export default models;
