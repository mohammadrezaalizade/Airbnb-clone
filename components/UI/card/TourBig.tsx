import React from "react";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";

interface Props {
  to: string;
  photo: string;
  altImage: string;
  tag: boolean;
  city: string;
  rate: string;
  description: string;
}

const TourBig: React.FC<Props> = ({
  altImage,
  city,
  description,
  photo,
  rate,
  tag,
  to,
}) => {
  return (
    <Link className="flex flex-col gap-2 w-[289px] h-[265px] group" href={to}>
      <img
        className="rounded-md w-full h-full  object-cover group-hover:shadow-md group-hover:shadow-red-300 transition duration-150 select-none"
        src={photo}
        alt={altImage}
      />
      <div className="flex flex-col">
        {/* CONTAINER */}
        <div className="flex flex-col gap-2">
          {/* TOP */}
          <div className="flex justify-between items-center w-full">
            {/* RIGHT */}
            <div className="flex items-center gap-3">
              {tag && (
                <p className=" border-secondary_dark_gray-600 border-2 rounded-sm p-1 text-xs font-semibold text-secondary_dark_gray-600">
                  Superhost
                </p>
              )}
              <p className="text-xs text-secondary_dark_gray-300">{city}</p>
            </div>
            {/* LEFT */}
            {rate && (
              <p className="flex items-center text-sm">
                <span>{rate}</span>
                <StarIcon className="w-3 h-3 text-primary_red-500" />
              </p>
            )}
          </div>
          {/* BUTTOM */}
          {description && (
            <p className="text-secondary_dark_gray-500 text-sm">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default TourBig;
