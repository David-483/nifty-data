import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import Aktienkurs from "../Charts/Chartlib/Aktienkurs";
import "../CompanyInfo/CompanyInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ValuationAnalystenRatings({dataUpgradeDowngrade}) {


    
    const TopLineRow = {
      fontFamily: "Inter-Bold",
      fontSize: 15,
      color: "white",
      paddingRight: 5,
      paddingLeft: 5,
      textAlign: "Left",
    }

    const UnderLineRow = {
        fontFamily: "inter-regular",
        fontSize: 15,
        color: "white",
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: "Left",
      }

      const UnderLineRow2 = {
        fontFamily: "inter-regular",
        fontSize: 15,
        color: "white",
        paddingRight: 5,
        paddingLeft: 30,
        textAlign: "Left",
      }

      const UnderLineRow3 = {
        fontFamily: "inter-regular",
        fontSize: 15,
        color: "white",
        paddingRight: 5,
        paddingLeft: 50,
        textAlign: "Left",
      }

    const TopLineRowPreiszielTop = {
        fontFamily: "Inter-Bold",
        fontSize: 15,
        color: "white",
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: "Left",
        width:"100px",
      }

      const TopLineRowPreisziel = {
        fontFamily: "inter-regular",
        fontSize: 15,
        color: "white",
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: "Left",
        width:"100px",
      }

      const TopLineRowPotentialTop = {
        fontFamily: "Inter-Bold",
        fontSize: 15,
        color: "white",
        paddingRight: 5,
        paddingLeft: 30,
        textAlign: "Left",
        width:"100px",
      }


      const TopLineRowHeadlineTop = {
        fontFamily: "Inter-Bold",
        fontSize: 15,
        color: "white",
        paddingRight: 5,
        paddingLeft: 50,
        textAlign: "Left",
        width:"500px",
      }

      const TopLineRowHeadline = {
        fontFamily: "inter-regular",
        fontSize: 15,
        color: "white",
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: "Left",
        width:"500px",
      }







  return (



    <div className="CompanyTableFirstRowContainer">
    <table className="CompanyTableThirdRow">

<tbody>
<tr>
<td style={TopLineRowPreiszielTop}>Altes Grading</td><td style={TopLineRowPotentialTop}>Neues Grading</td><td style={TopLineRowHeadlineTop}>Titel</td><td style={TopLineRow}>Unternehmen</td><td style={TopLineRow}>Datum</td>
</tr>

{dataUpgradeDowngrade.map((dataUpgradeDowngrade, i) => <tr key={i}>
<td style={UnderLineRow}>{dataUpgradeDowngrade.previousGrade} </td>
<td style={UnderLineRow2}>{dataUpgradeDowngrade.newGrade} </td>
<td style={UnderLineRow3}><div className="UpgradeTableScroll">{dataUpgradeDowngrade.newsTitle}</div> </td>
<td style={UnderLineRow}>{dataUpgradeDowngrade.gradingCompany}</td>
<td style={UnderLineRow}>{dataUpgradeDowngrade.publishedDate.substr(0,10)}</td>
   
   
   </tr> )}




</tbody>
</table>
</div>


  );
}

export default ValuationAnalystenRatings;
