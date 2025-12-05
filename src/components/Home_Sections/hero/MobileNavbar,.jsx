import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, User, LogIn, Home, Power } from "lucide-react";
import { useLogout, useSession } from "../../../featuers/auth/authHooks";
import { FaToolbox } from "react-icons/fa";

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

const MobileNavbar = ({ isOpen, onClose }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const { user, isLoading } = useSession();
  const { logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 z-9999 bg-black/50"
      onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}>
        {/* Mobile Menu Content */}
        <div className="p-6">
          {/* Authentication Section */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            {isLoading ? (
              <div className="text-gray-600 text-sm">Loading...</div>
            ) : user ? (
              // Authenticated User - Dashboard Accordion
              <div>
                <button
                  onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                  className="flex items-center justify-between w-full py-3 text-gray-800 font-medium">
                  <span className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    My Dashboard
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isDashboardOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isDashboardOpen ? "max-h-48" : "max-h-0"
                  }`}>
                  <div className="pl-4 pt-2 space-y-2">
                    {user.role === "ADMIN" && (
                      <Link
                        to="/user/profile"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 py-2 text-gray-700 hover:text-primary transition-colors">
                        <FaToolbox className="w-4 h-4" />
                        Admin
                      </Link>
                    )}
                    <Link
                      to="/admin/tours"
                      onClick={handleLinkClick}
                      className="flex items-center gap-2 py-2 text-gray-700 hover:text-primary transition-colors">
                      <User className="w-4 h-4" />
                      My Profile
                    </Link>
                    <Link
                      to="/user/bookings"
                      onClick={handleLinkClick}
                      className="flex items-center gap-2 py-2 text-gray-700 hover:text-primary transition-colors">
                      <Home className="w-4 h-4" />
                      My Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      disabled={isPending}
                      className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors disabled:opacity-50">
                      <Power className="w-4 h-4" />
                      {isPending ? "Logging out..." : "Log Out"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Unauthenticated - Show Register/Login
              <div className="space-y-3">
                <Link
                  to="/signup"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 py-2 text-gray-800 hover:text-primary transition-colors">
                  <User className="w-5 h-5" />
                  Register
                </Link>
                <Link
                  to="/login"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 py-2 text-gray-800 hover:text-primary transition-colors">
                  <LogIn className="w-5 h-5" />
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                onClick={handleLinkClick}
                className="block py-3 text-gray-800 hover:text-primary hover:bg-gray-50 px-4 rounded transition-colors">
                {link.label}
              </Link>
            ))}

            {/* Pages Accordion */}
            <div className="border-t border-gray-200 pt-2">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-800 hover:bg-gray-50 rounded transition-colors cursor-pointer">
                <span>Pages</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isPagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isPagesOpen ? "max-h-96" : "max-h-0"
                }`}>
                <div className="pl-4 space-y-1">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={handleLinkClick}
                      className="block py-2 text-gray-700 hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Link */}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block py-3 text-gray-800 hover:text-primary hover:bg-gray-50 px-4 rounded transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
