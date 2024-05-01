"use client";
import { PricingData } from "@/db/dummaydb";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const PricingPart = () => {
  const data = PricingData;

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="  space-y-6">
      <div
        className=" flex justify-center items-center gap-4"
        data-aos="fade-up"
      >
        <p className=" w-12 h-1 mt-2 bg-red-600"></p>
        <p className=" text-lg text-red-600 font-semibold">Our Pricing</p>
        <p className=" w-12 h-1 mt-2 bg-red-600"></p>
      </div>
      <div
        className=" w-full md:w-[70%] mx-auto text-center"
        data-aos="fade-up"
      >
        <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
          We are Interested for Your
          <span className=" text-red-600"> Pricing </span> of plan Project
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 pt-10">
        {data.map((d, index) => (
          <div key={d.id} data-aos="fade-up" data-aos-delay={index * 300}>
            <div className="  text-white bg-red-600 p-6 flex justify-center items-center">
              <p className=" text-7xl font-semibold">{d.course}</p>
              <div className=" relative w-full">
                <p className=" absolute -top-[30px] text-3xl">$</p>
                <p className=" absolute top-[0px] left-7 text-lg">PER-MONTH</p>
              </div>
            </div>
            <div className=" bg-gray-50 space-y-6 p-6">
              <p className=" text-2xl font-semibold">{d.name}</p>
              <div className=" space-y-2">
                {d.getArr.map((arr) => (
                  <div
                    key={arr.id}
                    className=" p-4 bg-white flex justify-start items-center gap-4"
                  >
                    {arr.isget ? (
                      <Image
                        src="/success-filled-svgrepo-com.svg"
                        alt="success"
                        width={28}
                        height={28}
                      />
                    ) : (
                      <Image
                        src="/fail-svgrepo-com.svg"
                        alt="success"
                        width={30}
                        height={30}
                      />
                    )}

                    {arr.title}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button className=" btn-custom w-full">Sign Up</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPart;
