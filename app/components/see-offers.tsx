import React from "react";
import { LuCirclePlus } from "react-icons/lu";

const seeOffers = () => {
  return (
    <div className="bg-secondary py-5 text-sm w-full">
      <div className="mx-auto tracking-wide text-center max-w-[85%]">
        <h2>
          Get up to 12 months of No Cost EMI§ plus up to ₹8000.00 instant
          cashback§§ on selected products with eligible cards.{" "}
          <span className="mt-1 items-center  gap-1  text-blue-500">
            See offers <LuCirclePlus className="inline-block" />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default seeOffers;
