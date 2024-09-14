import AboutHeroSection from '../components/About/AboutHeroSection';
import OverviewSection from '../components/About/OverviewSection';
import FintechSection from '../components/About/FintechSection';
import ContactUsHeroSection from '../components/ContactUs/Hero';


export const metadata = {
  title: 'Contact Us - Expert Solutions for Trading Excellence',
  description:
    'Learn more about our team of experienced professionals and how we deliver innovative solutions in the fintech sector. Discover why we are a trusted partner in driving growth and profitability for brokers worldwide.',
};

export default function ContactUs() {
  return (
    <main>
      <ContactUsHeroSection />
      {/* <OverviewSection />
      <FintechSection
        title="Fintech is Our Realm!"
        description="Our seasoned experts provide bespoke consultancy, exclusively empowering online trading brokers to thrive."
        buttonText="Book a Consultation"
      /> */}
    </main>
  );
}
