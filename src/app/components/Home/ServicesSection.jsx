import React from 'react';

const OurServices = () => {
  return (
    <section className="md:py-16 py-10 bg-[#f8f8f8] text-center">
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-2xl font-extrabold mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-secondary from-primary uppercase">
            Our Services
          </span>
        </h2>

        <div className="grid grid-cols-1 max-w-5xl items-center mx-auto md:grid-cols-2 gap-x-12 gap-y-20 md:pt-4">
          {/* Marketing Text */}
          <div className="w-full mb-6 md:mb-0 text-center md:text-left order-1">
            <h3 className="md:text-3xl text-xl font-extrabold mb-2">
              <span className=' text-transparent bg-clip-text bg-gradient-to-r to-secondary from-primary'>
                MARKETING
              </span>
            </h3>
            <p className="text-primary md:text-lg text-base text-center md:text-left mb-2">
              An experienced, trained and creative marketing team, dedicatedly at
              your disposal at a{" "}
              <span className="font-bold">fraction of the cost</span> of an
              in-house team!
            </p>
            <p className="text-secondary text-lg text-center md:text-left md:text-xl font-bold">
              Nice... Right!
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
                Talk To Us
              </button>
              <button
                href="#"
                className="text-primary rounded-md text-sm border border-primary py-1.5 px-6"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Marketing Image */}
          <div className="w-full flex justify-center order-3 md:order-2">
            <img
              src="/home/service-1.webp"
              alt="Marketing Service"
              className="max-w-64"
            />
          </div>

          {/* Risk Image */}
          <div className="w-full flex justify-center order-5 md:order-3">
            <img
              src="/home/service-2.webp"
              alt="Risk Service"
              className="max-w-xs"
            />
          </div>

          {/* Risk Text */}
          <div className="w-full mb-6 md:mb-0 text-center md:text-left order-4">
            <h3 className="md:text-3xl text-xl font-extrabold mb-2">
              <span className=' text-transparent bg-clip-text bg-gradient-to-r to-secondary from-primary'>
                Risk
              </span>
            </h3>
            <p className="text-primary md:text-lg text-base text-center md:text-left mb-2">
              You can get up to{" "}
              <span className="font-bold">30% increase in profitability in 90 days</span>{" "}
              when a highly experienced, proficient team manages your risk with
              industry-leading tools and a multi-million dollar equity management
              system.
            </p>
            <p className="text-secondary text-lg text-center md:text-left md:text-xl font-bold">
              That's True!
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
                Talk To Us
              </button>
              <button
                href="#"
                className="text-primary rounded-md text-sm border border-primary py-1.5 px-6"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Technology Text */}
          <div className="w-full mb-6 md:mb-0 text-center md:text-left order-6">
            <h3 className="md:text-3xl text-xl font-extrabold mb-2">
              <span className=' text-transparent bg-clip-text bg-gradient-to-r to-secondary from-primary'>
                TECHNOLOGY
              </span>
            </h3>
            <p className="text-primary md:text-lg text-base text-center md:text-left mb-2">
              Tired of excuses from open source platforms? Own your CRM with
              flexibility to develop and integrate anything. All at{" "}
              <span className="font-bold">a one time cost!</span>
            </p>
            <p className="text-secondary text-lg text-center md:text-left md:text-xl font-bold">
              Does it make sense?
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
                Talk To Us
              </button>
              <button
                href="#"
                className="text-primary rounded-md text-sm border border-primary py-1.5 px-6"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Technology Image */}
          <div className="w-full flex justify-center order-7 md:order-6">
            <img
              src="/home/service-3.webp"
              alt="Technology Service"
              className="max-w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;




// const ServicesSection = () => {
//   return (
//     <section className="bg-white md:py-16 py-4">
//       {/* Section Header */}
//       <div className="text-center ">
//         <h2 className="bg-secondary text-white inline-block px-8 py-2 text-xl font-semobold rounded-t-[40px]">
//           Our Services
//         </h2>
//       </div>

