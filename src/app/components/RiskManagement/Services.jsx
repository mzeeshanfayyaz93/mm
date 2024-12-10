// const CardOne = ({ title, description }) => {
//     return (
//         <div className="gap-2 flex">
//             <div>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-green-400">
//                     <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
//                 </svg>
//             </div>
//             <div>
//                 <h3 className="text-lg md:text-2xl font-bold mb-4">{title}</h3>
//                 <p className="text-white mb-6">{description}</p>
//             </div>
//         </div>
//     )
// }

// const CardTwo = ({ deliverables }) => {
//     return (
//         <div className=" p-8 rounded-3xl border-2 h-fit border-[#dc3d52] shadow-inner 4 bg-gradient-to-r from-[#080a62] to-[#dc3d52]">
//             <h4 className="font-semibold text-lg mb-2">Deliverables:</h4>
//             <ul className="list-none space-y-2">
//                 {deliverables.map((deliverable, idx) => (
//                     <li key={idx} className="text-white flex items-center">
//                         <span className="mr-2">➔</span> {deliverable}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// const KeyServicesSection = () => {
//     return (
//         <section className="bg-gradient-to-r from-[#080a62]  to-[#dc3d52] text-white md:py-16 py-8 px-8">
//             <div>
//                 <h2 className="text-3xl font-bold text-center mb-12">Key Services</h2>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
//                     <CardOne
//                         title='Risk Assessment and Analysis'
//                         description='We conduct thorough risk assessments that analyze both market and operational risks. By identifying and quantifying these risks, we craft strategies that mitigate them effectively, ensuring resilience against uncertainties.'
//                     />
//                     <CardTwo
//                         deliverables={[
//                             'Understanding specific risks',
//                             'Market and operational risk analysis',
//                             'Crafting risk mitigation strategies',
//                         ]}
//                     />
//                     <CardTwo
//                         deliverables={[
//                             'Compliance audits',
//                             'Regulatory updates',
//                             'Compliance documentation',
//                             'Compliance training for staff',
//                         ]}
//                     />
//                     <CardOne
//                         title='Regulatory Compliance and Reporting'
//                         description='We help you navigate complex regulatory landscapes by ensuring your operations comply with laws. Our services include preparing compliance reports to keep you informed and prepared for audits.'
//                     />
//                     <CardOne
//                         title='Strategic Risk Mitigation'
//                         description='After identifying risks, we develop effective mitigation strategies to address the vulnerabilities of your brokerage using best practices and innovative solutions.'
//                     />
//                     <CardTwo
//                         deliverables={[
//                             'Risk mitigation strategies',
//                             'Implementation of risk controls',
//                             'Crisis management plans',
//                         ]}
//                     />
//                     <CardTwo
//                         deliverables={[
//                             'Crisis response strategies',
//                             'Business continuity planning',
//                             'Recovery planning',
//                         ]}
//                     />
//                     <CardOne
//                         title='Crisis Management & Contingency Planning'
//                         description='We develop contingency plans that prepare your brokerage to handle crises efficiently, minimizing disruption to your operations.'
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default KeyServicesSection;
"use client"

import React, { useState } from "react";

