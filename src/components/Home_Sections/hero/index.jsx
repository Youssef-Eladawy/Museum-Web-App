import Popbar from "./Popbar";
import Navbar from "./Navbar";
import Hero from "./Hero";

const HeaderSection = () => {
  return (
    <div className="relative">
      {/* Popbar - Hidden on screens smaller than lg */}
      <div className="hidden lg:block">
        <Popbar />
      </div>

      {/* Navbar overlays the hero */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default HeaderSection;
