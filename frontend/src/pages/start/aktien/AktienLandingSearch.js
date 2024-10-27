import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Link } from "react-router-dom";
import './aktienLandingSearch.css'
import NumberFormat from "react-number-format";
import SkeletonTable from "./SkeletonTable";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "white",
    fontSize: 17,
    fontWeight: 800,
    letterSpacing: 1.1,
    borderRadius: "0px 0px 0px 0px",
    "&:Mui-active": {
      backgroundColor: "blue !important",
      color: "yellow",
    },
    "&:first-of-type": {
      borderRadius: "15px 0px 0px 0px",
    },

    "&:last-child": {
      borderRadius: "0px 15px 0px 0px",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    color: "white",
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

const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
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
    label: "Unternehmen",
  },
  {
    id: "kurs",
    numeric: true,
    disablePadding: true,
    label: "Kurs",
  },
  {
    id: "marketCap",
    numeric: true,
    disablePadding: true,
    label: "MCAP",
  },
  {
    id: "eps",
    numeric: true,
    disablePadding: true,
    label: "Gewinn je Aktie",
  },
  {
    id: "pe",
    numeric: true,
    disablePadding: true,
    label: "KGV",
  },

];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
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
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowsDisplay, setRowsDisplay] = useState();
  const [searched, setSearched] = React.useState("");
  const [isLoading, setLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  var baseURL = process.env.REACT_APP_BACKEND_URL;

  const { topic } = useParams();


  const fetchData = async (url) => {
    setIsError(false);
    setLoading(true);
    try {
      const result = await axios(url);
      setRows(result.data.myData);
      setRowsDisplay(result.data.myData);

    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if(allowedListCategories.includes(topic)){
      var url = baseURL+`/aktienfinder/topics/${topic}`;
    }else{
      var url = baseURL+`/aktienfinder/countries/${topic}`;
    }
    fetchData(url);
  }, []);

  useEffect(() => {
    if(allowedListCategories.includes(topic)){
      var url = baseURL+`/aktienfinder/topics/${topic}`;
    }else{
      var url = baseURL+`/aktienfinder/countries/${topic}`;
    }
    fetchData(url);
  }, [topic]);

  const onChangeSearchbar = (e) => {
    setSearched(e.target.value);
    const filteredRows = rows.filter((rows) => {
      return (
        rows.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        rows.symbol.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setRowsDisplay(filteredRows);
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
    // const emptyRows =
    // page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;



  const allowedListCategories = [
    "luxus",
    "sports",
    "railroads",
    "sin",
    "cars",
    "food",
    "gaming",
    "green",
    "kids",
    "daily",
  ];

  const allowedListCountries = [
    "Deutschland",
    "USA",
    "Kanada",
    "China",
    "Japan",
    "England",
    "Frankreich",
    "Schweiz"
  ];

  if (allowedListCategories.includes(topic) || allowedListCountries.includes(topic) ) {
    var imageCategory = topic.replace(" ", "_");
   
    return (
      <>
        <div key={topic}>
          <div className="landing-page-header-container">
            <img
              className="landing-page-header-image"
              src={`/img/aktiencategories/aktiencategory_${imageCategory}.jpg`}
            ></img>
          </div>

        <div className="tableContainer">
          <div className="landing-page-search-container">
            <CssTextField
              label=""
              placeholder="Suche"
              sx={{ input: { color: "white", width: "400px"},  }}
              
              value={searched}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ color: "white" }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={onChangeSearchbar}
            />
          </div>
          {isLoading ? <div style={{width: "90%", margin: "auto"}}> <SkeletonTable /> </div> : 
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
                  rowCount={rowsDisplay.length}
                />
                <TableBody>
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort(rowsDisplay, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                    .map((row, index) => {
                      return (
                        <StyledTableRow hover tabIndex={-1} key={index}>
                          <StyledTableCell 
                          color="white"
                          >
                            <Link to={`/aktien/${row.symbol}`}>{row.name}</Link>
                          </StyledTableCell>
                          <StyledTableCell align="right">

                          <NumberFormat
                    value={row.kurs}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    isNumericString={true}
                  /> 
                          {' '}{row.exChangeSymbol}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                             <NumberFormat
                    value={row.marketCap} 
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    isNumericString={true}
                  /> 

{' '}Mrd. {row.exChangeSymbol}
                          </StyledTableCell>
                          <StyledTableCell align="right">


                          <NumberFormat
                    value={row.eps}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    isNumericString={true}
                  /> 
                  {' '}{row.exChangeSymbol}

                          </StyledTableCell>
                          <StyledTableCell align="right">


                          <NumberFormat
                    value={row.pe} 
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    isNumericString={true}
                  /> 
                            {' '}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  {/* {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <StyledTableCell colSpan={6} />
                    </TableRow>
                  )} */}
                </TableBody>

                  <StyledTablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    labelRowsPerPage='Aktien pro Seite'
                    labelDisplayedRows={({ from, to, count }) => `Zeige ${from}-${to} von ${count} Aktien`}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />

              </Table>
            </TableContainer>
          </div>
        }
        </div>
        
        </div>
      </>
    );
  }
else{
  return (
  <div> ZOMG!</div>
  )
}
}


