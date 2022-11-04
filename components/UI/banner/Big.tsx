import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
interface Props{
  img:string
}
const Big:React.FC<Props> = ({img}) => {
  return (
    <section className="flex flex-col w-full h-full p-4 items-center justify-center relative">
      <div className="absolute z-50 flex flex-col justify-center items-center gap-2">
        <img className="h-16 md:h-36 w-16 md:w-36" src="/assets/logo/logo-big.svg" />
        <Link className="bg-secondary_white px-4 py-2 rounded-lg" href="/">
          <p className="flex justify-between items-center gap-1 text-sm text-secondary_dark_gray-500 capitalize">
            <span>Discover accommodations</span>
            <ChevronRightIcon className="h-4 w-4 cursor-pointer "/>
          </p>
        </Link>
      </div>
      <img className=" rounded-xl w-[100%] h-[100%]" src={img}  />
    </section>
  );
};

export default Big;