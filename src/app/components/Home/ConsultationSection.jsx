import Link from 'next/link';
import GradientButton from '../common/GradientButton'

const ConsultationSection = () => {
  return (
    <section className="bg-white py-10 px-4 mb-16">
      <div className="max-w-5xl mx-auto text-center bg-[url(/3rd-image.svg)] bg-cover bg-center h-[330px]  pt-10 px-6 md:px-20 md:h-[262px]">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#080a62] mb-6 max-w-xl mx-auto">
          Ready To Elevate Your Brokerage To New Heights?
        </h2>

        {/* Supporting Text */}
        <p className="text-lg text-gray-600 mb-8  max-w-xl mx-auto">
          Contact us today to schedule a free consultation and discover how our expert-led strategies can transform your business.
        </p>

        {/* Call-to-Action Button */}
        <GradientButton href="/contact" text="Book a Consultation" />
      </div>
    </section>
  );
};

export default ConsultationSection;
