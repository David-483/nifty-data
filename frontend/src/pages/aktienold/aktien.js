import React, { useState, useEffect } from "react";
import AktienKursGraphTop from "./aktienKursGraphTop";
import { useParams } from 'react-router-dom';
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";


// import "./styles.css";

function Aktien() {
    return (

    <div className="aktien-page-header">
      <img className="main-header-logo" src="/img/unternehmenslogos/AAPL.svg" alt="Company Logo"></img>
      <div className="main-header-name-and-isin">
          <span className="main-header-name-and-isin-name"> 
           Apple Inc.
        </span>
        <span className="main-header-name-and-isin-isin">
          ISIN: US0378331005 
        </span>
      </div>


      <div className="main-header-graph">
      <AktienKursGraphTop />   
      </div>


      <div className="main-header-aktienkurs-box">
        <span className="main-header-aktienkurs-box-kurs">
          14 %
        </span>
        <span className="main-header-aktienkurs-box-kurs2"> 
          224 $
        </span>
        <span className="main-header-aktienkurs-box-kurs-vortag">
         Marketcap
        </span>
        <span className="main-header-aktienkurs-box-kurs-vortag2">
          2.1 Mrd $
        </span>
    </div>
    </div>
    );
}

export default Aktien;
