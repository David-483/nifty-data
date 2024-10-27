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


function DividendInfoTableAllgemein({dataInfoTableAllgemein}) {


  return (
<div className="DividendInfoTableSecondContainer">
<div className="DividendInfoTableFirstContainer">
  <table className="CompanyTableSecondRow">
<tbody>
<tr>
<td style={TopLineRowHeadlineTop}>Dividendenrendite (TTM)</td><td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableAllgemein.dividendYieldPercentageTTM} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>

</tr>
<tr>
<td style={TopLineRowHeadlineTop}>Dividende p.a. (TTM)</td><td style={TopLineRowHeadline}>{<NumberFormat value={parseFloat(dataInfoTableAllgemein.dividendPerShareTTM).toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} {dataInfoTableAllgemein.currency}</td>
</tr>
<tr>
<td style={TopLineRowHeadlineTop}>Payout Ratio (TTM)</td><td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableAllgemein.payoutRatioTTM} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
</tr>
</tbody>
</table>
</div>
</div>


  );
}

export default DividendInfoTableAllgemein;