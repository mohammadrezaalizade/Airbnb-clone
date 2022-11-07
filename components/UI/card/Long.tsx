import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  to: string;
}

const Long: React.FC<Props> = ({ src, title, to }) => {
  return (
    <Link className="w-full  md:w-[391px] h-[85px] flex items-center gap-5 rounded-2xl shadow-box" href={to}>
        <Image
          className="rounded-tl-2xl rounded-bl-2xl h-full shadow-[10px_0px_7px_0px_rgba(0,0,0,0.1)]"
          src={src}
          width={100}
          height={100}
          alt={src}
        />
        <p className="text-[16px] font-medium text-secondary_dark_gray-500">{title}</p>
    </Link>
  );
};

export default Long;
