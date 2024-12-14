import Image from "next/image";
import HeroBanner from './components/Home/HeroBanner';
import ServicesSection from './components/Home/ServicesSection';
import ConsultationSection from './components/Home/ConsultationSection';
import FintechExpertiseSection from './components/Home/FintechExpertiseSection'
import FAQSection from './components/Home/FAQSection'
import WhyChooseUsSection from './components/Home/WhyChooseUs'
import ArtistSection from './components/Home/Artist'
import DNASection from './components/RiskManagement/CrisisManagement'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ArtistSection />
      <ServicesSection />
      <FintechExpertiseSection />
      <WhyChooseUsSection />
      <DNASection />
      <FAQSection />
      <ConsultationSection />
    </>
  );
}
