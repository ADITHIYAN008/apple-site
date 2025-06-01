import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const help = () => {
  return (
    <div className="pl-5 mt-5">
      <h2 className="text-[25px] tracking-wide font-semibold mb-1">
        Help is here.{" "}
        <span className="text-black/50 tracking-wide">
          Whenever and however you need it.
        </span>
      </h2>
      <div className="flex gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[32rem]">
        <div className="max-w-[19rem] min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-50 top-6 left-8">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
              Apple Specialist
            </h2>
            <h2 className="font-Sf-semibold text-[20px] tracking-wide max-w-[14rem]">
              Shop one on one with a Speicialist online.
            </h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/help/specialist.jpeg"
            alt="specialist"
          />
        </div>
        <div className="max-w-[19rem] min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-50 top-6 left-8">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
              Today at apple
            </h2>
            <h2 className="font-Sf-semibold text-[20px] tracking-wide max-w-[19rem]">
              Explore Apple Intelligence.
            </h2>
            <p className="text-[16px] max-w-[15rem]">
              Come and try it for yourself in a free session at the Apple Store.
            </p>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/help/apple-intelligence.jpeg"
            alt="apple-intelligence"
          />
        </div>
        <div className="max-w-[19rem] min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-50 top-6 left-8">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
              Today at apple
            </h2>
            <h2 className="font-Sf-semibold text-[20px] tracking-wide max-w-[19rem]">
              Join free sessions at your Apple Store.
            </h2>
            <p className="text-[17px] max-w-[15rem]">
              Learn about the latest features and how to go further with your
              Apple devices.
            </p>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/help/free-sessions.jpeg"
            alt="free-sessions"
          />
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-50 top-6 left-8">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-white/50">
              Business
            </h2>
            <h2 className="font-Sf-semibold text-[19px] max-w-[13rem] text-white">
              From enterprise to small busniess, we&rsquo;ll work with you.¹
            </h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/help/business.jpeg"
            alt="emi"
          />
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-50 top-6 left-8">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/50">
              Personal Setup
            </h2>
            <h2 className="font-Sf-semibold text-[20px] max-w-[15rem] ">
              Set up your new device with help from a Specialist.
            </h2>
            <p className="text-[16px] max-w-[15rem]">
              Let us guide you through data tranfer, the latest features and
              more, in an online, one-to-one session.
            </p>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/help/Personal.jpeg"
            alt="emi"
          />
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-50 top-6 left-8">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/50">
              Watch and learn
            </h2>
            <h2 className="font-Sf-semibold text-[19px] max-w-[13rem] text-black">
              Need support? Our teams are here for you.
            </h2>
          </div>
          <Image
            fill
            className="w-full h-[85%] z-20 object-cover rounded-tr-3xl rounded-tl-3xl"
            src="/apple-site/help/learn.jpeg"
            alt="emi"
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
      </div>
    </div>
  );
};

export default help;
