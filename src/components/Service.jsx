"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceData } from "@/db/dummaydb";
import Image from "next/image";
import ServiceCart from "./ServiceCart";
import Aos from "aos";

const Service = () => {
  const data = serviceData;

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div className=" space-y-6">
        <div
          className=" flex justify-start items-center gap-4"
          data-aos="fade-up"
        >
          <p className=" w-12 h-1 mt-2 bg-red-600"></p>
          <p className=" text-lg text-red-600 font-semibold">Our Service</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2" data-aos="fade-up">
          <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] pr-20 md:pr-0">
            We are Interested for Your
            <span className=" text-red-600"> Service </span> of Ocean Freight
          </p>
        </div>
        <div className=" pt-8">
          <div className="slider-container">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div
                  key={d.id}
                  className=" min-w-[200px] h-full overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 300}
                >
                  <ServiceCart data={d} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
