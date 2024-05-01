import Image from "next/image";
import React from "react";

const GalleryCart = ({ data }) => {
  return (
    <div className="relative group">
      <div>
        <Image
          src={data.image}
          alt="gallery"
          width={200}
          height={200}
          className=" w-full h-full object-cover object-center"
        />
      </div>
      <div className=" w-full h-full absolute top-0 left-0 bg-green-600/60 opacity-0 group-hover:opacity-100 transition-all duration-150"></div>
      <div className=" absolute top-4 flex justify-end items-center gap-4 right-6 h-[50px] opacity-0 group-hover:opacity-100 transition-all duration-150">
        <Image
          src="/search-alt-1-svgrepo-com.svg"
          alt="gallery"
          width={40}
          height={40}
          className=" bg-white p-2"
        />
        <Image
          src="/link-alt-1-svgrepo-com.svg"
          alt="gallery"
          width={40}
          height={40}
          className=" bg-white p-2"
        />
      </div>
      <div className=" absolute bottom-6 right-6 left-6 bg-white p-6 space-y-3 text-center opacity-0 group-hover:opacity-100 transition-all duration-150">
        <p className=" italic">{data.title}</p>
        <p className=" text-lg font-bold">{data.name}</p>
        <p className=" py-2">
          <span className=" border-b-2 border-b-red-600 ">READ</span> MORE
        </p>
      </div>
    </div>
  );
};

export default GalleryCart;
