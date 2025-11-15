import { Link } from "react-router-dom";
import {
  Home,
  Mail,
  Phone,
  Printer,
  Share2,
  ChevronRight,
  CreditCard,
  Copyright,
} from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Gift Cards", href: "/gift-cards" },
    { name: "Magazine", href: "/magazine" },
  ];

  const supportLinks = [
    { name: "Contact", href: "/contact" },
    { name: "Legal Notice", href: "/legal" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <>
      {/* Footer */}
      <footer className="py-12 bg-[#14141f]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Get In Touch */}
            <div className="flex flex-col">
              <h4 className="text-white text-xl font-bold mb-4">
                Get In Touch
              </h4>

              <Link
                to="#"
                className="flex items-center gap-2 text-white hover:text-primary hover:tracking-wider transition-all duration-500 mb-2"
              >
                <Home className="w-5 h-5" />
                123 Street, New York, USA
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 text-white hover:text-primary hover:tracking-wider transition-all duration-500 mb-2"
              >
                <Mail className="w-5 h-5" />
                info@example.com
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 text-white hover:text-primary hover:tracking-wider transition-all duration-500 mb-2"
              >
                <Phone className="w-5 h-5" />
                +012 345 67890
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 text-white hover:text-primary hover:tracking-wider transition-all duration-500 mb-4"
              >
                <Printer className="w-5 h-5" />
                +012 345 67890
              </Link>

              {/* Social Media */}
              <div className="flex items-center gap-2">
                <Share2 className="w-8 h-8 text-white" />
                <Link
                  to="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <h4 className="text-white text-xl font-bold mb-4">Company</h4>
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center gap-2 text-white hover:text-primary hover:tracking-wider transition-all duration-500 mb-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Support */}
            <div className="flex flex-col">
              <h4 className="text-white text-xl font-bold mb-4">Support</h4>
              {supportLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="flex items-center gap-2 text-white hover:text-primary hover:tracking-wider transition-all duration-500 mb-2"
                >
                  <ChevronRight className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Language, Currency & Payment */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <select className="px-3 py-2 bg-[#14141f] border border-gray-600 text-grey rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="ar">Arabic</option>
                  <option value="de">German</option>
                  <option value="el">Greek</option>
                  <option value="en">English</option>
                </select>
                <select className="px-3 py-2 bg-[#14141f] border border-gray-600 text-grey rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>

              <h4 className="text-white text-xl font-bold mb-4">Payment</h4>
              <div className="flex flex-wrap gap-2">
                <Link to="#" className="transition-all duration-500 hover:ml-1">
                  <CreditCard className="w-10 h-10 text-white" />
                </Link>
                <Link to="#" className="transition-all duration-500 hover:ml-1">
                  <CreditCard className="w-10 h-10 text-white" />
                </Link>
                <Link to="#" className="transition-all duration-500 hover:ml-1">
                  <CreditCard className="w-10 h-10 text-white" />
                </Link>
                <Link to="#" className="transition-all duration-500 hover:ml-1">
                  <CreditCard className="w-10 h-10 text-white" />
                </Link>
                <Link to="#" className="transition-all duration-500 hover:ml-1">
                  <CreditCard className="w-10 h-10 text-white" />
                </Link>
                <Link to="#" className="transition-all duration-500 hover:ml-1">
                  <CreditCard className="w-10 h-10 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="py-4 bg-[#14141f] border-t border-white/10">
        <div className="container mx-auto px-4 w-full lg:w-[55%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Copyright className="w-4 h-4 text-grey mr-2" />
              <p className="text-grey">
                <span className="text-white">Your Site Name</span>, All right
                reserved.
              </p>
            </div>
            <div className="text-grey">
              Designed by <span className="text-white">Ahmed Ehab</span>{" "}
              Distributed By{" "}
              <Link
                to="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Ahmed Ehab
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
