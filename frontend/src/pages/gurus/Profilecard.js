import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
  // import "./styles.css";

  
  function Profilecard ({data}){
      console.log(data);
      return (
        <div className="guru-middle-container guru-container">
        <div className="guru-profile guruCard">
            <div className="guru-profile-picture guru-big-profile-picture clear">
                <img width="250px" alt="Name" src={`/img/gurus/NiftyFinance_${data.gurusInfos[0].cik}.jpg`} ></img>
            </div>
            <h1 className="guru-guruName"> {data.gurusInfos[0].guruName} </h1>
            <div className="guru-profile-description">
                <p className="guru-companyName"> {data.gurusInfos[0].companyName} </p>
            </div>
            <div className="guru-profile-description2">
    
                <p className="guru-companyValue">Marktwert:         <NumberFormat
                        value={(data.summe/1000000).toFixed(2)}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        
                        isNumericString={true}
                      /> Mio. USD</p>
            </div>
            <div className="guru-profile-description3">
                <p className="guru-companyValue">Holdings: {data.holdings}</p>
            </div>
            <ul className="guru-profile-options guru-horizontal-list">
            </ul>
        </div>
    </div>
);
}

export default Profilecard;
