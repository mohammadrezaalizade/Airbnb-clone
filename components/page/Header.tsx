import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
interface NavLink {
  title: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    title: "Our packages",
    link: "/packages",
  },
  {
    title: "Home",
    link: "/",
  },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [currentScroll, setCurrentScroll] = useState(0);
  const { pathname } = useRouter();
  const onChangeBgHeader = currentScroll >= 50;
  const isNotHomePage = pathname != "/";
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setCurrentScroll(latest);
    });
  }, []);
  return (
    <motion.header
      className={`px-2 py-4 flex justify-between items-center fixed z-[999] w-full translate-x-0 transition-all duration-150 ${
        onChangeBgHeader ? "bg-primary_red-500 shadow-2xl" : "transparent"
      } ${pathname === "/404" && "bg-primary_red-500"}`}
      initial={{
        y: "-100px",
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.8,
          type: "tween",
        },
      }}
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/assets/logo/logo-small.svg"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        {isNotHomePage && (
          <div
            className={`flex items-center border-2  transition-all duration-150 rounded-md pr-2 bg-secondary_white shadow-md group ${
              onChangeBgHeader
                ? "focus-within:border-primary_red-500"
                : "focus-within:border-secondary_gray-300"
            }`}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Search on AB"
              className="bg-transparent outline-none px-3 py-2"
            />
            <MagnifyingGlassIcon
              className={`h-6 w-6 text-primary_red-500 ${
                onChangeBgHeader
                  ? "focus-within:border-secondary_dark_gray-500"
                  : "focus-within:border-primary_red-500"
              }}`}
            />
          </div>
        )}
      </div>
      <div className="hidden md:flex gap-3">
        {navLinks.map((item, index) => (
          <Link
            className={`text-secondary_white duration-150 text-sm transition-all ${
              onChangeBgHeader
                ? "hover:scale-110"
                : "hover:text-primary_red-500"
            }`}
            href={item.link as string}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
      {/* MENU BTN FOR MOBILE SIZE */}
      <Bars3Icon
        className={`h-6 w-6 cursor-pointer md:hidden text-secondary_white  ${
          onChangeBgHeader ? "hover:scale-110" : "hover:text-primary_red-500"
        }`}
      />
    </motion.header>
  );
};

export default Header;
