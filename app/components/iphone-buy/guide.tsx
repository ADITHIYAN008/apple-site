import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const guide = () => {
  return (
    <div className="flex pl-5 gap-5 pr-5 overflow-x-scroll xl:pl-[11rem] items-center no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Compare All Models
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Which iPhone is right for you?
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/iphone/guide/compare.jpeg"
          alt="compare all"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h1 className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex gap-0 items-center text-transparent text-xl bg-clip-text tracking-wide">
            Apple Intelligence.
          </h1>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Write, express yourself and get things done effortlessly.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/iphone/guide/apple-intelligence.jpeg"
          alt="apple-intelligence"
        />
      </div>

      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Today at apple
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[20rem] md:max-w-[90%]">
            Explore Apple Intelligence
          </h2>
          <h2>
            Come and try it for yourself in a free session at the Apple Store.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/guide/today-at-apple.jpeg"
          alt="specialist"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            iPhone Specialist
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Shop one on one with a Specialist onine.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/iphone/guide/iphone-specialist.jpeg"
          alt="iphone specialist"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Switch to ipone
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[15rem] md:max-w-[90%]">
            Switching from Andriod to iPhone is super simple.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/iphone/guide/switching.jpeg"
          alt="switching to iphone"
        />
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/50">
            Watch and learn
          </h2>
          <h2 className="font-Sf-semibold text-[19px] max-w-[13rem] md:max-w-[90%] md:text-3xl text-black">
            How to trade in for an iPhone.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-[85%] z-20 object-cover rounded-tr-3xl rounded-b-3xl rounded-tl-3xl"
          src="/apple-site/buy/iphone/guide/watch-learn.png"
          alt="watch-and-support"
        />
        <div className="w-full h-[27%] bg-white absolute bottom-0 z-50 rounded-bl-3xl rounded-br-3xl left-0 flex items-center px-8 gap-5">
          <p className="text-[14px] text-black/70">
            Get a one-minute overview on Apple Trade In from Tanny.
          </p>
          <div className="bg-gray-400/30 p-3 rounded-full">
            <FaPlay className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default guide;
