import React from "react";
import divider from "../assets/Devider.png";
import Image from "next/image";
import prada from "../assets/Prada.png";
import boss from "../assets/Boss.png";
import burberry from "../assets/Burberry.png";
import cartier from "../assets/Catier.png";
import tiffany from "../assets/Tiffany & Co.png";
import gucci from "../assets/Gucci.png";

const Brand = () => {
  return (
    <div className="my-10 w-[80%] mx-auto">
      <Image src={divider} alt="divider" className="my-10 mx-[30%]" />

      <div className="grid grid-cols-3 place-items-center gap-8">
        <Image src={prada} alt="divider" />
        <Image src={burberry} alt="divider" />
        <Image src={boss} alt="divider" />
        <Image src={cartier} alt="divider" />
        <Image src={gucci} alt="divider" />
        <Image src={tiffany} alt="divider" />
      </div>

      <Image src={divider} alt="divider" className="my-10 mx-[30%]" />
    </div>
  );
};

export default Brand;
