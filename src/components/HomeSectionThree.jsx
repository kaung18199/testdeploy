"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const HomeSectionThree = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="  relative w-full h-auto  text-white">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 md:gap-14 lg:gap-10 xl:gap-20 pt-10 relative z-20">
        <div
          className=" relative max-w-[220px] min-w-[220px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Image
            src="/delivery-truck.png"
            alt="imag"
            width={80}
            height={80}
            className=" rounded-full bg-white p-1 border-4 border-red-700 absolute -top-10 left-[30%]"
          />
          <div className="bg-red-700 px-6 pb-6 pt-14 text-center space-y-3 ">
            <p className=" font-semibold text-xl text-nowrap">
              Product Delivery
            </p>
            <p className=" font-semibold text-3xl">8567</p>
          </div>
          <div className=" flex justify-start items-center pt-5 gap-2">
            <div className=" w-4 h-4 rounded-full bg-red-600"></div>
            <div className=" w-full h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div
          className=" relative max-w-[220px] min-w-[220px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Image
            src="/ship-side.png"
            alt="imag"
            width={80}
            height={80}
            className=" rounded-full bg-white p-3 border-4 border-red-700 absolute -top-10 left-[30%]"
          />
          <div className="bg-red-700 px-6 pb-6 pt-14 text-center space-y-3 ">
            <p className=" font-semibold text-xl text-nowrap">
              Shipping Delivery
            </p>
            <p className=" font-semibold text-3xl">8567</p>
          </div>
          <div className=" flex justify-start items-center pt-5 gap-2">
            <div className=" w-4 h-4 rounded-full bg-red-600"></div>
            <div className=" w-full h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div
          className=" relative max-w-[220px] min-w-[220px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <Image
            src="/trophy.png"
            alt="imag"
            width={80}
            height={80}
            className=" rounded-full bg-white p-3 border-4 border-red-700 absolute -top-10 left-[30%]"
          />
          <div className="bg-red-700 px-6 pb-6 pt-14 text-center space-y-3 ">
            <p className=" font-semibold text-xl text-nowrap">Award Winner</p>
            <p className=" font-semibold text-3xl">8567</p>
          </div>
          <div className=" flex justify-start items-center pt-5 gap-2">
            <div className=" w-4 h-4 rounded-full bg-red-600"></div>
            <div className=" w-full h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div
          className=" relative max-w-[220px] min-w-[220px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <Image
            src="/world.png"
            alt="imag"
            width={80}
            height={80}
            className=" rounded-full bg-white p-3 border-4 border-red-700 absolute -top-10 left-[30%]"
          />
          <div className="bg-red-700 px-6 pb-6 pt-14 text-center space-y-3 ">
            <p className=" font-semibold text-xl text-nowrap">World Branch</p>
            <p className=" font-semibold text-3xl">8567</p>
          </div>
          <div className=" flex justify-start items-center pt-5 gap-2">
            <div className=" w-4 h-4 rounded-full bg-red-600"></div>
            <div className=" w-full h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionThree;
