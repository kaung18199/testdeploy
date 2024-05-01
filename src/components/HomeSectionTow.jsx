"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";

const HomeSectionTow = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="  relative w-full h-auto overflow-hidden text-white">
      <div
        className=" w-full md:w-[70%] lg:w-[50%] pr-20 md:pr-0 space-y-6 relative z-20"
        data-aos="fade-up"
      >
        <p className=" font-semibold underline">24/7 Support Team</p>
        <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
          How to <span className=" text-red-600">Activities</span> Solution of
          Business in the World
        </p>
        <p className=" leading-8">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text
        </p>
        <button className=" btn-custom">Contact Us</button>
      </div>
    </div>
  );
};

export default HomeSectionTow;
