import Image from 'next/image';

const MarketingConsultancy = () => {
  return (
    <section className="bg-gradient-to-b from-[#080a62] from-30%  to-secondary to-90% pt-16 md:px-4 text-white relative">
      <div className="max-w-6xl mx-auto text-center lg:text-left">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 text-center md:leading-normal">
          Elevate Your Brokerage’s Brand with{' '}
          <span className="text-[#d73c52]">Expert Marketing Strategies</span>
        </h1>
        
        {/* Description */}
        <p className="text-sm md:ext-lg xl:text-xl text-gray-300 mb-8 text-center p-5">
          In the competitive world of online trading, standing out is essential. At Market Mavens, we specialize in crafting tailored marketing strategies that elevate your brokerage’s brand and drive high-quality client acquisition. With a focus on fintech, our data-driven approach ensures every campaign aligns with market demands, delivering measurable results. Whether launching, rebranding, or expanding, our seasoned professionals guide you every step of the way.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative mt-10 lg:mt-0 flex justify-center">
        <div className="relative w-full h-40 md:h-[600px]">
          <Image
            src="/marketing/banner.webp" // Replace with the actual image path
            alt="Trading Summary"
           fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingConsultancy