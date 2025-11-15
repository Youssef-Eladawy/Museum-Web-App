import heroImage from "../../../assets/images/carousel1.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 pb-36">
        <div className="max-w-4xl">
          <h4 className="text-white uppercase font-bold mb-4 tracking-[3px]">
            Explore The World
          </h4>
          <h1 className="text-5xl md:text-7xl capitalize text-white mb-4 font-bold">
            Let's The World Together!
          </h1>
          <p className="mb-8 text-xl text-white/90">
            Travel opens the door to endless possibilities. From stunning
            natural wonders to rich cultural experiences, every destination has
            a story waiting to be discovered.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="bg-primary text-white font-semibold rounded-full py-3 px-8 transition-colors duration-300"
            >
              Discover Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
