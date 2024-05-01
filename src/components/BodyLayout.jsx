"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BodyLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [scrollPoint, setScrollPoint] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the window's scrollY position is greater than 0
      setIsScrolled(window.scrollY > 0);
      // console.log(window.scrollY);
      // if (window.scrollY > 2630) {
      //   setScrollPoint(true);
      // } else {
      //   setScrollPoint(false);
      // }
    };

    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <body className=" font-poppins relative">
      <div
        className={`${isScrolled ? "sticky" : "absolute"} top-0 z-30 w-full`}
      >
        <Navbar isScrolled={isScrolled} />
      </div>
      {children}
      <div className=" bg-gradient-to-r from-blue-900 to-pink-600 relative z-20">
        <Footer />
      </div>
    </body>
  );
};

export default BodyLayout;
