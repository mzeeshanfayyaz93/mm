import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative  bg-cover bg-center bg-no-repeat text-primary pt-16 lg:pt-32 3xl:pt-36"
    >
      <div className="container mx-auto min-h-[70vh] justify-center bg-[url(/home/homepage-banner.svg)] flex flex-col lg:flex-row items-center md:justify-between px-6 lg:px-12"
        style={{ backgroundSize: "100% 100%",  backgroundRepeat: "no-repeat" }}

      >
        {/* Left Section */}
        <div className=" w-full text-center max-w-7xl mx-auto  lg:text-center md:pt-20">
          <h3 className="text-2xl md:text-4xl font-light leading-tight pb-2">
            One-Stop Turnkey
          </h3>
          <h1 className="text-3xl md:text-6xl font-light md:leading-[60px] pb-5 ">
            <span className="font-black text-transparent bg-gradient-to-r from-[#0a0747] to-[#aa165e] bg-clip-text">Expert-Led Consulting Solutions </span>
          </h1>
          <h3 className="text-2xl md:text-4xl font-light leading-tight pb-2">
            Exclusively for
          </h3>
          <div className="relative w-full h-12 md:w-3/5 mx-auto md:h-24  xl:h-24">
            <Image
              src="/home/logos.svg"
              alt="MetaTrader 4"
              fill
              className="object-contain"
            />
          </div>
          <div className="">
            <h2 className="text-3xl md:text-6xl font-light pb-5">
              <span className="text-transparent bg-gradient-to-r from-[#0a0747] font-black to-[#aa165e] bg-clip-text">Brokers! </span>
            </h2>
          </div>
          {/* <div className="mt-8 inline-block bg-white hover:bg-secondary text-[#0a0747] font-semibold py-4 px-8 rounded-full text-lg hover:border-white hover:text-white transition w-56 text-center">
            <Link href="/contact" passHref>
              Talk to Us!
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
