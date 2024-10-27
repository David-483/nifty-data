import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import Aktienkurs from "../Charts/Chartlib/Aktienkurs";
import "./CompanyInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

function StockPerformanceInfoTable({performanceDatastockChangeData, performanceDatacompanyQuoteData}) {



const FixedLine = {
  fontFamily: "inter-bold",
fontSize: "calc(8px + 0.4vw)",
color: "white",
paddingLeft:5,
whiteSpace: "nowrap"
}

const FixedLineRight = {
  fontFamily: "inter-bold",
  fontSize: "calc(8px + 0.4vw)",
  color: "white",
  paddingLeft: 10,
  whiteSpace: "nowrap"
}

const FlexLine = {
  fontFamily: "Inter-regular",
  fontSize: "calc(8px + 0.4vw)",
  color: "white",
  paddingRight: 10,

}

const FlexLineRightNeutral = {
  fontFamily: "Inter-regular",
  fontSize: "calc(8px + 0.4vw)",
  color: "white",
  paddingRight: 5,
  textAlign: "right",
  whiteSpace: "nowrap"
}

const FlexLineRightNegativ = {
  fontFamily: "Inter-regular",
  fontSize: "calc(8px + 0.4vw)",
  color: "#FF0000",
  paddingRight: 5,
  textAlign: "right",
  whiteSpace: "nowrap"
}

const FlexLineRightPositiv = {
  fontFamily: "Inter-regular",
  fontSize: "calc(8px + 0.4vw)",
  color: "#00ff00",
  paddingRight: 5,
  textAlign: "right",
  whiteSpace: "nowrap"
}

const TopLineRow = {
  fontFamily: "Inter-bold",
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
  return (
<>
<div className="CompanySecondRow">


     <div className="CompanyTableSecondRowContainer">
     <table className="CompanyTableSecondRow">
<tbody>
<tr>
<td style={FixedLine}>1 Tag</td>
<td style={performanceDatastockChangeData["1D"] > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}> {<NumberFormat value={performanceDatastockChangeData["1D"]?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %</td>

<td style={FixedLineRight}>5 Tage</td>
<td style={performanceDatastockChangeData["5D"] > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData["5D"]?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %</td>
</tr>
<tr>
<td style={FixedLine}>1 Monat</td>
<td style={performanceDatastockChangeData["1M"] > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData["1M"]?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %</td>

<td style={FixedLineRight}>6 Monate</td>
<td style={performanceDatastockChangeData["6M"] > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData["6M"]?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %</td>
</tr>
<tr>
<td style={FixedLine}>YTD</td>
<td style={performanceDatastockChangeData.ytd > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData.ytd?.toFixed(2)} displayType={"text"} decimalScale={2} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %</td>

<td style={FixedLineRight}>1 Jahr</td>
<td style={performanceDatastockChangeData["1Y"] > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData["1Y"]?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %</td>
</tr>
<tr>
<td style={FixedLine}>3 Jahre</td>
<td style={performanceDatastockChangeData["3Y"] > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData["3Y"]?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %</td>

<td style={FixedLineRight}>5 Jahre</td>
<td style={performanceDatastockChangeData["5Y"] > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData["5Y"]?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>}%</td>
</tr>
<tr>
<td style={FixedLine}>10 Jahre</td>
<td style={performanceDatastockChangeData["10Y"] > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData["10Y"]?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>}%</td>

<td style={FixedLineRight}>Seit Start</td>
<td style={performanceDatastockChangeData.max > 0 ? FlexLineRightPositiv : FlexLineRightNegativ}>{<NumberFormat value={performanceDatastockChangeData.max?.toFixed(2)} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %</td>

</tr>
</tbody>
</table>
</div>

<div className="CompanyTableSecondRowContainer">
<table className="CompanyTableSecondRow">
<tbody>

<tr>
<td style={FixedLine}>Jahreshoch</td>
<td style={FlexLineRightNeutral}>{<NumberFormat value={performanceDatacompanyQuoteData.yearHigh} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} {performanceDatacompanyQuoteData.currencySymbol} ({<NumberFormat value={performanceDatacompanyQuoteData.yearHighChange} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %)</td>
</tr>
<tr>
<td style={FixedLine}>Jahrestief</td>
<td style={FlexLineRightNeutral}>{<NumberFormat value={performanceDatacompanyQuoteData.yearLow} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} {performanceDatacompanyQuoteData.currencySymbol} ({<NumberFormat value={performanceDatacompanyQuoteData.yearLowChange} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} %)</td>
</tr>
<tr>
<td style={FixedLine}>SMA 50</td>
<td style={FlexLineRightNeutral}>{<NumberFormat value={performanceDatacompanyQuoteData.priceAvg50} decimalScale={2} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} {performanceDatacompanyQuoteData.currencySymbol}</td>
</tr>
<tr>
<td style={FixedLine}>SMA 200</td>
<td style={FlexLineRightNeutral}>{<NumberFormat value={performanceDatacompanyQuoteData.priceAvg200}  decimalScale={2} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} {performanceDatacompanyQuoteData.currencySymbol}</td>
</tr>
<tr>
<td style={FixedLine}>Volumen</td>
<td style={FlexLineRightNeutral}>{<NumberFormat value={performanceDatacompanyQuoteData.volume} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} Stück</td>


</tr>


</tbody>
</table>
</div>

</div>


</>

  );
}

export default StockPerformanceInfoTable;
