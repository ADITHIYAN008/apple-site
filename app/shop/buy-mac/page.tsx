"use client";
import NavbarComp from "@/app/components/NavbarComp";
import Models from "@/app/components/mac-buy/models";
import WaysToSave from "@/app/components/mac-buy/ways-to-save";
import SeeOffers from "@/app/components/see-offers";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const navigators = [
  {
    title: "All Models",
    link: "#allModels",
  },
  {
    title: "Ways to Save",
    link: "#waysToSave",
  },
  {
    title: "Shopping Guides",
    link: "shoppingGuides",
  },
  {
    title: "The Apple Store Difference",
    link: "appleStoreDifference",
  },
  {
    title: "Accessories",
    link: "accessories",
  },
  {
    title: "Mac for Business",
    link: "macForBusiness",
  },
  {
    title: "The Mac Experience",
    link: "macExperience",
  },
  {
    title: "Setup and Support",
    link: "setupAndSupport",
  },
];

const page = () => {
  const [indexFocus, setIndexFocus] = useState(0);
  return (
    <div>
      <NavbarComp />
      <SeeOffers />
      <div className="px-5 pt-14">
        <h2 className="font-Sf-semibold text-3xl mb-5">Shop Mac</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/apple-site/avatar/needHelp.jpeg"
              className="size-8"
              width={200}
              height={200}
              alt="NeedHelpAvatar"
            />
            <div>
              <h2 className="text-sm font-Sf-semibold text-black/70">
                Need shopping help?
              </h2>
              <Link
                href="/mac"
                className="flex text-sm items-center gap-0.5 cursor-pointer hover:underline text-blue-500"
              >
                Ask a Specialist{" "}
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaApple className="size-8" />
            <div>
              <h2 className="text-sm font-Sf-semibold text-black/70">
                Visit an Apple Store
              </h2>
              <Link
                href="/retail"
                className="flex text-sm items-center cursor-pointer hover:underline gap-0.5 text-blue-500"
              >
                Find one near you{" "}
                <span>
                  <GoArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-13 flex overflow-scroll text-nowrap gap-12 text-lg no-scrollbar">
        {navigators.map((item, index) => (
          <a
            className={`${
              indexFocus === index ? "border-b font-Sf-semibold" : ""
            } cursor-pointer`}
            onClick={() => setIndexFocus(index)}
            key={index}
            href={item.link}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div id="allModels" className="xl:ml-[10rem] max-w-[90%] mt-15">
        <h2 className="text-[25px] md:text-3xl tracking-wide font-semibold mb-1 pl-5">
          All models.{" "}
          <span className="text-black/50 tracking-wide">Take your pick.</span>
        </h2>
        <Models />
      </div>
      <div id="waysToSave" className="xl:ml-[10rem] mt-5">
        <h2 className="text-[25px] md:text-3xl tracking-wide font-semibold mb-1 pl-5 max-w-[90%]">
          Ways to save.{" "}
          <span className="text-black/50 tracking-wide">
            Find what works for you.
          </span>
        </h2>
        <WaysToSave />
      </div>
    </div>
  );
};

export default page;
