import Link from 'next/link';

const FintechSection = ({ title, description, buttonText }) => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto text-center py-10 md:py-20 px-4 bg-[url(/about/bg-2.webp)] bg-cover bg-center">
        {/* Title */}
        <h2 className="text-2xl md:text-[35px] xl:text-[45px] font-bold text-[#080a62] mb-4 max-w-4xl mx-auto leading-normal">{title}</h2>
        
        {/* Description */}
        <p className="text-base md:text-lg mb-6 max-w-xl mx-auto py-5">
        {description}
        </p>
        
        {/* Call to Action Button */}
        <Link href="#" className="inline-block hover:bg-gradient-to-l bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg">

        {buttonText}

        </Link>

      
      </div>
    </section>
  );
};

export default FintechSection;
