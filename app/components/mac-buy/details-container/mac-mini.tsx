import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsApple, BsCameraVideo, BsTruck } from "react-icons/bs";
import { IoCardOutline, IoClose, IoResizeSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { SlScreenDesktop } from "react-icons/sl";
import { IoIosFlash } from "react-icons/io";

type ClickedContainerType = {
  status: boolean;
  index: number;
};

const MacMiniImages = [
  "/apple-site/buy/mac/all-models/mac-mini/main.png",
  "/apple-site/buy/mac/all-models/mac-mini/back.png",
  "/apple-site/buy/mac/all-models/mac-mini/top.png",
  "/apple-site/buy/mac/all-models/mac-mini/setup.png",
  "/apple-site/buy/mac/all-models/mac-mini/front.png",
  "/apple-site/buy/mac/all-models/mac-mini/final.png",
];

const macMini = ({
  setContainerClicked,
}: {
  setContainerClicked: React.Dispatch<
    React.SetStateAction<ClickedContainerType>
  >;
}) => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="fixed z-[90] left-0 top-0 h-screen w-full bg-black/30 overflow-y-auto">
      <div className="min-h-[120vh] mt-10  w-full bg-white rounded-t-2xl tracking-wide">
        <div className="flex flex-col justify-center">
          <div
            onClick={() => setContainerClicked({ status: false, index: 0 })}
            className="px-1 py-1 absolute right-6 top-17 rounded-full bg-black/20"
          >
            <IoClose className="size-6 text-black/60" />
          </div>
          <div className="mt-10 flex flex-col justify-center">
            <h2 className="text-[12px] uppercase mt-6 text-amber-700 text-center"></h2>
            <h2 className="mt-1 gap-1 flex items-center justify-center font-Sf-semibold text-2xl">
              Mac mini
            </h2>
            {/* <div className="flex mt-5 justify-center gap-4">
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
            </div> */}
            <div className="flex flex-col justify-center">
              <h2 className="max-w-[20rem] mx-auto mt-6 text-sm text-center mb-5">
                From ₹4742.00/mo. with instant cashback§§ and No Cost EMI§ or
                ₹59900.00‡
              </h2>
              <Link
                className="bg-blue-500 text-center mx-auto max-w-[4rem] rounded-full cursor-pointer text-sm text-white px-4 py-2"
                href=" "
              >
                Buy
              </Link>
              <div className="mx-auto">
                <div className="mt-5 overflow-hidden w-[300px] h-[200px] mx-auto relative">
                  <motion.div
                    className="flex"
                    animate={{ x: -currImg * 300 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    {MacMiniImages.map((src, index) => (
                      <Image
                        key={index}
                        src={currImg === 6 ? MacMiniImages[6] : src}
                        width={300}
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
                      At just 12.7x12.7 centimetres and 0.73 kilograms, Mac mini
                      fits perfectly under a monitor or is mini enough to move
                      or mount just about anywhere
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
                      Do more and do it faster with the next-generation M4 or M4
                      Pro chip
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
                      powerful.¹
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-[4rem] flex justify-center">
                      <SlScreenDesktop size={30} />
                    </div>

                    <h2 className="w-[80%] font-Sf-semibold text-lg">
                      Complete your system with Studio Display and Magic
                      accessories
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-[4rem] flex justify-center">
                      <IoIosFlash size={30} />
                    </div>

                    <h2 className="w-[80%] font-Sf-semibold text-lg">
                      Get connected with USB-C ports and a headphone jack on the
                      front, and Thunderbolt, HDMI and Gigabit Ethernet ports on
                      the back
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                  <div className="flex items-center gap-2">
                    <Image
                      width={200}
                      height={200}
                      className="mx-auto size-7"
                      src="/apple-site/buy/mac/all-models/flower.png"
                      alt="flower"
                    />
                    <h2 className="w-[80%] font-Sf-semibold text-lg">
                      Mac mini is the first carbon-neutral Mac² and is helping
                      lead the way for Apple to be carbon neutral across our
                      entire carbon footprint by 2030
                    </h2>
                  </div>
                </div>
                <Link
                  className="flex items-center pl-5 mt-8 mb-8 text-blue-500 hover:underline cursor-pointer text-lg"
                  href=""
                >
                  Explore Mac mini further <ChevronRight size={18} />
                </Link>
              </div>
            </div>
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
                cards at 15.99% p.a. over a 12‑month tenure. Monthly pricing is
                rounded to the nearest rupee. Exact pricing will be provided by
                your card issuer, subject to your card issuer&rsquo;s terms and
                conditions.
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
                HomePod and Beats products are available with No Cost EMI on 3-
                and 6-month tenures only. Monthly pricing is rounded to the
                nearest rupee. Exact pricing will be provided by your card
                issuer, subject to your card issuer&rsquo;s terms and
                conditions. Minimum order spend applies as per your card
                issuer&rsquo;s threshold. No Cost EMI is not available to
                Business customers and cannot be combined with Apple Store for
                Education or Corporate Employee Purchase Plan pricing. Card
                eligibility is subject to terms and conditions between you and
                your card issuer. Offer may be revised or withdrawn at any time
                without any prior notice.{" "}
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
  );
};

export default macMini;
