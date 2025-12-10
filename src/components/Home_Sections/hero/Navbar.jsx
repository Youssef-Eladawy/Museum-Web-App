import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Menu, X, ChevronDown } from "lucide-react";
import MobileNavbar from "./MobileNavbar,";

// Navigation data
const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Tours", href: "/tours" },
  { id: 5, label: "Blog", href: "/blog" },
];

const dropdownItems = [
  { id: 1, label: "Destination", href: "/destination" },
  { id: 4, label: "Our Gallery", href: "/gallery" },
  { id: 5, label: "Travel Guides", href: "/guides" },
  { id: 6, label: "Testimonial", href: "/testimonial" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses =
    "relative block px-6 py-4 lg:py-10 text-black lg:text-white text-[17px] font-normal transition-colors duration-300 z-10 before:absolute before:inset-0 before:bg-blue-900 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 before:ease-out hover:before:scale-y-100 before:z-[-1] hover:text-white";

  return (
    <>
      <nav className="absolute w-full top-12 left-0 border-b border-white/10 z-999 bg-transparent lg:bg-transparent">
        <div className="container mx-auto w-[95.5%]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 text-white">
              <MapPin className="w-10 h-10" />
              <h1 className="text-5xl font-bold">Travela</h1>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 z-10000 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex">
              <ul className="flex flex-row items-stretch ml-auto">
                {/* Regular Nav Links */}
                {navLinks.map((link) => (
                  <li key={link.id} className="relative">
                    <Link to={link.href} className={linkClasses}>
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Pages Dropdown */}
                <li className="relative group">
                  <button className="relative flex items-center gap-1 w-full px-6 py-4 lg:py-10 text-black lg:text-white text-[17px] font-normal transition-colors duration-300 z-10 before:absolute before:inset-0 before:bg-blue-900 before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 before:ease-out hover:before:scale-y-100 before:z-[-1] hover:text-white">
                    <span className="relative z-10">Pages</span>
                    <ChevronDown className="w-4 h-4 relative z-10" />
                  </button>
                  <ul className="hidden group-hover:block absolute left-0 top-full mt-0 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
                    {dropdownItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Contact Link */}
                <li className="relative">
                  <Link to="/contact" className={linkClasses}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavbar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
