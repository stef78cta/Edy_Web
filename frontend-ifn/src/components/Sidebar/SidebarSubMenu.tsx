import React from "react";
import { MenuItem } from "./SidebarData";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarSubMenuProps {
  item: MenuItem;
  isOpen: boolean;
  expandedItem: string | null;
  selectedItem: string | null;
  toggleMenuItem: (label: string) => void;
}

const SidebarSubMenu: React.FC<SidebarSubMenuProps> = ({
  item,
  isOpen,
  expandedItem,
  selectedItem,
  toggleMenuItem,
}) => {
  return (
    <>
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
        {isOpen && item.subItems && (
          <span className="sidebar__nav-arrow">
            {expandedItem === item.label ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
        )}
      </button>
      {isOpen && expandedItem === item.label && item.subItems && (
        <ul className="sidebar__subnav">
          {item.subItems.map((subItem) => (
            <li key={subItem.label} className="sidebar__subnav-item">
              <a href="#" className="sidebar__subnav-link">
                {subItem.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SidebarSubMenu;
