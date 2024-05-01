import PageHome from "@/components/PageHome";
import PricingPart from "@/components/PricingPart";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHome main="Our Pricing" title="Pricing" />
      <div className=" px-4 sm:px-10 md:px-20 lg:px-40 py-28 relative z-20 bg-white">
        <PricingPart />
      </div>
    </div>
  );
};

export default page;
