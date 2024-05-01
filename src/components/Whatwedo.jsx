"use client";
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const Whatwedo = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div
          className=" space-y-6 bg-gray-50 p-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className=" flex justify-start items-center gap-4">
            <p className=" w-12 h-1 mt-2 bg-red-600"></p>
            <p className=" text-lg text-red-600 font-semibold">What We Do</p>
          </div>
          <div className=" ">
            <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
              Your Goal to work Logistic
              <span className=" text-red-600"> Activities </span> Solution of
              Business
            </p>
          </div>
          <div className="  pt-4 pb-3 space-y-4">
            <div className=" bg-white space-y-4 border-l shadow-md rounded-xl p-4 border-red-600 flex justify-start items-start gap-4">
              <div className=" w-[40%] sm:w-[30%] md:w-[20%] pt-3">
                <Image
                  src="https://themesfamily.com/wt/kabir/assets/img/feature/003-multimedia.png"
                  alt="image"
                  width={100}
                  height={100}
                  className=" w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-4">
                <p className=" text-lg font-semibold">Best Time Management</p>
                <p>
                  It was popularised in the 1960s with the release of letraset
                  sheet containing.
                </p>
              </div>
            </div>
            <div className=" bg-white space-y-4 border-l shadow-md rounded-xl p-4 border-red-600 flex justify-start items-center gap-4">
              <div className=" w-[40%] sm:w-[30%] md:w-[20%] pt-3">
                <Image
                  src="https://themesfamily.com/wt/kabir/assets/img/feature/002-academic-cap.png"
                  alt="image"
                  width={100}
                  height={100}
                  className=" w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-4">
                <p className=" text-lg font-semibold">Secure & Trust</p>
                <p>
                  It was popularised in the 1960s with the release of letraset
                  sheet containing.
                </p>
              </div>
            </div>
          </div>
          <button className=" btn-custom">Learn More</button>
        </div>
        <div
          className=" w-full h-full hidden lg:block"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Image
            src="https://themesfamily.com/wt/kabir/assets//img/about/skill-2.jpg"
            alt="cover"
            width={600}
            height={600}
            className=" w-full h-full object-cover object-center"
          />
        </div>
        <div
          className=" w-full h-full hidden lg:block"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <Image
            src="https://themesfamily.com/wt/kabir/assets//img/about/skill-2.jpg"
            alt="cover"
            width={600}
            height={600}
            className=" w-full h-full object-cover object-center"
          />
        </div>
        <div
          className=" space-y-6 bg-gray-50 p-10"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div className=" flex justify-start items-center gap-4">
            <p className=" w-12 h-1 mt-2 bg-red-600"></p>
            <p className=" text-lg text-red-600 font-semibold">Our Skill</p>
          </div>
          <div className=" ">
            <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
              You can achive and Progress information
              <span className=" text-red-600"> Skill </span> Development
            </p>
          </div>
          <div className="  pt-4 pb-3 space-y-6">
            <div className=" pb-6 border-b-8 border-gray-200 relative">
              <div className=" w-[85%] h-2.5 bg-red-600 absolute -bottom-2 left-0"></div>
              <div>
                <Image
                  src="/location-pin-svgrepo-com.svg"
                  alt="cover"
                  width={30}
                  height={30}
                  className=" absolute -bottom-2 right-[12%]"
                />
              </div>
              <div className=" flex justify-between items-center">
                <p className=" font-semibold">Road Freight</p>
                <p>[85%]</p>
              </div>
            </div>
            <div className=" pb-6 border-b-8 border-gray-200 relative">
              <div className=" w-[60%] h-2.5 bg-red-600 absolute -bottom-2 left-0"></div>
              <div>
                <Image
                  src="/location-pin-svgrepo-com.svg"
                  alt="cover"
                  width={30}
                  height={30}
                  className=" absolute -bottom-2 right-[38%]"
                />
              </div>
              <div className=" flex justify-between items-center">
                <p className=" font-semibold">Ocean Freight</p>
                <p>[60%]</p>
              </div>
            </div>
            <div className=" pb-6 border-b-8 border-gray-200 relative">
              <div className=" w-[75%] h-2.5 bg-red-600 absolute -bottom-2 left-0"></div>
              <div>
                <Image
                  src="/location-pin-svgrepo-com.svg"
                  alt="cover"
                  width={30}
                  height={30}
                  className=" absolute -bottom-2 right-[22%]"
                />
              </div>
              <div className=" flex justify-between items-center">
                <p className=" font-semibold">Air Freight</p>
                <p>[75%]</p>
              </div>
            </div>
          </div>
          <button className=" btn-custom">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