const KeyServices = () => {
    const [activeTab, setActiveTab] = useState("platform");

    const tabs = [
        { label: "MT4/MT5 Platform Configuration", id: "platform" },
        { label: "Bridge Configuration", id: "bridge" },
        { label: "Risk Management Solutions", id: "risk" },
        { label: "Professional Dealing Desk", id: "dealing" },
    ];

    const content = {
        platform: (
            <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">MT4/MT5 Platform Configuration</h2>
                <p className="mb-4 font-thin text-gray-300">
                    The foundation of a successful brokerage lies in its trading platform. Market Mavens provides
                    <span className=" text-white font-bold"> end-to-end MT4/MT5 setup and customization,</span> ensuring your platform is optimized for both
                    performance and usability.
                </p>
                <div className=" text-gray-300 space-y-2">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Complete platform installation and server setup</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Custom symbol mapping and configuration</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Management of user groups and permissions</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Regular platform maintenance and updates</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Technical support to address issues promptly</p>
                    </div>
                </div>
            </div>
        ),
        bridge: (
            <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">Bridge Configuration</h2>
                <p className="mb-4 font-thin text-gray-300">
                    Seamless connectivity is essential for efficient trade execution. Our  <span className=" text-white font-bold"> Bridge Configuration Services </span> ensure your platform integrates flawlessly with liquidity providers for accurate pricing and execution.
                </p>
                <div className=" text-gray-300 space-y-2">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Integration with Tier-1 liquidity providers</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Customizable configurations tailored to trading needs</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Proactive monitoring to ensure system reliability</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Accurate symbol mapping and real-time data flow optimization</p>
                    </div>
                </div>
            </div>
        ),
        risk: (
            <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">Risk Management Solutions</h2>
                <p className="mb-4 font-thin text-gray-300">
                    Protect your brokerage from unforeseen financial risks with our <span className=" text-white font-bold">  proactive risk management solutions. </span> Our team ensures you have the tools and strategies needed to monitor and control exposure effectively.
                </p>
                <div className=" text-gray-300 space-y-2">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Real-time monitoring of trading activity</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Leverage optimization and exposure control</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Liquidity provider evaluation and benchmarking</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Customized risk mitigation strategies</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Detailed risk analysis and reporting</p>
                    </div>
                </div>
            </div>
        ),
        dealing: (
            <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">Professional Dealing Desk</h2>
                <p className="mb-4 font-thin text-gray-300">
                    Our <span className=" text-white font-bold"> 24/7 dealing desk service </span> ensures seamless trade execution and compliance, backed by real-time monitoring and market insights.
                </p>
                <div className=" text-gray-300 space-y-2">
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Managing trade flow and execution</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Real-time market monitoring for informed decisions</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Ensuring adherence to trading regulations</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="w-2 h-2 bg-secondary"></p>
                        </div>
                        <p>Custom dealing strategies to align with your business goals</p>
                    </div>
                </div>
            </div>
        ),
    };

    return (
        <div className="bg-gradient-to-r to-[#0e043a] via-[#0a0555] from-[#07066c] p-12">
            <div className=" container mx-auto ">
                <div className="max-w-6xl mx-auto">
                    <h1 className="md:text-4xl text-2xl font-bold md:mb-12 mb-8 text-center text-white">Key Services</h1>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-1 bg-white rounded-3xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={activeTab === tab.id ? {
                                    filter: "blur(.5px)",
                                    boxShadow: "0 11px 33px rgba(128, 31, 134, .9)"
                                } : {}}
                                className={`py-6 px-6 font-bold rounded-3xl ${activeTab === tab.id
                                    ? "bg-gradient-to-r  from-secondary via-[#090a62] to-primary text-white"
                                    : "text-primary hover:text-secondary "
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 items-center bg-gradient-to-b to-[#66215b] blur-xs via-[#271160] from-[#090a62] px-8 py-10 rounded-b-3xl">
                        {activeTab == "platform" || activeTab == "risk" ?
                            <>
                                <div>
                                    {content[activeTab]}
                                </div>
                                <div className="md:w-1/2 w-4/5 mx-auto">
                                    {activeTab == "platform" &&
                                        <img src="/risk/risk-img1.webp" alt="" />
                                    }
                                    {activeTab == "bridge" &&
                                        <img src="/risk/risk-img2.webp" alt="" />
                                    }
                                    {activeTab == "risk" &&
                                        <img src="/risk/risk-img3.webp" alt="" />
                                    }
                                    {activeTab == "dealing" &&
                                        <img src="/risk/risk-img4.webp" alt="" />
                                    }

                                </div>
                            </>
                            :
                            <>
                                <div className="md:w-1/2 w-4/5 mx-auto">
                                    {activeTab == "platform" &&
                                        <img src="/risk/risk-img1.webp" alt="" />
                                    }
                                    {activeTab == "bridge" &&
                                        <img src="/risk/risk-img2.webp" alt="" />
                                    }
                                    {activeTab == "risk" &&
                                        <img src="/risk/risk-img3.webp" alt="" />
                                    }
                                    {activeTab == "dealing" &&
                                        <img src="/risk/risk-img4.webp" alt="" />
                                    }

                                </div>
                                <div>
                                    {content[activeTab]}
                                </div>

                            </>
                        }
                    </div>
                </div>
            </div >
        </div>
    );
};

export default KeyServices;
