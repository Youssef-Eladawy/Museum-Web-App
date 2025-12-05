import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Home_Sections/hero/Navbar";
import Popbar from "../../Home_Sections/hero/Popbar";

function HeadSection({ title }) {
  const location = useLocation();

  // Generate breadcrumbs from the current path
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
      <div className="text-lg flex items-center justify-center gap-2">
        <Link
          to="/"
          className="text-white hover:text-primary transition-colors">
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          // Capitalize and format the name (replace hyphens with spaces)
          const formattedName = name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <span key={routeTo} className="flex items-center gap-2">
              <span className="text-white">/</span>
              {isLast ? (
                <span className="text-white font-semibold">
                  {formattedName}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-white hover:text-primary transition-colors">
                  {formattedName}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="hidden lg:block">
        <Popbar />
      </div>
      <Navbar />
      <div
        className="relative flex justify-center items-center text-white bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=600&fit=crop')`,
          paddingTop: "12rem",
          paddingBottom: "4rem",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/50"></div>

        {/* Content */}
        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {generateBreadcrumbs()}
        </div>
      </div>
    </>
  );
}

export default HeadSection;
