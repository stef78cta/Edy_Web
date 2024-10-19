import React from "react";
import SidebarToggle from "./SidebarToggle";

interface SidebarHeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <div className="sidebar__header">
      {isOpen && <h1 style={{ margin: 0, fontSize: "1.2rem" }}></h1>}
      <SidebarToggle toggleSidebar={toggleSidebar} isOpen={isOpen} />
    </div>
  );
};

export default SidebarHeader;
