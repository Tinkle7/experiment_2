import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "sectionName", label: "sectionName", minWidth: 170 },

  {
    id: "Totalquestions",
    label: "Total questions",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "TotalquestionsAttempted",
    label: "Total questions Attempted",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "sectionTime",
    label: "section Time\u00a0(min)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "sectionTimeTaken",
    label: "section Time Taken\u00a0(min)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "sectionScore",
    label: "section Score",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "studentScore",
    label: "student Score",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  sectionName,
  Totalquestions,
  TotalquestionsAttempted,
  sectionTime,
  sectionTimeTaken,
  sectionScore,
  studentScore
) {
  return {
    sectionName,
    Totalquestions,
    TotalquestionsAttempted,
    sectionTime,
    sectionTimeTaken,
    sectionScore,
    studentScore,
  };
}
function subtotalsectionScore(items) {
  return items
    .map(({ sectionScore }) => sectionScore)
    .reduce((sum, i) => sum + i, 0);
}
function subtotalstudentScore(items) {
  return items
    .map(({ studentScore }) => studentScore)
    .reduce((sum, i) => sum + i, 0);
}

const rows = [
  createData("YARN", 4, 4, 30, 30, 10, 7),
  createData("NODE", 4, 4, 30, 30, 10, 7),
  createData("REACT", 4, 4, 30, 30, 10, 7),
];

const invoiceSubtotalsectionScore = subtotalsectionScore(rows);
const invoiceSubtotalstudentScore = subtotalstudentScore(rows);

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
