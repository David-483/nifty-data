import React from "react";
import NumberFormat from "react-number-format";

import "./Dividend.css"



// Style für Tabellen
const TopLineRowHeadlineTop = {
    fontFamily: "Inter-Bold",
    fontSize: "calc(8px + 0.4vw)",
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "Left",
  }
  
  const TopLineRowHeadline = {
    fontFamily: "inter-regular",
    fontSize: "calc(8px + 0.4vw)",
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "Left",
  }

  const UnderLineRow = {
    fontFamily: "Inter-regular",
    fontSize: "calc(8px + 0.4vw)",
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "Left",
  }


function DividendTableQuarter({dataDividendQuarter}) {

  return (
  <div style={{margin:"auto"}} className="CompanyTableSecondRowContainer">
     <table className="CompanyTableSecondRow">
     <tbody>
<tr>
<td style={TopLineRowHeadlineTop}>Ex-Date</td><td style={TopLineRowHeadlineTop}>Dividende</td><td style={TopLineRowHeadlineTop}>Dividende <br></br>bereinigt</td><td style={TopLineRowHeadlineTop}>Ausschüttungs-datum</td>
</tr>

{dataDividendQuarter.map((dataDividendQuarter, i) => <tr key={i}>
<td style={UnderLineRow}>{dataDividendQuarter.date} </td>
<td style={UnderLineRow}>{<NumberFormat value={dataDividendQuarter.dividend} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} </td>
<td style={UnderLineRow}>{<NumberFormat value={dataDividendQuarter.dividendAdj} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} </td>
<td style={UnderLineRow}>{dataDividendQuarter.paymentDate} </td>
   </tr> )}
</tbody>
</table>
</div>



  );
}

export default DividendTableQuarter;