import React from "react";
import { MenuItem } from "./SidebarData";

interface SidebarItemProps {
  item: MenuItem;
  isOpen: boolean;
  selectedItem: string | null;
  toggleMenuItem: (label: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  isOpen,
  selectedItem,
  toggleMenuItem,
}) => {
  return (
    <button
      className={`sidebar__nav-link ${
        selectedItem === item.label ? "active" : ""
      }`}
      onClick={() => toggleMenuItem(item.label)}
    >
      <span className="sidebar__nav-icon">
        {React.createElement(item.icon, { size: 20 })}
      </span>
      {isOpen && <span className="sidebar__nav-text">{item.label}</span>}
    </button>
  );
};

export default SidebarItem;
