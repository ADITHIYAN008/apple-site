import Image from "next/image";
import React from "react";

const forBusiness = () => {
  return (
    <div className="flex pl-5 gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[33rem] md:min-h-[34rem]">
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Payment Options
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            More reasons to buy, with No Cost EMI§ and 18% GST invoicing.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/for-business/no-cost-emi.jpeg"
          alt="no-cost-emi"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Apple Business Team
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[20rem] md:max-w-[90%]">
            Your business. Our team.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/for-business/your-business.jpeg"
          alt="your-business"
        />
      </div>
      <div className="max-w-[19rem] cursor-pointer md:min-w-[24rem] min-w-[19rem] md:min-h-[30rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
        <div className="absolute z-50 top-6 left-8">
          <h2 className="uppercase text-[12px] font-Sf-semibold tracking-wide text-black/40">
            Mac Does That
          </h2>
          <h2 className="font-Sf-semibold text-[20px] md:text-3xl tracking-wide max-w-[14rem] md:max-w-[90%]">
            Why Mac is perfect for Business.
          </h2>
        </div>
        <Image
          fill
          className="w-full h-full object-cover rounded-3xl"
          src="/apple-site/buy/mac/for-business/why-mac-perfect.jpeg"
          alt="why-mac-perfect"
        />
      </div>
    </div>
  );
};

export default forBusiness;
