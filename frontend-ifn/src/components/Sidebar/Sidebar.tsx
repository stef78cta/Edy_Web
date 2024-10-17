import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  BookOpen,
  DollarSign,
  ShoppingCart,
  CreditCard,
  PieChart,
  List,
  Calendar,
  MessageSquare,
  Settings,
  Menu,
} from "lucide-react";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  subItems?: string[];
}

const menuItems: MenuItem[] = [
  { name: "Tablou de bord", icon: <LayoutDashboard size={20} /> },
  {
    name: "Contabilitate",
    icon: <BookOpen size={20} />,
    subItems: [
      "Note contabile",
      "Mijloace fixe",
      "Declaratii fiscale",
      "Jurnale de TVA",
      "Situatii contabile",
      "Raportari BNR",
      "Blocare perioada",
    ],
  },
  {
    name: "Financiar",
    icon: <DollarSign size={20} />,
    subItems: [
      "Operatiuni de trezorerie in LEI",
      "Operatiuni de trezorerie in valuta",
      "Cheltuieli in avans",
      "Vanzari",
      "Incasari",
      "Documente primite",
      "Plati",
      "Bonuri de consum",
    ],
  },
  {
    name: "Comercial",
    icon: <ShoppingCart size={20} />,
    subItems: ["Simulare credit", "Solicitari clienti"],
  },
  {
    name: "Administrare credite",
    icon: <CreditCard size={20} />,
    subItems: [
      "Contracte",
      "Comisioane la contracte",
      "Trageri la contracte",
      "Acte aditionale",
      "Incasari la contracte",
      "Garantii",
      "Cereri de executare",
      "Polite de asigurare",
    ],
  },
  {
    name: "Rapoarte",
    icon: <PieChart size={20} />,
    subItems: [
      "Situatie debitori cedati",
      "Situatie instrumente de plata finantate",
      "Situatie facturi finantate",
      "Status control intern",
      "Situatie portofoliu credite",
      "Nota calcul dobanda factoring",
      "Nota calcul dobanda",
      "Nota calcul penalitati capital in luna",
      "Istoric calcul penalitati capital",
      "Nota calcul penalitati dobanda in luna",
      "Istoric calcul penalitati dobanda",
      "Nota calcul provizioane",
      "Situatie reclasificare",
      "Situatie solduri pe scadente",
      "Verificare solduri",
    ],
  },
  {
    name: "Nomenclatoare",
    icon: <List size={20} />,
    subItems: [
      "Plan de conturi",
      "Parteneri",
      "Articole",
      "Curs BNR",
      "Trezorerii",
      "Comisioane",
      "Scoring",
      "Produse de finantare",
      "Control intern",
      "Conditii de eligibilitate",
      "Jurnal operare",
    ],
  },
  { name: "Calendar", icon: <Calendar size={20} /> },
  { name: "Chat", icon: <MessageSquare size={20} /> },
  {
    name: "Diverse",
    icon: <List size={20} />,
    subItems: ["Calculator", "Note", "Tasks"],
  },
  {
    name: "Configurare",
    icon: <Settings size={20} />,
    subItems: [
      "Gestiuni",
      "Utilizatori",
      "Tipuri de articole",
      "Plaja de numere",
      "Numere de documente",
      "Agenti de vanzare",
      "Grupe de articole",
      "Tipuri de contracte",
      "Documente opis",
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleMenuItem = (itemName: string) => {
    if (expandedItem === itemName) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemName);
    }
    setSelectedItem(itemName);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button
        className={`sidebar__toggle ${
          isOpen ? "sidebar__toggle--open" : "sidebar__toggle--closed"
        }`}
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <nav className="sidebar__nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="sidebar__nav-item">
              <button
                onClick={() => toggleMenuItem(item.name)}
                className={`sidebar__nav-link ${
                  selectedItem === item.name ? "active" : ""
                }`}
              >
                <span className="sidebar__nav-icon">{item.icon}</span>
                {isOpen && (
                  <span className="sidebar__nav-text">{item.name}</span>
                )}
                {isOpen && item.subItems && (
                  <span className="sidebar__nav-arrow">
                    {expandedItem === item.name ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                )}
              </button>
              {isOpen && expandedItem === item.name && item.subItems && (
                <ul className="sidebar__subnav">
                  {item.subItems.map((subItem) => (
                    <li key={subItem} className="sidebar__subnav-item">
                      <a href="#" className="sidebar__subnav-link">
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
