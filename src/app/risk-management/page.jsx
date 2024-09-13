import KeyServices from '../components/RiskManagement/Services';
import RiskHeroSection from '../components/RiskManagement/RiskHeroSection';
import RiskWhyChooseUs from '../components/RiskManagement/WhyChooseUs';
import CrisisManagementSection from '../components/RiskManagement/CrisisManagement';
import GetStartedSection from '../components/RiskManagement/GettingStartedSection';


export const metadata = {
  title: 'Risk Management - Protect and Safeguard Your Brokerage',
  description:
    'Mitigate risks and secure your assets with our comprehensive risk management services. Our proactive solutions are designed to protect your brokerage from market volatility and ensure stability in an ever-changing financial landscape.',
};

export default function About() {
  return (
    <main>
      <RiskHeroSection />
      <KeyServices />
      <CrisisManagementSection />
      <RiskWhyChooseUs />
      <GetStartedSection />
    </main>
  );
}
