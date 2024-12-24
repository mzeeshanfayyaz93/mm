import Link from 'next/link';

const FintechExpertiseSection = () => {
  return (
    <div className=' bg-fintech md:mt-16 my-10'>
      <section className="container mx-auto">
        <div className="relative max-w-3xl text-center mx-auto flex flex-col md:flex-row z-10">
          {/* Left Text Section */}
          <div className=" w-full text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">
              <span className='text-transparent bg-clip-text w-fit bg-gradient-to-r to-secondary from-primary'>
                Exclusive <br></br><span >Fintech Expertise</span>
              </span>
            </h2>
            <p className="text-primary mt-2 max-w-2xl text-lg md:text-lg mx-auto">
              We are seasoned professionals. We work only with{" "}
              <span className="font-bold text-primary">Fintech Industry</span>{" "}
              clients & value our reputation more than anything.
            </p>
            <p className="mt-4 text-lg md:text-lg font-semibold text-primary">
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
