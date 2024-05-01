"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className=" space-y-6" data-aos="fade-up">
        <div className=" flex justify-start items-center gap-4">
          <p className=" w-12 h-1 mt-2 bg-red-600"></p>
          <p className=" text-lg text-red-600 font-semibold">About Us</p>
        </div>
        <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
          How to <span className=" text-red-600">Activities</span> Solution of
          Business in the World
        </p>
        <div>
          <p className=" border-l-2 border-red-600 pl-4 leading-[30px]">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isnot anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <p className="leading-[30px]">
          Web page editors now use Lorem Ipsum as their default model text, and
          a search for lorem ipsum will uncover many web sites still in their
          over infancy. Various versions have evolved over the years, sometimes
          by accident, sometimes on purpose injected humour and the liking of
          all.
        </p>
        <button className=" btn-custom">Learn More</button>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <div className=" col-span-1 w-full h-full "></div> */}
        <div
          className=" col-span-1 lg:col-span-2  w-full min-h-[400px] md:min-h-full overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/about/about-3.jpg"
            alt="about"
            width={600}
            height={600}
            className=" w-full h-full object-cover object-center"
          />
        </div>
        <div
          className=" col-span-1 w-full hidden md:block "
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/about/about-2.jpg"
            alt="about"
            width={600}
            height={200}
            className=" w-full h-full object-cover object-center"
          />
        </div>
        <div
          className=" col-span-1 w-full hidden lg:block "
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/about/about-3.jpg"
            alt="about"
            width={600}
            height={200}
            className=" w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
