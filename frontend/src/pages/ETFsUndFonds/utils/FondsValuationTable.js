import "./FondsInfotable.css";
import React from "react";
import { Rating } from "@mui/material";

function FondsValuationTable({data}) {
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
  <td style={TopLineRow}>Kurs/Umsatz</td>
  <td style={UnderLineRow}>{data.ETF_Data.Valuations_Growth.Valuations_Rates_Portfolio["Price/Sales"]}</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Kurs/Gewinn</td>
  <td style={UnderLineRow}>{data.ETF_Data.Valuations_Growth.Valuations_Rates_Portfolio["Price/Prospective Earnings"]}</td>

  </tr>

  <tr>
  <td style={TopLineRow}>Kurs/CF</td>
  <td style={UnderLineRow}>{data.ETF_Data.Valuations_Growth.Valuations_Rates_Portfolio["Price/Cash Flow"]}</td>
  </tr>
  
  <tr>
  <td style={TopLineRow}>Kurs/Buch</td>
  <td style={UnderLineRow}>{data.ETF_Data.Valuations_Growth.Valuations_Rates_Portfolio["Price/Book"]}</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Gewinnwachstum (e)</td>
  <td style={UnderLineRow}>{data.ETF_Data.Valuations_Growth.Growth_Rates_Portfolio["Long-Term Projected Earnings Growth"]} %</td>
  </tr>
      
  <tr>
  <td style={TopLineRow}>Gewinnachstum (h) </td>
  <td style={UnderLineRow}>{data.ETF_Data.Valuations_Growth.Growth_Rates_Portfolio["Historical Earnings Growth"]} %</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Umsatzwachstum</td>
  <td style={UnderLineRow}>{data.ETF_Data.Valuations_Growth.Growth_Rates_Portfolio["Sales Growth"]} %</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Cashflow Wachstum</td>
  <td style={UnderLineRow}>{data.ETF_Data.Valuations_Growth.Growth_Rates_Portfolio["Cash-Flow Growth"]} %</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Performance 3 Jahre</td>
  <td style={UnderLineRow}>{data.ETF_Data.Performance.Returns_3Y} %</td>
  </tr>

  <tr>
  <td style={TopLineRow}>Performance 5 Jahre</td>
  <td style={UnderLineRow}>{data.ETF_Data.Performance.Returns_5Y} %</td>
  </tr>
  
  </tbody>
  </table>
  </div>
    </div>
  
  
    );
  }

export default FondsValuationTable;

