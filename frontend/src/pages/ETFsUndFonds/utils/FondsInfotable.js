import "./FondsInfotable.css";
import "./topten.css";
import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

function FondsInfotable({data}) {

  const TopLineRow = {
    fontFamily: "Inter-regular",
    fontSize: 15,
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom:15,
    textAlign: "Left",
  }
  
  const UnderLineRow = {
    fontFamily: "Inter-bold",
    fontSize: 15,
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "Right",
  }
  
    return (
  


      
      

    <div className="CompanySecondRowInfoTable1">


    <div className="CompanyTableFirstRowContainer">
    
       <table className="CompanyTableThirdRow">
  <tbody>




 <tr>
 <td style={TopLineRow}>Kategorie</td>
  <td style={UnderLineRow}> {data.General.Category}</td>
 </tr>


  <tr>
  <td style={TopLineRow}>Fondsdomizil</td>
  <td style={UnderLineRow}>{data.ETF_Data.Domicile}</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Benchmark</td>
  <td style={UnderLineRow}>{data.ETF_Data.MorningStar.Category_Benchmark}</td>
  </tr>
  
  <tr>
  <td style={TopLineRow}>Kosten (TER)</td>
  <td style={UnderLineRow}>{data.ETF_Data.NetExpenseRatio*100} %</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Auferlegungs Datum</td>
  <td style={UnderLineRow}>{data.ETF_Data.Inception_Date}</td>
  </tr>
      
  <tr>
  <td style={TopLineRow}>Anzahl Holdings</td>
  <td style={UnderLineRow}>{data.ETF_Data.Holdings_Count < 10 ? "-"  : data.ETF_Data.Holdings_Count}</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Ausschüttung</td>
  <td style={UnderLineRow}>{data.ETF_Data.Yield}</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Ausschüttungsintervall</td>
  <td style={UnderLineRow}>{data.ETF_Data.Dividend_Paying_Frequency}</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Morningstar Rating</td>
  <td style={UnderLineRow}><Rating name="read-only" value= {data.ETF_Data.MorningStar.Ratio} readOnly style={{marginRight:"", fontSize:"1rem"}} /></td>
  </tr>

  <tr>
  <td style={TopLineRow}>Nachhaltigkeits Rating</td>
  <td style={UnderLineRow}><Rating name="read-only" value={data.ETF_Data.MorningStar.Sustainability_Ratio} readOnly style={{marginRight:"", fontSize:"1rem"}} /></td>
  </tr>
  
  </tbody>
  </table>
  </div>
    </div>
  
  

    );
  }

export default FondsInfotable;

