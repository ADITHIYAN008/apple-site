import React from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

type Props = {};

const heroSection = (props: Props) => {
  return (
    <div className="pl-5 mt-15">
      <div>
        <h2 className="text-[33px] font-semibold mb-7 max-w-[90%]">
          Store.{" "}
          <span className="text-black/50">
            The best way to buy the products you love.
          </span>
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/apple-site/avatar/needHelp.jpeg"
              className="size-8"
              alt="NeedHelpAvatar"
            />
            <div>
              <h2 className="text-sm font-Sf-semibold text-black/70">
                Need shopping help?
              </h2>
              <div className="flex text-sm items-center gap-0.5 text-blue-500">
                Ask a Specialist{" "}
                <span>
                  <GoArrowUpRight />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaApple className="size-8" />
            <div>
              <h2 className="text-sm font-Sf-semibold text-black/70">
                Visit an Apple Store
              </h2>
              <div className="flex text-sm items-center gap-0.5 text-blue-500">
                Find one near you{" "}
                <span>
                  <GoArrowUpRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15 ml-3 flex items-center overflow-x-scroll gap-5 no-scrollbar pr-5">
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-mac.png"
              alt="mac-icon"
            />
            <div className="font-Sf-semibold text-sm">Mac</div>
          </div>
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-iphone.png"
              alt="iphone-icon"
            />
            <div className="font-Sf-semibold text-sm">iPhone</div>
          </div>
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-ipad.png"
              alt="ipad-icon"
            />
            <div className="font-Sf-semibold text-sm">iPad</div>
          </div>
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-watch.png"
              alt="iwatch-icon"
            />
            <div className="font-Sf-semibold text-sm">Apple Watch</div>
          </div>
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-airpods.png"
              alt="airpods-icon"
            />
            <div className="font-Sf-semibold text-sm">AirPods</div>
          </div>
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-airtag.png"
              alt="airtag-icon"
            />
            <div className="font-Sf-semibold text-sm">AirTag</div>
          </div>
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-tv.png"
              alt="tv-icon"
            />
            <div className="font-Sf-semibold text-sm">Apple TV 4K</div>
          </div>
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-homepod.png"
              alt="homepod-icon"
            />
            <div className="font-Sf-semibold text-sm">HomePod</div>
          </div>
          <div className="flex flex-col w-22 items-center gap-3">
            <img
              className="min-w-22"
              src="/apple-site/icons/icon-accessories.png"
              alt="accessories-icon"
            />
            <div className="font-Sf-semibold text-sm">Accessories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
