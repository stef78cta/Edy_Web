import {
  LayoutDashboard,
  BookOpen,
  DollarSign,
  ShoppingCart,
  Settings,
  BarChart2,
  List,
  Calendar,
  MessageSquare,
  Layers,
  Wrench,
  Circle,
} from "lucide-react";

export interface MenuItem {
  label: string;
  icon: React.ElementType;
  subItems?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Tablou de bord",
    icon: LayoutDashboard,
  },
  {
    label: "Contabilitate",
    icon: BookOpen,
    subItems: [
      { label: "Note contabile", icon: Circle },
      { label: "Mijloace fixe", icon: Circle },
      { label: "Declaratii fiscale", icon: Circle },
      { label: "Jurnale de TVA", icon: Circle },
      { label: "Situatii contabile", icon: Circle },
      { label: "Raportari BNR", icon: Circle },
      { label: "Blocare perioada", icon: Circle },
    ],
  },
  {
    label: "Financiar",
    icon: DollarSign,
    subItems: [
      { label: "Operatiuni de trezorerie in LEI", icon: Circle },
      { label: "Operatiuni de trezorerie in VALUTA", icon: Circle },
      { label: "Cheltuieli in avans", icon: Circle },
      { label: "Vanzari", icon: Circle },
      { label: "Incasari", icon: Circle },
      { label: "Documente primite", icon: Circle },
      { label: "Plati", icon: Circle },
      { label: "Bonuri de consum", icon: Circle },
    ],
  },
  {
    label: "Comercial",
    icon: ShoppingCart,
    subItems: [
      { label: "Simulare credit", icon: Circle },
      { label: "Solicitari clienti", icon: Circle },
    ],
  },
  {
    label: "Administrare credite",
    icon: Settings,
    subItems: [
      { label: "Contracte", icon: Circle },
      { label: "Comisioane la contracte", icon: Circle },
      { label: "Trageri la contracte", icon: Circle },
      { label: "Acte aditionale", icon: Circle },
      { label: "Incasari la contracte", icon: Circle },
      { label: "Garantii", icon: Circle },
      { label: "Cereri de executare", icon: Circle },
      { label: "Polite de asigurare", icon: Circle },
    ],
  },
  {
    label: "Rapoarte",
    icon: BarChart2,
    subItems: [
      { label: "Situatie debitori cedati", icon: Circle },
      { label: "Situatie instrumente de plata finantate", icon: Circle },
      { label: "Situatie facturi finantate", icon: Circle },
      { label: "Status control intern ", icon: Circle },
      { label: "Situatie portofoliu credite", icon: Circle },
      { label: "Nota calcul dobanda factoring", icon: Circle },
      { label: "Nota calcul dobanda", icon: Circle },
      { label: "Nota calcul penalitati capital in luna", icon: Circle },
      { label: "Istoric calcul penalitati capital", icon: Circle },
      { label: "Nota calcul penalitati dobanda in luna", icon: Circle },
      { label: "Istoric calcul penalitati dobanda", icon: Circle },
      { label: "Nota calcul provizioane", icon: Circle },
      { label: "Situatie reclasificare", icon: Circle },
      { label: "Situatie solduri pe scadente", icon: Circle },
      { label: "Verificare solduri", icon: Circle },
    ],
  },
  {
    label: "Nomenclatoare",
    icon: List,
    subItems: [
      { label: "Plan de conturi", icon: Circle },
      { label: "Parteneri", icon: Circle },
      { label: "Articole", icon: Circle },
      { label: "Curs BNR", icon: Circle },
      { label: "Trezorerii", icon: Circle },
      { label: "Comisioane", icon: Circle },
      { label: "Scoring", icon: Circle },
      { label: "Produse de finantare", icon: Circle },
      { label: "Control intern", icon: Circle },
      { label: "Conditii de eligibilitate", icon: Circle },
      { label: "Jurnal operare", icon: Circle },
    ],
  },
  {
    label: "Calendar",
    icon: Calendar,
  },
  {
    label: "Chat",
    icon: MessageSquare,
  },
  {
    label: "Diverse",
    icon: Layers,
    subItems: [
      { label: "Calculator", icon: Circle },
      { label: "Note", icon: Circle },
      { label: "Tasks", icon: Circle },
    ],
  },
  {
    label: "Configurare",
    icon: Wrench,
    subItems: [
      { label: "Gestiuni", icon: Circle },
      { label: "Utilizatori", icon: Circle },
      { label: "Tipuri de articole", icon: Circle },
      { label: "Plaja de numere", icon: Circle },
      { label: "Numere de documente", icon: Circle },
      { label: "Agenti de vanzare", icon: Circle },
      { label: "Grupe de articole", icon: Circle },
      { label: "Tipuri de contracte", icon: Circle },
      { label: "Documente opis", icon: Circle },
    ],
  },
];
