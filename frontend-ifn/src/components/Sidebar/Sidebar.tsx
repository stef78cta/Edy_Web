import React, { useState } from "react"; // Importă React și hook-ul useState din biblioteca React
import SidebarHeader from "./SidebarHeader"; // Importă componenta SidebarHeader
import SidebarItem from "./SidebarItem"; // Importă componenta SidebarItem
import SidebarSubMenu from "./SidebarSubMenu"; // Importă componenta SidebarSubMenu
import SidebarFooter from "./SidebarFooter"; // Importă componenta SidebarFooter
import SidebarToggle from "./SidebarToggle"; // Importă componenta SidebarToggle
import { menuItems } from "./SidebarData"; // Importă elementele de meniu definite în SidebarData
import "./Sidebar.scss"; // Importă stilurile SCSS pentru Sidebar

interface SidebarProps {
  // Definirea interfeței pentru tipurile de proprietăți pe care le primește componenta Sidebar
  isOpen: boolean; // Proprietate care determină dacă sidebar-ul este deschis
  toggleSidebar: () => void; // Funcție care gestionează deschiderea și închiderea sidebar-ului
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  // Definirea componentei Sidebar cu proprietățile primite
  const [expandedItem, setExpandedItem] = useState<string | null>(null); // Stare pentru a reține elementul de meniu extins
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // Stare pentru a reține elementul de meniu selectat

  const toggleMenuItem = (itemName: string) => {
    // Funcție care gestionează extinderea și selectarea unui element din meniu
    if (!isOpen) {
      // Dacă sidebar-ul este închis
      toggleSidebar(); // Deschide sidebar-ul
    }
    if (expandedItem === itemName) {
      // Dacă elementul este deja extins
      setExpandedItem(null); // Închide elementul (setează expandedItem la null)
    } else {
      setExpandedItem(itemName); // Altfel, extinde elementul respectiv
    }
    setSelectedItem(itemName); // Setează elementul selectat ca fiind elementul curent
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {" "}
      {/* Sidebar-ul va avea clasa "open" sau "closed" în funcție de starea sa */}
      <SidebarToggle toggleSidebar={toggleSidebar} isOpen={isOpen} />{" "}
      {/* Componenta SidebarToggle, care permite schimbarea stării deschis/închis */}
      <SidebarHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />{" "}
      {/* Componenta SidebarHeader, afișează antetul sidebar-ului */}
      <nav className="sidebar__nav">
        {" "}
        {/* Definirea secțiunii de navigare a sidebar-ului */}
        <ul>
          {menuItems.map(
            (
              item // Iterează peste fiecare element din menuItems
            ) => (
              <li key={item.label} className="sidebar__nav-item">
                {" "}
                {/* Afișează fiecare element de meniu ca un <li>, folosind label-ul ca cheie */}
                {item.subItems ? ( // Dacă elementul de meniu are submeniuri (subItems)
                  <SidebarSubMenu
                    item={item} // Trimite datele elementului către componenta SidebarSubMenu
                    isOpen={isOpen} // Trimite starea deschis/închis a sidebar-ului
                    expandedItem={expandedItem} // Trimite elementul extins curent
                    selectedItem={selectedItem} // Trimite elementul selectat curent
                    toggleMenuItem={toggleMenuItem} // Funcția care schimbă starea de extindere/selectare
                  />
                ) : (
                  <SidebarItem
                    item={item} // Trimite datele elementului către componenta SidebarItem
                    isOpen={isOpen} // Trimite starea deschis/închis a sidebar-ului
                    selectedItem={selectedItem} // Trimite elementul selectat curent
                    toggleMenuItem={toggleMenuItem} // Funcția care schimbă starea de extindere/selectare
                  />
                )}
              </li>
            )
          )}
        </ul>
      </nav>
      <SidebarFooter />{" "}
      {/* Afișează componenta SidebarFooter la finalul sidebar-ului */}
    </aside>
  );
};

export default Sidebar; // Exportă componenta Sidebar pentru a putea fi folosită în alte fișiere
