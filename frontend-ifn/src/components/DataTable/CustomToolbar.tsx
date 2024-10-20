import React from "react";
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface CustomToolbarProps {
  title?: string;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({ title }) => {
  return (
    <GridToolbarContainer className="custom-toolbar">
      <Box className="toolbar-content">
        <Box className="toolbar-buttons">
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
        </Box>
        <Typography variant="h6" component="div" className="toolbar-title">
          {title}
        </Typography>
        <Box className="toolbar-search">
          <GridToolbarQuickFilter className="quick-filter" />
        </Box>
      </Box>
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
