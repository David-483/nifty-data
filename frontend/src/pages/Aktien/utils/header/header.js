import "./header.css";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AktienKursGraphJahr from "./AktienKursGraphJahr";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { fontFamily } from "@mui/system";
import HeaderSkeleton from "../Charts/Skeletons/HeaderSkeleton";



function Header({ticker}) {
  const [isLoadingChart, setIsLoadingChart] = React.useState(false)
  const [chartData, setChartData] = React.useState([]);
  const [isLoadingInfo, setIsLoadingInfo] = React.useState(false)
  const [infoData, setinfoData] = React.useState([]);
  const [chartColor, setChartColor] = React.useState([]);

  
var baseURL = process.env.REACT_APP_BACKEND_URL;

  var aktienkursURL = baseURL+"/aktienpageheader/Aktienkurs/"+ticker+"";
  var companyinfoURL = baseURL+"/aktienpageheader/companyinfo/"+ticker+"";
  
 

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
    <>
    <div className="Dashboard-header-container">
      <div className="Dashboard-header-kurs-container">
        <div className="Dashboard-header-kurs-toplane">
          <span className="Dashboard-header-kurs-value"> <NumberFormat
                    value= {infoData.price}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                    &nbsp;
                     {infoData.currency}</span>

          <div className="Dashboard-header-kurs-change">
            <span
              className="Dashboard-header-kurs-valueChangePerc"
              style={{ color: infoData.changeColor }}
            >


<NumberFormat
                    value= {infoData.changesPercentage} 
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> % 
            </span>
            <span
              className="Dashboard-header-kurs-valueChange"
              style={{ color: infoData.changeColor }}
            >
              (<NumberFormat
                    value= {infoData.change}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> {infoData.currency})
            </span>
          </div>
        </div>
        <div className="Dashboard-header-kurs-bottomlane">
          <span className="Dashboard-header-Marktkapitalsierung">
            Marktkapitalisierung: &nbsp;           </span>
            <span style={{fontFamily:"Inter-Bold"}} className="Dashboard-header-Marktkapitalsierung">
                  <NumberFormat
                    value= {infoData.marketCap}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> Mrd. {infoData.currency}{" "}
          </span>
          <span className="Dashboard-header-ISIN">ISIN:</span>
            <span style={{fontFamily:"Inter-Bold", marginLeft:"10px"}}   className="Dashboard-header-ISIN">
             {infoData.isin}{" "}
          </span>
          <ContentCopyIcon
            sx={{ fontSize: "0.8rem", marginLeft: "5px", cursor: "pointer" }}
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
              fontSize: "calc(14px + 0.6vw)",
              fontFamily: "inter-bold",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            {" "}
            {infoData.name}
          </span>
      {/* </div> */}

      </div>
      
       <div className="Dashboard-header-Basisinfo">

        <div className="Dashboard-header-Basisinfo-content">
          <span className="Dashboard-header-Basisinfo-value">Sitz: </span>
          <span
            className="Dashboard-header-Basisinfo-value"
            style={{fontFamily:"inter-Bold" }}
          >
            {" "}
            {infoData.city}, {infoData.country}
          </span>
        </div>
        <div className="Dashboard-header-Basisinfo-content" style={{ marginLeft: "15px" }}>
          <span style={{ marginLeft: "6px"}} className="Dashboard-header-Basisinfo-value">
            Sektor: </span>
            <span style={{  fontFamily:"inter-Bold" }} className="Dashboard-header-Basisinfo-value">
            {infoData.sector} 
            {" "}
          </span>
          <span
            className="Dashboard-header-Basisinfo-value"
            style={{ marginLeft: "6px" }}
          >

            {/* {" "}
            {infoData.country} */}
          </span>
        </div>
      </div>     
</div>
    </div>






{/* Mobile Module */}

    <div className="Dashboard-MobileHeader-container">

<div >


<div className="test">

  <img
          // src={`/img/unternehmenslogos/KO.svg`}
          src={infoData.image}
          style={{
            preserveAspectRatio: "none",
            maxHeight: "40px",
            maxWidth: "300px",
          }}
        ></img>

</div>

<div className="test2" style={{marginTop: "5px"}}>

  <div style={{display: "flex", justifyContent: "space-between", alignItems: "end"}} >

<span
            className="Dashboard-header-Basisinfo-value"
            style={{
              fontSize: "20px",
              fontFamily: "inter-bold",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            {" "}
            {infoData.name}
          </span>
          <span style={{fontFamily:"Inter-Bold"}}   className="Dashboard-header-ISIN">
             {infoData.isin}{" "}
          </span>
          </div>
          <div style={{margin: "auto", marginTop: "10px", width:"100%", backgroundColor: "rgba(255,255,255,1)", borderRadius: "15px", height: "3px"}}></div>
<div style={{marginTop: "5px"}}>

    <span className="Dashboard-MobileHeader-kurs-value" style={{marginTop: "20px"}}> <NumberFormat
                    value= {infoData.price}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                    &nbsp;
                     {infoData.currency}</span>
                     


            <span
              className="Dashboard-MobileHeader-kurs-valueChangePerc"
              style={{ color: infoData.changeColor }}
            >


<NumberFormat
                    value= {infoData.changesPercentage} 
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> %
            </span>
            <span
              className="Dashboard-MobileHeader-kurs-valueChangePerc"
              style={{ color: infoData.changeColor }}
            >
              (<NumberFormat
                    value= {infoData.change}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> {infoData.currency})
            </span>
          </div>
                     
</div>

<div className="test" style={{display: "flex", justifyContent: "space-between"}}>
<div className="Dashboard-header-Basisinfo-content">
<span className="Dashboard-header-Marktkapitalsierung">Sitz: </span>
          <span
            className="Dashboard-header-Basisinfo-value"
            style={{ marginLeft: "6px", fontFamily:"inter-Bold" }}
          >
            {" "}
            {infoData.city}, {infoData.country}
          </span>
          </div>
          <div className="Dashboard-header-Basisinfo-content">
          <span className="Dashboard-header-Marktkapitalsierung">
            MCAP: &nbsp;           </span>
            <span style={{fontFamily:"Inter-Bold"}} className="Dashboard-header-Marktkapitalsierung">
                  <NumberFormat
                    value= {infoData.marketCap}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    /> Mrd. {infoData.currency}{" "}
          </span>
        </div>  
</div>


<div>
<div className="Dashboard-header-kurs-bottomlane">


          </div>

{/* 
<div>


<span className="Dashboard-header-Marktkapitalsierung">ISIN:</span>
            <span style={{fontFamily:"Inter-Bold"}}   className="Dashboard-header-ISIN">
             {infoData.isin}{" "}
          </span>

        </div> */}
</div>

</div>


</div>



</>

  );
}

export default Header;
