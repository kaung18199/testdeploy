"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { dataForCarousel } from "@/db/dummaydb";

export default function SimpleSlider() {
  const data = dataForCarousel;

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: " rgb(234, 220, 217,0.3)",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "rgb(234, 220, 217,0.3)",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {data.map((d) => (
        <div key={d.id}>
          <div className=" w-[100%] h-[700px] relative flex justify-start items-center">
            <Image
              src={d.image}
              alt="cover image"
              width={700}
              height={500}
              className=" object-cover object-top w-full h-full absolute top-0 left-0"
            />
            <div className=" w-full h-full absolute top-0 left-0 bg-gray-900/60"></div>
            <div className="w-full md:w-[70%] lg:w-[50%] pl-20 pr-20 md:pr-0 space-y-8 relative z-20">
              <p className=" text-gray-100">50% GET OFF</p>
              <h1 className="text-white text-4xl lg:text-6xl font-bold ">
                {d.title}
              </h1>
              <p className=" text-gray-100 text-lg md:text-xl pr-10 md:pr-28 ">
                {d.description}
              </p>
              <button className=" btn-custom">Contact Us</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
