import "./calculator.css"
import React from "react";
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import InfoIcon from "@mui/icons-material/Info";
import Backdrop from "@mui/material/Backdrop";
import { IconButton } from "@mui/material";
import DefCAGR from "../Aktien/utils/Definitionen/DefCAGR";

//InfoButton
const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
    color: "rgba(255,255,255,1)",
    width: "20px",    
  }));




function calculateCAGR(){

    var inputEndNumber = document.getElementById("inputEnd").value
    var inputStartNumber = document.getElementById("inputStart").value
    var inputYears = document.getElementById("inputYears").value
    var time = (1/inputYears)

    var CAGR = ((inputEndNumber/inputStartNumber)**time -1)*100
  


    document.getElementById("output").innerHTML = CAGR.toFixed(2) + " %";
   }



function CalcCAGR() {

    // POP Ups
    // Dividend
    const [openDialogCAGR, setOpenDialogCAGR] = React.useState(false);

    const handleClickOpenCAGR = () => {
      setOpenDialogCAGR(true);
    };
  
    const handleClose = () => {
      setOpenDialogCAGR(false);
    };

    return (

<>


<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogCAGR}
        onClick={handleClose}
      >

                  <div className="analyseInfoGlassDoor">
<DefCAGR/>
        </div>

      </Backdrop>

<div className="calculatorsHeadline">
    CAGR-Rechner <span style={{position:"relative", top:"6px"}}>   <IconButton color="primary" onClick={handleClickOpenCAGR}><StyledInfoIcon /></IconButton></span>

</div>


<div className="calculatorContainer">
<p className="tooltipText" style={{color:"white"}}>Anfangswert   <span class="tooltiptext">Wähle den Startwert deiner Investition</span> </p>
<input type={"text"} id="inputStart"></input>

<p className="tooltipText" style={{color:"white"}}>Endwert <span class="tooltiptext">Wähle den Startwert deiner Investition</span></p>
<input type={"text"} id="inputEnd"></input>

<p className="tooltipText" style={{color:"white"}}>Jahre <span class="tooltiptext">Wähle die Dauer deiner Investition</span></p> 
<input id="inputYears"></input>

<div className="CAGRResult">

<button className="CAGRButton" onClick={calculateCAGR}>Berechnen</button>

<output id="output"></output>

</div>

</div>



</>
  
    );
  }
  
  export default CalcCAGR;