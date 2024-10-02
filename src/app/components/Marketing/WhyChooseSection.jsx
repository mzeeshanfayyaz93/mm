import Link from 'next/link';
import { FaCheck } from "react-icons/fa6";

import SocialMediaSection from './SocialMedia';

const bulletPoints = [
  {
    title: 'Brand Awareness',
    description:
      'We create compelling content, including insightful articles, industry updates, and thought-provoking posts, to position your brand as an authority in the fintech space. Through strategic content distribution and engagement with relevant LinkedIn groups and communities, we enhance your brand visibility.',
  },
  {
    title: 'Brand Communication',
    description:
      'We develop a consistent messaging strategy that aligns with your brand values and resonates with your target audience. From professional updates to client success stories, our approach ensures your brand communicates its expertise and trustworthiness effectively.',
  },
  {
    title: 'Lead Generation',
    description:
      'Utilizing LinkedIn’s advanced targeting tools, we design and execute highly focused ad campaigns to attract decision-makers and high-value clients. We use Sponsored Content, InMail campaigns, and lead generation forms to connect with key industry players.',
  },
  {
    title: 'Client Acquisition',
    description:
      'Through personalized outreach and engagement tactics, we nurture relationships with potential clients, converting connections into loyal customers. Our approach leverages data analytics to identify and engage prospects who are most likely to convert.',
  },
];

const WhyChooseSection = () => {
  return (
    <>
      <SocialMediaSection />
      <section className="max-w-[1135px] mx-auto bg-gradient-to-r from-[#0c0e57] to-[#c6334a] py-12 p-12 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Elevate Your Brand Presence on LinkedIn:
        </h2>
        <p className="mb-6">
          At Market Mavens, we understand that LinkedIn is the premier platform
          for B2B connections, making it an invaluable tool for online trading
          brokers. Our LinkedIn strategy focuses on establishing thought
          leadership, fostering professional connections, and driving qualified
          leads to your business.
        </p>

        {/* Dynamically render bullet points */}
        <div className="space-y-4">
          {bulletPoints.map((point, index) => (
            <div className="flex items-start" key={index}>
              <FaCheck className="text-green-400 text-3xl md:text-5xl mt-1 mr-3" />
              <p>
                <strong>{point.title}:</strong> {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;
