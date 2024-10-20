import React, { useState, useRef, useEffect } from "react";
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

  const gridWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <Paper
      className={`data-table-container ${
        isSidebarOpen ? "" : "sidebar-closed"
      }`}
    >
      <div className="action-buttons-container">
        <ActionButtons />
      </div>
      <div className="data-grid-wrapper" ref={gridWrapperRef}>
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
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model)}
          sx={{
            "& .MuiDataGrid-main": {
              overflow: "auto",
            },
            "& .MuiDataGrid-virtualScroller": {
              overflow: "auto",
            },
            "& .MuiDataGrid-virtualScrollerContent": {
              minHeight: "100%",
            },
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "lighten($primary-color, 40%)",
              color: "$text-color",
              fontWeight: 500,
              position: "sticky",
              top: 0,
              zIndex: 2,
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 500,
            },
            "& .MuiDataGrid-menuIcon": {
              color: "$accent-color",
            },
          }}
        />
      </div>
    </Paper>
  );
};

export default DataTable;
