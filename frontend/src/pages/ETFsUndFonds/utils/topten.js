import "./topten.css";
import React from "react";
import NumberFormat from "react-number-format";

function CompanyInfoManagement({data}) {
const TopLineRow = {
  fontFamily: "Inter-regular",
  fontSize: 15,
  color: "white",
  paddingRight: 5,
  paddingLeft: 5,
  paddingBottom:20,
  textAlign: "Left",
}

const UnderLineRow = {
  fontFamily: "Inter-bold",
  fontSize: 15,
  color: "white",
  paddingRight: 5,
  paddingLeft: 5,
  textAlign: "Left",
}

  return (


  <div className="CompanySecondRowInfoTable1">
  <div className="CompanyTableFirstRowContainer">
  
     <table className="CompanyTableThirdRow">
<tbody>
<tr>
<td style={TopLineRow}>Anteil</td><td style={TopLineRow}>Name</td><td style={TopLineRow}>Sector</td>
</tr>

{Object.keys(data).map((topten, i) => <tr key={i}>
<td>{data[topten]["Assets_%"]} %</td>
<td>{data[topten].Name}</td>
<td>{data[topten].Sector}</td>
</tr>
)}
    

</tbody>
</table>
</div>
  </div>


  );
}

export default CompanyInfoManagement;
