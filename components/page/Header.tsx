import Image from "next/image";
import Link from "next/link";
import React, { useEffect,useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion, useScroll } from "framer-motion";
interface NavLink {
  title: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    title: "Become a host",
    link: "/user/host",
  },
  {
    title: "Login",
    link: "/auth/login",
  },
  {
    title: "Home",
    link: "/",
  },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [currentScroll,setCurrentScroll] = useState(0)
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setCurrentScroll(latest)
    });
  }, []);
  return (
    <motion.header
      className={`px-2 py-4 flex justify-between items-center fixed z-[999] w-full translate-x-0 transition-all duration-150 ${currentScroll >= 50 ? "bg-primary_red-500 shadow-2xl":"transparent"}`}
      initial={{
        y: "-100px",
      }}
      animate={{
        y: 0,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 20,
        },
      }}
    >
      <Link href="/">
        <Image
          src="/assets/logo/logo-small.svg"
          alt="Logo"
          width={35}
          height={35}
        />
      </Link>
      <div className="hidden md:flex gap-3">
        {navLinks.map((item, index) => (
          <Link
            className={`text-secondary_white duration-150 text-sm transition-all ${currentScroll >=50 ? "hover:scale-110" : "hover:text-primary_red-500"}`}
            href={item.link as string}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
      {/* MENU BTN FOR MOBILE SIZE */}
      <Bars3Icon className={`h-6 w-6 cursor-pointer md:hidden text-secondary_white  ${currentScroll >= 50 ? "hover:scale-110" : "hover:text-primary_red-500"}`} />
    </motion.header>
  );
};

export default Header;
