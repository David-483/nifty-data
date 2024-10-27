import React, { useState, useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
// import "./AutoComplete.css";

const CssTextField = styled(TextField)({
  "&.MuiInputendAdornment-root": {
    backgroundColor: "white",
  },
  "& label.Mui-focused": {
    color: "white",
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

export default function AutoComplete() {
    const [companies, setCompanies] = React.useState([]);
    const [searchText, setSearchtext] = React.useState("");
    const navigate = useNavigate(); 
    var url = process.env.REACT_APP_BACKEND_URL;


  return (
    <Autocomplete 
    freeSolo
      sx={{ width: 500}}
      options={companies}
      onInputChange={async (event, value) => {
        if(value){
          fetch(url+"/searchbar/"+value)
          .then(res => res.json())
          .then(
            (result) => {
              setCompanies(result.data);
            }
            );
          }else
          {
            setCompanies([]);
          }
      }}
    onChange={ (e, obj) => {
      setCompanies([]);
      setSearchtext("");
      if(obj?.symbol){
        if(obj?.type=="stock" || obj.type=="trust"){
          navigate(`/aktien/${obj?.symbol}`);
        }else if(obj?.type =="etf"){
          navigate(`/fonds/${obj?.symbol}`);
        }
      }
    }}
      filterOptions={x => x}
      autoComplete={true}
      autoSelect={false}
      autoHighlight
      disablePortal={false}
      clearOnEscape={true}
      getOptionLabel={(companies) => companies.symbol}
      renderOption={(props, companies) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0, } }} {...props} 
        id={companies._id}>

          <img
            loading="lazy"
            width="20"
            src={`https://financialmodelingprep.com/image-stock/${companies.symbol.toUpperCase()}.png`}
            alt=""
          />
           | {companies.name} | ({companies.symbol})
        </Box>
      )}
      renderInput={(params) => (
        <CssTextField
          sx={{ input: { color: 'rgba(255,255,255,1)', zIndex: "100" } }}
          {...params}
          InputLabelProps={{
            sx: {
              // set the color of the label when not shrinked
              color: "white",
              [`&.${inputLabelClasses.shrink}`]: {
                // set the color of the label when shrinked (usually when the TextField is focused)
                color: "orange"
              }
            }
          }}

          label=""
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
      
    />
  );
}


