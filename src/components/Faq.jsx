"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import QandA from "./QandA";
import { qanda } from "@/db/dummaydb";
import Aos from "aos";

const Faq = () => {
  const data = qanda;

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className=" space-y-6">
        <div
          className=" flex justify-start items-center gap-4"
          data-aos="fade-up"
        >
          <p className=" w-12 h-1 mt-2 bg-red-600"></p>
          <p className=" text-lg text-red-600 font-semibold">Our Faq</p>
        </div>
        <div className=" " data-aos="fade-up">
          <p className=" font-semibold text-2xl sm:text-3xl md:text-4xl leading-[35px] md:leading-[45px] ">
            Frequently
            <span className=" text-red-600"> Asked </span> Question
          </p>
        </div>
        <div className=" space-y-4">
          {data.map((item, index) => (
            // return ;
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 300}>
              <QandA data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className=" space-y-6" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488799.67591351684!2d95.85190884071179!3d16.838879493817203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon!5e0!3m2!1sen!2smm!4v1714481423184!5m2!1sen!2smm"
          className=" w-full h-full min-h-[500px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Faq;
