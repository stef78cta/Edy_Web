import React from "react";
import { GridFilterModel } from "@mui/x-data-grid";

interface FiltersProps {
  filterModel: GridFilterModel;
  onFilterModelChange: (model: GridFilterModel) => void;
}

const Filters: React.FC<FiltersProps> = ({
  filterModel,
  onFilterModelChange,
}) => {
  // Implementare simplă, poate fi extinsă pentru filtre personalizate
  return null;
};

export default Filters;
