import HomeSectionOne from "@/components/HomeSectionOne";
import PageHome from "@/components/PageHome";
import Service from "@/components/Service";
import Subcribe from "@/components/Subcribe";
import Whatwedo from "@/components/Whatwedo";

const page = () => {
  return (
    <div>
      <PageHome main="Transporation Service" title="Service" />
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-gray-50">
        <HomeSectionOne />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <Service />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <Whatwedo />
      </div>
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-gradient-to-r from-blue-900 to-pink-600">
        <Subcribe />
      </div>
    </div>
  );
};

export default page;
