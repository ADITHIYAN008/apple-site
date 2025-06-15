import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const setupAndSupport = () => {
  return (
    <div className="flex pl-5 gap-5 pr-5 overflow-x-scroll items-center xl:pl-[11rem] no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8 text-black max-w-[80%]">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Personal Setup
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[20rem] md:max-w-[90%]">
            Set up your new Mac with help from a Specialist.
          </h2>
          <h2>
            Let us guide you through data transfer, the latest features and
            more, in online, one-to-one sessions.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/setup-and-support/personal-setup.jpeg"
          alt="personal-setup"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Easy Data Transfer
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            New Mac? See how easy it is to move your content over.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/setup-and-support/data-transfer.jpeg"
          alt="data-transfer"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Applecare+
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Get accidental damage protection and expert technical support from
            Apple.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/setup-and-support/apple-care+.jpeg"
          alt="apple-care+"
        />
      </div>
      <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/50">
            Watch and learn
          </h2>
          <h2 className="font-Sf-semibold text-[19px] max-w-[13rem] md:max-w-[90%] md:text-3xl text-black">
            Need support? Our teams are here for you.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-[85%] z-20 object-cover rounded-tr-3xl rounded-b-3xl rounded-tl-3xl"
          src="/apple-site/buy/mac/setup-and-support/watch-and-learn.jpeg"
          alt="watch-and-support"
        />
        <div className="w-full h-[27%] bg-white absolute bottom-0 z-50 rounded-bl-3xl rounded-br-3xl left-0 flex items-center px-8 gap-5">
          <p className="text-[14px] text-black/70">
            Get a quick overview from pritesh on the Apple Support App.
          </p>
          <div className="bg-gray-400/30 p-3 rounded-full">
            <FaPlay className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl text-white hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-white">
            Today at Apple
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[20rem] md:max-w-[90%]">
            Join us to discover the best of Mac.
          </h2>
          <h2>
            Get started or explore what&rsquo;s new in free sessions at the
            Apple Store.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/setup-and-support/join-us.jpeg"
          alt="join-us"
        />
      </div>
    </div>
  );
};

export default setupAndSupport;
