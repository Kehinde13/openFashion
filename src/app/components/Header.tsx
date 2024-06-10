import React from "react";
import Image from "next/image";
import menu from "../assets/Menu.png";
import search from "../assets/Search (1).png";
import logo from "../assets/Vector.png";
import bag from "../assets/shopping bag.png";
import Link from "next/link";
import MenuExpand from "./MenuExpand";

const Header = () => {
  return (
    <div className="p-3 sm:p-5 flex justify-between bg-[#E7EAEF]">
      <MenuExpand />
      <Image src={menu} alt="menu" className="self-center sm:hidden" />

      <Image src={logo} alt="menu" className="self-center" />

      <div className="sm:flex justify-between gap-10 text-2xl mt-3 hidden">
        <Link href="/" className="hover:text-[#DD8560]">Women</Link>

        <Link href="/" className="hover:text-[#DD8560]">Men</Link>

        <Link href="/" className="hover:text-[#DD8560]">Kids</Link>
      </div>

      <div className="flex justify-between gap-3 md:gap-8">
        <Image src={search} alt="menu" className="self-center" />

        <Image src={bag} alt="menu" className="self-center" />
      </div>
    </div>
  );
};

export default Header;
