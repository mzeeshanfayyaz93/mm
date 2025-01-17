import GradientButton from '../common/GradientButton'

const FintechSection = ({ title, description, buttonText }) => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto text-center py-10 md:py-20 px-4 bg-[url(/about/bg-2.webp)] bg-cover bg-center">
        {/* Title */}
        <div className="text-center">
            <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-[20px] font-[600] lg:text-[30px] 2xl:text-[30px] uppercase max-w-lg md:leading-[35px]">
           {title}


          </h2>
            </div>
        
        {/* Description */}
        <p className="text-base md:text-lg mb-6 max-w-xl mx-auto py-5">
        {description}
        </p>
        
        {/* Call to Action Button */}
         {/* Call-to-Action Button */}
         <GradientButton href="/contact" text="Book a Consultation" />
      
      </div>
    </section>
  );
};

export default FintechSection;
