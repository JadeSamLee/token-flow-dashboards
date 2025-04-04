
import { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!isMounted) {
    return null; // Prevents flash of unstyled content
  }

  return (
    <div className="flex flex-col min-h-screen pastel-pattern-bg">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <div className="flex flex-1 relative">
        <Sidebar isOpen={isSidebarOpen} />
        
        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "lg:ml-0" : "lg:ml-0"
          }`}
        >
          <div className="p-6 animate-fade-in">{children}</div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;
