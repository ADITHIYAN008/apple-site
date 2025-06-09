"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MacbookAir from "./details-container/macbook-air";
import MacbookPro from "./details-container/macbook-pro";

const models = () => {
  const [hoverIndex, setHoverIndex] = useState<number | undefined>();

  const [containerClicked, setContainerClicked] = useState({
    status: false,
    index: 0,
  });

  const rednerContent = () => {
    switch (containerClicked.index) {
      case 0:
        return <MacbookAir setContainerClicked={setContainerClicked} />;
      case 1:
        return <MacbookPro setContainerClicked={setContainerClicked} />;
      case 2:
        return "2";
      case 3:
        return "3";
      case 4:
        return "4";
      case 5:
        return "5";
      case 6:
        return "6";
      case 7:
        return "7";
      default:
        return true;
    }
  };

  return (
    <div className="flex pl-5 xl:pl-[11rem] gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      {/* {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30">
          <div className="bg-white flex flex-col gap-3 rounded-2xl w-80 py-6 px-12 shadow-xl">
            <h2
              onClick={() => setIsOpen(false)}
              className="text-center text-blue-500 text-lg"
            >
              MacBook Air
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2
              onClick={() => setIsOpen(false)}
              className="text-blue-500 text-lg text-center"
            >
              MacBook Pro
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2
              onClick={() => setIsOpen(false)}
              className="text-blue-500 text-lg text-center"
            >
              iMac
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2
              onClick={() => setIsOpen(false)}
              className="text-blue-500 text-lg text-center"
            >
              Mac mini
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2
              onClick={() => setIsOpen(false)}
              className="text-blue-500 text-lg text-center"
            >
              Mac Studio
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2
              onClick={() => setIsOpen(false)}
              className="text-blue-500 text-lg text-center"
            >
              Studio Display
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2
              onClick={() => setIsOpen(false)}
              className="text-blue-500 text-lg text-center"
            >
              Mac Pro
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2
              onClick={() => setIsOpen(false)}
              className="text-blue-500 text-lg text-center"
            >
              Pro Display XDR
            </h2>
          </div>
        </div>
      )} */}
      {containerClicked.status && rednerContent()}
      <div
        onMouseEnter={() => setHoverIndex(0)}
        onMouseLeave={() => setHoverIndex(undefined)}
        onClick={() => setContainerClicked({ status: true, index: 0 })}
        className="min-w-[19rem]  cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white  hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
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
        <Link
          className={`absolute z-40 top-2/4 bg-black px-4 py-2 text-white hover:bg-blue-500 transition-all duration-400 ease-in-out left-1/4 xl:left-28 text-lg rounded-3xl ${
            hoverIndex === 0
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          href=""
        >
          Take a closer look
        </Link>
      </div>
      <div
        onMouseEnter={() => setHoverIndex(1)}
        onMouseLeave={() => setHoverIndex(undefined)}
        onClick={() => setContainerClicked({ status: true, index: 1 })}
        className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
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
        <Link
          className={`absolute z-40 top-2/4 bg-black px-4 py-2 text-white hover:bg-blue-500 transition-all duration-400 ease-in-out left-1/4 xl:left-28 text-lg rounded-3xl ${
            hoverIndex === 1
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          href=""
        >
          Take a closer look
        </Link>
      </div>
      <div
        onMouseEnter={() => setHoverIndex(2)}
        onMouseLeave={() => setHoverIndex(undefined)}
        onClick={() => setContainerClicked({ status: true, index: 2 })}
        className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
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
        <Link
          className={`absolute z-40 top-2/4 bg-black px-4 py-2 text-white hover:bg-blue-500 transition-all duration-400 ease-in-out left-1/4 xl:left-28 text-lg rounded-3xl ${
            hoverIndex === 2
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          href=""
        >
          Take a closer look
        </Link>
      </div>
      <div
        onMouseEnter={() => setHoverIndex(3)}
        onMouseLeave={() => setHoverIndex(undefined)}
        onClick={() => setContainerClicked({ status: true, index: 3 })}
        className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
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
        <Link
          className={`absolute z-40 top-2/4 bg-black px-4 py-2 text-white hover:bg-blue-500 transition-all duration-400 ease-in-out left-1/4 xl:left-28 text-lg rounded-3xl ${
            hoverIndex === 3
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          href=""
        >
          Take a closer look
        </Link>
      </div>
      <div
        onMouseEnter={() => setHoverIndex(4)}
        onMouseLeave={() => setHoverIndex(undefined)}
        onClick={() => setContainerClicked({ status: true, index: 4 })}
        className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
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
        <Link
          className={`absolute z-40 top-2/4 bg-black px-4 py-2 text-white hover:bg-blue-500 transition-all duration-400 ease-in-out left-1/4 xl:left-28 text-lg rounded-3xl ${
            hoverIndex === 4
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          href=""
        >
          Take a closer look
        </Link>
      </div>
      <div
        onMouseEnter={() => setHoverIndex(5)}
        onMouseLeave={() => setHoverIndex(undefined)}
        onClick={() => setContainerClicked({ status: true, index: 5 })}
        className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
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
        <Link
          className={`absolute z-40 top-2/4 bg-black px-4 py-2 text-white hover:bg-blue-500 transition-all duration-400 ease-in-out left-1/4 xl:left-28 text-lg rounded-3xl ${
            hoverIndex === 5
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          href=""
        >
          Take a closer look
        </Link>
      </div>
      <div
        onMouseEnter={() => setHoverIndex(6)}
        onMouseLeave={() => setHoverIndex(undefined)}
        onClick={() => setContainerClicked({ status: true, index: 6 })}
        className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
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
        <Link
          className={`absolute z-40 top-2/4 bg-black px-4 py-2 text-white hover:bg-blue-500 transition-all duration-400 ease-in-out left-1/4 xl:left-28 text-lg rounded-3xl ${
            hoverIndex === 6
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          href=""
        >
          Take a closer look
        </Link>
      </div>
      <div
        onMouseEnter={() => setHoverIndex(7)}
        onMouseLeave={() => setHoverIndex(undefined)}
        onClick={() => setContainerClicked({ status: true, index: 7 })}
        className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[29rem] md:h-[31rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
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
        <Link
          className={`absolute z-40 top-2/4 bg-black px-4 py-2 text-white hover:bg-blue-500 transition-all duration-400 ease-in-out left-1/4 xl:left-28 text-lg rounded-3xl ${
            hoverIndex === 7
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          href=""
        >
          Take a closer look
        </Link>
      </div>
    </div>
  );
};

export default models;
