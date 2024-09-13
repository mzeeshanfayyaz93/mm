import Image from 'next/image';
import Link from 'next/link';

const FintechSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Right Image Section (shows first on mobile) */}
        <div className="lg:w-1/2 hidden md:flex justify-center relative lg:order-2">
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
              src="/about/banner.webp" // Replace with the actual image path
              alt="Phone mockups showcasing trading strategies"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Left Text Section (shows second on mobile) */}
        <div className="lg:w-1/2 text-center lg:text-left lg:order-1">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold c mb-4">About Us</h1>
          <p className="text-lg font-semibold text-[#080a62] mb-4">
            Market Mavens was founded with a singular goal:
          </p>
          <p className="text-lg text-gray-600 mb-6">
            To provide online trading brokers with the expertise and tools needed to thrive in an increasingly competitive market.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our team of seasoned professionals brings decades of combined experience in marketing, risk management, and technology consultancy, all aimed at driving measurable results and sustainable growth for our clients.
          </p>
          <Link href="#" className="inline-block bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FintechSection;
