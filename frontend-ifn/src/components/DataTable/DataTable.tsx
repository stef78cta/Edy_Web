import React, { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridSortModel,
  GridRowsProp,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { Paper, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import CustomToolbar from "./CustomToolbar";
import ActionButtons from "../Button/ActionButtons";
import "./DataTable.scss";

interface DataTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  isSidebarOpen: boolean;
  title?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  rows,
  columns,
  isSidebarOpen,
  title,
}) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    []
  );
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const totalPages = Math.ceil(rows.length / paginationModel.pageSize);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPaginationModel({ ...paginationModel, page: value - 1 });
  };

  return (
    <Paper
      className={`data-table-container ${
        isSidebarOpen ? "" : "sidebar-closed"
      }`}
    >
      <div className="action-buttons-container">
        <ActionButtons />
      </div>
      <div className="data-grid-wrapper">
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
            pagination: () => (
              <Stack
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ padding: 2 }}
              >
                <Pagination
                  count={totalPages}
                  page={paginationModel.page + 1}
                  onChange={handlePageChange}
                  color="primary"
                  showFirstButton
                  showLastButton
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      components={{
                        first: () => <span>First</span>,
                        last: () => <span>Last</span>,
                      }}
                    />
                  )}
                />
              </Stack>
            ),
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
              title,
            },
          }}
          disableColumnMenu={false}
          disableColumnSelector={false}
          disableDensitySelector={true}
          disableRowSelectionOnClick
          sortModel={sortModel}
          onSortModelChange={(model) => setSortModel(model)}
          sx={{
            "& .MuiDataGrid-main": { overflow: "auto" },
            "& .MuiDataGrid-virtualScroller": { overflow: "auto" },
            "& .MuiDataGrid-virtualScrollerContent": { minHeight: "100%" },
            "& .MuiDataGrid-cell:hover": { color: "primary.main" },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "lighten($primary-color, 40%)",
              color: "$text-color",
              fontWeight: 500,
              position: "sticky",
              top: 0,
              zIndex: 2,
            },
            "& .MuiDataGrid-columnHeaderTitle": { fontWeight: 500 },
            "& .MuiDataGrid-menuIcon": { color: "$accent-color" },
          }}
        />
      </div>
    </Paper>
  );
};

export default DataTable;
