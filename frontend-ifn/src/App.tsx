import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Blocareperioada from "./pages/Contabilitate/Blocareperioada/Blocareperioada";
import Declaratiifiscale from "./pages/Contabilitate/Declaratiifiscale/Declaratiifiscale";
import NoteContabile from "./pages/Contabilitate/NoteContabile/NoteContabile";
import MijloaceFixe from "./pages/Contabilitate/MijloaceFixe/MijloaceFixe";
import JurnaleTVA from "./pages/Contabilitate/JurnaleTVA/JurnaleTVA";
import RaportariBNR from "./pages/Contabilitate/RaportariBNR/RaportariBNR";
import Situatiicontabile from "./pages/Contabilitate/Situatiicontabile/Situatiicontabile";
import Tabloudebord from "./pages/Tabloudebord/Tabloudebord";
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
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
