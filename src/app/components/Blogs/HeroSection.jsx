import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#080a62] mb-4">
            Market Updates
          </h1>
          <p className="text-md md:text-lg mb-6">
            Stay informed with our daily trading updates. Get the latest insights and trends to enhance your market strategies.
          </p>
          <Link href="#" className="inline-block bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg">
            View Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative w-full h-64 md:h-[500px]">
            <Image
              src="/path-to-image/market-laptop.png" // Update with the actual image path
              alt="Market Updates Laptop"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection