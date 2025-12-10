export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-light px-6">
      <h1 className="text-9xl font-extrabold text-primary tracking-wider">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-primary">
        Page Not Found
      </h2>

      <p className="mt-2 text-grey text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 rounded-lg bg-primary text-light font-medium 
                   hover:bg-light hover:text-primary border-2 border-primary 
                   transition-all duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}
