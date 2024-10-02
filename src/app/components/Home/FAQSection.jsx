'use client'
import { useState } from "react";

const faqs = [
  {
    question: "What makes Market Mavens different from other fintech consultancies?",
    answer:
      "At Market Mavens, we specialize exclusively in fintech, with a focus on online trading brokers. This deep industry expertise allows us to offer highly relevant, tailored solutions that drive real results. Our comprehensive service offering, which includes marketing, risk management, and technology consultancy, provides end-to-end support for brokers. Additionally, we are ROI-driven, ensuring that every strategy we design delivers measurable growth and profitability for our clients.",
  },
  {
    question: "How does Market Mavens help with lead generation and client acquisition?",
    answer: "We utilize platform-specific strategies to drive lead generation and client acquisition across LinkedIn, Facebook, Instagram, TikTok, Snapchat, YouTube, and Google Ads. By leveraging targeted ad campaigns, data-driven insights, and tailored content, we attract high-quality leads and nurture them through the conversion funnel. Whether it’s LinkedIn’s professional targeting or Google Ads’ search intent-based campaigns, we craft strategies that turn interest into action.",
  },
  {
    question: "What kind of risk management services does Market Mavens provide for online brokers?",
    answer: "We offer comprehensive risk management solutions that are tailored to the specific needs of online trading brokers. This includes risk assessment and analysis, regulatory compliance, strategic risk mitigation, crisis management, and contingency planning. Additionally, we provide technology solutions to ensure robust operational security. Our expertise helps brokers mitigate risks effectively and operate with confidence in volatile markets.",
  },
  {
    question: "How can Market Mavens improve my trading platform with technology consultancy?",
    answer: "Our technology consultancy services focus on optimizing your trading platform for better performance and enhanced user experience. We offer solutions such as platform optimization, cybersecurity, technology integration, and customise CRM solutions. Our CRM is particularly flexible, with features like multi-layer IB programs, wallet systems, and easy integration with third-party platforms. We ensure that your technology is both cutting-edge and aligned with your brokerage’s specific needs.",
  },
  {
    question: "What marketing platforms do you specialize in for increasing brand awareness?",
    answer: "Market Mavens excels in marketing strategies across multiple platforms, including LinkedIn, Facebook, Instagram, TikTok, Snapchat, YouTube, and Google Ads. Each platform offers unique opportunities for brand awareness, and we tailor our strategies to leverage these platforms to the fullest. Whether it’s through engaging video content on Instagram, targeted lead generation on LinkedIn, or viral campaigns on TikTok, we know how to position your brokerage for maximum visibility and engagement.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#080a62] mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 pb-4 ${activeIndex === index ? "border-primary" : ""}`}
            >
              <button
                className="w-full text-left flex items-center justify-between text-[#080a62] font-bold text-lg md:text-xl"
                onClick={() => toggleFAQ(index)}
              >
                <span>{`${index + 1}. ${faq.question}`}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
