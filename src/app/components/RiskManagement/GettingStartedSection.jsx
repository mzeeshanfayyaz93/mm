import Link from 'next/link';

const GetStartedSection = () => {
    return (
        <section className="bg-white px-4 py-16 text-center">
            <div className=' max-w-[42rem] mx-auto'>
                <h2 className="text-4xl font-bold mb-6">Concerned About Risks To Your Brokerage?</h2>
                <p className="text-lg mb-8">
                    Schedule a free consultation with our risk management specialists to learn how we can fortify your operations against potential threats.
                </p>
                <Link href="/contact" className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full">
                    Schedule Now
                </Link>
            </div>
        </section>
    );
};

export default GetStartedSection;
