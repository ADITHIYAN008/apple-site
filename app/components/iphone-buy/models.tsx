"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MacbookAir from "./details-container/macbook-air";
import MacbookPro from "./details-container/macbook-pro";
import Imac from "./details-container/imac";
import MacMini from "./details-container/mac-mini";
import MacStudio from "./details-container/mac-studio";
import StudioDisplay from "./details-container/studio-display";
import MacPro from "./details-container/mac-pro";
import Xdr from "./details-container/xdr";

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
        return <Imac setContainerClicked={setContainerClicked} />;
      case 3:
        return <MacMini setContainerClicked={setContainerClicked} />;
      case 4:
        return <MacStudio setContainerClicked={setContainerClicked} />;
      case 5:
        return <StudioDisplay setContainerClicked={setContainerClicked} />;
      case 6:
        return <MacPro setContainerClicked={setContainerClicked} />;
      case 7:
        return <Xdr setContainerClicked={setContainerClicked} />;
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
          <h2 className="uppercase text-[12px] text-black/40 font-Sf-semibold mb-1">
            Apple Intelligence
          </h2>
          <h2 className="font-Sf-semibold max-w-[70%] text-xl tracking-wide md:text-3xl">
            iPhone 16 Pro & iPhone 16 Pro Max
          </h2>
        </div>
        <div className="h-[11rem] mt-4 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-115"
            src="/apple-site/buy/iphone/all-models/16-pro.jpeg"
            alt="iphone 16 pro"
          />
        </div>
        <div className="flex gap-1 mt-5 justify-center">
          <div className="w-3 h-3 bg-[#C6AD9B] rounded-full"></div>
          <div className="w-3 h-3 bg-[#C6C0B8] rounded-full"></div>
          <div className="w-3 h-3 bg-[#F2F1EE] rounded-full"></div>
          <div className="w-3 h-3 bg-[#4A4A4B] rounded-full"></div>
        </div>

        <h2 className="pl-7 mb-2 mt-3">
          From ₹9825.00/mo. with instant cashback§§ and No Cost EMI§ or
          ₹119900.00‡
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
          <h2 className="uppercase text-[12px] text-black/40 font-Sf-semibold mb-1">
            Apple Intelligence
          </h2>
          <h2 className="font-Sf-semibold max-w-[70%] text-xl tracking-wide md:text-3xl">
            iPhone 16 & iPhone 16 Plus
          </h2>
        </div>
        <div className="h-[11rem] mt-4 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-115"
            src="/apple-site/buy/iphone/all-models/16-plus.jpeg"
            alt="iphone 16 plus"
          />
        </div>
        <div className="flex gap-1 mt-5 justify-center">
          <div className="w-3 h-3 bg-[#A5B5F7] rounded-full"></div>
          <div className="w-3 h-3 bg-[#B6D7D5] rounded-full"></div>
          <div className="w-3 h-3 bg-[#F3B2DB] rounded-full"></div>
          <div className="w-3 h-3 bg-[#FAFAFA] rounded-full"></div>
          <div className="w-3 h-3 bg-[#4A4E50] rounded-full"></div>
        </div>

        <h2 className="pl-7 mb-2 mt-3">
          From ₹6325.00/mo. with instant cashback§§ and No Cost EMI§ or
          ₹79900.00‡
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
          <h2 className="uppercase text-[12px] text-black/40 font-Sf-semibold mb-1">
            Apple Intelligence
          </h2>
          <h2 className="font-Sf-semibold text-xl tracking-wide pt-5 md:text-3xl">
            iPhone 16e
          </h2>
        </div>
        <div className="h-[11rem] mt-4 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-125"
            src="/apple-site/buy/iphone/all-models/16e.jpeg"
            alt="iphone 16e"
          />
        </div>
        <div className="flex gap-1 mt-7 justify-center">
          <div className="w-3 h-3 bg-[#FAFAFA] rounded-full"></div>
          <div className="w-3 h-3 bg-[#4A4E50] rounded-full"></div>
        </div>

        <h2 className="pl-7 mb-3 mt-3">
          From ₹4992.00/mo. with instant cashback§§ and No Cost EMI§ or
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
        <div className="px-7 pt-5">
          <h2 className="uppercase text-[12px] mt-8 text-black/40 font-Sf-semibold mb-1"></h2>
          <h2 className="font-Sf-semibold max-w-[70%] text-xl tracking-wide md:text-3xl">
            iPhone 15 & iPhone 15 Plus
          </h2>
        </div>
        <div className="h-[11rem] mt-4 overflow-clip">
          <Image
            width={200}
            height={200}
            className="mx-auto scale-115"
            src="/apple-site/buy/iphone/all-models/15-plus.jpeg"
            alt="iphone 15 plus"
          />
        </div>
        <div className="flex gap-1 mt-5 justify-center">
          <div className="w-3 h-3 bg-[#d6dde0] rounded-full"></div>
          <div className="w-3 h-3 bg-[#edd4d7] rounded-full"></div>
          <div className="w-3 h-3 bg-[#eee8ca] rounded-full"></div>
          <div className="w-3 h-3 bg-[#d3ddcf] rounded-full"></div>
          <div className="w-3 h-3 bg-[#474b4d] rounded-full"></div>
        </div>

        <h2 className="pl-7 mb-2 mt-3">
          From ₹5825.00/mo. with instant cashback§§ and No Cost EMI§ or
          ₹69900.00‡
        </h2>
        <Link
          className="bg-blue-500 px-4 font-Sf-semibold text-[12px] py-2 ml-7 items-end rounded-3xl text-white"
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
      <Link
        href=""
        className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all"
      >
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase mt-5 text-[12px] font-Sf-semibold tracking-wide text-black/40"></h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[20rem] md:max-w-[90%]">
            Explore all iPhone accessories.
          </h2>
        </div>
        <Image
          fill
          className="w-[70%] h-full object-cover rounded-3xl"
          src="/apple-site/buy/iphone/all-models/explore-all.jpeg"
          alt="explore all"
        />
      </Link>
    </div>
  );
};

export default models;
