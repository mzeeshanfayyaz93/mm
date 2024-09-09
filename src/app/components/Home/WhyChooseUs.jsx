import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; // Checkmark icon

const WhyChooseUs = () => {
  return (
    <section className="bg-[url(/bg-image.svg)] bg-cover bg-center text-white md:h-[450px] mt-16 mb-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
        {/* Left Image Section */}
        <div className="relative lg:basis-1/3">
          <Image
            src="/2nd-Img.webp" // Replace with the correct path of your image
            alt="Financial analysis mockup"
            width={400}
            height={500}
            className="object-contain mt-[-160px]"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:basis-2/3 text-left md:pt-24 pb-16 md:pb-0">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <FaCheckCircle size={36} className="text-green-400 mr-3 mt-1" />
              <div>
                <strong>Professional Expertise:</strong> Our team consists of industry veterans with years of experience in the fintech sector, providing you with insights and strategies that work.
              </div>
            </li>
            <li className="flex items-start">
              <FaCheckCircle size={36} className="text-green-400 mr-3 mt-1" />
              <div>
                <strong>ROI-Driven Approach:</strong> We focus on delivering measurable results that enhance profitability and drive growth. Our success is measured by your success.
              </div>
            </li>
            <li className="flex items-start">
              <FaCheckCircle size={32} className="text-green-400 mr-3 mt-1" />
              <div>
                <strong>Scalability & Profitability:</strong> Our solutions are designed to scale with your business, ensuring long-term profitability and sustainability.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
