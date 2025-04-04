
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-tdp-light-gray/20">
      <div className="text-center p-8 max-w-lg">
        <h1 className="text-6xl font-bold text-tdp-dark-navy mb-4">404</h1>
        <p className="text-xl text-tdp-dark-gray mb-8">Oops! We couldn't find the page you were looking for.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-tdp-yellow text-tdp-dark-navy font-medium rounded hover:bg-tdp-yellow/90 transition-colors inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
