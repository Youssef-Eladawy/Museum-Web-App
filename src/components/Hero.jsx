import { Link } from "react-router-dom";
import "./Hero.css";

export default function HomeHero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="container hero-content text-center">
          <h1 className="hero-title">Discover the World of Museums</h1>
          <p className="hero-subtitle">
            Explore art, history, and culture from the comfort of your home.
          </p>
          <Link to="/gallery" className="btn btn-hero">
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
}
