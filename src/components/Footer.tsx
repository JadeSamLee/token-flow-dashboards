
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-vp-green text-vp-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold">Venture Protocol</span> © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-vp-white hover:text-vp-light-green transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-vp-white hover:text-vp-light-green transition-colors">
              Privacy
            </Link>
            <Link to="/support" className="text-vp-white hover:text-vp-light-green transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
