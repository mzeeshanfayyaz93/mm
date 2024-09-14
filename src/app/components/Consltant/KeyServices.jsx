'use client'
import { useState } from 'react';

const keyServices = [
  {
    title: "Platform Optimization & Performance Enhancement",
    icon: "/consltant/icon6.svg", // Replace with actual icon paths
    hovericon: "/consltant/icon2.svg",
  },
  {
    title: "Customizable & Branded CRM Solutions",
    icon: "/consltant/icon4.svg",
    hovericon: "/consltant/icon8.svg",
  },
  {
    title: "Cybersecurity & Data Protection",
    icon: "/consltant/icon5.svg",
    hovericon: "/consltant/icon9.svg",
  },
  {
    title: "Technology Integration & Innovation",
    icon: "/consltant/icon3.svg",
    hovericon: "/consltant/icon7.svg",
  },
  {
    title: "User Experience (UX) Design & Improvement",
    icon: "/consltant/icon.svg",
    hovericon: "/consltant/icon0.svg",
  },
];

const KeyServices = () => {
  const [hoverIndex, setHoverIndex] = useState(null); // To keep track of the hover state

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto text-center bg-[url(/marketing/bg-4.webp)] bg-cover bg-center px-4 py-12  md:px-12 md:py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#080a62] mb-10 pt-10">Key Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {keyServices.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg 
              bg-white border-2 bg-clip-border border-transparent bg-gradient-to-r from-[#080a62] to-[#dc3d52] mx-auto transition-all duration-150 ease-in-out`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className='bg-white px-6 pb-6 rounded-lg shadow-lg flex flex-col h-96 hover:bg-gradient-to-r from-[#080a62] to-[#dc3d52] mx-auto transition-all duration-150 ease-in-out '>
              <div className="flex items-center justify-end mb-4 pb-5">
                <img 
                  src={hoverIndex === index ? service.hovericon : service.icon} 
                  alt={service.title} 
                  className="h-32 w-32 transition-transform duration-150 ease-in-out transform-gpu" 
                />
              </div>
              <h3 className={`text-xl flex flex-col justify-end h-64 md:text-3xl pt-5 font-bold text-left transition-all duration-150
                ${hoverIndex === index ? 'text-white' : 'text-[#080a62]'}`}
              >
                {service.title}
              </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
