import Image from "next/image";
import React from "react";

const ServiceCart = ({ data }) => {
  return (
    <div className=" min-w-[200px] mr-2 sm:mr-4 border border-gray-200 hover:shadow-lg relative">
      <Image
        src={data.img}
        alt="image"
        width={600}
        height={200}
        className=" w-full h-full object-cover object-center"
      />
      <div className="absolute top-2 left-2 bg-white w-[80px] h-[80px] p-4 rounded-full">
        <Image
          src={data.icon}
          alt="image"
          width={600}
          height={200}
          className=" w-full h-full object-cover object-center "
        />
      </div>
      <div className=" px-4 py-6 text-center space-y-5 text-wrap w-auto">
        <p className=" text-xl font-semibold">{data.title}</p>
        <p className=" text-gray-600">{data.description}</p>
        <p className=" py-2">
          <span className=" border-b-2 border-b-red-600 ">READ</span> MORE
        </p>
      </div>
    </div>
  );
};

export default ServiceCart;
