import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="bg-main text-secondary mt-12 pt-10 pb-6">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between">
        {/* About */}
        <div className="flex-1 min-w-[220px] m-5">
          <h3 className="mb-4 text-lg font-bold text-secondary/90">About Us</h3>
          <p className="text-sm leading-6">
            We are a modern museum showcasing art, culture, and history. Our
            mission is to preserve and share knowledge with the world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[220px] m-5">
          <h3 className="mb-4 text-lg font-bold text-secondary/90">
            Quick Links
          </h3>
          <ul className="list-none p-0">
            <li className="my-2">
              <a href="/about" className="hover:text-secondary/70 text-sm">
                About
              </a>
            </li>
            <li className="my-2">
              <a href="/gallery" className="hover:text-secondary/70 text-sm">
                Gallery
              </a>
            </li>
            <li className="my-2">
              <a href="/services" className="hover:text-secondary/70 text-sm">
                Services
              </a>
            </li>
            <li className="my-2">
              <a href="/contact" className="hover:text-secondary/70 text-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[220px] m-5">
          <h3 className="mb-4 text-lg font-bold text-secondary/90">
            Contact Us
          </h3>
          <p className="text-sm leading-6">Email: info@museum.com</p>
          <p className="text-sm leading-6">Phone: +20 111 222 333</p>
          <p className="text-sm leading-6">Location: Cairo, Egypt</p>
        </div>

        {/* Social Media */}
        <div className="flex-1 min-w-[220px] m-5">
          <h3 className="mb-4 text-lg font-bold text-secondary/90">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-secondary/70">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="hover:text-secondary/70">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="hover:text-secondary/70">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="hover:text-secondary/70">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-8 pt-5 border-t border-secondary/30 text-sm">
        <p>© 2025 Museum. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
