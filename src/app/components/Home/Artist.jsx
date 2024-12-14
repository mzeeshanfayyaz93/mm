import Link from 'next/link';

const ArtistSection = () => {
    return (
        <div className=' bg-artist my-16'>
            <section className="container mx-auto">
                <div className="relative max-w-3xl text-center mx-auto flex flex-col md:flex-row z-10">
                    {/* Left Text Section */}
                    <div className=" w-full text-center">
                        <p className="text-primary mt-2 max-w-2xl mx-auto">
                            Fintech is and
                            <span className="font-bold text-indigo-900">  ART!</span>{" "}<br />
                            and We are
                        </p>
                        <h2 className="text-2xl md:text-6xl font-bold text-secondary">
                            <span className=''>ARTISTS!</span>
                        </h2>

                        <p className="text-primary mt-2 max-w-2xl mx-auto">
                            We create a symphany of success for our client that beats woth their hearts.
                        </p>
                        <Link href='/contact' className="inline-block mt-8 bg-gradient-to-r from-[#080a62] to-[#dc3d52] hover:bg-gradient-to-l text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300">
                            Book Now
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ArtistSection;
