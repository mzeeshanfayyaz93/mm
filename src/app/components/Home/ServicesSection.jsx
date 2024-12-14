// 'use client';
// import { FaArrowRight } from "react-icons/fa";
// import Image from 'next/image';
// import Link from "next/link";

// const services = [
//   {
//     title: 'Marketing',
//     description: 'Boost your brokerage’s visibility and client acquisition with our data-driven marketing strategies. From brand positioning to targeted campaigns around the world, we tailor our services to meet your unique needs.',
//     icon: '/H04.svg',
//     gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
//     learnMore: "marketing-consultancy"
//   },
//   {
//     title: 'Risk',
//     description: 'Mitigate risks and protect your assets with our comprehensive risk management solutions. We identify vulnerabilities and provide proactive strategies to safeguard your brokerage against market volatility & abusive clients.',
//     icon: '/H05.svg',
//     gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
//     learnMore: "risk-management"
//   },
//   {
//     title: 'Technology',
//     description: 'Enhance your trading platform with cutting-edge technology. From branded trading platform to high tech multi layer CRM, our tech experts ensure your systems are robust, secure, and primed for growth.',
//     icon: '/H06.svg',
//     gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
//     learnMore: "technology-consultancy"
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="bg-white py-16 px-4 bg-[url(/home/bg-4.webp)] bg-cover bg-right bg-no-repeat">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Our Services</h2>
//           <p className="text-lg mt-4 text-gray-600">
//             We empower online trading brokers to achieve unparalleled success. Our seasoned professionals deliver tailored marketing, risk management, and technology consultancy services designed to maximize ROI and drive scalable growth.
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="space-y-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative flex flex-col md:flex-row items-center rounded-2xl shadow-lg bg-white  border-2 border-primary"
//             >
//               <div className={`md:w-1/5 w-full flex items-center justify-center rounded-t-xl md:rounded-tr-none md:rounded-l-xl ${service.gradientClass}`}>
//                 <Image
//                   src={service.icon}
//                   alt={service.title}
//                   width={112}
//                   height={112}
//                   className="w-16 h-16 md:w-40 md:h-40"
//                 />
//               </div>
//               <div className="md:w-4/5  px-6 rounded-r-2xl pb-8 md:pb-0 pt-4 md:pt-0">
//                 <h3 className="text-lg font-bold text-[#080a62]">{service.title}</h3>
//                 <p className="text-gray-600 mt-2">{service.description}</p>
//                 <Link href={service?.learnMore} className="flex text-[#d73c52] font-semibold mt-1 text-right">
//                   <span>Learn more</span>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


const ServicesSection = () => {
  return (
    <section className="bg-white md:py-16 py-4">
      {/* Section Header */}
      <div className="text-center ">
        <h2 className="bg-secondary text-white inline-block px-8 py-2 text-xl font-semobold rounded-t-[40px]">
          Our Services
        </h2>
      </div>

      {/* Service Cards */}
      <div className="md:space-y-12 space-y-4  ">
        {/* Marketing Section */}
        <div className="flex flex-wrap  justify-end items-center pt-6 px-6 md:px-12 border border-secondary mx-4 md:mx-0 rounded-2xl md:border-l-0  md:w-4/5 md:rounded-tr-full md:rounded-br-full">
          {/* Text */}
          <div className="max-w-4xl flex-col md:flex-row flex justify-between items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
              <h3 className="md:text-2xl text-xl font-bold text-primary mb-2">MARKETING</h3>
              <p className="text-primary mb-2">
                An experienced, trained and creative marketing team, dedicatedly at
                your disposal at a{" "}
                <span className="font-bold">fraction of the cost</span> of an
                in-house team!
              </p>
              <p className="text-secondary font-bold">Nice... Right!</p>
              <div className="mt-6 flex gap-4">
                <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
                  Talk To Us
                </button>
                <button href="#" className="text-primary rounded-md text-sm border border-primary  py-1.5 px-6">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full  md:w-1/2 flex justify-center">
              <img
                src="/home/service-1.webp"
                alt="Marketing Service"
                className="max-w-64 "
              />
            </div>
          </div>
        </div>

        {/* Risk Section */}
        <div className="flex justify-end">
          <div className="flex flex-wrap-reverse md:w-4/5 justify-between items-center mx-4 md:md-0 rounded-2xl p-6 md:p-12 border border-secondary md:rounded-tl-full md:rounded-bl-full md:border-r-0">
            {/* Image */}
            <div className="max-w-4xl flex-col md:flex-row flex justify-between items-center">

              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src="/home/service-2.webp"
                  alt="Marketing Service"
                  className="max-w-64"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary mb-2">RISK</h3>
                <p className="text-primary mb-2">
                  You can get up-to{" "}
                  <span className="font-bold">30% increase in profitability in 90 days</span>{" "}
                  when a highly experienced, proficient team manages your risk.
                </p>
                <p className="text-secondary font-bold">That's True!</p>
                <div className="mt-6 flex gap-4">
                  <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
                    Talk To Us
                  </button>
                  <button href="#" className="text-primary rounded-md text-sm border border-primary  py-1.5 px-6">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Technology Section */}
        <div className="flex flex-wrap  justify-end items-center pt-6 px-6 md:px-12 border mx-4 md:mx-0 rounded-2xl border-secondary md:border-l-0  md:w-4/5 md:rounded-tr-full md:rounded-br-full">
          {/* Text */}
          <div className="max-w-4xl flex-col md:flex-row flex justify-between items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-primary mb-2">TECHNOLOGY</h3>
              <p className="text-primary mb-2">
                Tired of excuses from open source platforms? Own your CRM with
                flexibility to develop and integrate anything. All at{" "}
                <span className="font-bold">a one time cost!</span>
              </p>
              <p className="text-secondary font-semibold">Does it make sense?</p>
              <div className="mt-6 flex gap-4">
                <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
                  Talk To Us
                </button>
                <button href="#" className="text-primary rounded-md text-sm border border-primary  py-1.5 px-6">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/home/service-3.webp"
                alt="Marketing Service"
                className="max-w-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
