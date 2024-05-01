"use client";
import AboutUs from "@/components/AboutUs";
import CarouselHome from "@/components/CarouselHome";
import ClientReview from "@/components/ClientReview";
import Faq from "@/components/Faq";
import GetInTouch from "@/components/GetInTouch";
import HomeSectionOne from "@/components/HomeSectionOne";
import HomeSectionThree from "@/components/HomeSectionThree";
import HomeSectionTow from "@/components/HomeSectionTow";
import OurPopularTeam from "@/components/OurPopularTeam";
import PatnerShip from "@/components/PatnerShip";
import RecentNews from "@/components/RecentNews";
import Service from "@/components/Service";
import Subcribe from "@/components/Subcribe";
import Whatwedo from "@/components/Whatwedo";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [scrollPoint, setScrollPoint] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      setScrollPoint(window.scrollY > 5125);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" h-auto overflow-hidden ">
      <div className=" relative z-20">
        <CarouselHome />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-gray-50">
        <HomeSectionOne />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <AboutUs />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative ">
        <HomeSectionTow />
        {!scrollPoint ? (
          <div className="  relative">
            <Image
              src="https://themesfamily.com/wt/kabir/assets/img/slider/5.jpg"
              alt="cover"
              width={2000}
              height={2000}
              className=" bottom-0 left-0 fixed z-10 w-full h-full object-cover object-center "
            />
            <div className=" w-full h-full fixed z-10 bottom-0 left-0 bg-gray-900/60"></div>
          </div>
        ) : (
          <div className="  relative">
            <Image
              src="https://themesfamily.com/wt/kabir/assets/img/slider/1.jpg"
              alt="cover"
              width={2000}
              height={2000}
              className=" bottom-0 left-0 fixed z-10 w-full h-full object-cover object-center "
            />
            <div className=" w-full h-full fixed z-10 bottom-0 left-0 bg-gray-900/60"></div>
          </div>
        )}
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <Service />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <ClientReview />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <Whatwedo />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative">
        <HomeSectionThree />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative bg-white z-20">
        <OurPopularTeam />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative bg-gray-50 z-20">
        <PatnerShip />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <RecentNews />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-gradient-to-r from-blue-900 to-pink-600">
        <Subcribe />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <GetInTouch />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-gray-50">
        <Faq />
      </div>
    </div>
  );
};

export default HomePage;
