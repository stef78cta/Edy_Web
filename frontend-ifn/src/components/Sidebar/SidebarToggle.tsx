import React from "react";
import { Menu } from "lucide-react";

interface SidebarToggleProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({
  toggleSidebar,
  isOpen,
}) => {
  return (
    <button
      className={`sidebar__toggle ${isOpen ? "open" : "closed"}`}
      onClick={toggleSidebar}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      <Menu size={24} />
    </button>
  );
};

export default SidebarToggle;
