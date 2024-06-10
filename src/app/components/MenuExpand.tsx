import Image from "next/image";
import React from "react";
import close from "../assets/Close.png";
import Link from "next/link";

type Prop = {
  toggleMenu: () => void;
};

const MenuExpand = ({ toggleMenu }: Prop) => {
  return (
    <div className="absolute w-full bg-white left-0 top-0 p-5 min-h-screen">
      <Image src={close} alt="close" onClick={toggleMenu} />

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
      <div className="mt-5">
        <select className="select select-ghost w-full max-w-xs">
          <option disabled selected>
            Pick the best JS framework
          </option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </div>
    </div>
  );
};

export default MenuExpand;
