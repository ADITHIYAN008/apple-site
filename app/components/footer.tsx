import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            Apple Wallet
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Wallet</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-black/70 text-[12px]">
            For Business
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 ml-5 text-black/60 text-[12px]">
            <a href="#">Apple and Business</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <Accordion className="ml-1 lg:hidden" type="single" collapsible>
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
      <div className="w-full lg:hidden h-[1px] bg-black/20"></div>
      <div className="flex mt-6 mb-10 gap-15">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 mb-3">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              Shop and Learn
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Store
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Mac
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                iPad
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                iPhone
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Watch
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                AirPods
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                TV & Home
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                AirTag
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Accessories
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Gift Cards
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              Apple Wallet
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Wallet
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 mb-3">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              Account
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Manage Your Apple Account
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Store Account
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                iCloud.com
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              Entertainment
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple One
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple TV+
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Music
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Arcade
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Podcasts
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Books
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Store
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              Apple Store
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Find a Store
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Genius Bar
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Today at Apple
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Summer Camp
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Ways to Buy
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Trade In
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Recycling Programme
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Find you Order - Apple
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Shopping Help
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 mb-3">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              For Business
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple and Business
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              For Education
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple and Education
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Shop for Education
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Shop for University
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              For Healthcare
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple in Healthcare
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Health on Apple Watch
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 mb-3">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              Apple Values
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Accessiblity
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Environment
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Privacy
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Supply Chain
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[13px] font-Sf-semibold tracking-wide">
              About Apple
            </h2>
            <ul className="flex flex-col gap-2">
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Newsroom
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Apple Leadership
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Career Opportunities
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Investors
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Ethics & Compliance
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Events
              </Link>
              <Link
                className="text-[13px] text-black/50 tracking-wide"
                href="#"
              >
                Contact Apple
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[13px] tracking-wide mb-4 pl-1 pr-4 text-black/50 lg:mb-4">
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
        <div className="w-full h-[1px] bg-black/20"></div>
        <p className="text-[13px] pl-1 pr-4 tracking-wide lg:hidden text-black/50 mb-3">
          India
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex">
            <p className="text-[13px] pl-1 tracking-wide pr-4 text-black/50 mb-2">
              Copyright &copy; 2025 Apple Inc. All rights reserved.
            </p>
            <p className="text-[13px] pl-1 pr-4 tracking-wide text-black/70">
              Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map
            </p>
          </div>
          <p className="text-[13px] pl-1 pr-4 tracking-wide text-black mb-3">
            India
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;
