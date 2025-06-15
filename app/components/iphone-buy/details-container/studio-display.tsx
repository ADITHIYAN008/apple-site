import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsTruck } from "react-icons/bs";
import { IoCardOutline, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { SlScreenDesktop } from "react-icons/sl";
import { PiUserFocusFill } from "react-icons/pi";

type ClickedContainerType = {
  status: boolean;
  index: number;
};

const StudioDisplayImages = [
  "/apple-site/buy/mac/all-models/studio-display/main.png",
  "/apple-site/buy/mac/all-models/studio-display/back.jpeg",
  "/apple-site/buy/mac/all-models/studio-display/left.png",
  "/apple-site/buy/mac/all-models/studio-display/speaker.png",
  "/apple-site/buy/mac/all-models/studio-display/demo.png",
  "/apple-site/buy/mac/all-models/studio-display/ports.png",
  "/apple-site/buy/mac/all-models/studio-display/stand.png",
  "/apple-site/buy/mac/all-models/studio-display/setup.png",
  "/apple-site/buy/mac/all-models/studio-display/top-view.png",
];
const studioDisplay = ({
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
              Studio Display
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
                From ₹14507.00/mo.per month with EMI◊◊,or ₹159900.00‡
              </h2>
              <Link
                className="bg-blue-500 text-center mx-auto max-w-[4rem] rounded-full cursor-pointer text-sm text-white px-4 py-2"
                href=" "
              >
                Buy
              </Link>
              <div className="mx-auto">
                <div className="mt-5 overflow-hidden w-[250px] h-[200px] mx-auto relative">
                  <motion.div
                    className="flex"
                    animate={{ x: -currImg * 250 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    {StudioDisplayImages.map((src, index) => (
                      <Image
                        key={index}
                        src={src}
                        width={250}
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
                  <div
                    onClick={() => setCurrImg(7)}
                    className={`w-2 h-2  rounded-full ${
                      currImg === 7 ? "bg-black" : "bg-black/30"
                    }`}
                  ></div>
                  <div
                    onClick={() => setCurrImg(8)}
                    className={`w-2 h-2  rounded-full ${
                      currImg === 8 ? "bg-black" : "bg-black/30"
                    }`}
                  ></div>
                </div>

                <div className="px-5 mt-10">
                  <div className="flex items-center gap-2">
                    <div className="w-[4rem] flex justify-center">
                      <SlScreenDesktop size={30} />
                    </div>

                    <h2 className="w-[80%] font-Sf-semibold text-lg">
                      68.29 cm (27") 5K Retina display draws you in with 14.7
                      million pixels and 1 billion colours
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-[4rem] flex justify-center">
                      <PiUserFocusFill size={30} />
                    </div>
                    <h2 className="w-[80%] font-Sf-semibold text-lg">
                      12MP Ultra Wide camera with Centre Stage — powered by
                      Apple silicon — allows for more engaging video calls
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                  <div className="flex items-center gap-2">
                    <Image
                      width={200}
                      height={200}
                      className="mx-auto size-8"
                      src="/apple-site/buy/mac/all-models/sound.png"
                      alt="sound"
                    />

                    <h2 className="w-[80%] font-Sf-semibold text-lg">
                      Three studio-quality mics and six-speaker sound system
                      with Spatial Audio for more immersive calls, movies and
                      music
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                  <div className="flex items-center gap-2">
                    <Image
                      width={200}
                      height={200}
                      className="mx-auto size-9"
                      src="/apple-site/buy/mac/all-models/c.png"
                      alt="type c"
                    />
                    <h2 className="w-[80%] font-Sf-semibold text-lg">
                      With ports for connectivity and charging and three stand
                      options, it fits any setup
                    </h2>
                  </div>
                  <div className="w-full h-[1px] bg-black/20 mt-4 mb-4"></div>
                  <div className="flex items-center gap-2">
                    <Image
                      width={200}
                      height={200}
                      className="mx-auto w-[2rem] h-[1rem] size-7"
                      src="/apple-site/buy/mac/all-models/design.png"
                      alt="design"
                    />
                    <h2 className="w-[80%] font-Sf-semibold text-lg">
                      Pairs perfectly with any Mac, including the all‑new Mac
                      Studio. Add new matching Magic accessories to complete
                      your studio.
                    </h2>
                  </div>
                </div>
                <Link
                  className="flex items-center pl-5 mt-8 mb-8 text-blue-500 hover:underline cursor-pointer text-lg"
                  href=""
                >
                  Explore Studio Display further <ChevronRight size={18} />
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

export default studioDisplay;
