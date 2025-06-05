"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const seeOffers: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "See Offers on iPhone",
      emi: "Get up to 12 months of No Cost EMI from most leading banks.§",
      cashback1:
        "See how much you can save on iPhone with eligible American Express, Axis Bank and ICICI Bank cards.§§",
      cashback2: "iPhone 16 Pro and iPhone 16 Pro Max - ₹2000.00",
      cashback3: "iPhone 16 and iPhone 16 Plus - ₹4000.00",
      trade:
        "Get up to ₹67500.00 when you exchange your current device and apply it towards your new iPhone. And you can do it all online.*",
      buttonName: "Shop iPhone",
      link: "/mac",
    },
    {
      title: "See Offers on Mac",
      emi: "Get up to 12 months of No Cost EMI from most leading banks.§",
      cashback1:
        "See how much you can save on Mac with eligible American Express, Axis Bank and ICICI Bank cards.§§",
      cashback2: "MacBook Air 13” and 15” - ₹5000.00",
      cashback3: "MacBook Pro 14” and 16” - ₹8000.00",
      cashback4: "iMac - ₹7000.00",
      cashback5: "Mac Studio - ₹5000.00",
      cashback6: "Mac mini - ₹3000.00",
      trade:
        "Get a great value in exchange for your current device and apply it towards a purchase today at any Apple Store.*",
      buttonName: "Shop Mac",
      link: "/mac",
    },

    {
      title: "See Offers on iPad",
      emi: "Get up to 12 months of No Cost EMI from most leading banks.§",
      cashback1:
        "See how much you can save on iPad with eligible American Express, Axis Bank and ICICI Bank cards.§§",
      cashback2: "iPad Air 11” and 13” - ₹4000.00",
      cashback3: "iPad - ₹3000.00",
      cashback4: "iPad mini - ₹3000.00",

      trade:
        "Get a great value in exchange for your current device and apply it towards a purchase today at any Apple Store.*",
      buttonName: "Shop iPad",
      link: "/mac",
    },
    {
      title: "See Offers on Apple Watch",
      emi: "Get up to 12 months of No Cost EMI from most leading banks.§",
      cashback1:
        "See how much you can save on Apple Watch with eligible American Express, Axis Bank and ICICI Bank cards.§§",
      cashback2: "Apple Watch Series 10 - ₹4000.00",
      cashback3: "Apple Watch SE - ₹4000.00",

      trade:
        "Get a great value in exchange for your current device and apply it towards a purchase today at any Apple Store.*",
      buttonName: "Shop Apple Watch",
      link: "/mac",
    },
    {
      title: "See Offers on HomePod",
      emi: "Get up to 6 months of No Cost EMI from most leading banks.§",
      cashback1:
        "Get instant cashback of ₹2000.00 on HomePod with eligible American Express, Axis Bank and ICICI Bank cards.§§",

      buttonName: "Shop HomePod",
      link: "/mac",
    },
    {
      title: "See Offers on AirPods",
      emi: "Get up to 6 months of No Cost EMI from most leading banks.§",
      cashback1:
        "Get instant cashback of ₹4000.00 on AirPods with eligible American Express, Axis Bank and ICICI Bank cards.§§",
      cashback2: "AirPods Pro - ₹1000.00",
      cashback3: "AirPods 4 - ₹1000.00",
      cashback4: "AirPods 4 with Active Noise Cancellation - ₹1000.00",
      cashback5: "AirPods max - ₹4000.00",
      buttonName: "Shop AirPods",
      link: "/mac",
    },
    {
      title: "See Offers on Beats by Dr. Dre",
      emi: "Get up to 6 months of No Cost EMI from most leading banks.§",
      cashback1:
        "Get instant cashback of ₹1500.00 on selected Beats models with eligible American Express, Axis Bank and ICICI Bank cards.§§",
      cashback2: "Beats Studio Pro - ₹1500.00",
      cashback3: "Beats Solo 4 - ₹1500.00",
      cashback4: "Beats Studio Buds + - ₹1500.00",
      cashback5: "Beats Fit Pro - ₹1500.00",
      buttonName: "Shop Beats by Dr. Dre",
      link: "/mac",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-secondary py-5 text-sm w-full">
      <div className="mx-auto tracking-wide text-center max-w-[85%]">
        <h2>
          Get up to 12 months of No Cost EMI§ plus up to ₹8000.00 instant
          cashback§§ on selected products with eligible cards.{" "}
          <Dialog>
            <DialogTrigger className="mt-1 items-center  gap-1  text-blue-500 cursor-pointer hover:underline">
              See offers <LuCirclePlus className="inline-block" />
            </DialogTrigger>
            <DialogContent className="lg:min-w-[45rem] lg:min-h-[45rem] ">
              <DialogHeader>
                <DialogTitle className="mt-5 font-Sf-semibold text-2xl lg:text-4xl text-left">
                  The best ways to buy from Apple.
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="text-left mt-2">
                    <div className=" flex flex-col gap-2 mb-2">
                      <p className="text-[11px] lg:text-sm">
                        No matter how you like to buy, we have an option that
                        works for you.
                      </p>
                      <p className="text-[11px] lg:text-sm">
                        Get up to 12 months of No Cost EMI§ plus up to ₹8000.00
                        instant cashback§§ on selected products with eligible
                        cards.
                      </p>
                    </div>
                    <div className="flex items-center gap-3 lg:gap-10">
                      <Image
                        width={200}
                        height={200}
                        src="/apple-site/offers/american-express.png"
                        className="w-[5rem] h-[3rem]"
                        alt="american express"
                      />
                      <Image
                        width={200}
                        height={200}
                        src="/apple-site/offers/axis-bank.png"
                        className="w-[5rem] h-[3rem]"
                        alt="aixs"
                      />
                      <Image
                        width={200}
                        height={200}
                        src="/apple-site/offers/icici.png"
                        className="w-[5rem] h-[3rem]"
                        alt="icici"
                      />
                    </div>
                    <div className=" flex flex-col gap-2 mt-2">
                      <p className="text-[11px] lg:text-sm">
                        Choose to pay using low monthly instalments with No Cost
                        EMI for up to 12 months from most leading banks.§
                      </p>
                      <p className="text-[11px] lg:text-sm">
                        Simply enter the details from your eligible card at
                        checkout. The No Cost EMI and instant cashback will be
                        automatically applied.
                      </p>
                      <p className="text-[11px] lg:text-sm">
                        GST invoicing is available for business customers at
                        checkout.
                      </p>
                    </div>

                    <div className="w-full max-w-2xl mx-auto mt-1">
                      {items.map((item, index) => (
                        <div key={index} className="border-b border-gray-300">
                          <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center py-[6px] lg:py-3 px-1 text-left font-medium cursor-pointer text-black"
                          >
                            <span className="text-[12px] lg:text-sm">
                              {item.title}
                            </span>
                            <motion.span
                              initial={false}
                              animate={{
                                rotate: openIndex === index ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              className="text-xl"
                            >
                              <IoIosArrowDown />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {openIndex === index && (
                              <motion.div
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                  open: { height: "auto", opacity: 1 },
                                  collapsed: { height: 0, opacity: 0 },
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden text-[10px] px-2"
                              >
                                <div className="py-1 pb-5">
                                  <div className=" text-[10px] lg:text-sm mb-1 mt-1">
                                    Instant cashback:{" "}
                                    <span className="text-gray-600">
                                      {item.cashback1}
                                      <div className="flex flex-col gap-1 mt-1">
                                        <p>{item.cashback2}</p>
                                        <p>{item.cashback3}</p>
                                        <p>{item.cashback4}</p>
                                        <p>{item.cashback5}</p>
                                        <p>{item.cashback6}</p>
                                      </div>
                                    </span>
                                  </div>
                                  <div className=" text-[10px] lg:text-sm mb-3">
                                    Apple Trade In:{" "}
                                    <span className="text-gray-600">
                                      {item.trade}
                                    </span>
                                  </div>
                                  <Link
                                    className="bg-blue-500 text-[10px] px-3 py-2 lg:text-sm rounded-3xl text-white"
                                    href={item.link}
                                  >
                                    {item.buttonName}
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Image
                        width={200}
                        height={200}
                        src="/apple-site/offers/avatar.jpeg"
                        className="w-7 rounded-full h-7"
                        alt="aixs"
                      />
                      <p className="text-[12px] lg:text-sm">
                        If you have any more questions,
                        <span className="text-blue-500 hover:underline">
                          {" "}
                          chat with a Specialist
                        </span>
                      </p>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </h2>
      </div>
    </div>
  );
};

export default seeOffers;
