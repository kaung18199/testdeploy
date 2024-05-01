"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const Subcribe = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div className=" flex justify-center items-center gap-x-6 gap-y-10 flex-wrap">
        <p
          className=" text-2xl sm:text-3xl md:text-4xl font-bold  min-w-[300px] w-[550px] text-white"
          data-aos="fade-up"
        >
          Subcribe Today For Newletter
        </p>
        <div
          className=" min-w-[300px] w-[550px] relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input
            type="email"
            className=" w-full py-3 px-4 text-gray-500 rounded-lg text-lg"
            placeholder=" Your Email"
          />
          <div className=" absolute top-3 right-4">
            <Image
              src="/email-1572-svgrepo-com.svg"
              alt="email"
              width={30}
              height={30}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
