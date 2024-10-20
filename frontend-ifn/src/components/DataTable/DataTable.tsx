import React, { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridSortModel,
  GridRowsProp,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import CustomToolbar from "./CustomToolbar";
import ActionButtons from "./ActionButtons";
import Pagination from "./Pagination";
import "./DataTable.scss";

interface DataTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  isSidebarOpen: boolean;
}

const DataTable: React.FC<DataTableProps> = ({
  rows,
  columns,
  isSidebarOpen,
}) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    []
  );
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  return (
    <Paper
      className={`data-table-container ${
        isSidebarOpen ? "" : "sidebar-closed"
      }`}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5, 10, 15, 20, 25, 30, 50, 75, 100]}
        checkboxSelection
        disableMultipleRowSelection
        onRowSelectionModelChange={(
          newSelectionModel: GridRowSelectionModel
        ) => {
          setSelectionModel(newSelectionModel);
        }}
        rowSelectionModel={selectionModel}
        slots={{
          toolbar: CustomToolbar,
          pagination: Pagination,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        disableColumnMenu={false}
        disableColumnSelector={false}
        disableDensitySelector={false}
        disableRowSelectionOnClick
        autoHeight
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .MuiDataGrid-columnHeaders": {
            position: "sticky",
            top: 0,
            zIndex: 1,
          },
          "& .MuiDataGrid-menuIcon": {
            color: "$accent-color",
          },
          "& .MuiDataGrid-main": {
            overflow: "visible", // Permite derularea orizontală
          },
        }}
      />
      <ActionButtons />
    </Paper>
  );
};

export default DataTable;
