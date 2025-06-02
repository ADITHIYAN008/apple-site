import Image from "next/image";
import React from "react";

const sound = () => {
  return (
    <div className="pl-5 mt-5 mb-6">
      <h2 className="text-[25px] tracking-wide font-semibold mb-1 md:text-3xl">
        Loud and clear.{" "}
        <span className="text-black/50 tracking-wide">
          Unparalled choices for rich, high-quality sound.
        </span>
      </h2>
      <div className="flex gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[32rem] md:min-h-[34rem]">
        <div className="max-w-[19rem] md:min-w-[23rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-10 left-8">
            <h2 className="font-Sf-semibold text-[22px] max-w-[12rem] md:text-3xl tracking-wide md:max-w-[90%]">
              Get 3 months of Apple Music free.
            </h2>
            <p className="text-[17px] tracking-wide max-w-[15rem] mt-1">
              Included with the purchase of selected Apple devices.*
            </p>
          </div>
          <Image
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/sound/3-months.jpeg"
            alt="3 months"
          />
        </div>
        <div className="min-w-[19rem] md:min-w-[23rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 md:size-56 mx-auto mt-10">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/sound/pods-4.jpeg"
              alt="pods-4"
            />
          </div>
          <div className="px-8 pt-6">
            <h2 className="font-Sf-semibold text-[12px] text-amber-700 mb-1">
              Free Engraving
            </h2>
            <h2 className="font-Sf-semibold tracking-wide">
              AirPods 4 with Active Noise Cancellation
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹17900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] md:min-w-[23rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 md:size-56 mx-auto mt-10">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/sound/pods-2.jpeg"
              alt="pods pro 2"
            />
          </div>
          <div className="px-8 pt-6">
            <h2 className="font-Sf-semibold text-[12px] text-amber-700 mb-1">
              Free Engraving
            </h2>
            <h2 className="font-Sf-semibold tracking-wide">AirPods Pro 2</h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹24900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] md:min-w-[23rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 md:size-56 mx-auto mt-10">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/sound/beats-2.jpeg"
              alt="beats 2"
            />
            <div className="flex justify-center w-full gap-1 mt-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[#121535]"></div>
              <div className="w-3 h-3 rounded-full bg-[#3B4C40]"></div>
              <div className="w-3 h-3 rounded-full bg-[#79afe6]"></div>
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            </div>
          </div>
          <div className="px-8 pt-6">
            <h2 className="font-Sf-semibold text-[12px] text-amber-700 mb-1">
              New
            </h2>
            <h2 className="font-Sf-semibold tracking-wide">
              Powerbeats Pro 2 - High - Performance Earbuds -...
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹29900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] md:min-w-[23rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 md:size-56 mx-auto mt-10">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/sound/max.jpeg"
              alt="max"
            />
            <div className="flex justify-center w-full gap-1 mt-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[#90AAB5]"></div>
              <div className="w-3 h-3 rounded-full bg-[#B0A6BC]"></div>
              <div className="w-3 h-3 rounded-full bg-[#23232A]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CCBFB1]"></div>
              <div className="w-3 h-3 rounded-full bg-[#E3A48D]"></div>
            </div>
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold text-[12px] text-amber-700 mb-1">
              New Colours
            </h2>
            <h2 className="font-Sf-semibold tracking-wide">
              AirPods Max - Midnight
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹59900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] md:min-w-[23rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 md:size-56 mx-auto mt-10">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/sound/homepod.jpeg"
              alt="homepod"
            />
            <div className="flex justify-center w-full gap-1 mt-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[#37383B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F2F2F2]"></div>
            </div>
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold tracking-wide">
              HomePod - Midnight
            </h2>
            <h2 className="mt-8 tracking-wide text-sm">
              {"MRP ₹32900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] md:min-w-[23rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 md:size-56 mx-auto mt-10">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/sound/homepod-mini.jpeg"
              alt="homepod-mini"
            />
            <div className="flex justify-center w-full gap-1 mt-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[#3C5A6E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFC957]"></div>
              <div className="w-3 h-3 rounded-full bg-[#2D2E31]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F2F2F2]"></div>
              <div className="w-3 h-3 rounded-full bg-[#E76E4F]"></div>
            </div>
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold tracking-wide">
              HomePod mini - Orange
            </h2>
            <h2 className="mt-8 tracking-wide text-sm">
              {"MRP ₹10900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] md:min-w-[23rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 md:size-56 mx-auto mt-10">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/sound/solo-4.jpeg"
              alt="solo-4"
            />
            <div className="flex justify-center w-full gap-1 mt-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[#0B0B0B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#708AA6]"></div>
              <div className="w-3 h-3 rounded-full bg-[#DDD3D9]"></div>
            </div>
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold tracking-wide">
              Beats Solo 4 - On-Ear Wireless Headphones - Cloud Pink
            </h2>
            <h2 className="mt-8 tracking-wide text-sm">
              {"MRP ₹22900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] md:min-w-[23rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 md:size-56 mx-auto mt-10">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/sound/pill.jpeg"
              alt="pill"
            />
            <div className="flex justify-center w-full gap-1 mt-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[#030303]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CC2731]"></div>
              <div className="w-3 h-3 rounded-full bg-[#A78F76]"></div>
            </div>
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold tracking-wide">
              Beats Pill - Wireless <br /> Bluetooth® Speaker -...
            </h2>
            <h2 className="mt-8 tracking-wide text-sm">
              {"MRP ₹16900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sound;
