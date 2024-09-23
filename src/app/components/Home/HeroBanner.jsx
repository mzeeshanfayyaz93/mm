import Image from 'next/image';
import GradientButton from '../common/GradientButton'

const HeroBanner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between border-b border-gray-100 py-10 md:py-14">
        
        {/* Left Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl md:text-5xl xl:text-[55px] font-bold text-[#080a62] leading-tight mb-6 px-4 md:px-0">
            Expert-Led Strategies for Maximum ROI & Scalable Growth
          </h1>
          <GradientButton href="/contact" text="Get Started Today" />
        </div>

        {/* Right Image Section */}
        <div className="relative lg:mt-0 lg:w-1/2 w-full flex justify-center">
          <div className="relative w-full h-80 sm:h-96 md:h-[500px]">
            <Image
              src="/banner.webp" // Replace with the correct path of your image
              alt="Dashboard showing ROI and scalable growth"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
