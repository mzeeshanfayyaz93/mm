import MarketingBrand from '../components/Marketing/MarketingBrand';
import MarketingBanner from '../components/Marketing/MarketingBanner'
import ExpertPartnerSection from '../components/Marketing/ExpertPartnerSection'
import MarketingFile from '../components/Marketing/MarketingFile'
import KeyServices from '../components/Marketing/KeyServices';
import WhyChooseSection from '../components/Marketing/WhyChooseSection';
import FintechSection from '../components/About/FintechSection';
import ChooseUS from '../components/Marketing/ChooseUS'

export const metadata = {
    title: 'Marketing Consultancy - Boost Your Brokerage’s Visibility',
    description:
      'Elevate your brokerage with our tailored marketing strategies. We offer data-driven solutions designed to enhance brand visibility, improve client acquisition, and drive profitable growth in competitive markets.',
  };
  
  export default function About() {
    return (
      <main>

       <MarketingBanner />
       <ExpertPartnerSection />
       <KeyServices />
       <MarketingFile />
       <WhyChooseSection />
       <MarketingBrand />
        <ChooseUS />
       <FintechSection
        title="Where Fintech Expertise Meets Precision!"
        description="Your trusted partner, delivering bespoke consultancy exclusively for online trading brokers."
        buttonText="Book Your Free Call"
      />
      </main>
    );
  }
  