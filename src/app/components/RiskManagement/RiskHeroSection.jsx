import Image from 'next/image';
import Link from 'next/link';

const RiskHeroSection = () => {
    return (
        <section className=" text-white md:py-20 py-8 px-4">
            <div className="max-w-6xl flex flex-col-reverse md:flex-row mx-auto gap-2">
                <div className='md:w-3/5 w-full text-[#080a62]'>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Safeguard Your Brokerage with Comprehensive Risk Management Solutions
                    </h1>
                    <p className="text-lg mb-8">
                        Navigating the complex world of online trading requires a robust risk management strategy to protect your assets and ensure compliance with ever-changing regulations. Market Mavens provides comprehensive risk management solutions tailored to the unique needs of online trading brokers.
                    </p>
                    <Link href="#" className="inline-block bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg">
                        Get Started Today
                    </Link>
                </div>
                <div className="lg:w-2/5 flex justify-center relative w-full order-1 lg:order-2">
                    <div className="relative w-full h-80 sm:h-96 md:h-[430px]">
                        <Image
                            src="/images/risk-management/banner.webp" // Replace with the actual image path
                            alt="Phone mockups showcasing trading strategies"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskHeroSection;
