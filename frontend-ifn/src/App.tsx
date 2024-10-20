import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";
import DataTable from "./components/DataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import "./styles/main.scss";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleAddClick = () => {
    console.log("Butonul a fost apăsat");
    // Aici puteți adăuga logica pentru acțiunea de adăugare
  };

  // Date de exemplu pentru DataTable
  const rows = Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    lastName: `Nume${index + 1}`,
    firstName: `Prenume${index + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
    contDebit: `1011${index}`,
    contCredit: `2011${index}`,
    suma: Math.floor(Math.random() * 10000),
    explicatii: `Explicatie ${index + 1}`,
    tipValuta: index % 2 === 0 ? "RON" : "EUR",
    curs: index % 2 === 0 ? 1 : 4.9,
    sumaValuta: Math.floor(Math.random() * 2000),
    tipDocument: `Doc${index + 1}`,
    partener: `Partener${index + 1}`,
  }));

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "Prenume", width: 130 },
    { field: "lastName", headerName: "Nume", width: 130 },
    { field: "age", headerName: "Vârsta", type: "number", width: 90 },
    { field: "contDebit", headerName: "Cont Debit", width: 110 },
    { field: "contCredit", headerName: "Cont Credit", width: 110 },
    { field: "suma", headerName: "Suma", type: "number", width: 110 },
    { field: "explicatii", headerName: "Explicații", width: 200 },
    { field: "tipValuta", headerName: "Tip Valută", width: 100 },
    { field: "curs", headerName: "Curs", type: "number", width: 90 },
    {
      field: "sumaValuta",
      headerName: "Suma Valută",
      type: "number",
      width: 120,
    },
    { field: "tipDocument", headerName: "Tip Document", width: 130 },
    { field: "partener", headerName: "Partener", width: 150 },
  ];

  return (
    <Layout onSidebarToggle={setIsSidebarOpen}>
      <div
        className={`content-with-sidebar ${
          isSidebarOpen ? "" : "sidebar-closed"
        }`}
      >
        <section className="mt-3">
          <h2>Prezentare elemente de stil folosite in aplicatie :</h2>
        </section>

        <section className="mt-3">
          <h3>Butoane</h3>
          <div className="button-group">
            <Button onClick={handleAddClick} variant="primary">
              Primary
            </Button>
            <Button onClick={handleAddClick} variant="secondary">
              Secundar
            </Button>
            <Button onClick={handleAddClick} variant="accent">
              Accent
            </Button>
            <Button onClick={handleAddClick} variant="tertiary">
              Tertiar
            </Button>
            <Button onClick={handleAddClick} variant="four">
              Four
            </Button>
          </div>
        </section>

        <section className="mt-3">
          <h3>Tipografie</h3>
          <h1>Bine ați venit la panoul de control Frontend IFN! 1</h1>
          <h2>Bine ați venit la panoul de control Frontend IFN! 2</h2>
          <h3>Bine ați venit la panoul de control Frontend IFN! 3</h3>
          <h4>Bine ați venit la panoul de control Frontend IFN! 4</h4>
          <h5>Bine ați venit la panoul de control Frontend IFN! 5</h5>
          <h6>Bine ați venit la panoul de control Frontend IFN! 6</h6>
          <p>
            Acesta este un paragraf de text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <a href="#">Acesta este un link</a>
        </section>

        <section className="mt-3">
          <h3>Liste</h3>
          <ul>
            <li>Element listă neordonată 1</li>
            <li>Element listă neordonată 2</li>
            <li>Element listă neordonată 3</li>
          </ul>
          <ol>
            <li>Element listă ordonată 1</li>
            <li>Element listă ordonată 2</li>
            <li>Element listă ordonată 3</li>
          </ol>
        </section>

        <section className="mt-3">
          <h3>Formular</h3>
          <form>
            <div className="mb-2">
              <label htmlFor="name">Nume:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="mb-2">
              <label htmlFor="message">Mesaj:</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <Button type="submit" variant="primary">
              Trimite
            </Button>
          </form>
        </section>

        <section className="mt-3">
          <h3>Clase utilitare</h3>
          <div className="text-center">Text centrat</div>
          <div className="text-right">Text aliniat la dreapta</div>
          <div className="mt-3 mb-3">Spațiere sus și jos</div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100px", border: "1px solid #ccc" }}
          >
            Flex centrat
          </div>
        </section>

        <section className="mt-3">
          <h3>DataTable Component</h3>
          <DataTable
            rows={rows}
            columns={columns}
            isSidebarOpen={isSidebarOpen}
          />
        </section>
      </div>
    </Layout>
  );
};

export default App;
