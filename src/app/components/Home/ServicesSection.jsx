'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const services = [
  {
    title: 'Marketing Consultancy',
    description: 'Boost your brokerage’s visibility and client acquisition with our data-driven marketing strategies. From brand positioning to targeted campaigns around the world, we tailor our services to meet your unique needs.',
    bgColor: 'bg-white',
    boxBorder: 'border-primary',
    textColor: 'text-[#080a62]',
    borderColor: 'border-primary',
    textHoverColor: 'text-primary',
    linkColor: 'text-secondary',
    linkHoverColor: 'hover:text-primary',
    icon: '/icon1.svg',
    hoverIcon: '/hover1.svg' // Add hover icon
  },
  {
    title: 'Risk Management',
    description: 'Mitigate risks and protect your assets with our comprehensive risk management solutions. We identify vulnerabilities and provide proactive strategies to safeguard your brokerage against market volatility and abusive clients.',
    bgColor: 'bg-gradient-to-l from-[#080a62] to-[#3a1298] text-white',
    textColor: 'text-red-500',
    borderColor: 'border-white',
    textHoverColor: 'hover:text-white',
    linkColor: 'text-white',
    linkHoverColor: 'hover:text-white',
    icon: '/icon2.svg',
    hoverIcon: '/hover2.svg' // Add hover icon
  },
  {
    title: 'Technology Consultancy',
    description: 'Enhance your trading platform with cutting-edge technology. From branded trading platforms to high-tech multi-layer CRMs, our tech experts ensure your systems are robust, secure, and primed for growth.',
    bgColor: 'bg-white',
    textColor: 'text-[#080a62]',
    borderColor: 'border-primary',
    textHoverColor: 'text-primary',
    linkColor: 'text-secondary',
    linkHoverColor: 'hover:text-primary',
    icon: '/icon3.svg',
    hoverIcon: '/hover3.svg' // Add hover icon
  },
];

const ServicesSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null); // State to track hover

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Our Services</h2>
          <p className="text-lg mt-4 text-gray-600">
            We empower online trading brokers to achieve unparalleled success. Our seasoned professionals deliver tailored marketing, risk management, and technology consultancy services designed to maximize ROI and drive scalable growth.
          </p>
        </div>

        {/* Dynamic Service Cards */}
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative mb-8 flex flex-col lg:flex-row items-start md:items-center ${service.bgColor} rounded-2xl p-10 border-2 border-primary shadow-lg gap-4 md:gap-8 mb-16 transition-all duration-300`}
            onMouseEnter={() => setHoverIndex(index)} // Set hover index
            onMouseLeave={() => setHoverIndex(null)}  // Reset hover index
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 transition-all duration-300">
              <Image 
                src={hoverIndex === index ? service.hoverIcon : service.icon} 
                width={80} 
                height={80} 
                alt={service.title} 
              />
            </div>
            <div className={`lg:w-1/3 md:border-r-2 ${service.borderColor}`}>
              <h3 className={`text-2xl mb-0 font-bold w-48 ${service.textColor}`}>{service.title}</h3>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg mb-4">
                {service.description}
              </p>
              <Link href="#" className={`${service.linkColor} ${service.linkHoverColor} font-semibold flex items-center justify-end`}>
                Learn More <FaArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
