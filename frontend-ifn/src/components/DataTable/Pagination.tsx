import React from "react";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { TablePagination } from "@mui/material";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <TablePagination
      component="div"
      count={pageCount}
      page={page}
      onPageChange={(event, value) => apiRef.current.setPage(value)}
      rowsPerPage={apiRef.current.state.pagination.paginationModel.pageSize}
      rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 50, 75, 100]}
      onRowsPerPageChange={(event) =>
        apiRef.current.setPageSize(Number(event.target.value))
      }
    />
  );
}

const Pagination: React.FC = () => {
  return <CustomPagination />;
};

export default Pagination;
