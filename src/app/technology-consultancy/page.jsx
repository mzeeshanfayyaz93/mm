import TechnologyOptimization from '../components/Consltant/TechnologyOptimization'
import KeyServices from '../components/Consltant/KeyServices'
import FintechSection from '../components/About/FintechSection';


export const metadata = {
    title: 'Technology Consultancy - Cutting-Edge Solutions for Fintech Success',
    description:
      ' Stay ahead of the competition with our technology consultancy services. From platform development to CRM integration, we provide innovative solutions to streamline your operations and enhance your brokerage’s efficiency and scalability.',
  };
  
  export default function About() {
    return (
      <main>
      <TechnologyOptimization />
      <KeyServices />
      <FintechSection
        title="Is Your Trading Technology Meeting The Needs Of Today’s Market? "
        description="Schedule a free call with our tech experts to explore how we can bring your platform to the next level of operational excellence."
        buttonText="Book Your Free Technology Consultation"
      />
      </main>
    );
  }
  