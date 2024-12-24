import GradientButton from '../common/GradientButton'

const CrisisManagementSection = () => {
    return (
        <div className='  my-10 mb-16'>
            <section className="container  bg-dna mx-auto">
                <div className=' max-w-[42rem] mx-auto text-center'>
                    <h2 className="md:text-4xl text-2xl text-primary font-bold mb-6">
                        <span className='text-transparent bg-clip-text w-fit bg-gradient-to-r to-secondary from-primary'>  Fintech is Our DNA!</span>
                    </h2>
                    <p className=" text-primary text-lg md:text-xl mb-8">
                        We are the experts you trust, delivering unparalleled <br />
                        consultancy services exclusively to the world of online trading.
                    </p>
                    <GradientButton href="/contact" text="Get Started Today" />
                </div>
            </section>
        </div>
    );
};

export default CrisisManagementSection;
