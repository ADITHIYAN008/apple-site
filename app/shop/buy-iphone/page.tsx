"use client";
import NavbarComp from "@/app/components/NavbarComp";
import Models from "@/app/components/iphone-buy/models";
import WaysToSave from "@/app/components/iphone-buy/ways-to-save";
import Guide from "@/app/components/iphone-buy/guide";
import SeeOffers from "@/app/components/see-offers";
import StoreDifference from "@/app/components/iphone-buy/store-difference";
import ForBusiness from "@/app/components/iphone-buy/for-business";
import Accessories from "@/app/components/iphone-buy/accessories";
import MacExperience from "@/app/components/iphone-buy/mac-experience";
import SetupAndSupport from "@/app/components/iphone-buy/setup-and-support";
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
  const [indexFocus, setIndexFocus] = useState(0);
  return (
    <div>
      <NavbarComp />
      <SeeOffers />
      <div className="px-5 pt-14 lg:items-center md:flex lg:ml-[10rem] md:gap-7 xl:gap-[55rem] lg:gap-18">
        <h2 className="font-Sf-semibold text-3xl mb-5 lg:text-5xl">Shop Mac</h2>
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
      <div className="px-5 mt-13 flex overflow-scroll text-nowrap lg:ml-[10rem] gap-12 text-lg no-scrollbar">
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
      <div id="allModels" className=" mt-15">
        <h2 className="text-[25px] md:text-3xl tracking-wide xl:ml-[10rem] font-semibold mb-1 pl-5">
          All models.{" "}
          <span className="text-black/50 tracking-wide">Take your pick.</span>
        </h2>
        <Models />
      </div>
      <div id="waysToSave" className=" mt-5">
        <h2 className="text-[25px] xl:ml-[10rem] md:text-3xl tracking-wide font-semibold mb-1 pl-5 max-w-[90%]">
          Ways to save.{" "}
          <span className="text-black/50 tracking-wide">
            Right here at Apple.
          </span>
        </h2>
        <WaysToSave />
      </div>
      <div id="shoppingGuides" className=" mt-5">
        <h2 className="text-[25px] xl:ml-[10rem] md:text-3xl tracking-wide font-semibold mb-1 pl-5 max-w-[95%]">
          Shopping guides.{" "}
          <span className="text-black/50 tracking-wide">
            Can&rsquo;t decide? Start here.
          </span>
        </h2>
        <Guide />
      </div>
      <div id="appleStoreDifference" className=" mt-5">
        <h2 className="text-[25px] xl:ml-[10rem] md:text-3xl tracking-wide font-semibold mb-1 pl-5 max-w-[95%]">
          The Apple Store difference.{" "}
          <span className="text-black/50 tracking-wide">
            Even more reasons to shop with us.
          </span>
        </h2>
        <StoreDifference />
      </div>
      <div id="accessories" className=" mt-5">
        <h2 className="text-[25px] xl:ml-[10rem] md:text-3xl tracking-wide font-semibold mb-1 pl-5 max-w-[95%]">
          Accessories.{" "}
          <span className="text-black/50 tracking-wide">Made for Mac.</span>
        </h2>
        <Accessories />
      </div>
      <div id="macForBusiness" className=" mt-5">
        <h2 className="text-[25px] xl:ml-[10rem] md:text-3xl tracking-wide font-semibold mb-1 pl-5 max-w-[95%]">
          Mac for Business.{" "}
          <span className="text-black/50 tracking-wide">
            Work smarter. Go faster. Last longer.
          </span>
        </h2>
        <ForBusiness />
      </div>
      <div id="macExperience" className=" mt-5">
        <h2 className="text-[25px] xl:ml-[10rem] md:text-3xl tracking-wide font-semibold mb-1 pl-5 max-w-[95%]">
          The Mac Experience.{" "}
          <span className="text-black/50 tracking-wide">
            Designed to connect with everything Apple.
          </span>
        </h2>
        <MacExperience />
      </div>
      <div id="setupAndSupport" className=" mt-5">
        <h2 className="text-[25px] md:text-3xl tracking-wide xl:ml-[10rem] font-semibold mb-1 pl-5 max-w-[95%]">
          Setup and support.{" "}
          <span className="text-black/50 tracking-wide">
            Our Specialist are here to help.
          </span>
        </h2>
        <SetupAndSupport />
      </div>
      <div className="pl-5 mt-5 mb-2">
        <div>
          <div className="mt-12 max-w-[1100px] lg2:mx-auto flex flex-col gap-2">
            <p className="text-[13px] pl-1 pr-4 text-black/50">
              "° Apple TV+ offer available to new and qualified returning
              subscribers only. ₹99/month after free trial. Only one offer per
              Apple Account and only one offer per family if you’re part of a
              Family Sharing group, regardless of the number of devices that you
              or your family purchase. This offer is not available if you or
              your family have previously accepted an Apple TV+ 3 months free or
              1 year free offer. Offer valid for three months after eligible
              device is activated. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a className="text-black/70 underline cursor-pointer" href="">
                terms
              </a>{" "}
              apply."
            </p>
            <p className="text-[13px] pl-1 pr-4 text-black/50">
              {
                "* Mac, iPad, and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad, and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply."
              }
            </p>
            <h2 className="text-[13px] pl-1 pr-4 text-black/50">
              <p>
                § No Cost EMI is available with the purchase of an eligible
                product made using qualifying cards on 3-, 6-, 9-, or 12-month
                tenures from most leading card issuers. Eligible AirPods,
                HomePod and Beats products are available with No Cost EMI on 3-
                and 6-month tenures only. Monthly pricing is rounded to the
                nearest rupee. Exact pricing will be provided by your card
                issuer, subject to your card issuer’s terms and conditions.
                Minimum order spend applies as per your card issuer’s threshold.
                No Cost EMI is not available to Business customers and cannot be
                combined with Apple Store for Education or Corporate Employee
                Purchase Plan pricing. Card eligibility is subject to terms and
                conditions between you and your card issuer. Offer may be
                revised or withdrawn at any time without any prior notice.{" "}
                <a className="underline text-black/70 cursor-pointer" href="">
                  Terms apply
                </a>
                .
              </p>
            </h2>
            <h2 className="text-[13px] pl-1 pr-4 text-black/50">
              <p>Representative example:</p>
              <p>
                {
                  "A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00."
                }
              </p>
            </h2>
            <h2 className="text-[13px] pl-1 pr-4 text-black/50">
              <p>
                §§ Instant cashback is available with the purchase of an
                eligible product with qualifying American Express, Axis Bank and
                ICICI Bank cards only. Minimum transaction value of ₹10001.00
                applies. Click here to see instant cashback amounts and eligible
                devices. Instant cashback is available for up to two orders per
                rolling 90-day period with an eligible card. Card eligibility is
                subject to terms and conditions between you and your card
                issuer. Total transaction value is calculated after any trade-in
                credit or eligible discount is applied. Any subsequent order
                adjustment(s) or cancellation(s) may result in instant cashback
                being recalculated, and any refund may be adjusted to account
                for instant cashback clawback; this may result in no refund
                being made to you. Offer may be revised or withdrawn at any time
                without any prior notice. Additional terms apply. Instant
                cashback is not available to Business customers and cannot be
                combined with Apple Store for Education or Corporate Employee
                Purchase Plan pricing. Multiple separate orders cannot be
                combined for instant cashback.
              </p>
            </h2>
            <p className="text-[13px] pl-1 pr-4 text-black/50">
              §§ Instant cashback is available with the purchase of an eligible
              product with qualifying American Express, Axis Bank and ICICI Bank
              cards only. Minimum transaction value of ₹10001.00 applies.{" "}
              <a href="#" className="text-black/70 underline cursor-pointer">
                Click here{" "}
              </a>
              to see instant cashback amounts and eligible devices. Instant
              cashback is available for up to two orders per rolling 90-day
              period with an eligible card. Card eligibility is subject to terms
              and conditions between you and your card issuer. Total transaction
              value is calculated after any trade-in credit or eligible discount
              is applied. Any subsequent order adjustment(s) or cancellation(s)
              may result in instant cashback being recalculated, and any refund
              may be adjusted to account for instant cashback clawback; this may
              result in no refund being made to you. Offer may be revised or
              withdrawn at any time without any prior notice.{" "}
              <a href="#" className="text-black/70 underline cursor-pointer">
                Additional terms apply.
              </a>{" "}
              Instant cashback is not available to Business customers and cannot
              be combined with Apple Store for Education or Corporate Employee
              Purchase Plan pricing. Multiple separate orders cannot be combined
              for instant cashback.
            </p>
            <p className="text-[13px] pl-1 pr-4 text-black/50">
              ◊◊ Monthly pricing is after purchase using EMI with qualifying
              cards at 15.99% p.a. over a 12‑month tenure. Monthly pricing is
              rounded to the nearest rupee. Exact pricing will be provided by
              your card issuer, subject to your card issuer’s terms and
              conditions.
            </p>
            <h2 className="text-[13px] pl-1 pr-4 text-black/50">
              <p>Representative example:</p>
              <p>
                {
                  "A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. requires monthly payments of ₹7249.00. Total amount payable: ₹86988.00. Total interest paid to bank: ₹7088.00."
                }
              </p>
            </h2>
            <p className="text-[13px] pl-1 pr-4 text-black/50">
              1. Requires initial sign-up and enrolment verification by UNiDAYS.
            </p>
            <p className="text-[13px] pl-1 pr-4 text-black/50">
              ** To use iCloud you need at least iOS 10 on iPhone 5, iPod touch
              (6th generation), iPad (4th generation) or iPad mini 2; watchOS 3
              on an Apple Watch; macOS Sierra 10.12 on a Mac; tvOS 4 on an Apple
              TV (4th generation); or visionOS 1 on an Apple Vision Pro; or a PC
              with Windows 11 or later (Outlook 2019 or later or an up-to-date
              browser is required for accessing email, contacts and calendars).
              Some features require iOS 16, iPadOS 16 and macOS Ventura. Some
              features require a Wi-Fi connection. Some features are not
              available in all countries or regions. Access to some services is
              limited to 10 devices. ‡ Listed pricing is Maximum Retail Price
              (inclusive of all taxes).
            </p>
            <p className="text-[13px] pl-1 pr-4 text-black/50">
              We use your location to show you delivery options faster. We found
              your location using your IP address or because you entered it
              during a previous visit to Apple.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
