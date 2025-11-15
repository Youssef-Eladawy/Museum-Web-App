import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-[90vh] bg-secondary p-4">
      <div className="max-w-md text-center">
        <h1 className="text-[6rem] font-extrabold text-main">404</h1>
        <h2 className="text-2xl mt-4 mb-4">Oops! Page not found</h2>
        <p className="text-gray-500 text-lg mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-main text-white font-medium px-8 py-3 rounded-full transition-all hover:bg-blue-800 hover:-translate-y-1 hover:shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
