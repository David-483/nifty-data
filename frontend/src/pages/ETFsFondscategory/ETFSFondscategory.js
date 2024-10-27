import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "white",
    fontSize: 17,
    fontWeight: 800,
    letterSpacing: 1.1,
    borderRadius: "0px 0px 0px 0px",

    "&:Mui-active": {
      backgroundColor: "blue !important",
      color: "yellow"
    },
    '&:first-of-type': {
      borderRadius: "15px 0px 0px 0px",
    },

    '&:last-child': {
      borderRadius: "0px 15px 0px 0px",
    },




  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    color: "white",
    selected: "red",
  },
  "&:selected": {
    backgroundColor: "blue !important",
  },
}));



const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: "blue",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: "0px",
    borderBottom: "0",
  },
  "&:last-child": {
    borderBottom: "0",
  },
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.30) !important",
  },
  "&$selected, &$selected:hover": {
    backgroundColor: "purple",
  },
  transition: "0.3s ease",
}));

const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
  color: "rgba(255,255,255,0.5)",
  "&.Mui-active": {
    color: "rgba(255,255,255,1)",
  },
  "&:hover": {
    color: "rgba(255, 255, 255, 1) !important",
  },
  transition: "0.2s ease",
}));

const StyledTablePagination = styled(TablePagination)(({theme}) => ({
  color: "white",
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    // color: "white",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    // borderBottomColor: "orange",
    border: "none"
  },
  "& fieldset": {
    borderRadius: `30px 30px 30px 30px`,
    backgroundColor: "rgba(0,0,0,0.5)",
    border: "none"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      transition: "all 0.5s ease",
      // borderColor: "white",
      border: "none"
    },
    "&:hover fieldset": {
      backgroundColor: "rgba(0,0,0,0.4)",
      transition: "all 0.5s ease",
      border: "none"
    },
    "&.Mui-focused fieldset": {
      border: "none"
    },
  },
});


function createData(name, company, totalvalue, totalholdings, lastUpdated) {
  return {
    name,
    company,
    totalvalue,
    totalholdings,
    lastUpdated,
  };
}

const rows = [
  createData("Warren Buffett", "Warren Buffett Inc", 48, 67, "2019.04.04"),
  createData("David Bregulla", "Nifty", 25.0, 51, "2029.03.04"),
  createData("Maximilain Eilers", "Nifty", 16.0, 24, "2012.02.04"),
  createData("Lukas Gesche", "Nifty", 6.0, 24, "2019.02.04"),
  createData("Tobi Sippel", "Kaiserslautern", 16.0, 49, "2014.02.04"),
  createData("Matheo Raab", "Warren Buffett", 3.2, 87, "2019.02.04"),
  createData("Boris Tomiak", "Kaiserslautern Buffett", 9.0, 37, "2015.02.04"),
  createData("Matheus Kich", "Borussia", 0.0, 94, "2016.02.04"),
  createData("Bill Gates", "Mercedes", 26.0, 65, "2017.02.04"),
  createData("Cro Sido", "Warren Buffett", 0.2, 98, "2018.02.04"),
  createData("Marshmallow", "Warren Buffett", 0, 81, "2019.02.04"),  
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "company",
    numeric: false,
    disablePadding: true,
    label: "Unternehmen",
  },
  {
    id: "totalvalue",
    numeric: true,
    disablePadding: true,
    label: "Totales Vermögen",
  },
  {
    id: "totalholdings",
    numeric: true,
    disablePadding: true,
    label: "Anzahl Holdings",
  },
  {
    id: "lastUpdated",
    numeric: true,
    disablePadding: true,
    label: "Letztes Update",
  },
];

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

    
  

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
            style={{width:'20%'}}
          >
            <StyledTableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </StyledTableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(40);
  const [rowsDisplay, setRowsDisplay] = useState(rows);
  const [searched, setSearched] = React.useState("");

  const onChangeSearchbar = (e) => {
    setSearched(e.target.value);

    const filteredRows = rows.filter((rows) => {
      
      return rows.name.toLowerCase().includes(e.target.value.toLowerCase()) || rows.company.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRowsDisplay(filteredRows);

    // const filteredRows = rowsDisplay.filter((row) => {
    //   return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    // });
    // setRows(filteredRows);
  };


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const { category } = useParams();


    const allowedList = [
      "dax",
      "dividende",
      "emergingmarkets",
      "eurostoxx50",
      "msciworld",
      "nasdaq",
      "sp500"
    ]
  
  if(allowedList.includes(category)){
      return (
    <>
    <div>
      <div className="landing-page-header-container">
        <img
          className="landing-page-header-image"
          src={`/img/etfsfondscategory/Fondskategorien_${category}.jpg`}
        ></img>
      </div>


      <div className="tableContainer">
      <div className="landing-page-search-container">

      <CssTextField 
      label=""
      placeholder="Suche" 
      sx={{ input: { color: 'white', width: "400px" } }}
      value={searched}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ color: "white"}}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      
      onChange={onChangeSearchbar}
      />

        </div>


        <div className="landing-page-table-container">
          
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
                {rowsDisplay.slice().sort(getComparator(order, orderBy))
                  
                  .map((row, index) => {

                    return (
                      <StyledTableRow
                        hover
                        tabIndex={-1}
                        key={index}
                      >
                        <StyledTableCell
                          color="white"
                        >
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.company}</StyledTableCell>
                        <StyledTableCell align="right">{row.totalvalue}</StyledTableCell>
                        <StyledTableCell align="right">{row.totalholdings}</StyledTableCell>
                        <StyledTableCell align="right">{row.lastUpdated}</StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <StyledTableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <StyledTablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    labelRowsPerPage='Fonds pro Seite'
                    labelDisplayedRows={({ from, to, count }) => `Zeige ${from}-${to} von ${count} Fonds`}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
            </Table>
          </TableContainer>
        </div>
      </div>
      </div>
    </>
  );
 
  } else{
    return (
      <>
        Leider konnten wir hier nichts finden.
      </>
    );
  }



}
