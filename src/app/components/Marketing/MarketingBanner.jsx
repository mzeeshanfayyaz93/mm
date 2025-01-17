import Image from "next/image";
import React from "react";

const MarketingBanner = () => {
  return (
    <section className="relative bg-white py-16 xl:py-28 2xl:py-32 flex items-center justify-center">
      <div className="container grid lg:grid-cols-2 gap-8 items-center">
        {/* Right Content (Image First on Mobile) */}
        <div className="relative w-full h-80 md:h-[500px] order-1 lg:order-2 mt-12 md:mt-0">
          <Image
            src="/Marketing-04.webp"
            fill
            alt="Marketing"
            className="object-contain"
          />
        </div>

        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center md:text-left">
          <h2 className="text-lg lg:text-3xl text-gray-800 leading-tight">
            Elevate Your{" "}
            <span className="text-primary font-bold">
              Brokerage’s <br /> Brand
            </span>{" "}
            with{" "}
            <span className="text-primary font-bold">EXPERT FINTECH</span>
          </h2>
          <h1 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-[25px] font-[600] lg:text-[30px] 2xl:text-[70px] capitalize max-w-xl md:leading-[70px]">
            MARKETING STRATEGIES
          </h1>
          <button className="mt-5 px-6 py-3 bg-gradient-to-r from-primary to-secondary to-90% text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition-all">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketingBanner;
