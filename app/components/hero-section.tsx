import React from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const heroSection = () => {
  return (
    <div className="pl-5 xl:mb-[8rem] xl:ml-[10rem] mt-15">
      <div>
        <div className="md:flex md:gap-7 xl:gap-[40rem] lg:gap-18">
          <h2 className="text-[33px] font-semibold mb-7 max-w-[90%] lg:text-5xl md:max-w-[65%] md:text-4xl xl:max-w-[40%]">
            Store.{" "}
            <span className="text-black/50">
              The best way to buy the products you love.
            </span>
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/apple-site/avatar/needHelp.jpeg"
                className="size-8"
                width={10}
                height={10}
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
                  href="/mac"
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
        <div className="mt-15 ml-3 flex items-center overflow-x-scroll xl:gap-15 gap-5 md:gap-13 no-scrollbar pr-5">
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-mac.png"
              alt="mac-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">Mac</div>
          </div>
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-iphone.png"
              alt="iphone-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">
              iPhone
            </div>
          </div>
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-ipad.png"
              alt="ipad-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">iPad</div>
          </div>
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-watch.png"
              alt="iwatch-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">
              Apple Watch
            </div>
          </div>
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-airpods.png"
              alt="airpods-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">
              AirPods
            </div>
          </div>
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-airtag.png"
              alt="airtag-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">
              AirTag
            </div>
          </div>
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-tv.png"
              alt="tv-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">
              Apple TV 4K
            </div>
          </div>
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-homepod.png"
              alt="homepod-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">
              HomePod
            </div>
          </div>
          <div className="flex flex-col w-22 items-center cursor-pointer gap-3">
            <Image
              width={88}
              height={88}
              className="min-w-22 xl:min-w-32 md:min-w-28"
              src="/apple-site/icons/icon-accessories.png"
              alt="accessories-icon"
            />
            <div className="font-Sf-semibold text-sm hover:underline">
              Accessories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
