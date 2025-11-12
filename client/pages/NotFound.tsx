import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-aseer-purple/30 to-aseer-purple/30 px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 text-white">404</h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8">Oops! Page not found</p>
        <a href="/" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-aseer-purple hover:bg-aseer-purple/80 text-white font-semibold rounded-full transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
