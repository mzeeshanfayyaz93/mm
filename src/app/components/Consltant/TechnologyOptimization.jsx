import Image from 'next/image';
import Link from 'next/link';

const TechnologyOptimization = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#080a62] mb-4">
            Optimize Your Trading Platform with Cutting-Edge Technology
          </h1>
          <p className="text-md md:text-lg  mb-6">
            In the rapidly evolving fintech landscape, staying ahead technologically is not just an advantage; it's a necessity. Market Mavens specializes in enhancing trading platforms with the latest technological innovations, ensuring that your brokerage is equipped to meet the demands of modern traders. From improving system performance to integrating new features that enhance user experience, our technology consultancy services are designed to keep you at the forefront of the industry.
          </p>
          <Link href="#" className="inline-block bg-gradient-to-r from-[#080a62] to-[#dc3d52] hover:bg-gradient-to-l text-white font-semibold py-3 px-8 rounded-full text-lg">
            Get Started Today
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 hidden md:flex justify-center">
          <div className="relative w-full h-96 md:h-[500px]">
            <Image
              src="/consltant/T2.webp" // Replace with the actual image path
              alt="Trading Platform"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOptimization