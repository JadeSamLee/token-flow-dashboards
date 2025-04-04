
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tdp-dark-navy text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold">TDP</span> © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-white hover:text-tdp-yellow transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-white hover:text-tdp-yellow transition-colors">
              Privacy
            </Link>
            <Link to="/support" className="text-white hover:text-tdp-yellow transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
