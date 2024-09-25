'use client';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const services = [
  {
    title: 'Marketing Consultancy',
    description: 'Boost your brokerage’s visibility and client acquisition with our data-driven marketing strategies. From brand positioning to targeted campaigns around the world, we tailor our services to meet your unique needs.',
    icon: '/H04.svg',
    gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
  },
  {
    title: 'Risk Management',
    description: 'Mitigate risks and protect your assets with our comprehensive risk management solutions. We identify vulnerabilities and provide proactive strategies to safeguard your brokerage against market volatility & abusive clients.',
    icon: '/H05.svg',
    gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
  },
  {
    title: 'Technology Consultant',
    description: 'Enhance your trading platform with cutting-edge technology. From branded trading platform to high tech multi layer CRM, our tech experts ensure your systems are robust, secure, and primed for growth.',
    icon: '/H06.svg',
    gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 bg-[url(/home/bg-4.webp)] bg-cover bg-right bg-no-repeat">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Our Services</h2>
          <p className="text-lg mt-4 text-gray-600">
            We empower online trading brokers to achieve unparalleled success. Our seasoned professionals deliver tailored marketing, risk management, and technology consultancy services designed to maximize ROI and drive scalable growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center rounded-2xl shadow-lg bg-white  border-2 border-primary"
            >
              <div className={`md:w-1/5 flex items-center justify-center md:rounded-l-xl ${service.gradientClass}`}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={112}
                  height={112}
                  className="w-16 h-16 md:w-40 md:h-40"
                />
              </div>
              <div className="md:w-4/5  px-6 rounded-r-2xl pb-8 md:pb-0 pt-4 md:pt-0">
                <h3 className="text-lg font-bold text-[#080a62]">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
