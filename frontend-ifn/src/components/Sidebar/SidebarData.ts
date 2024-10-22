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
  path?: string;
  subItems?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Tablou de bord",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "Contabilitate",
    icon: BookOpen,
    subItems: [
      {
        label: "Note contabile",
        icon: Circle,
        path: "/contabilitate/note-contabile",
      },
      {
        label: "Mijloace fixe",
        icon: Circle,
        path: "/contabilitate/mijloace-fixe",
      },
      {
        label: "Declaratii fiscale",
        icon: Circle,
        path: "/contabilitate/declaratii-fiscale",
      },
      {
        label: "Jurnale de TVA",
        icon: Circle,
        path: "/contabilitate/jurnale-tva",
      },
      {
        label: "Situatii contabile",
        icon: Circle,
        path: "/contabilitate/situatii-contabile",
      },
      {
        label: "Raportari BNR",
        icon: Circle,
        path: "/contabilitate/raportari-bnr",
      },
      {
        label: "Blocare perioada",
        icon: Circle,
        path: "/contabilitate/blocare-perioada",
      },
    ],
  },
  {
    label: "Financiar",
    icon: DollarSign,
    subItems: [
      {
        label: "Operatiuni de trezorerie in LEI",
        icon: Circle,
        path: "/financiar/operatiuni-trezorerie-lei",
      },
      {
        label: "Operatiuni de trezorerie in VALUTA",
        icon: Circle,
        path: "/financiar/operatiuni-trezorerie-valuta",
      },
      {
        label: "Cheltuieli in avans",
        icon: Circle,
        path: "/financiar/cheltuieli-avans",
      },
      { label: "Vanzari", icon: Circle, path: "/financiar/vanzari" },
      {
        label: "Incasari",
        icon: Circle,
        path: "/financiar/incasari-contracte",
      },
      {
        label: "Documente primite",
        icon: Circle,
        path: "/financiar/documente-primite",
      },
      { label: "Plati", icon: Circle, path: "/financiar/plati" },
      {
        label: "Bonuri de consum",
        icon: Circle,
        path: "/financiar/bonuri-consum",
      },
    ],
  },
  {
    label: "Comercial",
    icon: ShoppingCart,
    subItems: [
      {
        label: "Simulare credit",
        icon: Circle,
        path: "/comercial/simulare-credit",
      },
      {
        label: "Solicitari clienti",
        icon: Circle,
        path: "/comercial/solicitari-clienti",
      },
    ],
  },
  {
    label: "Administrare credite",
    icon: Settings,
    subItems: [
      {
        label: "Contracte",
        icon: Circle,
        path: "/administrare-credite/contracte",
      },
      {
        label: "Comisioane la contracte",
        icon: Circle,
        path: "/administrare-credite/comisioane-contracte",
      },
      {
        label: "Trageri la contracte",
        icon: Circle,
        path: "/administrare-credite/trageri-contracte",
      },
      {
        label: "Acte aditionale",
        icon: Circle,
        path: "/administrare-credite/acte-aditionale",
      },
      {
        label: "Incasari la contracte",
        icon: Circle,
        path: "/administrare-credite/incasari-contracte",
      },
      {
        label: "Garantii",
        icon: Circle,
        path: "/administrare-credite/garantii",
      },
      {
        label: "Cereri de executare",
        icon: Circle,
        path: "/administrare-credite/cereri-executare",
      },
      {
        label: "Polite de asigurare",
        icon: Circle,
        path: "/administrare-credite/polite-asigurare",
      },
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
