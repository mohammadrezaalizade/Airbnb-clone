import Link from "next/link";
import React from "react";

interface Props {
  to: string;
  attachMarker: boolean;
  img: string;
  imgAlt: string;
  title: string;
  description: string;
}

const Mid: React.FC<Props> = ({
  attachMarker,
  description,
  img,
  imgAlt,
  title,
  to,
}) => {
  return (
    <Link className="flex flex-col gap-3 w-full" href={to}>
      {/* TOP */}
      <div className="relative flex items-center justify-center rounded-md">
        {attachMarker && (
          <img
            className="absolute z-50 w-[50px] h-auto object-cover"
            src="/assets/logo/logo-big.svg"
            alt="marker"
          />
        )}
        <img
          className={`${
            attachMarker ? "blur-0" : "blur-0"
          } rounded-md  w-full md:max-w-[450px] h-[350px] md:h-[500]`}
          src={img}
          alt={imgAlt}
        />
      </div>
      {/* BOTTOM */}
      <div>
        <p className="text-primary_purple-500 uppercase font-semibold text-sm">
          {title}
        </p>
        <p className="text-secondary_dark_gray-500 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default Mid;
