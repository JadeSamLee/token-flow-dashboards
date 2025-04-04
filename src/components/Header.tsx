
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
    <header className="flex justify-between items-center bg-tdp-white py-4 px-6 border-b border-tdp-light-gray shadow-sm">
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleSidebar} 
          className="lg:hidden p-2 rounded-md hover:bg-tdp-light-gray/50"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl tdp-underline-red">
            TDP
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-tdp-dark-gray hover:text-tdp-yellow transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-tdp-dark-gray hover:text-tdp-yellow transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-tdp-dark-gray hover:text-tdp-yellow transition-colors">
            About
          </Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-tdp-light-gray/50 transition-colors">
            <Bell className={`h-5 w-5 ${hasNotifications ? 'text-tdp-red' : 'text-tdp-dark-gray'}`} />
            {hasNotifications && (
              <span className="absolute top-0 right-0 h-2 w-2 bg-tdp-red rounded-full animate-pulse-accent"></span>
            )}
          </button>
        </div>
        
        {isWalletConnected ? (
          <div className="px-4 py-2 bg-tdp-light-gray rounded-md text-sm">
            0x71C...8a3F
          </div>
        ) : (
          <button 
            onClick={connectWallet}
            className="px-4 py-2 border border-tdp-red text-tdp-dark-gray hover:bg-tdp-yellow hover:border-tdp-yellow hover:text-tdp-dark-navy transition-colors rounded-md"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
