import React from "react";

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
      {isOpen && <h1></h1>}
      {/* Puteți utiliza isOpen și toggleSidebar aici dacă este necesar */}
    </div>
  );
};

export default SidebarHeader;
