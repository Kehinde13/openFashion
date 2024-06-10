import Image from "next/image";
import React from "react";
import close from "../assets/Close.png";
import Link from "next/link";

const MenuExpand = () => {
  return (
    <div className="absolute w-full bg-white left-0 top-0 p-5 min-h-screen">
      <Image src={close} alt="close" />

      <div className="flex justify-between gap-5 text-2xl mt-3">
        <Link href="/" className="hover:text-[#DD8560]">
          Women
        </Link>

        <Link href="/" className="hover:text-[#DD8560]">
          Men
        </Link>

        <Link href="/" className="hover:text-[#DD8560]">
          Kids
        </Link>
      </div>
    </div>
  );
};

export default MenuExpand;
