import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
interface Props{
  img:string
}
const Big:React.FC<Props> = ({img}) => {
  return (
    <section className="flex flex-col md:w-[1206px] lg:w-full md:h-[310px] lg:h-2/3 p-4 items-center justify-center relative">
      <div className="absolute z-50 flex flex-col justify-center items-center gap-2 md:gap-4">
        <img className="h-8 md:h-20 w-8 md:w-20" src="/assets/logo/logo-big.svg" />
        <Link className="bg-secondary_white px-3 py-1 rounded-lg" href="/">
          <p className="flex justify-between items-center gap-1 text-[10px] text-secondary_dark_gray-500 capitalize">
            <span>Discover accommodations</span>
            <ChevronRightIcon className="h-2 w-2 cursor-pointer "/>
          </p>
        </Link>
      </div>
      <img className=" rounded-xl w-[100%] h-[100%]" src={img}  />
    </section>
  );
};

export default Big;
