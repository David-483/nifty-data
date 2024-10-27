import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import Aktienkurs from "../Charts/Chartlib/Aktienkurs";
import "./CompanyInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

function Biopic({biopicData}) {
  return (
<div className="CompanySecondRow" style={{marginBottom: "50px"}}>
<div className="CompanyTableSecondRowContainer" style={{maxHeight: "500px", overflow: "scroll", backgroundColor: "rgba(0,0,0,0.7)"}}>

  <div style={{color: "white", lineHeight: "calc(15px + 0.5vw)", fontSize: "calc(10px + 0.2vw)"}}> 
  <div style={{color: "white", marginTop: "10px", marginBottom: "10px", fontWeight: "900", fontSize: "calc(12px + 0.5vw)"}}>
    Historie
    </div>
    
    {Object.keys(biopicData.historie).map((e, i) => (
    <React.Fragment key={i}>
      <div style={{ marginBottom: "20px" }}>
        {biopicData.historie[i]}
      </div>
    </React.Fragment>
  ))}

    <div style={{color: "white", marginBottom: "10px", marginTop: "50px", fontWeight: "900", fontSize: "calc(12px + 0.5vw)"}}>
    Business
    </div>
    {Object.keys(biopicData.business).map((e, i) => (
    <React.Fragment key={i}>
      <div style={{ marginBottom: "20px" }}>
        {biopicData.business[i]}
      </div>
    </React.Fragment>
  ))}
   
    <div style={{color: "white", marginBottom: "10px", marginTop: "50px", fontWeight: "900", fontSize: "calc(12px + 0.5vw)"}}>
    Burggraben
    </div>
    {Object.keys(biopicData.moat).map((e, i) => (
    <React.Fragment key={i}>
      <div style={{ marginBottom: "20px" }}>
        {biopicData.moat[i]}
      </div>
    </React.Fragment>
  ))}
    </div>
  </div>

</div>


  );
}

export default Biopic;
