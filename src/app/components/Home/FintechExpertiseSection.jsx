import Link from 'next/link';

const FintechExpertiseSection = () => {
  return (
    <div className=' bg-fintech my-10'>
      <section className="container mx-auto">
        <div className="relative max-w-3xl text-center mx-auto flex flex-col md:flex-row z-10">
          {/* Left Text Section */}
          <div className=" w-full text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">
              Exclusive <br></br><span className='text-secondary'>Fintech Expertise</span>
            </h2>
            <p className="text-primary mt-2 max-w-2xl mx-auto">
              We are seasoned professionals. We work only with{" "}
              <span className="font-bold text-indigo-900">Fintech Industry</span>{" "}
              clients & value our reputation more than anything.
            </p>
            <p className="mt-4 text-lg font-semibold text-indigo-900">
              We are one of the best experts & we feel proud saying this!
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

export default FintechExpertiseSection;
