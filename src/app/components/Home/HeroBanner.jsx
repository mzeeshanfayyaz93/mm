import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative bg-[url(/home/banner.webp)] bg-cover bg-center bg-no-repeat text-white py-16 lg:py-32 3xl:py-36">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full text-center lg:text-left pt-20">
          <h3 className="text-2xl md:text-4xl xl:text-[55px] 3xl:text-6xl font-light leading-tight pb-2">
            One-Stop Turnkey
          </h3>
          <h1 className="text-2xl md:text-[40px] xl:text-[55px] 3xl:text-[65px]  font-light md:leading-[60px] xl:leading-[75px] pb-5">
            <span className="font-black">Expert-Led Consulting Solutions </span>
            Exclusively for
          </h1>
          <div className="relative w-full h-12 md:w-[400px] xl:w-[600px] 3xl:w-[750px] md:h-14  xl:h-16">
            <Image
              src="/home/logos1.webp"
              alt="MetaTrader 4"
              fill
              className=" =object-contain"
            />
          </div>
          <div className="">
            <h2 className="text-2xl md:text-[40px] xl:text-[55px] 3xl:text-[65px] font-light leading-[75px] pb-5">
              <span className="font-black">Broker! </span>
            </h2>
          </div>
          <div className="mt-8 inline-block bg-white hover:bg-secondary text-[#0a0747] font-semibold py-4 px-8 rounded-full text-lg hover:border-white hover:text-white transition w-56 text-center">
            <Link href="/contact" passHref>
       
                Talk to Us!
        
            </Link>
          </div>
        </div>

        {/* Right Section (Candlestick Chart) */}
        <div className="hidden lg:block lg:w-1/3">
          
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
