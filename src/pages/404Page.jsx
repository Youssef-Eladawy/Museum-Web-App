import { Link } from "react-router-dom";
import "./404Page.css";

export default function PageNotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content text-center">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Oops! Page not found</h2>
        <p className="notfound-subtitle">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-home">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
