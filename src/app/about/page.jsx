"use client";
import AboutUs from "@/components/AboutUs";
import HomeSectionThree from "@/components/HomeSectionThree";
import HomeSectionTow from "@/components/HomeSectionTow";
import PageHome from "@/components/PageHome";
import Image from "next/image";
import PatnerShip from "@/components/PatnerShip";

// import dynamic from "next/dynamic";

// const PatnerShip = dynamic(() => import("@/components/PatnerShip"));
// import NoSSR from "react-no-ssr";

const page = () => {
  return (
    <div>
      <PageHome main="About Us" title="About us" />
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <AboutUs />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative bg-white z-20">
        <HomeSectionThree />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative ">
        <HomeSectionTow />

        <div className="  relative">
          <Image
            src="https://themesfamily.com/wt/kabir/assets/img/slider/5.jpg"
            alt="cover"
            width={2000}
            height={2000}
            className=" bottom-0 left-0 fixed z-10 w-full h-full object-cover object-center "
          />
          <div className=" w-full h-full fixed z-10 bottom-0 left-0 bg-gray-900/60"></div>
        </div>
      </div>

      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative bg-gray-50 z-20">
        <PatnerShip />
      </div>
    </div>
  );
};

export default page;
