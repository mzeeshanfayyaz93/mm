import Image from 'next/image';

const WhyChooseSection = () => {
  return (
    <section className="py-16 px-4 text-white relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-12 bg-gradient-to-r from-[#0d1f59e3] to-primary p-4 md:p-10">
        
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold mb-4 pt-5">
            Why Choose <br/><span className="text-[#d73c52]">Market Mavens?</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-6">
            At Market Mavens, our marketing consultancy services are designed to empower online trading brokers with the tools they need to succeed in a highly competitive environment. Our team combines deep fintech expertise with creative strategies and a commitment to delivering measurable results.
          </p>
          <p className="text-sm md:text-lg text-gray-300">
            When you partner with us, you’re not just getting a marketing consultant—you’re gaining a strategically dedicated team to drive your brokerage’s growth and profitability.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full h-72 md:h-[500px]">
            <Image
              src="/marketing/m1.webp" // Replace with the correct image path
              alt="Market Mavens Mobile UI"
              layout="fill"
              objectFit="contain" // Use object-fit to prevent cropping
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
