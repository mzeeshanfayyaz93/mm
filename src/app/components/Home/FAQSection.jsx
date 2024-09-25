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
    answer: "We provide...",
  },
  {
    question: "What kind of risk management services does Market Mavens provide for online brokers?",
    answer: "We offer...",
  },
  {
    question: "How can Market Mavens improve my trading platform with technology consultancy?",
    answer: "Our technology consultancy...",
  },
  {
    question: "What marketing platforms do you specialize in for increasing brand awareness?",
    answer: "We work with...",
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
