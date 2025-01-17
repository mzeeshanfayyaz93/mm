'use client'
import React, { useState } from "react";

const KeyServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: "/Marketing-11.svg", // Normal state icon
      activeIcon: "/Marketing-07.svg", // Active state icon
      title: 'Brand Positioning & Strategy',
      description:
        'In a crowded marketplace, your brand is your most valuable asset. We work closely with you to develop a strong brand identity that resonates with your target audience. Our team conducts in-depth market research to identify key differentiators and craft a compelling brand narrative. Whether you’re entering a new market or looking to refresh your brand, we ensure that your positioning is sharp, relevant, and impactful.',
      deliverables: [
        'Market Research & Analysis',
        'Brand Identity Development',
        'Positioning Statements & Taglines',
        'Competitive Analysis',
      ],
    },
    {
      icon: "/Marketing-13.svg",
      activeIcon: "/Marketing-08.svg",
      title: 'Digital Marketing & Social Media Campaigns',
      description:
        'Digital presence is non-negotiable in the fintech space. We design and execute comprehensive digital marketing strategies that drive traffic, generate leads, and convert prospects into loyal clients. From paid search and display advertising to social media campaigns, our strategies are designed to maximize ROI and reach the right audience at the right time.',
      deliverables: [
        'Search Engine Marketing (SEM)',
        'Social Media Advertising',
        'Content Marketing & SEO',
        'Email Marketing Campaigns',
      ],
    },
    {
      icon: "/Marketing-12.svg",
      activeIcon: "/Marketing-09.svg",
      title: 'Client Acquisition & Retention Strategies',
      description:
        'Acquiring new clients is only half the battle; retaining them is where true growth lies. We help you build and implement strategies that not only attract high-value clients but also keep them engaged and satisfied. Our retention strategies are tailored to meet the specific needs of online trading brokers, ensuring long-term client relationships and sustained growth.',
      deliverables: [
        'Lead Generation Campaigns',
        'Onboarding Process Optimization',
        'Client Loyalty Programs',
        'Customer Relationship Management (CRM) Integration',
      ],
    },
    {
      icon: "/Marketing-14.svg",
      activeIcon: "/Marketing-10.svg",
      title: 'Data-Driven Marketing Insights',
      description:
        'In the fintech industry, data is king. We leverage advanced analytics to track the performance of your marketing campaigns and provide actionable insights that drive continuous improvement. By understanding what works and what doesn’t, we help you allocate resources more effectively and achieve better results with every campaign.',
      deliverables: [
        'Campaign Performance Tracking & Reporting',
        'Customer Segmentation & Analysis',
        'Predictive Analytics for Client Behavior',
        'ROI Optimization Techniques',
      ],
    },
  ];

  return (
    <section className="relative bg-gray-100 py-10 md:py-14 xl:py-16 2xl:py-20 px-5 md:px-0">
      <div className="max-w-[1135px] mx-auto">
        {/* Title */}
        <div className="text-center">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-[25px] font-[600] lg:text-[30px] 2xl:text-[50px] max-w-xl md:leading-[50px] uppercase">
            Key Services


          </h2>
            </div>
        <h2 className="text-center text-3xl font-bold text-primary uppercase">
         
        </h2>

        {/* Tabs */}
        <div className="mt-12 flex justify-center space-x-8 md:space-x-16">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => setActiveTab(index)}
            >
              {/* Tab Icon */}
              <div
                className={`w-16 h-16 md:w-52 md:h-52 flex items-center justify-center rounded-full transition-all ${
                  activeTab === index
                    ? "bg-gradient-to-r from-primary to-secondary shadow-lg"
                    : "bg-gray-100"
                }`}
              >
                <img
                  src={activeTab === index ? tab.activeIcon : tab.icon}
                  alt={`Tab ${index}`}
                  className="w-16 h-16 md:w-52 md:h-52"
                />
              </div>

              {/* Arrow Indicator */}
              {activeTab === index && (
                <div className="absolute -bottom-4 w-4 h-4 bg-gradient-to-r from-primary to-secondary rotate-45"></div>
              )}
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-16">
        <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-[20px] font-[800] lg:text-[30px] 2xl:text-[55px] capitalize max-w-lg md:leading-[65px]">
        {tabs[activeTab].title}
          </h2>
    

          <p className="text-base md:text-lg 2xl:text-xl py-2 text-gray-800"> {tabs[activeTab].description}</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tabs[activeTab].deliverables.map((item, index) => (
              <li key={index} className="flex items-center space-x-2 text-base md:text-lg 2xl:text-xl">
                <span className="text-green-500">✔</span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyServicesTabs;
