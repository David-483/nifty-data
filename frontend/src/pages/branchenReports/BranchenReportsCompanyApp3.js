import BranchenReportsUmsatzVerteilung3 from "./BranchenReportsUmsatzVerteilung3";
import React from "react";


function BranchenReportsCompanyApp3() {


    return (
<>


<div className="BranchenReportsCompanyCard">

    <div className="BranchenReportsCompanyCardLeft">
        <div className="BranchenReportsCompanyCardLeftUp">
            <div className="BranchenReportsCompanyCardLeftUpUP">
            <img className="BranchenReportsCompanyCardLeftUpUpLogo" src="/img/unternehmenslogos/WC.svg" alt="Company Logo"></img>
                </div>
            <div className="BranchenReportsCompanyCardLeftUpDown">
                Waste Connections
                </div>
        </div>
        <li className="BranchenReportsCompanyCardLeftDown">
        Drittgrößter Anbieter von Entsorgungslösungen in Nordamerika
 
        </li>
        <li className="BranchenReportsCompanyCardLeftDown">
        Vollintegrierte Lösungen für das Sammeln, Transportieren, Deponieren und Recyclen



        </li>
        <li className="BranchenReportsCompanyCardLeftDown">
        Fokus auf Sekundärmarkt und ländliche Gegenden, womit man sich vom Duopol differenziert hat 
 

        </li>
    </div>
    <div className="BranchenReportsCompanyCardRight">
        <BranchenReportsUmsatzVerteilung3/>
        </div>

</div>

</>
  
    );
  }
  
  export default BranchenReportsCompanyApp3;