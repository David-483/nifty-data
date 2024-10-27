import BranchenReportsFundamentalsChart1 from "./BranchenReportsFundamentalsChart1";
import React from "react";


function BranchenReportsFundamentalsApp1() {


    return (
<>

<span style={{fontSize:"20px", marginLeft:"5%", fontWeight:"900"}}>Umsatz historisch</span>

<div className="BRFundamentalsChartContainer" style={{marginTop:"5px", alignItems:"center"}}>
<BranchenReportsFundamentalsChart1/>
</div>


</>
  
    );
  }
  
  export default BranchenReportsFundamentalsApp1;