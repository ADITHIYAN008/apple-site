"use client";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsBag, BsBoxSeam } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiOutlineSearch } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion, number } from "framer-motion";
import { RiArrowLeftWideFill } from "react-icons/ri";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { PiBookmarkSimple, PiGearFine } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  SUB_MENU_LIST,
  NAV_MENU_LIST,
  NAV_LIST_CONTENT,
} from "@/constants/data";

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

const NavbarComp = () => {
  const MotionLink = motion(Link);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [submenu, setSubMenu] = useState<number>(0);
  const [isHoverIndex, setIsHoverIndex] = useState<number | null>(null);
  const [isHover, setIsHover] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);

  useEffect(() => {
    if (isSearchOpen || isBagOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen, isBagOpen, isMenuOpen]);

  return (
    <div className={`h-16 p-5 relative ${isHover ? "bg-white" : ""}`}>
      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute backdrop-blur-sm top-full left-0 w-full z-50"
          >
            <div className={`w-full h-screen bg-white/20 `}>
              <div
                onMouseLeave={() => setIsHover(false)}
                className="h-auto pb-[5rem] bg-white text-black"
              >
                <div className="max-w-[1100px] mx-auto pt-7">
                  {NAV_LIST_CONTENT.filter(
                    (item) => item.id === String(isHoverIndex)
                  ).map((item, index) => (
                    <div key={index} className="flex gap-20">
                      <div>
                        <h2 className="text-sm text-black/50">
                          {item.title1.title}
                        </h2>
                        <div className="flex mt-5 flex-col gap-2">
                          <h2 className="text-2xl font-semibold cursor-pointer">
                            {item.title1.one}
                          </h2>
                          <h2 className="text-2xl font-semibold cursor-pointer">
                            {item.title1.two}
                          </h2>
                          <h2 className="text-2xl font-semibold cursor-pointer">
                            {item.title1.three}
                          </h2>
                          <h2 className="text-2xl font-semibold cursor-pointer">
                            {item.title1.four}
                          </h2>
                          <h2 className="text-2xl font-semibold cursor-pointer">
                            {item.title1.five}
                          </h2>
                          <h2 className="text-2xl font-semibold cursor-pointer">
                            {item.title1.six}
                          </h2>
                          <h2 className="text-2xl font-semibold cursor-pointer">
                            {item.title1.seven}
                          </h2>
                          <h2 className="text-2xl font-semibold cursor-pointer">
                            {item.title1.eight}
                          </h2>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm text-black/50">
                          {item.title2.title}
                        </h2>
                        <div className="flex mt-5 flex-col gap-2">
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title2.one}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title2.two}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title2.three}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title2.four}
                          </h2>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-sm text-black/50">
                          {item.title3.title}
                        </h2>
                        <div className="flex mt-5 flex-col gap-2">
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.one}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.two}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.three}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.four}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.five}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.six}
                          </h2>
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.seven}
                          </h2>{" "}
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.eight}
                          </h2>{" "}
                          <h2 className="text-sm font-Sf-semibold cursor-pointer text-black/80">
                            {item.title3.nine}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex mx-auto max-w-[1100px]  justify-between items-center">
        <FaApple className="size-5.5" />
        <div className="flex flex-row gap-8 items-center ">
          <ul className="gap-9 lg2:gap-11 hidden lg:flex">
            {NAV_MENU_LIST.map((item, idx) => (
              <h2
                onMouseEnter={() => {
                  setIsHoverIndex(idx);
                  setIsHover(true);
                }}
                className="text-sm cursor-pointer text-black/70"
                key={idx}
              >
                {item.title}
              </h2>
            ))}
          </ul>
          <HiOutlineSearch
            onClick={() => setIsSearchOpen(true)}
            className="size-5 cursor-pointer lg:hidden text-black/70"
          />
          <HiOutlineSearch className="size-5 text-black/70 hidden lg:block cursor-pointer" />
          <BsBag
            onClick={() => setIsBagOpen(true)}
            className="size-4  cursor-pointer lg:hidden text-black/70"
          />
          <BsBag className="size-4 cursor-pointer hidden lg:block  text-black/70" />
          <HiOutlineMenuAlt4
            onClick={() => setIsMenuOpen(true)}
            className="size-5 cursor-pointer lg:hidden text-black/70"
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
              className="mt-4 flex pl-10 max-w-[20rem] overscroll-auto  flex-col gap-2"
            >
              {SUB_MENU_LIST[submenu].categories.map((item, idx) => (
                <MotionLink
                  key={idx}
                  href={item.link}
                  variants={itemVariants}
                  className="text-[27px] font-Sf-semibold text-black/80"
                >
                  {item.title}
                </MotionLink>
              ))}
              <div className="mt-[1rem]">
                {SUB_MENU_LIST[submenu].quickLinks.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <motion.h3
                      variants={itemVariants}
                      className="text-[18px] text-black/60"
                    >
                      {idx === 0 ? item.title : ""}
                    </motion.h3>
                    <MotionLink
                      href={idx !== 0 ? item.link : ""}
                      variants={itemVariants}
                      className="text-[16px] font-Sf-semibold text-black/80"
                    >
                      {idx !== 0 ? item.title : ""}
                    </MotionLink>
                  </div>
                ))}
              </div>
              <div className="mt-[1rem]">
                {SUB_MENU_LIST[submenu].specialStores.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <motion.h3
                      variants={itemVariants}
                      className="text-[18px] text-black/60"
                    >
                      {idx === 0 ? item.title : ""}
                    </motion.h3>
                    <MotionLink
                      href={idx !== 0 ? item.link : ""}
                      variants={itemVariants}
                      className="text-[16px] font-Sf-semibold text-black/80"
                    >
                      {idx !== 0 ? item.title : ""}
                    </MotionLink>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
      {isSearchOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          className="fixed w-full h-screen top-0 left-0 pl-4 pr-5 pt-5 bg-white z-50"
        >
          <div className={`flex  items-center justify-end `}>
            <IoClose
              className="size-8 text-black/70"
              onClick={() => {
                setIsSearchOpen(false);
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
            className={`mt-2 pl-10 flex flex-col gap-2 ${
              isSearchOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex gap-2 items-center">
              <GoSearch className="size-6 mb-1 text-black/40" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none placeholder:font-Sf-semibold placeholder:text-xl placeholder:text-gray-600 "
              />
            </div>
            <div className="mt-7">
              <h2 className="text-lg text-black/50 mb-3">Quick Links</h2>
              {[
                { title: "Find a Store", link: "/mac" },
                { title: "Accessories", link: "/mac" },
                { title: "AirPods", link: "/mac" },
                { title: "Apple Intelligence", link: "/mac" },
                { title: "Apple Trade In", link: "/mac" },
              ].map((item, idx) => (
                <MotionLink
                  href={item.link}
                  key={idx}
                  variants={itemVariants}
                  className="flex mb-3 items-center gap-2"
                >
                  <BsArrowRight />
                  <motion.h2 className="text-[18px] font-Sf-semibold text-black/80">
                    {item.title}
                  </motion.h2>
                </MotionLink>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
      {isBagOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          className="fixed w-full h-screen top-0 left-0 pl-4 pr-5 pt-5 bg-white z-50"
        >
          <div className={`flex  items-center justify-end `}>
            <IoClose
              className="size-8 text-black/70"
              onClick={() => {
                setIsBagOpen(false);
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
            className={`mt-2 pl-7 flex flex-col gap-2 ${
              isBagOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-2">
              <h2 className="font-Sf-semibold mb-4 text-3xl text-black/70">
                Your Bag is empty.
              </h2>
              <h2 className="text-lg text-black/50">
                <span className="text-blue-500 underline">Sign in</span> to see
                if you have any saved <br /> items
              </h2>
            </div>
            <div className="mt-7">
              <h2 className="text-lg text-black/50 mb-3">My Profile</h2>
              {[
                {
                  title: "Orders",
                  link: "/mac",
                  icon: <BsBoxSeam className="size-3" />,
                },
                {
                  title: "Your Saves",
                  link: "/mac",
                  icon: <PiBookmarkSimple />,
                },
                { title: "Account", link: "/mac", icon: <PiGearFine /> },
                {
                  title: "Sign in",
                  link: "/mac",
                  icon: <FaRegCircleUser className="size-3" />,
                },
              ].map((item, idx) => (
                <MotionLink
                  href={item.link}
                  key={idx}
                  variants={itemVariants}
                  className="flex mb-3 items-center gap-4"
                >
                  {item.icon}
                  <motion.h2 className="text-[18px] font-Sf-semibold text-black/80">
                    {item.title}
                  </motion.h2>
                </MotionLink>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default NavbarComp;
