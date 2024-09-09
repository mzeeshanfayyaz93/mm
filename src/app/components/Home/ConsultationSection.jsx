import Link from 'next/link';

const ConsultationSection = () => {
  return (
    <section className="bg-white py-10 px-4 mb-16">
      <div className="max-w-5xl mx-auto text-center bg-[url(/3rd-image.svg)] bg-cover bg-center pt-20 px-20 h-[295px]">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#080a62] mb-6 max-w-xl mx-auto">
          Ready To Elevate Your Brokerage To New Heights?
        </h2>

        {/* Supporting Text */}
        <p className="text-lg text-gray-600 mb-8  max-w-xl mx-auto">
          Contact us today to schedule a free consultation and discover how our expert-led strategies can transform your business.
        </p>

        {/* Call-to-Action Button */}
        <Link href="#"  className="inline-block hover:bg-gradient-to-l bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg">
  
            Book a Consultation
        
        </Link>
      </div>
    </section>
  );
};

export default ConsultationSection;
