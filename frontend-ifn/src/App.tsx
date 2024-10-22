import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Tabloudebord from "./pages/Tabloudebord/Tabloudebord";

// Importuri pentru Contabilitate
import Blocareperioada from "./pages/Contabilitate/Blocareperioada/Blocareperioada";
import Declaratiifiscale from "./pages/Contabilitate/Declaratiifiscale/Declaratiifiscale";
import NoteContabile from "./pages/Contabilitate/NoteContabile/NoteContabile";
import MijloaceFixe from "./pages/Contabilitate/MijloaceFixe/MijloaceFixe";
import JurnaleTVA from "./pages/Contabilitate/JurnaleTVA/JurnaleTVA";
import RaportariBNR from "./pages/Contabilitate/RaportariBNR/RaportariBNR";
import Situatiicontabile from "./pages/Contabilitate/Situatiicontabile/Situatiicontabile";

// Importuri pentru Financiar
import OperatiuniTrezorerieLEI from "./pages/Financiar/OperatiuniTrezorerieLEI/OperatiuniTrezorerieLEI";
import OperatiuniTrezorerieVALUTA from "./pages/Financiar/OperatiuniTrezorerieVALUTA/OperatiuniTrezorerieVALUTA";
import CheltuieliAvans from "./pages/Financiar/CheltuieliAvans/CheltuieliAvans";
import Vanzari from "./pages/Financiar/Vanzari/Vanzari";
import Incasaricontracte from "./pages/Financiar/Incasaricontracte/Incasaricontracte";
import DocumentePrimite from "./pages/Financiar/DocumentePrimite/DocumentePrimite";
import Plati from "./pages/Financiar/Plati/Plati";
import BonuriConsum from "./pages/Financiar/BonuriConsum/BonuriConsum";

// Importuri pentru Comercial
import Simularecredit from "./pages/Comercial/Simularecredit/Simularecredit";
import Solicitariclienti from "./pages/Comercial/Solicitariclienti/Solicitariclienti";

// Importuri pentru Administrare Credite
import Contracte from "./pages/AdministrareCredite/Contracte/Contracte";
import Comisioanelacontracte from "./pages/AdministrareCredite/Comisioanelacontracte/Comisioanelacontracte";
import Tragerilacontracte from "./pages/AdministrareCredite/Tragerilacontracte/Tragerilacontracte";
import Acteaditionale from "./pages/AdministrareCredite/Acteaditionale/Acteaditionale";
import IncasarilacontracteAdministrare from "./pages/AdministrareCredite/Incasarilacontracte/Incasarilacontracte";
import Garantii from "./pages/AdministrareCredite/Garantii/Garantii";
import Cererideexecutare from "./pages/AdministrareCredite/Cererideexecutare/Cererideexecutare";
import Politedeasigurare from "./pages/AdministrareCredite/Politedeasigurare/Politedeasigurare";

import "./styles/main.scss";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="App">
        <Layout onSidebarToggle={setIsSidebarOpen}>
          <div
            className={`content-with-sidebar ${
              isSidebarOpen ? "" : "sidebar-closed"
            }`}
          >
            <Routes>
              <Route path="/" element={<Tabloudebord />} />

              {/* Rute pentru Contabilitate */}
              <Route
                path="/contabilitate/blocare-perioada"
                element={<Blocareperioada />}
              />
              <Route
                path="/contabilitate/declaratii-fiscale"
                element={<Declaratiifiscale />}
              />
              <Route
                path="/contabilitate/note-contabile"
                element={<NoteContabile />}
              />
              <Route
                path="/contabilitate/mijloace-fixe"
                element={<MijloaceFixe />}
              />
              <Route
                path="/contabilitate/jurnale-tva"
                element={<JurnaleTVA />}
              />
              <Route
                path="/contabilitate/raportari-bnr"
                element={<RaportariBNR />}
              />
              <Route
                path="/contabilitate/situatii-contabile"
                element={<Situatiicontabile />}
              />

              {/* Rute pentru Financiar */}
              <Route
                path="/financiar/operatiuni-trezorerie-lei"
                element={<OperatiuniTrezorerieLEI />}
              />
              <Route
                path="/financiar/operatiuni-trezorerie-valuta"
                element={<OperatiuniTrezorerieVALUTA />}
              />
              <Route
                path="/financiar/cheltuieli-avans"
                element={<CheltuieliAvans />}
              />
              <Route path="/financiar/vanzari" element={<Vanzari />} />
              <Route
                path="/financiar/incasari-contracte"
                element={<Incasaricontracte />}
              />
              <Route
                path="/financiar/documente-primite"
                element={<DocumentePrimite />}
              />
              <Route path="/financiar/plati" element={<Plati />} />
              <Route
                path="/financiar/bonuri-consum"
                element={<BonuriConsum />}
              />

              {/* Rute pentru Comercial */}
              <Route
                path="/comercial/simulare-credit"
                element={<Simularecredit />}
              />
              <Route
                path="/comercial/solicitari-clienti"
                element={<Solicitariclienti />}
              />

              {/* Rute pentru Administrare Credite */}
              <Route
                path="/administrare-credite/contracte"
                element={<Contracte />}
              />
              <Route
                path="/administrare-credite/comisioane-contracte"
                element={<Comisioanelacontracte />}
              />
              <Route
                path="/administrare-credite/trageri-contracte"
                element={<Tragerilacontracte />}
              />
              <Route
                path="/administrare-credite/acte-aditionale"
                element={<Acteaditionale />}
              />
              <Route
                path="/administrare-credite/incasari-contracte"
                element={<IncasarilacontracteAdministrare />}
              />
              <Route
                path="/administrare-credite/garantii"
                element={<Garantii />}
              />
              <Route
                path="/administrare-credite/cereri-executare"
                element={<Cererideexecutare />}
              />
              <Route
                path="/administrare-credite/polite-asigurare"
                element={<Politedeasigurare />}
              />
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
