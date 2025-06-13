import React from "react";
import NavbarComp from "../components/NavbarComp";

import { IoIosSearch } from "react-icons/io";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { BsApple } from "react-icons/bs";
import { LuCalculator } from "react-icons/lu";

const page = () => {
  return (
    <div className="bg-white">
      <NavbarComp />

      <div className="md:flex md:items-center bg-white max-w-[1100px] mx-auto md:px-5 md:justify-between">
        <h2 className="text-xl font-Sf-semibold text-center">Find a store</h2>
        <div className="border  flex focus-within:border-2 focus-within:border-blue-600 items-center md:min-w-[20rem] px-2 py-3 rounded-2xl w-auto mx-10 md:mt-0 mt-5">
          <IoIosSearch className="size-5 mr-2 ml-2" />
          <input
            className="focus:outline-none w-full"
            type="text"
            placeholder="Search by location, postcode"
          />
        </div>
        <h2 className="flex text-blue-500 justify-center tracking-wide mt-5 items-center cursor-pointer hover:underline md:mt-0">
          Complete store list <GoChevronRight />
        </h2>
      </div>
      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mt-7 tracking-wide md:mt-2">
            <div className="mt-5  bg-[#f5f5f7]">
              <h2 className="pt-5 font-Sf-semibold text-2xl pb-5">
                Stores near Chennai
              </h2>
              <div className="md:flex md:justify-center ">
                <div className="px-5 flex gap-3 md:gap-10 no-scrollbar overflow-scroll">
                  <div className="w-[20rem] min-w-[20rem] shadow-2xl/10 min-h-[21rem] rounded-2xl cursor-pointer bg-white ">
                    <div className="bg-black w-full h-auto overflow-clip rounded-t-2xl">
                      <Image
                        width={200}
                        height={200}
                        className="object-cover w-full rounded-t-2xl transition-all duration-300 ease-in-out hover:scale-105"
                        src="/apple-site/stores/bkc.jpeg"
                        alt="bkc"
                      />
                    </div>
                    <div className="text-left px-5 mt-2">
                      <h2 className="font-Sf-semibold text-lg">Apple BKC</h2>
                      <div className="flex mt-1 flex-col text-black/50 gap-0.5">
                        <h3 className="text-sm">G1-G2, Jio World Drive</h3>
                        <h3 className="text-sm">Bandra Kurla Complex</h3>
                        <h3 className="text-sm">Mumbai, Maharashtra, 400051</h3>
                      </div>
                      <h3 className="text-sm text-black/50 mt-4">
                        Open until 10:00 PM
                      </h3>
                    </div>
                  </div>
                  <div className="w-[20rem] min-w-[20rem] shadow-2xl/10 min-h-[21rem] rounded-2xl cursor-pointer bg-white">
                    <div className="bg-black w-full h-auto rounded-t-2xl overflow-clip">
                      <Image
                        width={200}
                        height={200}
                        className="object-cover w-full rounded-t-2xl transition-all duration-300 ease-in-out hover:scale-105"
                        src="/apple-site/stores/saket.jpeg"
                        alt="saket"
                      />
                    </div>
                    <div className="text-left px-5 mt-2">
                      <h2 className="font-Sf-semibold text-lg">Apple Saket</h2>
                      <div className="flex mt-1 flex-col text-black/50 gap-0.5">
                        <h3 className="text-sm">F-11, Select CITYWALk</h3>
                        <h3 className="text-sm">District Centre, Saket</h3>
                        <h3 className="text-sm">New Delhi, Delhi, 110017</h3>
                      </div>
                      <h3 className="text-sm text-black/50 mt-4">
                        Open until 10:00 PM
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 pb-20">
                <h2 className="pt-10 font-Sf-semibold text-3xl pb-5">
                  Come see the best of Apple at out stores.
                </h2>
                <h3 className="font-Sf-semibold text-lg px-10">
                  Shop for our products and get expert advice in person.
                </h3>
                <div className="w-[22rem] md:w-auto mt-10 min-w-[22rem] shadow-2xl/10 pb-5 md:pb-0 md:min-h-[20rem] md:flex md:flex-row-reverse h-auto rounded-2xl bg-white">
                  <div className="w-full rounded-t-2xl h-[15rem] md:h-[20rem] md:w-[40rem]  md:rounded-none md:rounded-r-2xl bg-black">
                    <Image
                      width={200}
                      height={200}
                      className="object-cover md:rounded-r-2xl w-full h-full md:rounded-none rounded-t-2xl"
                      src="/apple-site/stores/trade.png"
                      alt="bkc"
                    />
                  </div>
                  <div className="pt-7 md:px-10 px-5">
                    <h2 className="flex items-center font-Sf-semibold gap-1 text-sm justify-center">
                      <BsApple /> Trade In
                    </h2>
                    <h2 className="font-Sf-semibold text-2xl mt-2">
                      Bring in an eligible device and We'll trade it for instant
                      credit.¹
                    </h2>
                    <h2 className="flex items-center text-lg justify-center text-blue-500 cursor-pointer hover:underline mt-3">
                      See what yout device is worth <GoChevronRight />
                    </h2>
                    <h2 className="flex mt-7 items-center text-lg justify-center px-5 hover:underline cursor-pointer text-blue-500">
                      How to prepare your device for trade-in
                    </h2>
                  </div>
                </div>
                <div className="md:flex md:gap-6">
                  <div className="w-[22rem] md:w-full px-5 mt-7 min-w-[22rem] shadow-2xl/10 min-h-[18rem] pt-10 rounded-2xl bg-white">
                    <LuCalculator className="size-20 text-blue-500 mx-auto" />
                    <h2 className="font-Sf-semibold text-xl mt-4">
                      Shop one-on-one with a Specialist at an Apple Store.
                    </h2>
                    <h2 className="flex items-center text-lg justify-center text-blue-500 cursor-pointer hover:underline mt-4">
                      Reverse a shopping session <GoChevronRight />
                    </h2>
                  </div>
                  <div className="w-[22rem] px-5 mt-7 min-w-[22rem] md:w-full shadow-2xl/10 min-h-[18rem] pt-10 rounded-2xl bg-white">
                    <BsApple className="size-20 text-[#59c1e3] mx-auto" />
                    <h2 className="font-Sf-semibold text-xl mt-8">
                      Get it today. Buy online and we'll have it ready for
                      pickup.
                    </h2>
                  </div>
                </div>
                <div className="w-[22rem] mt-8 min-w-[22rem] shadow-2xl/10 min-h-[34rem] rounded-2xl md:min-h-[20rem] md:w-auto md:items-center md:flex md:flex-row-reverse pt-10 md:px-5 md:pt-2 bg-white">
                  <div className="bg-black/5 flex items-center justify-center rounded-xl w-[90%] h-[12rem] mx-auto">
                    <BsApple className="size-25 text-black/20" />
                  </div>
                  <div className="pt-18 md:pt-2 px-5">
                    <h2 className="flex items-center font-Sf-semibold gap-1 text-sm justify-center">
                      Apple Store Gift Cards
                    </h2>
                    <h2 className="font-Sf-semibold text-2xl mt-2">
                      A gift that gives and gives.
                    </h2>
                    <h2 className="flex mt-5 items-center text-lg justify-center px-5 ">
                      Purchse Apple devices and accessories within our stores
                      with Apple Store Gift Card.
                    </h2>
                    <h2 className="flex items-center text-lg justify-center text-blue-500 cursor-pointer hover:underline mt-2">
                      Learn more <GoChevronRight />
                    </h2>
                  </div>
                </div>
                <h2 className="pt-15 font-Sf-semibold text-3xl pb-5">
                  We'll help you get started. And keep going.
                </h2>
                <h3 className="font-Sf-semibold text-lg px-10">
                  Every store has dedicated teams for support, learning and
                  more.
                </h3>

                <div className="w-[22rem]  md:w-auto md:flex md:flex-row-reverse mt-10 min-w-[22rem] md:min-h-[20rem] shadow-2xl/10 md:items-center min-h-[34rem] rounded-2xl bg-white">
                  <div className="w-full rounded-t-2xl h-[15rem] md:h-[20rem] md:rounded-t-none md:rounded-r-2xl bg-black">
                    <Image
                      width={200}
                      height={200}
                      className="object-cover w-full h-full rounded-t-2xl md:rounded-t-none md:rounded-r-2xl"
                      src="/apple-site/stores/genius.jpg"
                      alt="bkc"
                    />
                  </div>
                  <div className="pt-7 md:pt-0 px-5">
                    <h2 className="flex items-center font-Sf-semibold gap-1 text-sm justify-center">
                      Genius Bar
                    </h2>
                    <h2 className="font-Sf-semibold text-2xl mt-2">
                      Get expert service and support at the Genius Bar.
                    </h2>
                    <h2 className="flex items-center text-lg justify-center text-blue-500 cursor-pointer hover:underline mt-3">
                      Get help here <GoChevronRight />
                    </h2>
                    <h2 className="flex mt-7 items-center text-lg justify-center px-5 cursor-pointer hover:underline text-blue-500">
                      How to prepare your device for your appointment
                    </h2>
                  </div>
                </div>
                <div className="w-[22rem] md:w-auto md:flex md:min-h-[20rem] mt-7 min-w-[22rem] shadow-2xl/10 min-h-[27rem] rounded-2xl bg-white md:items-center">
                  <div className="w-full rounded-t-2xl h-[15rem] md:min-h-[20rem] md:rounded-t-none md:rounded-l-2xl bg-black">
                    <Image
                      width={200}
                      height={200}
                      className="object-cover w-full h-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                      src="/apple-site/stores/at-work.jpg"
                      alt="bkc"
                    />
                  </div>
                  <div className="pt-7 md:pt-0 px-5">
                    <h2 className="flex items-center font-Sf-semibold gap-1 text-sm justify-center">
                      Apple at Work
                    </h2>
                    <h2 className="font-Sf-semibold text-2xl mt-2">
                      Put our Small Business Team on your team.
                    </h2>
                    <h2 className="flex items-center text-lg justify-center text-blue-500 cursor-pointer hover:underline mt-3">
                      See how we can help <GoChevronRight />
                    </h2>
                  </div>
                </div>
                <h2 className="pt-15 font-Sf-semibold text-3xl pb-5">
                  What's heppening at Apple.
                </h2>
                <div className="md:flex md:items-center md:gap-3">
                  <div className="w-[22rem] md:w-full  mt-3 min-w-[22rem] shadow-2xl/10 min-h-[29rem] rounded-md bg-white">
                    <div className="w-full rounded-t-md h-[15rem] bg-black overflow-clip">
                      <Image
                        width={200}
                        height={200}
                        className="object-cover w-full h-full rounded-t-md transition-all duration-300 ease-in-out hover:scale-105"
                        src="/apple-site/stores/today1.webp"
                        alt="bkc"
                      />
                    </div>
                    <div className="pt-10 pl-8 text-left pr-8">
                      <h2 className="font-Sf-semibold text-[12px] text-black/50">
                        Today at Apple
                      </h2>
                      <h2 className="font-Sf-semibold text-xl pr-10 mt-2">
                        Explore Apple Intelligence in a free session at your
                        Apple Store.
                      </h2>
                      <h2 className="flex items-center text-lg cursor-pointer hover:underline text-blue-500 mt-3">
                        Sign up <GoChevronRight />
                      </h2>
                    </div>
                  </div>
                  <div className="w-[22rem] md:w-full md:mt-3 mt-5 min-w-[22rem] shadow-2xl/10 min-h-[29rem] rounded-md bg-white">
                    <div className="w-full rounded-t-md h-[15rem] overflow-clip bg-black">
                      <Image
                        width={200}
                        height={200}
                        className="object-cover w-full h-full rounded-t-md transition-all duration-300 ease-in-out hover:scale-105"
                        src="/apple-site/stores/kids.jpg"
                        alt="bkc"
                      />
                    </div>
                    <div className="pt-10 pl-8 text-left pr-5">
                      <h2 className="font-Sf-semibold text-[12px] text-black/50">
                        Today at Apple
                      </h2>
                      <h2 className="font-Sf-semibold text-xl pr-16 mt-2">
                        Get ready for fun at Apple Camp, free for kids ages
                        6-10.
                      </h2>
                      <h2 className="flex items-center text-lg  cursor-pointer hover:underline text-blue-500 mt-3">
                        Get notified <GoChevronRight />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pb-8 bg-[#f5f5f7]">
            <p className="text-[13px] tracking-wide mb-4 pl-1 pr-4 text-black/50 lg:mb-4">
              More ways to shop:{" "}
              <a href="#" className="text-blue-500 underline cursor-pointer">
                Find an Apple Store
              </a>{" "}
              or{" "}
              <a href="#" className="text-blue-500 underline cursor-pointer">
                other retailer
              </a>{" "}
              near you. Or call 000800 040 1966.
            </p>
            <div className="w-full  mb-3 h-[1px] bg-black/20"></div>
            <p className="text-[13px] pl-1 pr-4 tracking-wide lg:hidden text-black/50 mb-3">
              India
            </p>
            <div className="flex flex-col items-start mt-4">
              <div className="flex flex-col">
                <p className="text-[13px] pl-1 tracking-wide pr-4 text-black/50 mb-2">
                  Copyright &copy; 2025 Apple Inc. All rights reserved.
                </p>
                <p className="text-[13px] pl-1 pr-4 tracking-wide text-black/70">
                  Privacy Policy | Terms of Use | Sales Policy | Legal | Site
                  Map
                </p>
              </div>
              <p className="text-[13px] pl-1 mt-2 pr-4 tracking-wide text-black mb-3 ">
                India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
