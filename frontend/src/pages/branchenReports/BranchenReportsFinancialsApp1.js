import BranchenReportsFinancialsChart1 from "./BranchenReportsFinancialsChart1";
import React from "react";


function BranchenReportsFinancialsApp1() {


    return (
<>

<span style={{fontSize:"20px", marginLeft:"5%", fontWeight:"900"}}>Finanzkennzahlen</span>

<div className="BRFundamentalsChartContainer" style={{marginTop:"5px", alignItems:"center"}}>
<BranchenReportsFinancialsChart1/>
</div>


</>
  
    );
  }
  
  export default BranchenReportsFinancialsApp1;