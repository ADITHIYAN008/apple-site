import Image from "next/image";
import React from "react";

const experience = () => {
  return (
    <div className="pl-5 xl:pl-0  mt-5 mb-6">
      <h2 className="text-[25px] tracking-wide font-semibold mb-1 xl:ml-[11.5rem] md:text-3xl">
        The Apple experience.{" "}
        <span className="text-black/50 tracking-wide">
          Do even more with Apple products and services.
        </span>
      </h2>
      <div className="flex xl:pl-[11.5rem] gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[32rem] md:min-h-[34rem]">
        <div className="min-w-[19rem] cursor-pointer md:min-w-[23rem] max-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-10 left-10 max-w-[15rem]">
            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 flex gap-0 items-center text-transparent text-xl bg-clip-text font-Sf-semibold tracking-wide">
              Apple Intelligence.
            </h1>
            <h2 className="font-Sf-semibold text-xl text-black md:text-3xl tracking-wide">
              Write, express yourself and get things done efforlessly.
              <span className="text-[12px]">∆</span>
            </h2>
          </div>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/experience/intelligence.jpeg"
            alt="intelligence"
          />
        </div>
        <div className="max-w-[19rem] cursor-pointer md:min-w-[23rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-6 left-8">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
              Apple store app
            </h2>
            <h2 className="font-Sf-semibold text-[20px] tracking-wide max-w-[19rem] md:text-3xl">
              Let them know it&apos;s on the way.
            </h2>
            <p className="text-[15px] max-w-[15rem]">
              Send a digital gift message that&apos;s easy to schedule, fun to
              give and fun to get.
            </p>
          </div>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/experience/store.jpeg"
            alt="store"
          />
        </div>
        <div className="max-w-[19rem] cursor-pointer md:min-w-[23rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-6 left-8 max-w-[15rem] md:max-w-[80%]">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
              Apple TV+
            </h2>
            <h2 className="font-Sf-semibold text-[20px] tracking-wide md:text-3xl max-w-[19rem]">
              Get 3 months of <br /> Apple TV+ free when you buy an Apple
              device.
            </h2>
          </div>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/experience/tv.jpeg"
            alt="tv"
          />
        </div>
        <div className="max-w-[19rem] cursor-pointer md:min-w-[23rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-6 left-8 max-w-[15rem] md:max-w-[80%]">
            <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide mt-7 max-w-[19rem]">
              Four Apple services. One easy subscription.
            </h2>
          </div>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/experience/four.jpeg"
            alt="services"
          />
        </div>
        <div className="max-w-[19rem] cursor-pointer md:min-w-[23rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-10 left-8">
            <h2 className="font-Sf-semibold text-[20px] tracking-wide md:text-3xl max-w-[19rem]">
              We&apos;ve got you covered.
            </h2>
            <p className="text-[17px] max-w-[15rem]">
              AppleCare+ now comes with unlimited repairs for accidental damage
              protection.
            </p>
          </div>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/experience/care.jpeg"
            alt="apple-care"
          />
        </div>
        <div className="max-w-[19rem] cursor-pointer md:min-w-[23rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-6 left-8 w-[15rem]">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
              Home
            </h2>
            <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[19rem]">
              See how one app can control your entire home.
            </h2>
          </div>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/experience/home.jpeg"
            alt="control"
          />
        </div>
      </div>
    </div>
  );
};

export default experience;
