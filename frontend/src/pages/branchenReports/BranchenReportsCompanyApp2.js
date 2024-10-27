import BranchenReportsUmsatzVerteilung2 from "./BranchenReportsUmsatzVerteilung2";
import React from "react";


function BranchenReportsCompanyApp2() {


    return (
<>


<div className="BranchenReportsCompanyCard">

    <div className="BranchenReportsCompanyCardLeft">
        <div className="BranchenReportsCompanyCardLeftUp">
            <div className="BranchenReportsCompanyCardLeftUpUP">
            <img className="BranchenReportsCompanyCardLeftUpUpLogo" src="/img/unternehmenslogos/RS.svg" alt="Company Logo"></img>
                </div>
            <div className="BranchenReportsCompanyCardLeftUpDown">
                Republic Services
                </div>
        </div>
        <li className="BranchenReportsCompanyCardLeftDown">
        Zweitgrößter Anbieter von Umweltservicen 
        </li>
        <li className="BranchenReportsCompanyCardLeftDown">
        Landesweite Dachorganisation, die sich in regionale Managemente aufteilt und die Dynamik vor Ort besser beurteilen kann


        </li>
        <li className="BranchenReportsCompanyCardLeftDown">
        Vollintegrierte Aktivitäten, vom Sammelnn bis hin zu Lagerung und zum Recycling 

        </li>
    </div>
    <div className="BranchenReportsCompanyCardRight">
        <BranchenReportsUmsatzVerteilung2/>
        </div>

</div>

</>
  
    );
  }
  
  export default BranchenReportsCompanyApp2;