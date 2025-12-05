import { Link } from "react-router-dom";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  User,
  LogIn,
  Home,
  Power,
} from "lucide-react";
import { useLogout, useSession } from "../../../featuers/auth/authHooks";
import { FaToolbox } from "react-icons/fa";

// Social media links data
const socialLinks = [
  { id: 1, Icon: Twitter, href: "#", label: "Twitter" },
  { id: 2, Icon: Facebook, href: "#", label: "Facebook" },
  { id: 3, Icon: Linkedin, href: "#", label: "LinkedIn" },
  { id: 4, Icon: Instagram, href: "#", label: "Instagram" },
  { id: 5, Icon: Youtube, href: "#", label: "YouTube" },
];

const Popbar = () => {
  const { user, isLoading } = useSession();
  const { logout, isPending } = useLogout();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <section className="bg-blue-900 py-2">
      <div className="container mx-auto w-[97%]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex gap-2">
            {socialLinks.map(({ id, Icon, href, label }) => (
              <a
                key={id}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Right Side - Conditional Authentication */}
          <div className="flex items-center gap-4 relative z-1000">
            {isLoading ? (
              <div className="text-white text-sm">Loading...</div>
            ) : user ? (
              // Authenticated User - Show Dashboard Dropdown
              <div className="relative group">
                <li className="text-white text-md flex items-center gap-2 hover:text-gray-200 transition-colors cursor-pointer">
                  <Home className="w-4 h-4" />
                  My Dashboard
                </li>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {
                    user.role === "ADMIN" ? 
                    <Link
                      to="/admin/tours"
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 first:rounded-t-lg"
                    >
                      <FaToolbox className="w-4 h-4" />
                      Admin
                    </Link>
                    : ""
                  }
                  <Link
                    to="/user/profile"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 first:rounded-t-lg"
                  >
                    <User className="w-4 h-4" />
                    My Profile
                  </Link>
                  <Link
                    to="/user/bookings"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <Home className="w-4 h-4" />
                    My Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    disabled={isPending}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 last:rounded-b-lg w-full text-left disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Power className="w-4 h-4" />
                    {isPending ? "Logging out..." : "Log Out"}
                  </button>
                </div>
              </div>
            ) : (
              // Unauthenticated - Show Register/Login
              <>
                <Link
                  to="/signup"
                  className="text-white text-sm flex items-center gap-2 hover:text-gray-200 transition-colors"
                >
                  <User className="w-4 h-4" />
                  Register
                </Link>
                <Link
                  to="/login"
                  className="text-white text-sm flex items-center gap-2 hover:text-gray-200 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popbar;
