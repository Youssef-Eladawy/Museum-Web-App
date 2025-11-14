import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a modern museum showcasing art, culture, and history. Our
            mission is to preserve and share knowledge with the world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@museum.com</p>
          <p>Phone: +20 111 222 333</p>
          <p>Location: Cairo, Egypt</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Museum. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
