import React from "react";
import Image from "next/image";

const MarketingFile = () => {
  return (
    <section>
      <div className="max-w-[1135px] mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Image Section */}
          <div className="relative w-full h-80 md:h-[400px] order-1 md:order-2">
            <Image
              src="/Marketing-15.svg"
              fill
              alt="Marketing"
              className="object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="content order-2 md:order-1 text-center md:text-left">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-[20px] font-[600] lg:text-[30px] 2xl:text-[40px] capitalize max-w-4xl md:leading-[45px]">
              MAKE THE SWITCH TO PERFORMANCE-BASED DIGITAL MARKETING
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFile;
