import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { FaApple } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";

const footer = () => {
  return (
    <div className="px-5 mt-3 mb-8">
      <div className="w-full h-[1px] bg-black/20"></div>
      <div className="flex items-center  mt-4 mb-4">
        <FaApple className="text-black/80" />
        <LuChevronRight className="text-black/60" />
        <h2 className="text-[13px] text-black/60">App Store online</h2>
      </div>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            Shop and Lean
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Store</a>
            <a href="#">Mac</a>
            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Watch</a>
            <a href="#">TV & Home</a>
            <a href="#">AirTag</a>
            <a href="#">Accessories</a>
            <a href="#">Gift Cards</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            Apple Wallet
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Wallet</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            Account
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Manage Your Apple Account</a>
            <a href="#">Apple Store Account</a>
            <a className="underline" href="#">
              iCloud.com
            </a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            Entertainment
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Apple One</a>
            <a href="#">Apple TV+</a>
            <a href="#">Apple Music</a>
            <a href="#">Apple Arcade</a>
            <a href="#">Apple Podcasts</a>
            <a className="underline" href="#">
              Apple Books
            </a>
            <a href="#">Apple Store</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            Apple Store
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Find a Store</a>
            <a href="#">Genius Bar</a>
            <a href="#">Today at Apple</a>
            <a href="#">Apple Summer Camp</a>
            <a href="#">Ways to Buy</a>
            <a href="#">Apple Trade In</a>
            <a className="underline" href="#">
              Recycling Programme
            </a>
            <a href="#">Find your Order - Apple</a>
            <a href="#">Shopping Help</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            For Business
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Apple and Business</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            For Education
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Apple and Education</a>
            <a href="#">Shop for Education</a>
            <a href="#">Shop for University</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            For Healthcare
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Apple in Healthcare</a>
            <a href="#">Health on Apple Watch</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            Apple Values
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Accessibility</a>
            <a href="#">Environment</a>
            <a href="#">Privacy</a>
            <a href="#">Supply Chain</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <Accordion className="ml-1" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            About Apple
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Newsroom</a>
            <a href="#">Apple Leadership</a>
            <a href="#">Career Opportunities</a>
            <a href="#">Investors</a>
            <a href="#">Ethics & Compliance</a>
            <a href="#">Events</a>
            <a href="#">Contact Apple</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full h-[1px] bg-black/20"></div>
      <div className="mt-4">
        <p className="text-[13px] tracking-wide mb-3 pl-1 pr-4 text-black/50">
          More ways to shop:{" "}
          <a href="#" className="text-blue-500 underline">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-500 underline">
            other retailer
          </a>{" "}
          near you. Or call 000800 040 1966.
        </p>
        <p className="text-[13px] pl-1 pr-4 tracking-wide text-black/50 mb-3">
          India
        </p>
        <p className="text-[13px] pl-1 tracking-wide pr-4 text-black/50 mb-2">
          Copyright &copy; 2025 Apple Inc. All rights reserved.
        </p>
        <p className="text-[13px] pl-1 pr-4 tracking-wide text-black/70">
          Privacy Policy | Terms of Use | Sales Policy | Legal | <br /> Site Map
        </p>
      </div>
    </div>
  );
};

export default footer;
