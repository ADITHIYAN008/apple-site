"use client";
import React, { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiOutlineSearch } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { RiArrowLeftWideFill } from "react-icons/ri";

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [submenu, setSubMenu] = useState<number>(0);

  const subMenuList = [
    {
      title: "Shop",
      categories: [
        "Shop the Latest",
        "Mac",
        "iPad",
        "iPhone",
        "Apple Watch",
        "Accessories",
      ],
      quickLinks: [
        "Quick Links",
        "Find a Store",
        "Order Status",
        "Way to Buy",
        "Personal Setup",
      ],
      specialStores: ["Shop Special Stores", "Education", "Business"],
    },
    {
      title: "Mac",
      categories: [
        "Explore All Mac",
        "MacBook Air",
        "MacBook Pro",
        "iMac",
        "Mac mini",
        "Mac Studio",
      ],
      quickLinks: ["Shop Mac", "Shop Mac", "Mac Accessories", "Ways to Buy"],
      specialStores: [
        "Mac Support",
        "AppleCare+ for Mac",
        "MacOS Sequoia",
        "Apple Intelligence",
        "Apps by Apple",
        "Continuity",
        "iCloud+",
      ],
    },
    {
      title: "iPad",
      categories: [
        "Explore All iPad",
        "iPad Pro",
        "iPad Air",
        "iPad",
        "iPad mini",
        "Apple Pencil",
      ],
      quickLinks: ["Shop iPad", "Shop iPad", "iPad Accessories", "Ways to Buy"],
      specialStores: [
        "More from iPad",
        "iPad Support",
        "AppleCare+ fro iPad",
        "Apple Intelligence",
        "Apps by Apple",
        "Continuity",
        "iCloud+",
      ],
    },
    {
      title: "iPhone",
      categories: [
        "Explore All iPhone",
        "iPhone 16 Pro",
        "iPhone 16",
        "iPhone 16e",
        "iPhone 15",
      ],
      quickLinks: [
        "Shop iPhone",
        "Shop iPhone",
        "iPhone Accessories",
        "Apple Trade In",
      ],
      specialStores: [
        "More from iPhone",
        "iPhone Support",
        "AppleCare+ fro iPhone",
        "Apple Intelligence",
        "Apps by Apple",
        "iCloud+",
        "Siri",
      ],
    },
    {
      title: "Watch",
      categories: [
        "Explore All Apple Watch",
        "Apple Watch Series 10",
        "Apple Watch Ultra 2",
        "Apple Watch SE",
        "Apple Watch Nike",
      ],
      quickLinks: [
        "Shop Watch",
        "Shop Apple Watch",
        "Apple Watch Straps",
        "Apple Watch Accessories",
      ],
      specialStores: [
        "More from Watch",
        "Apple Watch Support",
        "AppleCare+",
        "Apple Watch For Your kids",
        "Apps by Apple",
      ],
    },
    {
      title: "AirPods",
      categories: [
        "Explore All AirPods",
        "AirPods 4",
        "AirPods Pro 2",
        "AirPods Max",
      ],
      quickLinks: ["Shop AirPods", "Shop AirPods", "AirPods Accessories"],
      specialStores: [
        "More from AirPods",
        "AirPods Support",
        "AppleCare+ for HeadPhones",
        "Apple Music",
      ],
    },
    {
      title: "Tv & Home",
      categories: [
        "Explore TV & Home",
        "Apple TV 4K",
        "HomePod",
        "HomePod mini",
      ],
      quickLinks: [
        "Shop TV & Home",
        "Shop Apple TV 4K",
        "Shop HomePod",
        "Shop HomePod mini",
        "Shop Siri Remote",
      ],
      specialStores: [
        "More from TV & Home",
        "Apple TV Support",
        "HomePod Support",
        "AppleCare+",
        "Apple TV+",
        "Home app",
        "Apple Music",
        "Siri",
      ],
    },
    {
      title: "Entertainment",
      categories: [
        "Explore Entertainment",
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Podcasts",
        "Apple Books",
        "Apple Store",
      ],
      quickLinks: ["Support", "Apple TV+ Support", "Apple Music Support"],
      specialStores: [""],
    },
    {
      title: "Accessories",
      categories: [
        "Shop All Accessories",
        "Mac",
        "iPad",
        "iPhone",
        "Apple Watch",
        "AirPods",
        "TV & Home",
      ],
      quickLinks: [
        "Explore Accessories",
        "Made by Apple",
        "Beats by Dr. Dre",
        "AirTag",
      ],
      specialStores: [""],
    },
    {
      title: "Support",
      categories: ["iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "TV"],
      quickLinks: ["Get Help", "Community", "Check Coverage", "Repair"],
      specialStores: [
        "Helpful Topics",
        "Get AppleCare+",
        "Apple Account and Password",
        "Billing & Subscriptions",
        "Accessibility",
      ],
    },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="h-16 p-5 relative">
      <div className="flex justify-between items-center">
        <FaApple className="size-5.5" />
        <div className="flex flex-row gap-7 items-center">
          <HiOutlineSearch className="size-5 text-black/70" />
          <BsBag className="size-4 text-black/70" />
          <HiOutlineMenuAlt4
            onClick={() => setIsMenuOpen(true)}
            className="size-5 text-black/70"
          />
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          className="fixed w-full h-screen top-0 left-0 pl-6 pr-5 pt-5 bg-white z-50"
        >
          <div
            className={`flex  items-center ${
              isSubOpen ? "justify-between" : "justify-end"
            }`}
          >
            <RiArrowLeftWideFill
              className={`size-7 text-black/70 ${
                isSubOpen ? "block" : "hidden"
              }`}
              onClick={() => setIsSubOpen(false)}
            />
            <IoClose
              className="size-8 text-black/70"
              onClick={() => {
                setIsMenuOpen(false);
                setIsSubOpen(false);
              }}
            />
          </div>
          <motion.div
            initial="closed"
            animate="open"
            variants={{
              open: {
                transition: { staggerChildren: 0.05, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.03, staggerDirection: -1 },
              },
            }}
            className={`mt-7 pl-10 flex flex-col gap-2 ${
              isSubOpen ? "hidden" : "block"
            }`}
          >
            {[
              "Store",
              "Mac",
              "iPad",
              "iPhone",
              "Watch",
              "AirPods",
              "TV & Home",
              "Entertainment",
              "Accessories",
              "Support",
            ].map((item, idx) => (
              <motion.h2
                key={idx}
                onClick={() => {
                  setSubMenu(idx);
                  setIsSubOpen(true);
                }}
                variants={itemVariants}
                className="text-[27px] font-Sf-semibold text-black/80"
              >
                {item}
              </motion.h2>
            ))}
          </motion.div>
          {isSubOpen && (
            <motion.div
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.03, staggerDirection: -1 },
                },
              }}
              className="mt-4 flex pl-10 max-w-[20rem] overscroll-auto flex-col gap-2"
            >
              {subMenuList[submenu]?.categories.map((item, idx) => (
                <motion.h2
                  key={idx}
                  variants={itemVariants}
                  className="text-[27px] font-Sf-semibold text-black/80"
                >
                  {item}
                </motion.h2>
              ))}
              <div className="mt-[1.5rem]">
                {subMenuList[submenu]?.quickLinks.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <motion.h3
                      variants={itemVariants}
                      className="text-[18px] text-black/60"
                    >
                      {idx === 0 ? item : ""}
                    </motion.h3>
                    <motion.h2
                      variants={itemVariants}
                      className="text-[16px] font-Sf-semibold text-black/80"
                    >
                      {idx !== 0 ? item : ""}
                    </motion.h2>
                  </div>
                ))}
              </div>
              <div className="mt-[1.5rem]">
                {subMenuList[submenu]?.specialStores.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <motion.h3
                      variants={itemVariants}
                      className="text-[18px] text-black/60"
                    >
                      {idx === 0 ? item : ""}
                    </motion.h3>
                    <motion.h2
                      variants={itemVariants}
                      className="text-[16px] font-Sf-semibold text-black/80"
                    >
                      {idx !== 0 ? item : ""}
                    </motion.h2>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
