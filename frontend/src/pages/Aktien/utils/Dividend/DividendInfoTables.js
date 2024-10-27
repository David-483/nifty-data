import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import Aktienkurs from "../Charts/Chartlib/Aktienkurs";
import "../CompanyInfo/CompanyInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function DividendInfoTables({ticker}) {


      const TopLineRowHeadlineTop = {
        fontFamily: "Inter-Bold",
        fontSize: "calc(8px + 0.4vw)",
        color: "white",
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: "Left",
        width:"500px",
      }

      const TopLineRowHeadline = {
        fontFamily: "inter-regular",
        fontSize: "calc(8px + 0.4vw)",
        color: "white",
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: "Left",
        width:"500px",
      }






  return (
    
<div className="CompanySecondRow">
  <div className="CompanySecondRowInfoTable1">
  <div className="CompanyTableSecondRowContainer">
     <table className="CompanyTableSecondRow">
<tbody>
<tr>
<td style={TopLineRowHeadlineTop}></td><td style={TopLineRowHeadlineTop}>1 Jahr</td><td style={TopLineRowHeadlineTop}>3 Jahre</td><td style={TopLineRowHeadlineTop}>5 Jahre</td><td style={TopLineRowHeadlineTop}>10 Jahre</td>
</tr>
<tr>
<td style={TopLineRowHeadlineTop}>Wachstum</td><td style={TopLineRowHeadline}>7,5 %</td><td style={TopLineRowHeadline}>12,4 %</td><td style={TopLineRowHeadline}>11,3 %</td><td style={TopLineRowHeadline}>16,9 %</td>
</tr>
<tr>
<td style={TopLineRowHeadlineTop}>Payout</td><td style={TopLineRowHeadline}>37,5 %</td><td style={TopLineRowHeadline}>42,4 %</td><td style={TopLineRowHeadline}>39,8 %</td><td style={TopLineRowHeadline}>41,6 %</td>
</tr>
</tbody>
</table>
</div>
  </div>

  <div className="CompanySecondRowInfoTable1">
  <div className="CompanyTableSecondRowContainer">
    
  <table className="CompanyTableSecondRow">
<tbody>
<tr>
<td style={TopLineRowHeadlineTop}>Dividendenrendite</td><td style={TopLineRowHeadline}>2,3 %</td>
</tr>
<tr>
<td style={TopLineRowHeadlineTop}>Dividende p.a.</td><td style={TopLineRowHeadline}>0,88 USD</td>
</tr>
<tr>
<td style={TopLineRowHeadlineTop}>Nächster Zahltag</td><td style={TopLineRowHeadline}>23. Juni 2022</td>
</tr>
</tbody>
</table>
</div>
  </div>
</div>


  );
}

export default DividendInfoTables;
