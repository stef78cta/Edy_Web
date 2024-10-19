import React from "react";
import { GridSortModel } from "@mui/x-data-grid";

interface SortingProps {
  sortModel: GridSortModel;
  onSortModelChange: (model: GridSortModel) => void;
}

const Sorting: React.FC<SortingProps> = ({ sortModel, onSortModelChange }) => {
  // Implementare simplă, poate fi extinsă pentru sortare personalizată
  return null;
};

export default Sorting;
