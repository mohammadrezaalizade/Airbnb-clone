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
    <Link className="w-full" href={to}>
      <div className="flex items-center gap-2 rounded-2xl shadow-box" >
        <Image
          className="rounded-tl-2xl rounded-bl-2xl"
          src={src}
          width={100}
          height={100}
          alt={src}
        />
        <p className="text-lg text-secondary_dark_gray-500">{title}</p>
      </div>
    </Link>
  );
};

export default Long;
