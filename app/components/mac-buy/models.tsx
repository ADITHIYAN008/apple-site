"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsApple, BsCameraVideo, BsTruck } from "react-icons/bs";
import {
  IoBatteryFull,
  IoCardOutline,
  IoClose,
  IoResizeSharp,
} from "react-icons/io5";
import { motion } from "framer-motion";

const images = [
  "/apple-site/buy/mac/all-models/mac-air/main.png",
  "/apple-site/buy/mac/all-models/mac-air/top.jpeg",
  "/apple-site/buy/mac/all-models/mac-air/side.png",
  "/apple-site/buy/mac/all-models/mac-air/closed-side.png",
  "/apple-site/buy/mac/all-models/mac-air/closed-front.png",
  "/apple-site/buy/mac/all-models/mac-air/closed-top.png",
  "/apple-site/buy/mac/all-models/mac-air/final-pic-1.png",
  "/apple-site/buy/mac/all-models/mac-air/final-pic.png",
];

const models = () => {
  const [hoverIndex, setHoverIndex] = useState<number | undefined>();
  const [macAirSize, setMacAirSize] = useState(15);
  const [currImg, setCurrImg] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex pl-5 xl:pl-[11rem] gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30">
          <div className="bg-white flex flex-col gap-3 rounded-2xl w-80 py-6 px-12 shadow-xl">
            <h2
              onClick={() => setIsOpen(false)}
              className="text-center text-blue-500 text-lg"
            >
              MacBook Air
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2 className="text-blue-500 text-lg text-center">MacBook Pro</h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2 className="text-blue-500 text-lg text-center">iMac</h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2 className="text-blue-500 text-lg text-center">Mac mini</h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2 className="text-blue-500 text-lg text-center">Mac Studio</h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2 className="text-blue-500 text-lg text-center">
              Studio Display
            </h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2 className="text-blue-500 text-lg text-center">Mac Pro</h2>
            <div className="w-full h-[1px] bg-black/10"></div>
            <h2 className="text-blue-500 text-lg text-center">
              Pro Display XDR
            </h2>
          </div>
        </div>
      )}
      <div className="fixed z-[90] left-0 top-0 h-screen w-full bg-black/30 overflow-y-auto">
        <div className="min-h-[120vh] mt-10  w-full bg-white rounded-t-2xl tracking-wide">
          <div className="flex flex-col justify-center">
            <div className="px-1 py-1 absolute right-6 top-17 rounded-full bg-black/20">
              <IoClose className="size-6 text-black/60" />
            </div>
            <div className="mt-10 flex flex-col justify-center">
              <h2 className="text-[12px] uppercase mt-6 text-amber-700 text-center">
                New
              </h2>
              <h2 className="mt-1 gap-1 flex items-center justify-center font-Sf-semibold text-2xl">
                MacBook Air <ChevronDown />
              </h2>
              <div className="flex mt-5 justify-center gap-4">
                <h2
                  onClick={() => {
                    setMacAirSize(13);
                    setCurrImg(0);
                  }}
                  className={`px-6 py-2 rounded-full ${
                    macAirSize === 13 ? "bg-black/10" : ""
                  }`}
                >
                  13”
                </h2>
                <h2
                  onClick={() => {
                    setMacAirSize(15);
                    setCurrImg(0);
                  }}
                  className={` px-6 py-2 rounded-full ${
                    macAirSize === 15 ? "bg-black/10" : ""
                  }`}
                >
                  15”
                </h2>
              </div>
              {macAirSize === 13 ? (
                <div className="flex flex-col justify-center">
                  <h2 className="max-w-[20rem] mx-auto mt-6 text-sm text-center mb-5">
                    From ₹7908.00/mo. with instant cashback§§ and No Cost EMI§
                    or ₹99900.00‡
                  </h2>
                  <Link
                    className="bg-blue-500 text-center mx-auto max-w-[4rem] rounded-full cursor-pointer text-sm text-white px-4 py-2"
                    href=" "
                  >
                    Buy
                  </Link>
                  <div className="mx-auto">
                    <div className="mt-5 overflow-hidden w-[200px] h-[200px] mx-auto relative">
                      <motion.div
                        className="flex"
                        animate={{ x: -currImg * 200 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        {images.map((src, index) => (
                          <Image
                            key={index}
                            src={currImg === 6 ? images[6] : src}
                            width={200}
                            height={200}
                            alt="macbook air"
                            className="shrink-0"
                          />
                        ))}
                      </motion.div>
                    </div>
                    <div className="flex justify-center mt-15 gap-4">
                      <div
                        onClick={() => setCurrImg(0)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 0 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(1)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 1 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(2)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 2 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(3)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 3 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(4)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 4 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(5)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 5 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(6)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 6 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                    </div>
                    <div className="mt-10 text-center flex flex-col justify-center">
                      <h2 className="text-sm text-black/50">
                        Available in 4 colours
                      </h2>
                      <div className="flex gap-1 mt-3 items-center justify-center">
                        <div className="w-3 h-3 bg-[#C8D8E0] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#2F3642] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#F0E4D3] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#E3E4E5] rounded-full"></div>
                      </div>
                    </div>
                    <div className="px-5 mt-10">
                      <div className="flex items-center gap-2">
                        <Image
                          width={200}
                          height={200}
                          className="mx-auto size-7"
                          src="/apple-site/buy/mac/all-models/thin.png"
                          alt="thin"
                        />
                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          Lightweight and less than two centimeters thin, so you
                          can take MacBook Air anywhere you go
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-[4rem] flex justify-center">
                          <div className="flex items-center bg-black text-white max-w-[2rem] text-[10px] px-1 py-2 rounded-md">
                            <BsApple size={9} />
                            M4
                          </div>
                        </div>

                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          The powerful 10-core CPU and up to 10-core GPU of the
                          Apple M4 chip keep things running smoothly
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-[4rem] flex justify-center">
                          <IoBatteryFull size={30} />
                        </div>

                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          Up to 18 hours of battery life, so you can leave your
                          charger at home¹
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-[4rem] flex justify-center">
                          <IoResizeSharp size={30} />
                        </div>

                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          The 13.6-inch Liquid Retina display supports 1 billion
                          colours²
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-[4rem] flex justify-center">
                          <BsCameraVideo size={30} />
                        </div>

                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          The 12MP Center Stage camera keeps you centred in the
                          frame during video calls, even as you move around
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <Image
                          width={200}
                          height={200}
                          className="mx-auto size-7"
                          src="/apple-site/buy/mac/all-models/apple-intelligence.png"
                          alt="thin"
                        />
                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          Built for Apple Intelligence. Personal, private,
                          powerful.³
                        </h2>
                      </div>
                    </div>
                    <Link
                      className="flex items-center pl-5 mt-8 mb-8 text-blue-500 hover:underline cursor-pointer text-lg"
                      href=""
                    >
                      Explore MacBook Air further <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center">
                  <h2 className="max-w-[20rem] mx-auto mt-6 text-sm text-center mb-5">
                    From ₹9992.00/mo. with instant cashback§§ and No Cost EMI§
                    or ₹124900.00‡
                  </h2>
                  <Link
                    className="bg-blue-500 text-center mx-auto max-w-[4rem] cursor-pointer rounded-full text-sm text-white px-4 py-2"
                    href=" "
                  >
                    Buy
                  </Link>
                  <div className="mx-auto">
                    <div className="mt-5 overflow-hidden w-[200px] h-[200px] mx-auto relative">
                      <motion.div
                        className="flex scale-110"
                        animate={{ x: -currImg * 200 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        {images.map((src, index) => (
                          <Image
                            key={index}
                            src={currImg === 6 ? images[7] : src}
                            width={200}
                            height={200}
                            alt="macbook air"
                            className="shrink-0"
                          />
                        ))}
                      </motion.div>
                    </div>
                    <div className="flex justify-center mt-15 gap-4">
                      <div
                        onClick={() => setCurrImg(0)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 0 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(1)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 1 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(2)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 2 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(3)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 3 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(4)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 4 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(5)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 5 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                      <div
                        onClick={() => setCurrImg(6)}
                        className={`w-2 h-2  rounded-full ${
                          currImg === 6 ? "bg-black" : "bg-black/30"
                        }`}
                      ></div>
                    </div>
                    <div className="mt-10 text-center flex flex-col justify-center">
                      <h2 className="text-sm text-black/50">
                        Available in 4 colours
                      </h2>
                      <div className="flex gap-1 mt-3 items-center justify-center">
                        <div className="w-3 h-3 bg-[#C8D8E0] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#2F3642] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#F0E4D3] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#E3E4E5] rounded-full"></div>
                      </div>
                    </div>
                    <div className="px-5 mt-10">
                      <div className="flex items-center gap-2">
                        <Image
                          width={200}
                          height={200}
                          className="mx-auto size-7"
                          src="/apple-site/buy/mac/all-models/thin.png"
                          alt="thin"
                        />
                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          Lightweight and less than two centimeters thin, so you
                          can take MacBook Air anywhere you go
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-[4rem] flex justify-center">
                          <div className="flex items-center bg-black text-white max-w-[2rem] text-[10px] px-1 py-2 rounded-md">
                            <BsApple size={9} />
                            M4
                          </div>
                        </div>

                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          The powerful 10-core CPU and up to 10-core GPU of the
                          Apple M4 chip keep things running smoothly
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-[4rem] flex justify-center">
                          <IoBatteryFull size={30} />
                        </div>

                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          Up to 18 hours of battery life, so you can leave your
                          charger at home¹
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-[4rem] flex justify-center">
                          <IoResizeSharp size={30} />
                        </div>

                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          The 15.3-inch Liquid Retina display supports 1 billion
                          colours²
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <div className="w-[4rem] flex justify-center">
                          <BsCameraVideo size={30} />
                        </div>

                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          The 12MP Center Stage camera keeps you centred in the
                          frame during video calls, even as you move around
                        </h2>
                      </div>
                      <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                      <div className="flex items-center gap-2">
                        <Image
                          width={200}
                          height={200}
                          className="mx-auto size-7"
                          src="/apple-site/buy/mac/all-models/apple-intelligence.png"
                          alt="thin"
                        />
                        <h2 className="w-[80%] font-Sf-semibold text-lg">
                          Built for Apple Intelligence. Personal, private,
                          powerful.³
                        </h2>
                      </div>
                    </div>
                    <Link
                      className="flex items-center pl-5 mt-8 mb-8 text-blue-500 hover:underline cursor-pointer text-lg"
                      href=""
                    >
                      Explore MacBook Air further <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              )}

              <div className="w-full px-5 pt-10 bg-[#f5f5f5]">
                <h2 className="text-xl font-Sf-semibold text-black">
                  The Apple Difference
                </h2>
                <div className="mt-10 flex flex-col gap-4">
                  <div className="flex gap-2 items-start">
                    <IoCardOutline className="text-green-600" size={25} />
                    <div>
                      <h2 className="font-Sf-semibold">Flexible ways to pay</h2>
                      <p className="text-[11px]">
                        No Cost EMI and EMI available.§
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <BsTruck className="text-green-600" size={25} />
                    <div>
                      <h2 className="font-Sf-semibold">
                        Flexible delivery and pickup.
                      </h2>
                      <p className="text-[11px]">
                        Get free delivery or pick up at your Apple Store.
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-black/15 mt-2"></div>
                </div>
                <p className="text-[11px] mt-5 text-black/50">
                  Monthly pricing is after purchase using EMI with qualifying
                  cards at 15.99% p.a. over a 12‑month tenure. Monthly pricing
                  is rounded to the nearest rupee. Exact pricing will be
                  provided by your card issuer, subject to your card
                  issuer&rsquo;s terms and conditions.
                </p>
                <p className="text-[11px] mt-3 text-black/50">
                  Representative example:
                </p>
                <p className="text-[11px] text-black/50">
                  Based on purchase of ₹79900.00. Total amount payable ₹86988.00
                  paid over 12 months as 12 monthly payments of ₹7249.00 at an
                  interest rate of 15.99% p.a. Total interest paid to bank:
                  ₹7088.00.
                </p>
                <p className="text-[11px] mt-3 pb-10 text-black/50">
                  § No Cost EMI is available with the purchase of an eligible
                  product made using qualifying cards on 3-, 6-, 9-, or 12-month
                  tenures from most leading card issuers. Eligible AirPods,
                  HomePod and Beats products are available with No Cost EMI on
                  3- and 6-month tenures only. Monthly pricing is rounded to the
                  nearest rupee. Exact pricing will be provided by your card
                  issuer, subject to your card issuer&rsquo;s terms and
                  conditions. Minimum order spend applies as per your card
                  issuer&rsquo;s threshold. No Cost EMI is not available to
                  Business customers and cannot be combined with Apple Store for
                  Education or Corporate Employee Purchase Plan pricing. Card
                  eligibility is subject to terms and conditions between you and
                  your card issuer. Offer may be revised or withdrawn at any
                  time without any prior notice.{" "}
                  <Link
                    className="text-blue-500 cursor-pointer underline"
                    href=""
                  >
                    Terms apply.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={() => setHoverIndex(0)}
        onMouseLeave={() => setHoverIndex(undefined)}
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
