import React, { useState } from "react";
import DataTable from "../../../components/DataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import "./NoteContabile.scss";

const NoteContabile: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    <div className="note-contabile">
      <h1>Note Contabile</h1>
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
