import Image from "next/image";
import HeroBanner from './components/Home/HeroBanner';
import ServicesSection from './components/Home/ServicesSection';
import WhyChooseUs from './components/Home/WhyChooseUs';
import ConsultationSection from './components/Home/ConsultationSection';
export default function Home() {
  return (
    <>
    <HeroBanner />
    <ServicesSection />
    <WhyChooseUs />
    <ConsultationSection />
    </>
  );
}
