"use client";
import { homeSectionOne } from "@/db/dummaydb";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const HomeSectionOne = () => {
  const data = homeSectionOne;

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((d, index) => (
        <div
          key={d.id}
          className=" space-y-6 py-10 px-3 text-center bg-white shadow-lg"
          data-aos="fade-up"
          data-aos-delay={index * 300}
        >
          <Image
            src={d.image}
            alt="truck"
            width={50}
            height={50}
            className=" mx-auto"
          />
          <p className=" font-semibold text-lg">{d.title}</p>
          <p className=" text-gray-700 text-sm leading-8 tracking-wider">
            {d.descirption}
          </p>
          <p className=" py-2">
            <span className=" border-b-2 border-b-red-600 ">Read</span> More
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomeSectionOne;
