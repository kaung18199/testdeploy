import Image from "next/image";
import React from "react";

const PageHome = ({ main, title }) => {
  return (
    <div>
      <div className=" w-[100%] h-[400px] lg:h-[600px] relative flex justify-start items-center z-20 ">
        <Image
          src="https://themesfamily.com/wt/kabir/assets/img/slider/6.jpg"
          alt="cover image"
          width={1000}
          height={800}
          className=" object-cover object-top w-full h-full absolute top-0 left-0"
        />
        <div className=" w-full h-full absolute top-0 left-0 bg-gray-900/60"></div>
        <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 space-y-8 relative z-20">
          <h1 className="text-white text-4xl lg:text-6xl font-bold ">{main}</h1>
          <p className=" text-gray-100 text-2xl lg:text-4xl pr-10 md:pr-28 ">
            Home | <span className=" text-orange-500">{title}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
