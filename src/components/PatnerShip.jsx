"use client";
import { sliderImagePart } from "@/db/dummaydb";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = sliderImagePart;

  return (
    <React.Fragment>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={d.id} className=" px-2">
              <Image
                src={d.image}
                alt="name"
                width={100}
                height={100}
                className=" object-cover object-center w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
}

export default AutoPlay;
