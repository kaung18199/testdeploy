import Image from "next/image";
import React from "react";

const ClientCart = ({ data }) => {
  return (
    <div className=" relative">
      <Image
        src={data.image}
        alt="client"
        width={100}
        height={100}
        className=" absolute -top-10 left-14 rounded-full border-4 shadow-md border-white"
      />
      <div className=" bg-red-200/50 mx-4 p-10 pt-20 space-y-6">
        <p className=" italic text-sm">&quot;{data.descirption}&quot;</p>

        <div className=" space-y-2">
          <p className=" font-bold text-lg tracking-wider">{data.name}</p>
          <div className=" flex justify-start items-center gap-2">
            <p className=" w-8 h-1 mt-2 bg-red-600"></p>
            <p>{data.row}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCart;
