import Image from "next/image";
import React from "react";
import divider from "../assets/Devider.png";
import img1 from "../assets/Rectangle 325 (1).png";
import img2 from "../assets/Rectangle 325 (2).png";
import img3 from "../assets/Rectangle 325.png";
import img4 from "../assets/Rectangle 325 (3).png";
import arrow from "../assets/Forward Arrow.png";

const NewArrivals = () => {
  const allNewArrival = [
    {
      name: "21WN reversible angora cardigan",
      price: "$120",
      image: img1,
      id: 1,
    },
    {
      name: "21WN reversible angora cardigan",
      price: "$120",
      image: img2,
      id: 2,
    },
    {
      name: "21WN reversible angora cardigan",
      price: "$120",
      image: img3,
      id: 3,
    },
    {
      name: "21WN reversible angora cardigan",
      price: "$210",
      image: img4,
      id: 4,
    },
  ];

  return (
    <div className="min-h-max p-3 mt-4 new-arrival">
      <div className="mx-auto w-[40%] my-5">
        <h1 className="ml-1">NEW ARRIVAL</h1>
        <Image src={divider} alt="divider" />
      </div>

      <ul className="flex justify-between gap-4 px-5">
        <li>All</li>
        <li>Apparel</li>
        <li>Dress</li>
        <li>T-Shirt</li>
        <li>Bag</li>
      </ul>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {allNewArrival.map((item) => (
          <div className="h-[260px] text-center text-sm" key={item.id}>
            <Image
              src={item.image}
              alt={item.name}
              className="w-[165px] rounded-md"
            />
            <p>{item.name}</p>
            <p className="text-[#DD8560]">{item.price}</p>
          </div>
        ))}
      </div>

      <button className="flex w-[40%] mx-auto mt-10 gap-2">
        Explore More
        <Image src={arrow} alt="" className="self-center" />
      </button>
    </div>
  );
};

export default NewArrivals;
