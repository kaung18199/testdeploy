import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className=" w-full h-screen bg-white flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-56 w-56 border-t-4 border-b-4 border-red-500"></div>
        <Image
          src="/logo.jpg"
          alt="iamg"
          width={300}
          height={300}
          className="rounded-full "
        />
      </div>
    </div>
  );
};

export default loading;

//
