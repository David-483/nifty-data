import BranchenReportsFundamentalsChart2 from "./BranchenReportsFundamentalsChart2";
import React from "react";


function BranchenReportsFundamentalsApp2() {


    return (
<>

<span style={{fontSize:"20px", marginLeft:"5%", fontWeight:"900"}}>EBIT historisch</span>

<div className="BRFundamentalsChartContainer" style={{marginTop:"5px", alignItems:"center"}}>
<BranchenReportsFundamentalsChart2/>
</div>


</>
  
    );
  }
  
  export default BranchenReportsFundamentalsApp2;