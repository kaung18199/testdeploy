"use client";
import { clientReview } from "@/db/dummaydb";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientCart from "./ClientCart";
import Aos from "aos";

const ClientReview = () => {
  const data = clientReview;

  var settings = {
    infinite: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
          className=" flex justify-center items-center gap-4"
          data-aos="fade-up"
        >
          <p className=" w-12 h-1 mt-2 bg-red-600"></p>
          <p className=" text-lg text-red-600 font-semibold">Client Review</p>
          <p className=" w-12 h-1 mt-2 bg-red-600"></p>
        </div>
        <div
          className=" w-full md:w-[70%] mx-auto text-center"
          data-aos="fade-up"
        >
          <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
            Client are Interested for
            <span className=" text-red-600"> Logistic </span> Service of Ocean
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
        <div className=" pt-8">
          <div className="slider-container">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div
                  key={d.id}
                  className=" min-w-[200px] h-full pb-16 pt-10"
                  data-aos="fade-up"
                  data-aos-delay={index * 300}
                >
                  <ClientCart data={d} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
