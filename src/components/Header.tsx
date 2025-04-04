
import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  const connectWallet = () => {
    setIsWalletConnected(true);
  };

  return (
    <header className="flex justify-between items-center bg-vp-white py-4 px-6 border-b border-vp-light-green shadow-sm">
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleSidebar} 
          className="lg:hidden p-2 rounded-md hover:bg-vp-light-green/50"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl tdp-underline-accent">
            Venture Protocol
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-vp-black hover:text-vp-green transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-vp-black hover:text-vp-green transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-vp-black hover:text-vp-green transition-colors">
            About
          </Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-vp-light-green/50 transition-colors">
            <Bell className={`h-5 w-5 ${hasNotifications ? 'text-vp-green' : 'text-vp-black'}`} />
            {hasNotifications && (
              <span className="absolute top-0 right-0 h-2 w-2 bg-vp-green rounded-full animate-pulse-accent"></span>
            )}
          </button>
        </div>
        
        {isWalletConnected ? (
          <div className="px-4 py-2 bg-vp-light-green rounded-md text-sm">
            0x71C...8a3F
          </div>
        ) : (
          <button 
            onClick={connectWallet}
            className="px-4 py-2 border border-vp-green text-vp-black hover:bg-vp-green hover:text-vp-white transition-colors rounded-md"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
