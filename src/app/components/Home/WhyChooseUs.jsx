import Image from 'next/image';

const services = [
  {
    title: 'Fintech Experts',
    description: 'We specialize exclusively in fintech, offering in-depth knowledge and targeted solutions designed for online trading brokers. Our deep understanding of the industry ensures that we provide consultancy services that are relevant, innovative, and impactful.',
    icon: '/H10.svg',
  },
  {
    title: 'Proven ROI-Driven Strategies',
    description: 'Our approach is focused on measurable outcomes. We craft customized strategies that deliver tangible results, enhancing profitability and scalability for your brokerage. Your success is our benchmark.',
    icon: '/H11.svg',
  },
  {
    title: 'Comprehensive Service Offering',
    description: 'From marketing and risk management to technology consultancy, we provide a full suite of services tailored to the unique needs of online trading brokers. This integrated approach allows you to streamline operations and focus on growth.',
    icon: '/H12.svg',
  },
  {
    title: 'Industry-Leading Technology Solutions',
    description: 'We leverage cutting-edge technology to optimize your trading platforms, enhance user experience, and secure your operations. Our expertise in custom CRM systems and tech innovation keeps your brokerage ahead of the curve.',
    icon: '/H13.svg',
  },
  {
    title: 'Client-Centric Approach',
    description: 'We take the time to understand your specific business challenges and goals. Our team collaborates closely with you to design solutions that align perfectly with your needs, ensuring a personalized and highly effective strategy.',
    icon: '/H14.svg',
  },
  {
    title: 'Trusted by Industry Leaders',
    description: 'Our track record of success and long-term partnerships with industry-leading brokers speaks for itself. We are a trusted consultancy, known for delivering top-notch services that drive growth, compliance, and competitive advantage.k',
    icon: '/H15.svg',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-[url(/home/Homepage-08.webp)] bg-cover bg-center py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-r from-[#0f0936] via-[#0c0a4c] to-[#090b65] border-opacity-15 hover:bg-gradient-to-r hover:from-secondary hover:via-[#090a62] hover:to-primary bg-no-repeat transition-all duration-300 cursor-pointer group h-auto overflow-hidden border border-gray-50`}
            >
              {/* Icon and Title Container */}
              <div
                className="flex flex-col items-start justify-start h-auto mb-4"
              >
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={service.icon}
                    width={64}
                    height={64}
                    alt={service.title}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white sm:text-base">{service.title}</h3>
              </div>

              {/* Description - Visible on hover, but no longer using translate */}
              <p
                className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out sm:text-xs"
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
