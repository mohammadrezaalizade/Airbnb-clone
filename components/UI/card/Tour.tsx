import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
interface Props {
  to: string;
  img: string;
  country: string;
  title: string;
  detail: string;
  rate: string;
}
const Tour: React.FC<Props> = ({ country, detail, title, img, rate, to }) => {
  return (
    <Link href={to} className="flex flex-col w-[140px] min-w-[200px] max-w-[500px] select-none group">
      <img
        className="rounded-md w-full h-[190px] object-cover group-hover:shadow-md group-hover:shadow-red-300 transition duration-150 select-none"
        src={img}
        alt={img}
      />
      <div className="flex flex-col p-1">
        <h3 className="text-secondary_dark_gray-400 font-semibold text-sm">
          {country}
        </h3>
        <p className="text-secondary_dark_gray-500 font-medium text-start text-xs">
          {title}
        </p>
        <small className="font-light text-secondary_dark_gray-500">
          {detail}
        </small>
        <div className="flex items-center text-primary_green-500 text-sm gap-1">
          <p>{rate}</p>
          <StarIcon className="w-3 h-3" />
        </div>
      </div>
    </Link>
  );
};

export default Tour;
