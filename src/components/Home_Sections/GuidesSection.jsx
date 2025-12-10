import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

import SectionTitle from "../shared/sectionTitle/SectionTitle";

import "../../components/componentsStyles.css";

// Mock guide data
const guides = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Adventure Guide",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Cultural Expert",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Nature Specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "James Williams",
    designation: "City Tour Guide",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

function TravelGuide() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center px-5 max-w-7xl mx-auto my-5">
        <SectionTitle title={"TOUR GUIDE"} sentence={"Meet Our Guide"} />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide) => (
            <div key={guide.id} className="overflow-hidden px-3">
              <div className="flex flex-col border border-gray-300 rounded-3xl overflow-hidden group">
                <div className="relative w-full">
                  <div className="w-full overflow-hidden relative">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-around gap-1 border border-gray-200 rounded-full p-2 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10">
                    <a
                      href={guide.social.facebook}
                      className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-primary transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={guide.social.twitter}
                      className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-primary transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={guide.social.instagram}
                      className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-primary transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={guide.social.linkedin}
                      className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-white bg-black hover:bg-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="pt-9 pb-2 bg-light w-full relative">
                  <h2 className="text-center font-bold">{guide.name}</h2>
                  <p className="text-center text-grey">{guide.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TravelGuide;
