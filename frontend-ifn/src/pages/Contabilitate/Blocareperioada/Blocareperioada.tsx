import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import DataTable from "../../../components/DataTable/DataTable";
import ActionButtons from "../../../components/Button/ActionButtons";
import { GridColDef } from "@mui/x-data-grid";
import "./Blocareperioada.scss";

const Blocareperioada: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleAddClick = () => {
    console.log("Butonul a fost apăsat");
    // Aici puteți adăuga logica pentru acțiunea de adăugare
  };

  // Date de exemplu pentru DataTable
  const rows = Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    perioada: `2023-${((index % 12) + 1).toString().padStart(2, "0")}`,
    status: index % 2 === 0 ? "Blocat" : "Deblocat",
    dataOperatiunii: new Date(2023, index % 12, (index % 28) + 1)
      .toISOString()
      .split("T")[0],
    utilizator: `User${(index % 5) + 1}`,
    prenume: `Prenume${index + 1}`,
    nume: `Nume${index + 1}`,
    contDebit: `1011${index}`,
    contCredit: `2011${index}`,
    suma: Math.floor(Math.random() * 10000) + 1000,
    explicatii: `Explicatie pentru operatiunea ${index + 1}`,
    tipValuta: index % 3 === 0 ? "RON" : index % 3 === 1 ? "EUR" : "USD",
  }));

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "perioada", headerName: "Perioada", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "dataOperatiunii", headerName: "Data Operațiunii", width: 160 },
    { field: "utilizator", headerName: "Utilizator", width: 130 },
    { field: "prenume", headerName: "Prenume", width: 130 },
    { field: "nume", headerName: "Nume", width: 130 },
    { field: "contDebit", headerName: "Cont Debit", width: 130 },
    { field: "contCredit", headerName: "Cont Credit", width: 130 },
    { field: "suma", headerName: "Suma", width: 130, type: "number" },
    { field: "explicatii", headerName: "Explicații", width: 200 },
    { field: "tipValuta", headerName: "Tip Valută", width: 130 },
  ];

  return (
    <div className="blocare-perioada">
      <h1>Blocare Perioada</h1>

      <section className="py-20">
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

      <section className="py-20">
        <h3>Action Buttons</h3>
        <ActionButtons />
      </section>

      <section className="py-20">
        <h3>Tipografie</h3>
        <h1>Bine ati venit in aplicatia IFNWeb h1</h1>
        <h2>Bine ati venit in aplicatia IFNWeb h2</h2>
        <h3>Bine ati venit in aplicatia IFNWeb h3</h3>
        <h4>Bine ati venit in aplicatia IFNWeb h4</h4>
        <h5>Bine ati venit in aplicatia IFNWeb h5</h5>
        <h6>Bine ati venit in aplicatia IFNWeb h6</h6>
        <p>
          Acesta este un paragraf de text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <a href="#">Acesta este un link</a>
      </section>

      <section className="py-20">
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

      <section className="py-20">
        <h3>Formular</h3>
        <form>
          <div className="mb-2">
            <label htmlFor="perioada">Perioada:</label>
            <input type="month" id="perioada" name="perioada" />
          </div>
          <div className="mb-2">
            <label htmlFor="status">Status:</label>
            <select id="status" name="status">
              <option value="blocat">Blocat</option>
              <option value="deblocat">Deblocat</option>
            </select>
          </div>
          <Button type="submit" variant="primary">
            Salvează
          </Button>
        </form>
      </section>

      <section className="py-20" style={{ minHeight: "200px" }}>
        <h3>DataTable Component</h3>
        <DataTable
          rows={rows}
          columns={columns}
          isSidebarOpen={isSidebarOpen}
          title="Perioade blocate"
        />
      </section>
    </div>
  );
};

export default Blocareperioada;
