import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import SidebarSubMenu from "./SidebarSubMenu";
import SidebarToggle from "./SidebarToggle";
import { menuItems } from "./SidebarData";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleMenuItem = (itemName: string) => {
    if (!isOpen) {
      toggleSidebar(); // Deschide sidebar-ul dacă este închis
    }
    if (expandedItem === itemName) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemName);
    }
    setSelectedItem(itemName);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <SidebarHeader />
      <SidebarToggle toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <nav className="sidebar__nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.label} className="sidebar__nav-item">
              {item.subItems ? (
                <SidebarSubMenu
                  item={item}
                  isOpen={isOpen}
                  expandedItem={expandedItem}
                  selectedItem={selectedItem}
                  toggleMenuItem={toggleMenuItem}
                />
              ) : (
                <SidebarItem
                  item={item}
                  isOpen={isOpen}
                  selectedItem={selectedItem}
                  toggleMenuItem={toggleMenuItem}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
