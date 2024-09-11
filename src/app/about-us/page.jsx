import AboutHeroSection from '../components/About/AboutHeroSection';
import OverviewSection from '../components/About/OverviewSection';
import FintechSection from '../components/About/FintechSection';


export const metadata = {
    title: 'About Us - Expert Solutions for Trading Excellence',
    description:
      'Learn more about our team of experienced professionals and how we deliver innovative solutions in the fintech sector. Discover why we are a trusted partner in driving growth and profitability for brokers worldwide.',
  };
  
  export default function About() {
    return (
      <main>
       <AboutHeroSection />
       <OverviewSection />
       <FintechSection
        title="Fintech is Our Realm!"
        description="Our seasoned experts provide bespoke consultancy, exclusively empowering online trading brokers to thrive."
        buttonText="Book a Consultation"
      />
      </main>
    );
  }
  