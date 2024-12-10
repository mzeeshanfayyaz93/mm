import Image from 'next/image';

const RiskWhyChooseUsSection = () => {
    return (
        <section >
            <div className="max-w-6xl bg-[#eef0f3] mx-auto md:py-12 py-8 px-8 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 text-primary">
                    <h2 className="md:text-4xl text-2xl font-bold mb-6">What Sets Us Apart?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                            <span className="text-green-500 text-xl font-bold">✔</span>
                            <p>
                                <strong>Industry Expertise:</strong> Our team has decades of
                                experience in trading platforms and risk management.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-green-500 text-xl font-bold">✔</span>
                            <p>
                                <strong>Customized Solutions:</strong> Services tailored to meet
                                the specific needs of your brokerage.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-green-500 text-xl font-bold">✔</span>
                            <p>
                                <strong>24/7 Support:</strong> Around-the-clock assistance for
                                uninterrupted trading operations.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="text-green-500 text-xl font-bold">✔</span>
                            <p>
                                <strong>Proven Results:</strong> Trusted by brokers to enhance
                                efficiency and profitability.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="relative lg:w-1/2 w-full h-[300px]">
                    <Image
                        src="/images/risk-management/laptop.webp" // Replace with the actual image path
                        alt="Market Mavens Risk Management"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default RiskWhyChooseUsSection;