//       {/* Service Cards */}
//       <div className="md:space-y-12 space-y-4  ">
//         {/* Marketing Section */}
//         <div className="flex flex-wrap  justify-end items-center pt-6 px-6 md:px-12 border border-secondary mx-4 md:mx-0 rounded-2xl md:border-l-0  md:w-4/5 md:rounded-tr-full md:rounded-br-full">
//           {/* Text */}
//           <div className="max-w-4xl flex-col md:flex-row flex justify-between items-center">
//             <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
//               <h3 className="md:text-2xl text-xl font-bold text-primary mb-2">MARKETING</h3>
//               <p className="text-primary mb-2">
//                 An experienced, trained and creative marketing team, dedicatedly at
//                 your disposal at a{" "}
//                 <span className="font-bold">fraction of the cost</span> of an
//                 in-house team!
//               </p>
//               <p className="text-secondary font-bold">Nice... Right!</p>
//               <div className="mt-6 flex gap-4">
//                 <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
//                   Talk To Us
//                 </button>
//                 <button href="#" className="text-primary rounded-md text-sm border border-primary  py-1.5 px-6">
//                   Learn More
//                 </button>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="w-full  md:w-1/2 flex justify-center">
//               <img
//                 src="/home/service-1.webp"
//                 alt="Marketing Service"
//                 className="max-w-64 "
//               />
//             </div>
//           </div>
//         </div>

//         {/* Risk Section */}
//         <div className="flex justify-end">
//           <div className="flex flex-wrap-reverse md:w-4/5 justify-between items-center mx-4 md:mx-0 rounded-2xl p-6 md:p-12 border border-secondary md:rounded-tl-full md:rounded-bl-full md:border-r-0">
//             {/* Image */}
//             <div className="max-w-4xl flex-col md:flex-row flex justify-between items-center">

//               <div className="w-full md:w-1/2 flex justify-center">
//                 <img
//                   src="/home/service-2.webp"
//                   alt="Marketing Service"
//                   className="max-w-64"
//                 />
//               </div>

//               {/* Text */}
//               <div className="w-full md:w-1/2 mb-6 md:mb-0">
//                 <h3 className="text-2xl font-bold text-primary mb-2">RISK</h3>
//                 <p className="text-primary mb-2">
//                   You can get up-to{" "}
//                   <span className="font-bold">30% increase in profitability in 90 days</span>{" "}
//                   when a highly experienced, proficient team manages your risk.
//                 </p>
//                 <p className="text-secondary font-bold">That's True!</p>
//                 <div className="mt-6 flex gap-4">
//                   <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
//                     Talk To Us
//                   </button>
//                   <button href="#" className="text-primary rounded-md text-sm border border-primary  py-1.5 px-6">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>


//         {/* Technology Section */}
//         <div className="flex flex-wrap  justify-end items-center pt-6 px-6 md:px-12 border mx-4 md:mx-0 rounded-2xl border-secondary md:border-l-0  md:w-4/5 md:rounded-tr-full md:rounded-br-full">
//           {/* Text */}
//           <div className="max-w-4xl flex-col md:flex-row flex justify-between items-center">
//             <div className="w-full md:w-1/2 mb-6 md:mb-0">
//               <h3 className="text-2xl font-bold text-primary mb-2">TECHNOLOGY</h3>
//               <p className="text-primary mb-2">
//                 Tired of excuses from open source platforms? Own your CRM with
//                 flexibility to develop and integrate anything. All at{" "}
//                 <span className="font-bold">a one time cost!</span>
//               </p>
//               <p className="text-secondary font-semibold">Does it make sense?</p>
//               <div className="mt-6 flex gap-4">
//                 <button className="to-[#0e043a] via-[#0a0555] from-[#07066c] bg-gradient-to-r text-white py-1.5 px-6 text-sm rounded-md">
//                   Talk To Us
//                 </button>
//                 <button href="#" className="text-primary rounded-md text-sm border border-primary  py-1.5 px-6">
//                   Learn More
//                 </button>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="w-full md:w-1/2 flex justify-center">
//               <img
//                 src="/home/service-3.webp"
//                 alt="Marketing Service"
//                 className="max-w-64"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
