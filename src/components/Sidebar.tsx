
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, Home, BarChart3, Users, Briefcase, PieChart, Wallet, Clock } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarLink = ({ to, icon, label, isActive }: SidebarLinkProps) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
      isActive
        ? "bg-tdp-yellow/10 text-tdp-yellow"
        : "text-tdp-dark-gray hover:bg-tdp-light-gray/70 hover:text-tdp-yellow"
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    categories: false,
    sortBy: false,
  });

  const toggleMenu = (key: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isProjectsRoute = location.pathname === "/projects";
  const isInvestorRoute = location.pathname === "/investor";
  const isFounderRoute = location.pathname === "/founder";

  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-tdp-light-gray border-r border-tdp-light-gray transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } overflow-y-auto`}
    >
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase text-tdp-dark-gray/70 mb-3">Main</h2>
          <nav className="space-y-1">
            <SidebarLink 
              to="/" 
              icon={<Home size={18} />} 
              label="Dashboard" 
              isActive={location.pathname === "/"} 
            />
            <SidebarLink 
              to="/projects" 
              icon={<BarChart3 size={18} />} 
              label="Projects" 
              isActive={isProjectsRoute} 
            />
            <SidebarLink 
              to="/investor" 
              icon={<PieChart size={18} />} 
              label="Investor" 
              isActive={isInvestorRoute} 
            />
            <SidebarLink 
              to="/founder" 
              icon={<Briefcase size={18} />} 
              label="Founder" 
              isActive={isFounderRoute} 
            />
          </nav>
        </div>

        {isProjectsRoute && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase text-tdp-dark-gray/70 mb-3">Projects</h2>
            <nav className="space-y-1">
              <SidebarLink to="/projects" icon={<BarChart3 size={18} />} label="All Projects" isActive />
              
              <div className="space-y-1">
                <button
                  onClick={() => toggleMenu('categories')}
                  className="flex items-center justify-between w-full px-4 py-3 text-tdp-dark-gray hover:bg-tdp-light-gray/70 hover:text-tdp-yellow rounded-md transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Users size={18} />
                    <span>Categories</span>
                  </div>
                  {expandedMenus.categories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {expandedMenus.categories && (
                  <div className="ml-9 space-y-1 animate-fade-in">
                    <Link to="/projects?category=defi" className="block py-2 px-4 rounded text-tdp-dark-gray hover:text-tdp-yellow">
                      DeFi
                    </Link>
                    <Link to="/projects?category=nft" className="block py-2 px-4 rounded text-tdp-dark-gray hover:text-tdp-yellow">
                      NFT
                    </Link>
                    <Link to="/projects?category=gamefi" className="block py-2 px-4 rounded text-tdp-dark-gray hover:text-tdp-yellow">
                      GameFi
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="space-y-1">
                <button
                  onClick={() => toggleMenu('sortBy')}
                  className="flex items-center justify-between w-full px-4 py-3 text-tdp-dark-gray hover:bg-tdp-light-gray/70 hover:text-tdp-yellow rounded-md transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={18} />
                    <span>Sort By</span>
                  </div>
                  {expandedMenus.sortBy ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {expandedMenus.sortBy && (
                  <div className="ml-9 space-y-1 animate-fade-in">
                    <Link to="/projects?sort=funding" className="block py-2 px-4 rounded text-tdp-dark-gray hover:text-tdp-yellow">
                      Funding
                    </Link>
                    <Link to="/projects?sort=newest" className="block py-2 px-4 rounded text-tdp-dark-gray hover:text-tdp-yellow">
                      Newest
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
        
        {isInvestorRoute && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase text-tdp-dark-gray/70 mb-3">Investor</h2>
            <nav className="space-y-1">
              <SidebarLink to="/investor" icon={<PieChart size={18} />} label="My Investments" isActive />
              <SidebarLink to="/investor/rewards" icon={<BarChart3 size={18} />} label="Rewards" />
              <SidebarLink to="/investor/stake" icon={<Wallet size={18} />} label="Stake ETH" />
            </nav>
          </div>
        )}
        
        {isFounderRoute && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase text-tdp-dark-gray/70 mb-3">Founder</h2>
            <nav className="space-y-1">
              <SidebarLink to="/founder" icon={<Briefcase size={18} />} label="My Projects" isActive />
              <SidebarLink to="/founder/funding" icon={<BarChart3 size={18} />} label="Funding" />
              <SidebarLink to="/founder/phases" icon={<Clock size={18} />} label="Phases" />
            </nav>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
