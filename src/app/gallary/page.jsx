import OurProject from "@/components/OurProject";
import PageHome from "@/components/PageHome";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHome main="Our Gallery" title="Gallery" />
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative bg-white z-20">
        <OurProject />
      </div>
    </div>
  );
};

export default page;
