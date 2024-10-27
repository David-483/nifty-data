import BranchenReportsUmsatzVerteilung1 from "./BranchenReportsUmsatzVerteilung1";
import React from "react";


function BranchenReportsCompanyApp1() {


    return (
<>


<div className="BranchenReportsCompanyCard">

    <div className="BranchenReportsCompanyCardLeft">
        <div className="BranchenReportsCompanyCardLeftUp">
            <div className="BranchenReportsCompanyCardLeftUpUP">
            <img className="BranchenReportsCompanyCardLeftUpUpLogo" src="/img/unternehmenslogos/WM.svg" alt="Company Logo"></img>
                </div>
            <div className="BranchenReportsCompanyCardLeftUpDown">
                Waste Management
                </div>
        </div>
        <li className="BranchenReportsCompanyCardLeftDown">
        Größter Anbieter für ganzheitliche Abfall Management Dienstleistungen in Nordamerika 
        </li>
        <li className="BranchenReportsCompanyCardLeftDown">
        Privathaushalte, Geschäfts-, Industrie- Partner und Städte als Kunden 

        </li>
        <li className="BranchenReportsCompanyCardLeftDown">
        Bedient die gesamte Kette des Müllzykluses: Sammeln, Transfer, Lagerung, Recycling und Rückgewinnung von Ressourcen 

        </li>
    </div>
    <div className="BranchenReportsCompanyCardRight">
        <BranchenReportsUmsatzVerteilung1/>
        </div>

</div>

</>
  
    );
  }
  
  export default BranchenReportsCompanyApp1;