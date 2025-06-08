import Image from "next/image";
import React from "react";

const guide = () => {
  return (
    <div className="flex pl-5 gap-5 pr-5 overflow-x-scroll xl:pl-[11rem] items-center no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Compare All Models
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Which Mac is right for you?
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/guide/compare-all.jpeg"
          alt="compare all"
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
            Mac Specialist
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Shop one on one with a Specialist onine.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/guide/mac-specialist.png"
          alt="compare all"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Why Mac
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[20rem] md:max-w-[90%]">
            Discover what Mac can do.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/guide/why-mac.jpeg"
          alt="compare all"
        />
      </div>
    </div>
  );
};

export default guide;
