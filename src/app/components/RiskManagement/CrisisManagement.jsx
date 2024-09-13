import Link from 'next/link';

const CrisisManagementSection = () => {
    return (
        <section className="bg-white px-4 py-16 text-center">
            <div className=' max-w-[42rem] mx-auto'>
                <h2 className="text-4xl font-bold mb-6">Fintech is Our DNA!</h2>
                <p className="text-lg mb-8">
                    We are the experts you trust, delivering unparalleled <br />
                    consultancy services exclusively to the world of online trading.
                </p>
                <Link href="/contact" className="bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full">
                   Get Started Now
                </Link>
            </div>
        </section>
    );
};

export default CrisisManagementSection;
