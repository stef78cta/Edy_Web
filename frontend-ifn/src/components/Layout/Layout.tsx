import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

interface LayoutProps {
  children: React.ReactNode;
  onSidebarToggle: (isOpen: boolean) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onSidebarToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onSidebarToggle(!isSidebarOpen);
  };

  return (
    <div
      className={`layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`layout__main ${
          isSidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
