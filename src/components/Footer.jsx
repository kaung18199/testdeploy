import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-28 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      <div className=" col-span-1 xl:col-span-2 space-y-6">
        <div className=" ">
          <p className=" font-semibold text-white text-xl tracking-[1px]">
            Qabid Logistic
          </p>
          <div className=" flex justify-start items-center pt-5 gap-2">
            <div className=" w-3 h-3 rounded-full bg-red-600"></div>
            <div className=" w-[80px] h-1 rounded-full bg-red-600"></div>
          </div>
        </div>
        <div>
          <p className=" text-white text-base leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat
            esse, recusandae nam illum
          </p>
        </div>
        <div>
          <p className=" text-white text-xl tracking-[2px] font-semibold">
            Follow Us
          </p>
        </div>
        <div>
          <div className=" flex justify-start items-center gap-5">
            <div className=" bg-red-700 p-2 rounded-full">
              <Image
                src="/facebook-svgrepo-com.svg"
                alt="facebook"
                width={40}
                height={40}
              />
            </div>
            <div className=" bg-red-700 p-2 rounded-full">
              <Image
                src="/world-svgrepo-com.svg"
                alt="facebook"
                width={40}
                height={40}
              />
            </div>
            <div className=" bg-red-700 p-3 rounded-full">
              <Image
                src="/be-social-badge-svgrepo-com.svg"
                alt="facebook"
                width={30}
                height={30}
              />
            </div>
            <div className=" bg-red-700 p-3 rounded-full">
              <Image
                src="/linkedin-svgrepo-com.svg"
                alt="facebook"
                width={30}
                height={30}
              />
            </div>
            <div className=" bg-red-700 p-3 rounded-full">
              <Image
                src="/twitter-154-svgrepo-com.svg"
                alt="facebook"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-1 space-y-6">
        <div className=" ">
          <p className=" font-semibold text-white text-xl tracking-[1px]">
            Quick Links
          </p>
          <div className=" flex justify-start items-center pt-5 gap-2">
            <div className=" w-3 h-3 rounded-full bg-red-600"></div>
            <div className=" w-[80px] h-1 rounded-full bg-red-600"></div>
          </div>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Get Stared</p>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Our Team</p>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>About Us</p>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Need Helps</p>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Contact Us</p>
        </div>
      </div>
      <div className=" col-span-1 space-y-6">
        <div className=" ">
          <p className=" font-semibold text-white text-xl tracking-[1px]">
            Our Service
          </p>
          <div className=" flex justify-start items-center pt-5 gap-2">
            <div className=" w-3 h-3 rounded-full bg-red-600"></div>
            <div className=" w-[80px] h-1 rounded-full bg-red-600"></div>
          </div>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Our Faq</p>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Our Service</p>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Our Course</p>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Site Map</p>
        </div>
        <div className=" text-white flex justify-start items-center gap-4">
          <svg
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className=" w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
            </g>
          </svg>
          <p>Our News</p>
        </div>
      </div>
      <div className=" col-span-1 xl:col-span-2 space-y-6">
        <div className=" ">
          <p className=" font-semibold text-white text-xl tracking-[1px]">
            Our Gallery
          </p>
          <div className=" flex justify-start items-center pt-5 gap-2">
            <div className=" w-3 h-3 rounded-full bg-red-600"></div>
            <div className=" w-[80px] h-1 rounded-full bg-red-600"></div>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-4">
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/service/footer/1.jpg"
            alt="footer"
            width={200}
            height={200}
            className=" w-full h-full object-cover object-center"
          />
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/service/footer/2.jpg"
            alt="footer"
            width={200}
            height={200}
            className=" w-full h-full object-cover object-center"
          />
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/service/footer/3.jpg"
            alt="footer"
            width={200}
            height={200}
            className=" w-full h-full object-cover object-center"
          />
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/service/footer/4.jpg"
            alt="footer"
            width={200}
            height={200}
            className=" w-full h-full object-cover object-center"
          />
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/service/footer/5.jpg"
            alt="footer"
            width={200}
            height={200}
            className=" w-full h-full object-cover object-center"
          />
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/service/footer/6.jpg"
            alt="footer"
            width={200}
            height={200}
            className=" w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
