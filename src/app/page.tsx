import Image from "next/image";
import HeroBanner from './components/Home/HeroBanner';
import ServicesSection from './components/Home/ServicesSection';
import ConsultationSection from './components/Home/ConsultationSection';
import FintechExpertiseSection from './components/Home/FintechExpertiseSection'
import FAQSection from './components/Home/FAQSection'
import WhyChooseUsSection from './components/Home/WhyChooseUs'
export default function Home() {
  return (
    <>
    <HeroBanner />
    <ServicesSection />
    <FintechExpertiseSection />
    <WhyChooseUsSection />
    <FAQSection />
    <ConsultationSection />
    </>
  );
}
