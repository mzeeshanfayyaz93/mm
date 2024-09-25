import Image from 'next/image';

const services = [
  {
    title: 'Fintech Experts',
    description: 'We specialize exclusively in fintech, offering in-depth knowledge and targeted solutions designed for online trading brokers. Our deep understanding of the industry ensures that we provide consultancy services that are relevant, innovative, and impactful.',
    icon: '/H10.svg',  // Assuming you have an icon
  },
  {
    title: 'Proven ROI-Driven Strategies',
    description: 'We design strategies that ensure measurable growth and profitability for our clients.',
    icon: '/H11.svg',
  },
  {
    title: 'Comprehensive Service Offering',
    description: 'From consultancy to marketing and technology solutions, we offer a wide range of services.',
    icon: '/H12.svg',
  },
  {
    title: 'Industry-Leading Technology Solutions',
    description: 'We use cutting-edge technologies to build platforms that are robust and scalable.',
    icon: '/H13.svg',
  },
  {
    title: 'Client-Centric Approach',
    description: 'We ensure that our solutions are tailored to meet the specific needs of each client.',
    icon: '/H14.svg',
  },
  {
    title: 'Trusted by Industry Leaders',
    description: 'We have a track record of delivering exceptional results for industry leaders.',
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
              className={`relative p-6 rounded-2xl bg-[#101b58] border-opacity-15 hover:bg-gradient-to-r from-secondary via-[#090a62] to-primary bg-no-repeat transition-all duration-300 cursor-pointer group h-64 overflow-hidden border border-gray-50`}
            >
              {/* Icon and Title Container */}
              <div
                className="flex flex-col items-start justify-end absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:translate-y-[-75%]"
              >
                <div className="w-20 h-20">
                  <Image
                    src={service.icon}
                    width={80}
                    height={80}
                    alt={service.title}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>

              {/* Description - Initially hidden and shown on hover */}
              <p
                className="absolute bottom-0 left-0 right-0 p-6 text-sm text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20%] transition-all duration-500"
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
