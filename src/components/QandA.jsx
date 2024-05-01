"use client";
import Image from "next/image";
import React, { useState } from "react";

const QandA = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className=" relative">
        <div>
          {show ? (
            <Image
              src="/minus-circle-svgrepo-com.svg"
              alt="minus"
              onClick={() => setShow(!show)}
              width={40}
              height={40}
              className=" absolute right-2 top-1.5 cursor-pointer"
            />
          ) : (
            <Image
              src="/plus-circle-svgrepo-com.svg"
              alt="minus"
              onClick={() => setShow(!show)}
              width={40}
              height={40}
              className=" absolute rounded-full right-2 top-1.5 cursor-pointer"
            />
          )}
        </div>
        <p
          className={`${
            show ? "bg-red-700" : "bg-gray-900"
          } text-lg md:text-xl font-semibold py-3 pr-20 text-white pl-4 `}
        >
          {data.question}
        </p>
        {show && (
          <p className=" p-4 text-sm leading-7 border-l-4 border-b-4 transition-all duration-150 transform border-red-700 animate-fade-in">
            {data.answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default QandA;
