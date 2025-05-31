import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

type Props = {};

const quickLinks = (props: Props) => {
  return (
    <div className="pl-5 mt-5 mb-2">
      <h2 className="text-[21px] tracking-wide font-semibold mb-1">
        Quick Links
      </h2>
      <div className="flex gap-2 pr-5 overflow-x-scroll items-center no-scrollbar mt-7">
        <a
          className="flex items-center gap-0.5 border px-4 py-2 text-sm rounded-3xl min-w-[7.5rem] hover:bg-[#272729] hover:text-white hover:underline"
          href="#"
        >
          Find a Store <CgArrowTopRight />
        </a>
        <a
          className="flex items-center gap-0.5 border px-4 py-2 text-sm rounded-3xl min-w-[8rem] hover:bg-[#272729] hover:text-white hover:underline"
          href="#"
        >
          Order Status <CgArrowTopRight />
        </a>
        <a
          className="flex items-center gap-0.5 border px-4 py-2 text-sm rounded-3xl min-w-[9rem] hover:bg-[#272729] hover:text-white hover:underline"
          href="#"
        >
          Shopping Help <CgArrowTopRight />
        </a>
        <a
          className="flex items-center gap-0.5 border px-4 py-2 text-sm rounded-3xl min-w-[7.5rem] hover:bg-[#272729] hover:text-white hover:underline"
          href="#"
        >
          Your Saves <CgArrowTopRight />
        </a>
      </div>
      <div className="mt-12 flex flex-col gap-2">
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          {
            "∆ Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages."
          }
        </p>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          {
            "◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15.99% p.a. over a 12‑month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions."
          }
        </p>
        <h2 className="text-[13px] pl-1 pr-4 text-black/50">
          <p>Representative example:</p>
          <p>
            A purchase of ₹79900.00 repaid over 12 months with an interest rate
            of 15.99% p.a. requires monthly payments of ₹7249.00. Total amount
            payable: ₹86988.00. Total interest paid to bank: ₹7088.00.
          </p>
        </h2>
        <h2 className="text-[13px] pl-1 pr-4 text-black/50">
          <p>
            {
              "§ No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9-, or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice."
            }
          </p>
          <a href="#" className="text-black/75 underline cursor-pointer">
            Terms apply.
          </a>
        </h2>
        <h2 className="text-[13px] pl-1 pr-4 text-black/50">
          <p>Representative example:</p>
          <p>
            A purchase of ₹79900.00 repaid over 12 months with an interest rate
            of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly
            payments of ₹6658.00. Total amount payable: ₹79900.00.
          </p>
        </h2>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          §§ Instant cashback is available with the purchase of an eligible
          product with qualifying American Express, Axis Bank and ICICI Bank
          cards only. Minimum transaction value of ₹10001.00 applies.{" "}
          <a href="#" className="text-black/75 underline cursor-pointer">
            Click here{" "}
          </a>
          to see instant cashback amounts and eligible devices. Instant cashback
          is available for up to two orders per rolling 90-day period with an
          eligible card. Card eligibility is subject to terms and conditions
          between you and your card issuer. Total transaction value is
          calculated after any trade-in credit or eligible discount is applied.
          Any subsequent order adjustment(s) or cancellation(s) may result in
          instant cashback being recalculated, and any refund may be adjusted to
          account for instant cashback clawback; this may result in no refund
          being made to you. Offer may be revised or withdrawn at any time
          without any prior notice.{" "}
          <a href="#" className="text-black/75 underline cursor-pointer">
            Additional terms apply.
          </a>{" "}
          Instant cashback is not available to Business customers and cannot be
          combined with Apple Store for Education or Corporate Employee Purchase
          Plan pricing. Multiple separate orders cannot be combined for instant
          cashback.
        </p>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          * Mac, iPad, and Apple Watch trade-in is available only in-store in
          India. Apple Retail Online in India does not offer trade-in for Mac,
          iPad, and Apple Watch. Trade‑in values will vary based on the
          condition, year and configuration of your eligible trade‑in device.
          Not all devices are eligible for credit. You must be at least the age
          of majority to be eligible to trade in for credit. Trade‑in value may
          be applied towards a qualifying new device purchase. Actual value
          awarded is based on receipt of a qualifying device matching the
          description provided when estimate was made. Sales tax may be assessed
          on full value of a new device purchase. In-store trade‑in requires
          presentation of a valid photo ID (local law may require saving this
          information). Some stores may have additional requirements. Apple or
          its trade‑in partners reserve the right to refuse, cancel or limit the
          quantity of any trade‑in transaction for any reason. More details are
          available from Apple’s trade‑in partner for trade‑in and recycling of
          eligible devices. Restrictions and limitations may apply.
        </p>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          ° Apple TV+ offer available to new and qualified returning subscribers
          only. ₹99/month after free trial. Only one offer per Apple Account and
          only one offer per family if you’re part of a Family Sharing group,
          regardless of the number of devices that you or your family purchase.
          This offer is not available if you or your family have previously
          accepted an Apple TV+ 3 months free or 1 year free offer. Offer valid
          for three months after eligible device is activated. Plan
          automatically renews until cancelled. Restrictions and other{" "}
          <a href="#" className="text-black/75 underline cursor-pointer">
            terms
          </a>{" "}
          apply.
        </p>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          1. Special pricing available to qualified customers. To learn more
          about how to start qualifying for special pricing, talk to an Apple
          Specialist in a store or give us a call on 000800 040 1966.
        </p>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          ⁺ New subscribers only. ₹119.00/month after trial. Offer is available
          for new Apple Music subscribers with a new eligible device for a
          limited time only. Offer redemption for eligible audio devices
          requires connecting or pairing to an Apple device running the latest
          iOS or iPadOS. Offer redemption for Apple Watch requires connecting or
          pairing to an iPhone running the latest iOS. Offer good for three
          months after eligible device activation. Only one offer per Apple
          Account, regardless of the number of eligible devices you purchase.
          Plan automatically renews until cancelled. Restrictions and other
          <a href="#" className="text-black/75 underline cursor-pointer">
            {" "}
            terms{" "}
          </a>
          apply.
        </p>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          ** New and qualified returning subscribers only. ₹99/month after free
          trial. Only one offer per Apple Account and only one offer per family
          if you’re part of a Family Sharing group, regardless of the number of
          devices you or your family purchases. This offer is not available if
          you or your Family have previously accepted an Apple Arcade
          3-month-free offer. Offer is valid for 3 months after eligible device
          activation. Plan automatically renews until cancelled. Restrictions
          and other
          <a href="#" className="text-black/75 underline cursor-pointer">
            {" "}
            terms{" "}
          </a>
          apply.
        </p>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          ‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).
        </p>
        <p className="text-[13px] pl-1 pr-4 text-black/50">
          We use your location to show you delivery options faster. We found
          your location using your IP address or because you entered it during a
          previous visit to Apple.
        </p>
      </div>
    </div>
  );
};

export default quickLinks;
