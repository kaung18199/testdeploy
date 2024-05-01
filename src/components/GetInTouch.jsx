"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const GetInTouch = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className=" space-y-6">
        <div className=" " data-aos="fade-up">
          <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
            Get In
            <span className=" text-red-600"> Touch </span>
          </p>
        </div>
        <p className=" text-gray-600 leading-[30px]" data-aos="fade-up">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnot anything embarrassing hidden in the middle of text.
        </p>
        <div className=" grid grid-cols-2 gap-6" data-aos="fade-up">
          <input
            type="text"
            className=" border-2 col-span-2 sm:col-span-1 border-l-red-600 py-3 px-4 w-full border-gray-200 rounded-lg "
            placeholder=" Your Name"
          />
          <input
            type="email"
            className=" border-2 border-l-red-600 col-span-2 sm:col-span-1 py-3 px-4 w-full border-gray-200 rounded-lg "
            placeholder=" Your Email"
          />
          <input
            type="text"
            className=" border-2 border-l-red-600 col-span-2 py-3 px-4 w-full border-gray-200 rounded-lg "
            placeholder=" Your Subject"
          />
          <input
            type="text"
            className=" border-2 border-l-red-600 col-span-2 h-[100px] py-3 px-4 w-full border-gray-200 rounded-lg "
            placeholder=" Your Message"
          />
          <button className=" btn-custom">Send </button>
        </div>
      </div>
      <div className=" space-y-6">
        <div className=" " data-aos="fade-up">
          <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
            Contact
            <span className=" text-red-600"> Info </span>
          </p>
        </div>
        <p className=" text-gray-600 leading-[30px]" data-aos="fade-up">
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary.
        </p>
        <div className=" space-y-6">
          <div
            className=" flex justify-start items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="/home-svgrepo-com.svg"
              alt="home"
              className=""
              width={70}
              height={70}
            />
            <div className=" space-y-2">
              <p className=" text-lg font-semibold">Address Location</p>
              <p className=" text-gray-600">
                1 Grafton Street, Dublin, Ireland University
              </p>
            </div>
          </div>
          <div
            className=" flex justify-start items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Image
              src="/phone-svgrepo-com.svg"
              alt="home"
              className=""
              width={70}
              height={70}
            />
            <div className=" space-y-2">
              <p className=" text-lg font-semibold">Phone Number</p>
              <p className=" text-gray-600">+135 123214 123213</p>
            </div>
          </div>
          <div
            className=" flex justify-start items-center gap-4 "
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Image
              src="/email-1572-svgrepo-com.svg"
              alt="home"
              className=" pl-3 mr-3"
              width={60}
              height={60}
            />
            <div className=" space-y-2">
              <p className=" text-lg font-semibold">Mail Address</p>
              <p className=" text-gray-600">example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
