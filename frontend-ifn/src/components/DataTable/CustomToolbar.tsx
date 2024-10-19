import React from "react";
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

const CustomToolbar: React.FC = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport
        printOptions={{ disableToolbarButton: true }}
        csvOptions={{ disableToolbarButton: false }}
      />
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
