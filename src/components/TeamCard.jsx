import Image from "next/image";
import React from "react";

const TeamCard = ({ data }) => {
  return (
    <div className="mx-2 group relative overflow-hidden">
      <Image
        src={data.image}
        alt="worker"
        width={500}
        height={500}
        className=" w-full h-full object-cover object-center"
      />
      <div className=" border-t-4 relative z-20 group-hover:bg-red-600 translation duration-200 transform animate-fade-in border-orange-400 bg-gray-800 text-white text-center py-5 space-y-2">
        <p className=" text-lg font-semibold">{data.name}</p>
        <p>{data.row}</p>
      </div>
      <div className=" bg-gray-700/60 w-full h-full absolute z-5 top-0 hidden group-hover:block"></div>
      <div className="  w-full h-[50%] lg:h-[80%] xl:h-[50%] absolute px-4 z-10 bottom-[10%] hidden group-hover:flex justify-between items-center">
        <div className=" cursor-pointer bg-white p-2 rounded-lg border border-gray-800">
          <Image
            src="/353422_facebook_logo_icon.png"
            alt="social"
            width={35}
            height={35}
          />
        </div>
        <div className=" cursor-pointer bg-white p-2 rounded-lg border border-gray-800">
          <Image
            src="/843766_google_google+_plus_icon.png"
            alt="social"
            width={30}
            height={30}
          />
        </div>
        <div className=" cursor-pointer bg-white p-2 rounded-lg border border-gray-800">
          <Image
            src="/5305170_bird_social media_social network_tweet_twitter_icon.png"
            alt="social"
            width={30}
            height={30}
          />
        </div>
        <div className=" cursor-pointer bg-white p-2 rounded-lg border border-gray-800">
          <Image
            src="/5279112_camera_instagram_social media_instagram logo_icon.png"
            alt="social"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
