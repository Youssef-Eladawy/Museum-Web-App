import { Globe2, Building2, Map, CalendarCog } from "lucide-react";
import MainHeader from "../MainHeader";

export default function Services() {
  return (
    <section className="w-full py-16 mt-10 bg-light">
      <div className="max-w-[900px] mx-auto text-center mb-12">
        <MainHeader title="Services" />
        <h1 className="text-3xl font-bold mt-2">Our Services</h1>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <ServiceCard
              title="WorldWide Tours"
              text="Experience breathtaking destinations across continents with itineraries crafted by travel experts. Our worldwide tours offer culturally rich encounters, scenic landscapes, and unforgettable adventures designed for all types of travelers."
              icon={<Globe2 size={64} />}
              reverse
            />

            <ServiceCard
              title="Hotel Reservation"
              text="Enjoy a seamless hotel booking experience with access to a wide selection of stays worldwide. Whether you prefer luxury resorts, cozy boutique hotels, or affordable rooms, we ensure comfort, convenience, and excellent recommendations."
              icon={<Building2 size={64} />}
              reverse
            />

            <ServiceCard
              title="Travel Guides"
              text="Our expert travel guides help you explore destinations with confidence and insight. Packed with insider tips, must-visit attractions, dining suggestions, and cultural highlights, they ensure every journey becomes smooth and memorable."
              icon={<Map size={64} />}
              reverse
            />

            <ServiceCard
              title="Event Management"
              text="From weddings and corporate events to private celebrations, our team handles every detail with precision. We manage planning, design, logistics, and execution to deliver smooth, well-organized, and visually stunning events."
              icon={<CalendarCog size={64} />}
              reverse
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <ServiceCard
              title="WorldWide Tours"
              text="Discover iconic landmarks, hidden gems, and unique cultural experiences across the globe. Every tour is tailored to offer adventure, comfort, and authentic moments that bring each destination to life in a meaningful way."
              icon={<Globe2 size={64} />}
            />

            <ServiceCard
              title="Hotel Reservation"
              text="Find the ideal place to stay with recommendations based on your preferences and budget. Our reservation system ensures reliable choices, trusted reviews, and hassle-free booking for a comfortable and enjoyable stay."
              icon={<Building2 size={64} />}
            />

            <ServiceCard
              title="Travel Guides"
              text="Navigate new cities and natural wonders with detailed guides written by experienced travelers. From transportation tips to cultural etiquette and must-see places, our guides help you enjoy every moment of your trip."
              icon={<Map size={64} />}
            />

            <ServiceCard
              title="Event Management"
              text="Turn your ideas into unforgettable events with our complete management service. We offer creative planning, themed designs, smooth coordination, and professional execution to bring your vision to reality effortlessly."
              icon={<CalendarCog size={64} />}
            />
          </div>
        </div>

        <div className="w-full text-center">
          <a
            href="#"
            className="inline-block bg-primary text-white px-10 py-3 rounded-full mt-10 font-medium hover:opacity-90 transition"
          >
            Service More
          </a>
        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function ServiceCard({ title, text, icon, reverse }) {
  return (
    <div
      className={`
        group flex items-center rounded-xl border border-primary bg-white 
        p-6 min-h-60
        transition-all duration-300 hover:bg-primary hover:text-white
      `}
    >
      {!reverse && (
        <div className="mr-6 text-primary transition-all duration-300 group-hover:text-white">
          {icon}
        </div>
      )}

      <div className={`${reverse ? "text-right" : "text-left"} flex-1`}>
        <h5 className="font-semibold text-xl mb-3">{title}</h5>

        {/* Now REAL FULL TEXT — no clamp */}
        <p className="text-gray-600 group-hover:text-white leading-relaxed">
          {text}
        </p>
      </div>

      {reverse && (
        <div className="ml-6 text-primary transition-all duration-300 group-hover:text-white">
          {icon}
        </div>
      )}
    </div>
  );
}
