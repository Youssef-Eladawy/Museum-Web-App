import { ArrowRight } from "lucide-react";
import AboutImage from "./../../assets/images/about-img.jpg";

export default function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-4">
      <div className="grid lg:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div className="relative">
          <div className="border-50 border-transparent border-r-primary border-l-primary  w-full h-full">
            <img
              src={AboutImage}
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="bg-white/80 bg-cover bg-center bg-no-repeat p-6 rounded-xl"
          style={{ backgroundImage: "url('/about-img-1.png')" }}
        >
          {/* Header */}
          <h5 className="uppercase text-primary font-semibold mb-4 relative inline-block">
            About Us
            <span className="absolute top-1/2 -right-20 w-[50px] border border-primary -translate-y-1/2"></span>
          </h5>

          <h1 className="text-3xl font-bold mb-4">
            Welcome To <span className="text-primary">Tarvela</span>
          </h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            At Tarvela, we believe that travel is more than just visiting
            places—it's about creating lasting memories, connecting with diverse
            cultures, and discovering the beauty of the world. Our mission is to
            inspire and guide you on incredible journeys.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            From the bustling streets of vibrant cities to the tranquil beauty
            of hidden gems, Tarvela is your trusted partner in crafting
            unforgettable travel experiences. Let’s explore, dream, and make
            your travel aspirations a reality!
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              "First Class Flights",
              "5 Star Accommodations",
              "150 Premium City Tours",
              "Handpicked Hotels",
              "Latest Model Vehicles",
              "24/7 Service",
            ].map((item) => (
              <p key={item} className="text-gray-600 flex items-center gap-2">
                <ArrowRight size={18} className="text-primary" />
                {item}
              </p>
            ))}
          </div>

          <a
            href="#"
            className="inline-block bg-primary text-white rounded-full mt-4 py-3 px-8 hover:bg-primary/90 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
