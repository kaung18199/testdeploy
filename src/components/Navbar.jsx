"use client";

import Image from "next/image";
import NavLink from "./NavLink";
import { useState } from "react";

const Navbar = ({ isScrolled }) => {
  const links = [
    { title: "Home ", path: "/" },
    { title: "About ", path: "/about" },
    { title: "Service ", path: "/service" },
    { title: "Gallary ", path: "/gallary" },
    { title: "Pricing ", path: "/pricing" },
  ];

  const [show, setShow] = useState(false);

  const showFunction = () => {
    setShow(!show);
  };

  return (
    <div
      className={`px-4 sm:px-10 md:px-20 lg:px-40 flex justify-between items-center py-8 ${
        isScrolled ? "bg-white shadow-lg" : " bg-transparent"
      }`}
    >
      <div className=" w-[50px] rounded-full flex justify-start items-center gap-4">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          className=" rounded-full"
        />
        <p
          className={` font-semibold text-xl ${
            isScrolled ? "text-red-600" : "text-white"
          }`}
        >
          LOGO
        </p>
      </div>
      <div className="hidden md:flex justify-evenly items-center space-x-4 relative transition-all duration-300 transform">
        {links.map((link, index) => (
          <div key={index} className=" ">
            <NavLink isScrolled={isScrolled} item={link} key={index} />
          </div>
        ))}
      </div>
      <div className=" block md:hidden " onClick={() => showFunction()}>
        {isScrolled ? (
          <Image
            src="/menu-2-svgrepo-com.svg"
            width={30}
            height={30}
            alt="menu"
          />
        ) : (
          <Image
            src="/menu-3-svgrepo-com.svg"
            width={30}
            height={30}
            alt="menu"
          />
        )}
      </div>
      {show && (
        <div
          className={` block md:hidden absolute top-[94px] space-y-6 rounded-b-3xl shadow-lg border-b-4 border-red-600  animate-fade-in py-6 text-center ${
            isScrolled ? "bg-white" : "bg-gray-900"
          } w-full left-0`}
        >
          {links.map((link, index) => (
            <div key={index} className=" ">
              <NavLink isScrolled={isScrolled} item={link} key={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
