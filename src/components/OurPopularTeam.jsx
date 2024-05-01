"use client";
import { popularTeam } from "@/db/dummaydb";
import React, { useEffect } from "react";
import TeamCard from "./TeamCard";
import Aos from "aos";

const OurPopularTeam = () => {
  const data = popularTeam;

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className=" space-y-6">
      <div
        className=" flex justify-center items-center gap-4"
        data-aos="fade-up"
      >
        <p className=" w-12 h-1 mt-2 bg-red-600"></p>
        <p className=" text-lg text-red-600 font-semibold">Our Popular Team</p>
        <p className=" w-12 h-1 mt-2 bg-red-600"></p>
      </div>
      <div
        className=" w-full md:w-[70%] mx-auto text-center"
        data-aos="fade-up"
      >
        <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
          Support are Interested for
          <span className=" text-red-600"> Logistic </span> Team of Ocean
          Freight
        </p>
      </div>
      <div
        className=" w-full md:w-[70%] mx-auto text-center"
        data-aos="fade-up"
      >
        <p className=" leading-[25px] ">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-14">
        {data.map((d, index) => (
          <div key={d.id} data-aos="fade-up" data-aos-delay={index * 300}>
            <TeamCard data={d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPopularTeam;
