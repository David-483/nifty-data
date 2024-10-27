import "../../../Aktien/utils/header/header.css";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AktienKursGraphJahr from "../../../Aktien/utils/header/AktienKursGraphJahr";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { fontFamily } from "@mui/system";
import HeaderSkeleton from "../../../Aktien/utils/Charts/Skeletons/HeaderSkeleton";


function Header({ticker}) {
  const [isLoadingChart, setIsLoadingChart] = React.useState(false)
  const [chartData, setChartData] = React.useState([]);
  const [isLoadingInfo, setIsLoadingInfo] = React.useState(false)
  const [infoData, setinfoData] = React.useState([]);
  const [chartColor, setChartColor] = React.useState([]);

  
var baseURL = process.env.REACT_APP_BACKEND_URL;

  var aktienkursURL = baseURL+"/fondsdata/kursverlauf/"+ticker+"";
  var companyinfoURL = baseURL+"/fondsdata/headerData/"+ticker+"";
  
 

// Aktienkurs

  const fetchDataChart = async () => {
      setIsLoadingChart(true);
    try {
      const result = await axios(aktienkursURL);
      setChartData(result.data.myData);
      setChartColor(result.data.color);
    } catch (error) {
      // setIsError(true);
    }
    setIsLoadingChart(false);
  };

  const fetchDataInfos = async () => {
    // setIsError(false);
      // setIsLoadingChart(true);
    try {
      const result = await axios(companyinfoURL);
      setinfoData(result.data);
      document.title = result.data.name + " | Nifty Finance";
    } catch (error) {
      // setIsError(true);
    }
    // setIsLoadingChart(false);
  };

  


  
  useEffect(() => {
    fetchDataChart();
    fetchDataInfos();
  }, []);


  
  return (
    <div className="Dashboard-header-container">
      <div className="Dashboard-header-kurs-container">
        <div className="Dashboard-header-kurs-toplane">
          <span className="Dashboard-header-kurs-value" > <NumberFormat
                    value= {infoData.close}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                    &nbsp;
                     {infoData.CurrencyCode}</span>
                    
          <div className="Dashboard-header-kurs-change">
            <span
              className="Dashboard-header-kurs-valueChangePerc"
              style={{ color: infoData.color }}
            >


<NumberFormat
                    value= {infoData.change_p} 
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> %
            </span>
            <span
              className="Dashboard-header-kurs-valueChange"
              style={{ color: infoData.color }}
            >
              (<NumberFormat
                    value= {infoData.change}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> {infoData.CurrencyCode})
            </span>
          </div>
        </div>
        <div className="Dashboard-header-kurs-bottomlane">
          <span className="Dashboard-header-Marktkapitalsierung">
            Fondsgröße:  &nbsp;            </span>
            <span style={{fontFamily:"Inter-Bold"}} className="Dashboard-header-Marktkapitalsierung">
                  <NumberFormat
                    value= {infoData.TotalAssets}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> Mio. {infoData.CurrencyCode}{" "}
          </span>
          <span className="Dashboard-header-ISIN">ISIN:</span>
            <span style={{fontFamily:"Inter-Bold", marginLeft:"10px"}}   className="Dashboard-header-ISIN">
            {infoData.ISIN}
          </span>
          <ContentCopyIcon
            sx={{ fontSize: "0.8rem", marginLeft: "5px", marginBottom:"3px", cursor: "pointer" }}
            onClick={() => {
              navigator.clipboard.writeText(infoData.isin);
            }}
          />
        </div>
      </div>

      <div className="Dashboard-header-ChartHistory-container">
        <div className="Dashboard-header-Chart">
        {isLoadingChart ? <HeaderSkeleton/>  : <AktienKursGraphJahr myHookValue={chartData} chartColor={chartColor} />}
        </div>

      </div>
<div className="Dashboard-header-logo-Info-container">
  <div className="Dashboard-header-logo-container">
  <img
          // src={`/img/unternehmenslogos/KO.svg`}
          src={infoData.image}
          style={{
            preserveAspectRatio: "none",
            minWidth: "40%",
            maxWidth: "200px",
            minHeight: "60%",
            maxHeight: "100%",
          }}
        ></img>
  </div>

      {/* <div className="Dashboard-header-logo-container-toplane"> */}
      <div className="Dashboard-header-name-container">
        
                  <span
            className="Dashboard-header-Basisinfo-value"
            style={{
              fontSize: "25px",
              fontFamily: "inter-bold",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            {" "}
            {infoData.Company_Name}
          </span>
      {/* </div> */}

      </div>
      
       <div className="Dashboard-header-Basisinfo">

        <div className="Dashboard-header-Basisinfo-content">
          <span className="Dashboard-header-Basisinfo-value"></span>
          <span
            className="Dashboard-header-Basisinfo-value"
            style={{ marginLeft: "6px", fontFamily:"inter-Bold" }}
          >{infoData.name}
          </span>
        </div>

      </div>     
      </div>
    </div>
  );
}

export default Header;
