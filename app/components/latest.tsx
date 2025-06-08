import Image from "next/image";
import React from "react";

const latest = () => {
  return (
    <div className="pl-5 xl:pl-0 mt-15">
      <h2 className="text-[25px] md:text-3xl tracking-wide xl:ml-[11.5rem] font-semibold mb-1">
        The latest.{" "}
        <span className="text-black/50 tracking-wide">
          Take a look at what&rsquo;s new right now.
        </span>
      </h2>
      <div className="flex xl:pl-[11.5rem] gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[32rem] md:min-h-[34rem]">
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl">
              MacBook Air
            </h2>
            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex gap-0 items-center text-transparent text-xl bg-clip-text tracking-wide">
              Apple Intelligence <span className="text-[12px]">∆</span>
            </h1>
            <h2 className="text-sm mt-1">From ₹99900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/macair.jpeg"
            alt="macbook air"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl text-white md:text-3xl tracking-wide">
              iPhone 16 Pro
            </h2>
            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex gap-0 items-center text-transparent text-xl bg-clip-text tracking-wide">
              Apple Intelligence <span className="text-[12px]">∆</span>
            </h1>
            <h2 className="text-sm mt-1 text-white">From ₹119900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/16pro.jpeg"
            alt="iphone16pro-icon"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl">
              iPad Air
            </h2>
            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex gap-0 items-center text-transparent text-xl bg-clip-text tracking-wide">
              Apple Intelligence <span className="text-[12px]">∆</span>
            </h1>
            <h2 className="text-sm mt-1">From ₹59900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/ipadair.jpeg"
            alt="ipad air"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10 max-w-[85%]">
            <h2 className="font-Sf-semibold text-xl md:text-3xl">
              Apple watch Pride Edition Sport Band
            </h2>
            <h2 className="font-semibold text-black/80 text-[17px] tracking-wide">
              Show your stripes.
            </h2>
            <h2 className="text-sm mt-1">From ₹4500.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/watchsport.png"
            alt="watch"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl">
              Apple watch Series 10
            </h2>
            <h2 className="font-semibold text-black/80 text-[17px] tracking-wide">
              Thinstant classic.
            </h2>
            <h2 className="text-sm mt-1">From ₹46900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/watch10.jpeg"
            alt="watch"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-6 left-10">
            <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
              Special Offers
            </h2>
            <h2 className="font-Sf-semibold text-[19px] max-w-[13rem] md:max-w-[90%] md:text-2xl">
              Get up to 12 months of No Cost EMI§ plus up to ₹8000.00 instant
              cashback§§ on selected products with eligible cards.
            </h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/emi.jpeg"
            alt="emi"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl">
              iPhone 16e
            </h2>
            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex gap-0 items-center text-transparent text-xl tracking-wide bg-clip-text">
              Apple Intelligence <span className="text-[12px]">∆</span>
            </h1>
            <h2 className="text-sm mt-1">From ₹59900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/16e.jpeg"
            alt="iphone16e"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl">
              iPad
            </h2>
            <h2 className="font-semibold text-black/80 text-[17px] tracking-wide">
              Loveable. Drawable. Magical.
            </h2>
            <h2 className="text-sm mt-1">From ₹34900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/ipad.jpeg"
            alt="macbook air"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl">
              Mac Studio
            </h2>
            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex gap-0 tracking-wide items-center text-transparent text-xl bg-clip-text">
              Apple Intelligence <span className="text-[12px]">∆</span>
            </h1>
            <h2 className="text-sm mt-1">From ₹214900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/studio.jpeg"
            alt="macbook air"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl text-white md:text-3xl tracking-wide">
              iPhone 16
            </h2>
            <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex gap-0 items-center text-transparent text-xl bg-clip-text tracking-wide">
              Apple Intelligence <span className="text-[12px]">∆</span>
            </h1>
            <h2 className="text-sm mt-1 text-white">From ₹79900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/16.jpeg"
            alt="iphone16"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-10 left-10">
            <h2 className="font-Sf-semibold text-xl tracking-wide md:text-3xl text-white">
              Apple Watch Ultra 2
            </h2>
            <h2 className="font-semibold  text-white tracking-wide text-[17px]">
              New finish. Never quit.
            </h2>
            <h2 className="text-sm mt-1 text-white">From ₹89900.00 ‡</h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/ultra.jpeg"
            alt="macbook air"
          />
        </div>
        <div className="min-w-[19rem] cursor-pointer md:min-w-[24rem] h-[28rem] md:min-h-[30rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute z-40 top-6 left-10">
            <h2 className="text-[12px] tracking-wide font-Sf-semibold text-black/40">
              Apple Watch Straps
            </h2>
            <h2 className="font-Sf-semibold text-[19px] max-w-[13rem] md:text-3xl tracking-wide md:max-w-[90%]">
              Show your true colours.
            </h2>
          </div>
          <Image
            fill
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/latest/strap.jpeg"
            alt="emi"
          />
        </div>
      </div>
    </div>
  );
};

export default latest;
