import BranchenReportsUmsatzVerteilung4 from "./BranchenReportsUmsatzVerteilung4";
import React from "react";


function BranchenReportsCompanyApp4() {


    return (
<>


<div className="BranchenReportsCompanyCard" style={{marginBottom:"40px"}}>

    <div className="BranchenReportsCompanyCardLeft">
        <div className="BranchenReportsCompanyCardLeftUp">
            <div className="BranchenReportsCompanyCardLeftUpUP">
            <img className="BranchenReportsCompanyCardLeftUpUpLogo" src="/img/unternehmenslogos/VEO.svg" alt="Company Logo"></img>
                </div>
            <div className="BranchenReportsCompanyCardLeftUpDown">
            Veolia Environnment
                </div>
        </div>
        <li className="BranchenReportsCompanyCardLeftDown">
        Weltweit größter Anbieter von Lösungen für Abwasser, Müll und Energie Management
 
        </li>
        <li className="BranchenReportsCompanyCardLeftDown">
        Agiert Global, allerdings fallen 60% der Umsätze in Europa an 

        </li>
        <li className="BranchenReportsCompanyCardLeftDown">
        Agiert Global, allerdings fallen 60% der Umsätze in Europa an 

        </li>
    </div>
    <div className="BranchenReportsCompanyCardRight">
        <BranchenReportsUmsatzVerteilung4/>
        </div>

</div>

</>
  
    );
  }
  
  export default BranchenReportsCompanyApp4;