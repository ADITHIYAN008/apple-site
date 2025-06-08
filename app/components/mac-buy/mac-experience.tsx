import Image from "next/image";
import React from "react";

const macExperience = () => {
  return (
    <div className="flex pl-5 gap-5 pr-5 overflow-x-scroll items-center xl:pl-[11rem] no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8 text-white max-w-[80%]">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-white">
            Mac For Students
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[20rem] md:max-w-[90%]">
            Best in class. In college and beyond.
          </h2>
          <h2>Whatever college throws your way, Mac has your back.</h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/mac-experience/mac-for-students.jpeg"
          alt="mac-for-students"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            MacOS
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Come for the power. Stay for the fun. Discover macOS Sonoma.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/mac-experience/mac-os.jpeg"
          alt="mac-os"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Apple TV+
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Get 3 months of Apple TV+ free when you buy a Mac.°
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/mac-experience/apple-tv.jpeg"
          alt="apple-tv"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            iCloud+
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[20rem] md:max-w-[90%]">
            Get the storage you need and the privacy you deserve. Upgrade your
            plan today.**
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/mac-experience/icloud.jpeg"
          alt="icloud"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl mt-4 tracking-wide max-w-[20rem] md:max-w-[90%]">
            Four Apple services. One easy subscription.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/mac-experience/apple-services.jpeg"
          alt="apple-services"
        />
      </div>
    </div>
  );
};

export default macExperience;
