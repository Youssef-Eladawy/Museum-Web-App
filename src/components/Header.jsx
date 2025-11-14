import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg header-bg shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Travela
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* All nav items in one row, pushed slightly to the right */}
          <ul className="navbar-nav ms-auto gap-3 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary px-3 py-1" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary text-white px-3 py-1"
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary text-white px-3 py-1"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
