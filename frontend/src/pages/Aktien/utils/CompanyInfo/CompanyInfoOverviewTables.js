import "./CompanyInfo.css";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";




function CompanyInfoOverviewTables({quickinfoData}) {

  



const FixedLine = {
fontFamily: "Inter-bold",
fontSize: "calc(8px + 0.4vw)",
color: "white",
paddingLeft:5,
}

const FixedLineRight = {
  fontFamily: "Inter-bold",
  fontSize: "calc(8px + 0.4vw)",
  color: "white",
  paddingLeft: 10,
}

const FlexLine = {
  fontFamily: "inter-regular",
  fontSize: "calc(8px + 0.4vw)",
  color: "white",
  paddingRight: 10,
}

const FlexLineRight = {
  fontFamily: "inter-regular",
  fontSize: "calc(8px + 0.4vw)",
  color: "white",
  paddingRight: 5,
  textAlign: "right",
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
  fontFamily: "inter-regular",
  fontSize: "calc(8px + 0.4vw)",
  color: "white",
  paddingRight: 5,
  paddingLeft: 5,
  textAlign: "Left",
}






  return (

<div className="CompanySecondRow">

<div className="CompanyTableSecondRowContainer">
  <div className="overviewContainer">
 <div className="overviewContainerLeft">
 <tr>
 {quickinfoData.companyName}
 </tr>
 <tr>
{quickinfoData.address}  
 </tr>
 <tr>
 {quickinfoData.city}, {quickinfoData.state} {quickinfoData.zip}  
 </tr>
 <tr>
 {quickinfoData.country}  
 </tr>
 <div className="splitLine"></div>
 <tr>
 <a href={quickinfoData.website} target="_blank" rel="noopener noreferrer">{quickinfoData.websiteString}</a>

 </tr>
 <tr>
 {quickinfoData.phone}  
 </tr>
</div>
<div className="overviewContainerRight">

 {quickinfoData.description}
</div>
</div>
</div>

  <div className="CompanySecondRowInfoTable1">
  <div className="CompanyTableSecondRowContainer">
     <table className="CompanyTableSecondRow">
<tbody>
<tr>
<td colSpan={2} style={FixedLine}>Sektor (GICS)</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.sector}</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Industrie (GICS)</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.industry}</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Börsengang</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.boersengang}</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Nächste Dividende</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.nextdividendeDate} {quickinfoData.nextdividendeValue} </td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Nächster Bericht</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.naechsterBericht}</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Mitarbeiter</td><td colSpan={2} style={FlexLineRight}><NumberFormat value={quickinfoData.mitarbeiter} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/></td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Gelistet</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.boerse}</td>
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
<td colSpan={2} style={FixedLine}>KGV</td><td colSpan={2} style={FlexLineRight}><NumberFormat value={quickinfoData.KGV} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>
 </td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>KUV</td><td colSpan={2} style={FlexLineRight}><NumberFormat value={quickinfoData.KUV} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/></td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>PEG</td><td colSpan={2} style={FlexLineRight}><NumberFormat value={quickinfoData.PEG} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/></td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>K/FCF</td><td colSpan={2} style={FlexLineRight}><NumberFormat value={quickinfoData.KFCF} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/></td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>EPS</td><td colSpan={2} style={FlexLineRight}><NumberFormat value={quickinfoData.EPS} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/></td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Dividende p.a.</td><td colSpan={2} style={FlexLineRight}>{<NumberFormat value={quickinfoData.dividende} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>} {quickinfoData.currency} ({<NumberFormat value={quickinfoData.dividendeProzent} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/>}%)</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Börsenwert</td><td colSpan={2} style={FlexLineRight}><NumberFormat value={quickinfoData.boersenwert} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true}/> {quickinfoData.currency}</td>
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
<td colSpan={2} style={FixedLine}>KGVe (1yr)</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.exp1YrPe}</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>KGVe (3yr)</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.exp3YrPe}</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Umsatz (1yr)</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.revenuePlus1}  {quickinfoData.currency} ({quickinfoData.revenueGrowth})</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>EBIT (1yr)</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.ebitPlus1} {quickinfoData.currency} ({quickinfoData.ebitGrowth})</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Gewinn (1yr)</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.profitPlus1} {quickinfoData.currency} ({quickinfoData.profitGrowth})</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Gewinn pro Aktie (1yr)</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.epsNextYear} {quickinfoData.currency}</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Analysten</td><td colSpan={2} style={FlexLineRight}>{quickinfoData.numberOfAnalysts}</td>
</tr>
</tbody>
</table>
</div>
  </div>

</div>


  );
}

export default CompanyInfoOverviewTables;
