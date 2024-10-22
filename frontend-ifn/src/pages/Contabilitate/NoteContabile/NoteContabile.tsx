import React, { useState } from "react";
import DataTable from "../../../components/DataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import "./NoteContabile.scss";

const NoteContabile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Date de exemplu pentru DataTable
  const rows = Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    dataOperatiunii: new Date(2023, index % 12, (index % 28) + 1)
      .toISOString()
      .split("T")[0],
    numarNota: `NC${(index + 1).toString().padStart(4, "0")}`,
    prenume: `Prenume${index + 1}`,
    nume: `Nume${index + 1}`,
    contDebit: `1011${index}`,
    contCredit: `2011${index}`,
    suma: Math.floor(Math.random() * 10000) + 1000,
    explicatii: `Explicatie pentru nota contabila ${index + 1}`,
    tipValuta: index % 3 === 0 ? "RON" : index % 3 === 1 ? "EUR" : "USD",
    utilizator: `User${(index % 5) + 1}`,
  }));

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "dataOperatiunii", headerName: "Data Operațiunii", width: 160 },
    { field: "numarNota", headerName: "Număr Notă", width: 130 },
    { field: "prenume", headerName: "Prenume", width: 130 },
    { field: "nume", headerName: "Nume", width: 130 },
    { field: "contDebit", headerName: "Cont Debit", width: 130 },
    { field: "contCredit", headerName: "Cont Credit", width: 130 },
    { field: "suma", headerName: "Suma", width: 130, type: "number" },
    { field: "explicatii", headerName: "Explicații", width: 200 },
    { field: "tipValuta", headerName: "Tip Valută", width: 130 },
    { field: "utilizator", headerName: "Utilizator", width: 130 },
  ];

  return (
    <div className="note-contabile">
      <h3>Note Contabile</h3>
      <section className="py-20" style={{ minHeight: "200px" }}>
        <h3>DataTable Component</h3>
        <DataTable
          rows={rows}
          columns={columns}
          isSidebarOpen={isSidebarOpen}
          title="Note contabile"
        />
      </section>
    </div>
  );
};

export default NoteContabile;
