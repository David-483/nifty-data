import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import Aktienkurs from "../Charts/Chartlib/Aktienkurs";
import "./CompanyInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChartSkeleton from "../../../Aktien/utils/Charts/Skeletons/ChartSkeleton";

function CompanyInfo() {

const [isLoadingChart, setIsLoadingChart] = React.useState(false)
const [chartData, setChartData] = React.useState([])

const FixedLine = {
fontFamily: "Inter-Bold",
fontSize: 15,
color: "white",
paddingLeft:5,
}

const FixedLineRight = {
  fontFamily: "Inter-Bold",
  fontSize: 15,
  color: "white",
  paddingLeft: 10,
}

const FlexLine = {
  fontFamily: "inter-regular",
  fontSize: 15,
  color: "white",
  paddingRight: 10,
}

const FlexLineRight = {
  fontFamily: "inter-regular",
  fontSize: 15,
  color: "white",
  paddingRight: 5,
  textAlign: "right",
}

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



var aktienKursURL= "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line&apikey=3c8a64de9342c1f496c9780b2e3fdba1"

const fetchData = async () => {
  // setIsError(false);
    setIsLoadingChart(true);
    const myData = [];
  try {
    const result = await axios(aktienKursURL);
    result.data.historical.map(item => {
      if(item.date.substr(0,4) > 1980){
        myData.push([item.date,(item.close).toFixed(2)])
      }
      
    })
  } catch (error) {
    // setIsError(true);
  }

  setChartData(myData);
     setIsLoadingChart(false);
};

useEffect(() => {
  fetchData();

}, []);

  return (
<div className="CompanyBody">

<div className="CompanyHeadline">Aktienkurs</div>

<div className="CompanyFirstRow">
      
     {isLoadingChart ? <ChartSkeleton/> : <Aktienkurs myHookValue={chartData} />}

     <div className="CompanyTableFirstRowContainer">
     <table className="CompanyTableFirstRow">
<tbody>
<tr>
<td style={FixedLine}>1 Tag</td><td style={FlexLine}>-2,34%</td><td style={FixedLineRight}>5 Tage</td><td style={FlexLineRight}>-5,42%</td>
</tr>
<tr>
<td style={FixedLine}>1 Monat</td><td style={FlexLine}>-13,65%</td><td style={FixedLineRight}>6 Monate</td><td style={FlexLineRight}>25,44%</td>
</tr>
<tr>
<td style={FixedLine}>YTD</td><td style={FlexLine}>62,44%</td><td style={FixedLineRight}>1 Jahr</td><td style={FlexLineRight}>105,99%</td>
</tr>
<tr>
<td style={FixedLine}>5 Jahre</td><td style={FlexLine}>245,40%</td><td style={FixedLineRight}>10 Jahre</td><td style={FlexLineRight}>1.045,94%</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Seit Start</td><td colSpan={2} style={FlexLineRight}>10.045,94%</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Jahreshoch</td><td colSpan={2} style={FlexLineRight}>540.404,93 USD (-12,45%)</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Jahrestief</td><td colSpan={2} style={FlexLineRight}>390.401,42 USD (2,95%)</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Volumen</td><td colSpan={2} style={FlexLineRight}>140.249.941 Stück</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>50-Tage-Durchschnitt</td><td colSpan={2} style={FlexLineRight}>490.023,44 USD</td>
</tr>
</tbody>
</table>
</div>
</div>


<div className="CompanyHeadline">Aktienkurs</div>

<div className="CompanyFirstRow">
      

</div>


<div className="CompanyHeadline">Infos</div>
<div className="CompanySecondRow">
  <div className="CompanySecondRowInfoTable1">
  <div className="CompanyTableSecondRowContainer">
     <table className="CompanyTableSecondRow">
<tbody>
<tr>
<td colSpan={2} style={FixedLine}>Sektor (GICS)</td><td colSpan={2} style={FlexLineRight}>Technologie</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Industrie (GICS)</td><td colSpan={2} style={FlexLineRight}>Verbraucherelektronik</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Börsengang</td><td colSpan={2} style={FlexLineRight}>27. Juni 1985</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Nächste Dividende</td><td colSpan={2} style={FlexLineRight}>21. August 2022 (0,22 USD)</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Nächster Bericht</td><td colSpan={2} style={FlexLineRight}>19. September 2022</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Mitarbeiter</td><td colSpan={2} style={FlexLineRight}>800.200</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Heimatbörse</td><td colSpan={2} style={FlexLineRight}>NASDAQ</td>
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
<td colSpan={2} style={FixedLine}>KGV</td><td colSpan={2} style={FlexLineRight}>21,3</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>KUV</td><td colSpan={2} style={FlexLineRight}>4,6</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>PEG</td><td colSpan={2} style={FlexLineRight}>1,03</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>K/FCF</td><td colSpan={2} style={FlexLineRight}>15,4</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>EPS</td><td colSpan={2} style={FlexLineRight}>1042,23 USD</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Dividende p.a.</td><td colSpan={2} style={FlexLineRight}>1,90 USD (1,01%)</td>
</tr>
<tr>
<td colSpan={2} style={FixedLine}>Börsenwert</td><td colSpan={2} style={FlexLineRight}>2.943 Mrd. USDQ</td>
</tr>
</tbody>
</table>
</div>
  </div>

</div>

<div className="CompanyHeadline">Management</div>
<div className="CompanyThirdRow">
  <div className="CompanySecondRowInfoTable1">
  <div className="CompanyTableFirstRowContainer">
     <table className="CompanyTableThirdRow">
<tbody>
<tr>
<td style={TopLineRow}>Position</td><td style={TopLineRow}>Name</td><td style={TopLineRow}>Geschlecht</td><td style={TopLineRow}>Gehalt</td><td style={TopLineRow}>Geburtsjahr</td>
</tr>
<tr>
<td style={TopLineRow}>CEO</td><td style={UnderLineRow}>Timothy Cook</td><td style={UnderLineRow}>Männlich</td><td style={UnderLineRow}>14.470.000 USD</td><td style={UnderLineRow}>1961 (59 Jahre)</td>
</tr>
<tr>
<td style={TopLineRow}>CFO</td><td style={UnderLineRow}>Luca Meastri</td><td style={UnderLineRow}>Männlich</td><td style={UnderLineRow}>4.600.000 USD</td><td style={UnderLineRow}>1964 (54 Jahre)</td>
</tr>
<tr>
<td style={TopLineRow}>COO</td><td style={UnderLineRow}>Jeffrey Williams</td><td style={UnderLineRow}>Männlich</td><td style={UnderLineRow}>4.590.000 USD</td><td style={UnderLineRow}>1964 (54 Jahre)</td>
</tr>




</tbody>
</table>
</div>
  </div>


</div>

<div className="CompanyHeadline">Wettbewerb</div>
<div className="CompanyFourthRow">
  <div className="CompanySecondRowInfoTable1">
  <div className="CompanyTableFirstRowContainer">
     <table className="CompanyTableThirdRow">
<tbody>
<tr>
<td style={TopLineRow}>Logo</td><td style={TopLineRow}>Name</td><td style={TopLineRow}>Preis</td><td style={TopLineRow}>Börsenwert</td><td style={TopLineRow}>KGV</td>
</tr>
<tr>
<td style={UnderLineRow}><img className="FourthRowTableLogo" src="http://127.0.0.1:5500/client/public/img/unternehmenslogos/MSFT.svg"></img></td><td style={UnderLineRow}>Microsoft</td><td style={UnderLineRow}>230,23 USD</td><td style={UnderLineRow}>3.402 Mrd. USD</td><td style={UnderLineRow}>29,4</td>
</tr>
<tr>
<td style={UnderLineRow}><img className="FourthRowTableLogo" src="http://127.0.0.1:5500/client/public/img/unternehmenslogos/NKE.svg"></img></td><td style={UnderLineRow}>Nike</td><td style={UnderLineRow}>120,34 USD</td><td style={UnderLineRow}>495 Mrd. USD</td><td style={UnderLineRow}>18,9</td>
</tr>
<tr>
<td style={UnderLineRow}><img className="FourthRowTableLogo" src="http://127.0.0.1:5500/client/public/img/unternehmenslogos/MCD.svg"></img></td><td style={UnderLineRow}>McDonald's</td><td style={UnderLineRow}>199,23 USD</td><td style={UnderLineRow}> 84,2 Mrd. USD</td><td style={UnderLineRow}>19,34</td>
</tr>
<tr>
<td style={UnderLineRow}><img className="FourthRowTableLogo" src="http://127.0.0.1:5500/client/public/img/unternehmenslogos/AAPL.svg"></img></td><td style={UnderLineRow}>Apple Inc.</td><td style={UnderLineRow}>150,65 USD</td><td style={UnderLineRow}>3.124 Mrd. USD</td><td style={UnderLineRow}>23,66</td>
</tr>
<tr>
<td style={UnderLineRow}><img className="FourthRowTableLogo" src="http://127.0.0.1:5500/client/public/img/unternehmenslogos/AMGN.svg"></img></td><td style={UnderLineRow}>Microsoft</td><td style={UnderLineRow}>230,23 USD</td><td style={UnderLineRow}>3.402 Mrd. USD</td><td style={UnderLineRow}>2,34</td>
</tr>
<tr>
<td style={UnderLineRow}><img className="FourthRowTableLogo" src="http://127.0.0.1:5500/client/public/img/unternehmenslogos/KO.svg"></img></td><td style={UnderLineRow}>Microsoft</td><td style={UnderLineRow}>230,23 USD</td><td style={UnderLineRow}>3.402 Mrd. USD</td><td style={UnderLineRow}>2,34</td>
</tr>



</tbody>
</table>
</div>
  </div>


</div>

</div>
  );
}

export default CompanyInfo;
