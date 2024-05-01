import Image from "next/image";
import React from "react";

const RecentCart = ({ data }) => {
  return (
    <div>
      <div className=" min-w-[200px] mr-2 sm:mr-4 border border-gray-200 hover:shadow-lg shadow-md ">
        <Image
          src={data.image}
          alt="image"
          width={600}
          height={200}
          className=" w-full h-full object-cover object-center"
        />

        <div className=" px-4 py-6  space-y-5 text-wrap w-auto">
          <div className=" flex justify-start gap-8 items-center ">
            <p className=" flex justify-start gap-4 items-center">
              <Image
                src="/man-svgrepo-com.svg"
                alt="man"
                width={20}
                height={20}
                className=""
              />
              by : Admin
            </p>
            <p className=" flex justify-start gap-4 items-center">
              <Image
                src="/tag-2-svgrepo-com.svg"
                alt="man"
                width={20}
                height={20}
                className=""
              />
              {data.tag}
            </p>
          </div>
          <p className=" text-xl font-semibold ">{data.title}</p>

          <div className=" flex justify-between items-center border-t border-gray-300 pt-4">
            <p className=" flex justify-start items-center gap-4">
              <Image
                src="/calendar-days-svgrepo-com.svg"
                alt="man"
                width={20}
                height={20}
                className=""
              />
              {data.date}
            </p>
            <p className=" py-2">
              <span className=" border-b-2 border-b-red-600 ">READ</span> MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCart;
