import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import Aktienkurs from "../Charts/Chartlib/Aktienkurs";
import "./CompanyInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CompanyInfoPeers({ticker}) {




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






  return (

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


  );
}

export default CompanyInfoPeers;
