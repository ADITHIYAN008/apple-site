"use client";
import React, { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiOutlineSearch } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

type Props = {};

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

const navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          className="fixed w-full h-screen top-0 left-0 pl-13 pr-5 pt-5 bg-white z-50"
        >
          <div className="flex justify-end">
            <IoClose
              className="size-8 text-black/70"
              onClick={() => setIsMenuOpen(false)}
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
            className="mt-5 flex flex-col gap-2"
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
                variants={itemVariants}
                className="text-[27px] font-Sf-semibold text-black/80"
              >
                {item}
              </motion.h2>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default navbar;
