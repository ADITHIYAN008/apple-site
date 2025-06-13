"use client";
import NavbarComp from "@/app/components/NavbarComp";
import Models from "@/app/components/mac-buy/models";
import WaysToSave from "@/app/components/mac-buy/ways-to-save";
import Guide from "@/app/components/mac-buy/guide";
import SeeOffers from "@/app/components/see-offers";
import StoreDifference from "@/app/components/mac-buy/store-difference";
import ForBusiness from "@/app/components/mac-buy/for-business";
import Accessories from "@/app/components/mac-buy/accessories";
import MacExperience from "@/app/components/mac-buy/mac-experience";
import SetupAndSupport from "@/app/components/mac-buy/setup-and-support";
import Footer from "@/app/components/footer";
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
    link: "#shoppingGuides",
  },
  {
    title: "The Apple Store Difference",
    link: "#appleStoreDifference",
  },
  {
    title: "Accessories",
    link: "#accessories",
  },
  {
    title: "Mac for Business",
    link: "#macForBusiness",
  },
  {
    title: "The Mac Experience",
    link: "#macExperience",
  },
  {
    title: "Setup and Support",
    link: "#setupAndSupport",
  },
];

const page = () => {
  return <div>page</div>;
};
