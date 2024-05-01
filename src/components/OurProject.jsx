"use client";
import { galleryData } from "@/db/dummaydb";
import React, { useEffect } from "react";
import GalleryCart from "./GalleryCart";
import Aos from "aos";

const OurProject = () => {
  const data = galleryData;

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div className=" space-y-6">
        <div
          className=" flex justify-center items-center gap-4"
          data-aos="fade-up"
        >
          <p className=" w-12 h-1 mt-2 bg-red-600"></p>
          <p className=" text-lg text-red-600 font-semibold">Our Project</p>
          <p className=" w-12 h-1 mt-2 bg-red-600"></p>
        </div>
        <div
          className=" w-full md:w-[70%] mx-auto text-center"
          data-aos="fade-up"
        >
          <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
            Our Gallery are Interested for
            <span className=" text-red-600"> Logistic </span> Moving Service
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
        <div className=" pt-8">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((d, index) => (
              <div
                key={d.id}
                className=" w-full h-full "
                data-aos="fade-up"
                data-aos-delay={index * 300}
              >
                <GalleryCart data={d} />
              </div>
            ))}
          </div>
          <div className=" flex justify-center items-center my-16">
            <button className=" btn-custom">View all Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
