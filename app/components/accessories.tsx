import React from "react";
import { FaPlus } from "react-icons/fa";

type Props = {};

const accessories = (props: Props) => {
  return (
    <div className="pl-5 mt-5 mb-6">
      <h2 className="text-[25px] tracking-wide font-semibold mb-1">
        Accessories.{" "}
        <span className="text-black/50 tracking-wide">
          Essentials that pair perfectly with your favourite devices.
        </span>
      </h2>
      <div className="flex gap-5 pr-5 overflow-x-scroll items-center no-scrollbar min-h-[32rem]">
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all">
          <div className="absolute top-10 left-10">
            <h2 className="font-Sf-semibold text-xl tracking-wide">
              In with the new.
            </h2>
            <p className="text-lg tracking-wide text-black/70">
              The accessories you love. <br /> In a fresh mix of colours.
            </p>
          </div>
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/apple-site/accessories/the-new.jpeg"
            alt="new"
          />
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 mx-auto mt-10">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/accessories/slicon.jpeg"
              alt="silicon"
            />
            <div className="flex justify-center w-full gap-1 mt-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#4B3469]"></div>
              <div className="w-3 h-3 rounded-full bg-[#191C1F]"></div>
              <div className="w-3 h-3 rounded-full bg-[#3B4C40]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFE900]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFD3D8]"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <FaPlus className="text-black/40" size={8} />
            </div>
          </div>
          <div className="px-8 pt-6">
            <h2 className="font-Sf-semibold text-sm text-amber-700">New</h2>
            <h2 className="font-Sf-semibold tracking-wide">
              iPhone 16 Pro Max Silicone Case with MagSafe - Penoy
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹4900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 mx-auto mt-10">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/accessories/magsafe.jpeg"
              alt="magsafe"
            />
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold tracking-wide">
              iPhone 16 Clear Case with MagSafe
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹4900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 mx-auto mt-10">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/accessories/band.jpeg"
              alt="band"
            />
            <div className="flex justify-center w-full gap-1 mt-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#4B3469]">
                <img
                  src="/apple-site/accessories/band-icon.jpeg"
                  alt="band-icon"
                />
              </div>
            </div>
          </div>
          <div className="px-8 pt-6">
            <h2 className="font-Sf-semibold text-sm text-amber-700">New</h2>
            <h2 className="font-Sf-semibold tracking-wide">
              46mm Pride Edition Sport <br /> Band - M/L
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹4500.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 mx-auto mt-10">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/accessories/loop.jpeg"
              alt="band"
            />
            <div className="flex justify-center w-full gap-1 mt-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#4B3469]">
                <img src="/apple-site/accessories/49-1.jpeg" alt="49-1" />
              </div>
              <div className="w-3 h-3 rounded-full bg-[#4B3469]">
                <img src="/apple-site/accessories/49-2.jpeg" alt="49-2" />
              </div>
            </div>
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold tracking-wide">
              49mm Natural Titanium <br /> Milanese Loop - Medium
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹24500.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 mx-auto mt-10">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/accessories/lake.jpeg"
              alt="silicon"
            />
            <div className="flex justify-center w-full gap-1 mt-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#405b58]"></div>
              <div className="w-3 h-3 rounded-full bg-[#b64c7c]"></div>
              <div className="w-3 h-3 rounded-full bg-[#7b97b1]"></div>
              <div className="w-3 h-3 rounded-full bg-[#f0f0f0]"></div>
              <div className="w-3 h-3 rounded-full bg-[#2f2f2f]"></div>
            </div>
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold tracking-wide">
              iPhone 16e Silicone Case - Lake Green
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹3900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          <div className="size-50 mx-auto mt-10">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/accessories/wallet.jpeg"
              alt="wallet"
            />
            <div className="flex justify-center w-full gap-1 mt-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#3f5750]"></div>
              <div className="w-3 h-3 rounded-full bg-[#403b42]"></div>
              <div className="w-3 h-3 rounded-full bg-[#2f3443]"></div>
              <div className="w-3 h-3 rounded-full bg-[#614754]"></div>
            </div>
          </div>
          <div className="px-8 pt-10">
            <h2 className="font-Sf-semibold tracking-wide">
              iPhone FineWoven Wallet with MagSafe - Deep Blue
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹5900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          {" "}
          <div className="size-50 mx-auto mt-10">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/accessories/c.jpeg"
              alt="c-cable"
            />
            <div className="flex justify-center w-full gap-1 mt-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#403b42]"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="w-3 h-3 rounded-full bg-[#2f3443]"></div>
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
            </div>
          </div>
          <div className="px-8 pt-6">
            <h2 className="font-Sf-semibold text-sm text-amber-700">New</h2>
            <h2 className="font-Sf-semibold tracking-wide">
              {"Beats USB-C to USB-C Woven Cable (1.5 m / 5 ft) - Rapid Red"}
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹1900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col gap-10">
          {" "}
          <div className="size-50 mx-auto mt-10">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/apple-site/accessories/magic.jpeg"
              alt="magic-keyboard"
            />
          </div>
          <div className="px-8 pt-6">
            <h2 className="font-Sf-semibold text-sm text-amber-700">New</h2>
            <h2 className="font-Sf-semibold tracking-wide">
              Magic keyboard for iPad Air <br />{" "}
              <span>{" 11'' (M3) - US English"}</span>
            </h2>
            <h2 className="mt-3 tracking-wide text-sm">
              {"MRP ₹26900.00 (Incl. of all taxes)"}
            </h2>
          </div>
        </div>
        <div className="min-w-[19rem] h-[28rem] relative rounded-3xl bg-white hover:scale-102 duration-500 ease-in-out hover:shadow-2xl hover:shadow-black/10 transition-all flex flex-col  gap-10">
          <img
            className="w-full h-full rounded-3xl"
            src="/apple-site/accessories/explore.jpeg"
            alt="explore"
          />
          <h2 className="absolute font-Sf-semibold text-[20px] left-7 top-10">
            Explore all accessories.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default accessories;
