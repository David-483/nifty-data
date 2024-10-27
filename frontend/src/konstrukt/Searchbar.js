import React, { useState, useEffect, Fragment } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



function Searchbar() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [companies, setCompanies] = React.useState([]);
  const [searchText, setSearchtext] = React.useState("apple");

  useEffect(()=>{
    fetch(`{process.env.REACT_APP_BACKEND_URL}/searchbar/"`+searchText)
    // fetch("http://localhost:3001/searchbar/apple")
    .then(res => res.json())
      .then(
        (result) => {
          setCompanies(result.data);
        }
      );
  },[searchText]);


  return (
<div className="search-bar-container">


    <div className="search-bar">

  <input type="text" placeholder="Search" id="autocomplete" value={searchText} onChange={e => setSearchtext(e.target.value)}></input>
    
   </div>
   <div>

     <ul className="suggestions">

    {companies.map((myValue, index) => (
      <li >{myValue.name}</li>
      ))}
    </ul>
      </div>
</div>
  )
}

export default Searchbar;
