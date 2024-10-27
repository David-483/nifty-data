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


function DividendInfoTableGrowth({dataInfoTableGrowth}) {


  return (
    <div className="CompanySecondRowInfoTable1">
<div className="DividendInfoTableFirstContainer">
<table className="CompanyTableSecondRow">
<tbody>
<tr>
<td style={TopLineRowHeadlineTop}></td><td style={TopLineRowHeadlineTop}>1 Jahr</td><td style={TopLineRowHeadlineTop}>3 Jahre</td><td style={TopLineRowHeadlineTop}>5 Jahre</td><td style={TopLineRowHeadlineTop}>10 Jahre</td>
</tr>
<tr>
<td style={TopLineRowHeadlineTop}>Dividenden-Wachstum</td>
<td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableGrowth.dividendsperShareGrowth}displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
<td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableGrowth.threeYDividendperShareGrowthPerShare}displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
<td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableGrowth.fiveYDividendperShareGrowthPerShare}displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
<td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableGrowth.tenYDividendperShareGrowthPerShare}displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
</tr>
<tr>
<td style={TopLineRowHeadlineTop}>Gewinn-Wachstum</td>
<td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableGrowth.epsdilutedGrowth}displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
<td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableGrowth.threeYNetIncomeGrowthPerShare}displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
<td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableGrowth.fiveYNetIncomeGrowthPerShare}displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
<td style={TopLineRowHeadline}>{<NumberFormat value={dataInfoTableGrowth.tenYNetIncomeGrowthPerShare}displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}></NumberFormat>} %</td>
</tr>
</tbody>
</table>
</div>
</div>

  );
}

export default DividendInfoTableGrowth;