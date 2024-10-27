import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import "./Valuation.css";
import PeChart from "../Charts/Chartlib/PeChart";
import EvEBITDA from "../Charts/Chartlib/EvEBITDA";
import FairValue from "../Charts/Chartlib/FairValue";
import PBChart from "../Charts/Chartlib/PBChart";
import KFCFChart from "../Charts/Chartlib/KFCFChart";
import PegChart from "../Charts/Chartlib/PegChart"
import AnalystenKonsens from "../Charts/Chartlib/AnalystenKonsens";
import AktienkursDCFChart from "../Charts/Chartlib/AktienkursDCFChart";
import ValuationAnalystenRatings from "./ValuationAnalystenRatings";
import ValuationTable from "./ValuationTable";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SkeletonTable from "./SkeletonTable";
import ChartSkeleton from "../Charts/Skeletons/ChartSkeleton";
import PsChart from "../Charts/Chartlib/PsChart";
import EvSales from "../Charts/Chartlib/EvSales";

function Valuation({ticker}) {

  // Schriftformate für Tabellen
    const FixedLine = {
        fontFamily: "Inter-Bold",
        fontSize: 15,
        color: "white",
        paddingLeft:5,
         }
        
        const FixedLineRight = {
          fontFamily: "Inter-Bold",
          fontSize: 15,
          color: "white",
          paddingLeft: 10,
        }
        
        const FlexLine = {
          fontFamily: "inter-regular",
          fontSize: 15,
          color: "white",
          paddingRight: 10,
        }
        
        const FlexLineRight = {
          fontFamily: "inter-regular",
          fontSize: 15,
          color: "white",
          paddingRight: 5,
          textAlign: "right",
        }
        
        const TopLineRow = {
          fontFamily: "Inter-Bold",
          fontSize: 15,
          color: "white",
          paddingRight: 5,
          paddingLeft: 5,
          textAlign: "Left",
        }

        const UnderLineRow = {
            fontFamily: "inter-regular",
            fontSize: 15,
            color: "white",
            paddingRight: 5,
            paddingLeft: 5,
            textAlign: "Left",
          }

        const TopLineRowPreiszielTop = {
            fontFamily: "Inter-Bold",
            fontSize: 15,
            color: "white",
            paddingRight: 5,
            paddingLeft: 5,
            textAlign: "Left",
            width:"100px",
          }

          const TopLineRowPreisziel = {
            fontFamily: "inter-regular",
            fontSize: 15,
            color: "white",
            paddingRight: 5,
            paddingLeft: 5,
            textAlign: "Left",
            width:"100px",
          }

          const TopLineRowPotentialTop = {
            fontFamily: "Inter-Bold",
            fontSize: 15,
            color: "white",
            paddingRight: 5,
            paddingLeft: 5,
            textAlign: "Left",
            width:"100px",
          }

          const TopLineRowPotential = {
            fontFamily: "inter-regular",
            fontSize: 15,
            color: "white",
            paddingRight: 5,
            paddingLeft: 5,
            textAlign: "Left",
            width:"100px",
          }

          const TopLineRowHeadlineTop = {
            fontFamily: "Inter-Bold",
            fontSize: 15,
            color: "white",
            paddingRight: 5,
            paddingLeft: 5,
            textAlign: "Left",
            width:"500px",
          }

          const TopLineRowHeadline = {
            fontFamily: "inter-regular",
            fontSize: 15,
            color: "white",
            paddingRight: 5,
            paddingLeft: 5,
            textAlign: "Left",
            width:"500px",
          }
          
  //PEPS
  const [isLoadingPEPS, setIsLoadingPEPS] = React.useState(false)
  const [isErrorPEPS, setIsErrorPEPS] = React.useState(false)
  const [dataPEPS, setDataPEPS] = React.useState({});


  //PB
  const [isLoadingPB, setIsLoadingPB] = React.useState(false)
  const [isErrorPB, setIsErrorPB] = React.useState(false)
  const [dataPB, setDataPB] = React.useState({});


  //PFCF
  const [isLoadingPFCF, setIsLoadingPFCF] = React.useState(false)
  const [isErrorPFCF, setIsErrorPFCF] = React.useState(false)
  const [dataPFCF, setDataPFCF] = React.useState({});


  //PEG
  const [isLoadingPEG, setIsLoadingPEG] = React.useState(false)
  const [isErrorPEG, setIsErrorPEG] = React.useState(false)
  const [dataPEG, setDataPEG] = React.useState({});


  //EvEbitdaEvSales
  const [isLoadingEvEbitdaEvSales, setIsLoadingEvEbitdaEvSales] = React.useState(false)
  const [isErrorEvEbitdaEvSales, setIsErrorEvEbitdaEvSales] = React.useState(false)
  const [dataEvEbitdaEvSales, setDataEvEbitdaEvSales] = React.useState({});


  //PriceTargets
  const [isLoadingPriceTargets, setIsLoadingPriceTargets] = React.useState(false)
  const [isErrorPriceTargets, setIsErrorPriceTargets] = React.useState(false)
  const [dataPriceTargets, setDataPriceTargets] = React.useState({});

  //FairValueChart
    const [isLoadingFairValueChart, setIsLoadingFairValueChart] = React.useState(false)
    const [isErrorFairValueChart, setIsErrorFairValueChart] = React.useState(false)
    const [dataFairValueChart, setDataFairValueChart] = React.useState({});

  //FairValuePrice
  const [isLoadingFairValuePrice, setIsLoadingFairValuePrice] = React.useState(false)
  const [isErrorFairValuePrice, setIsErrorFairValuePrice] = React.useState(false)
  const [dataFairValuePrice, setDataFairValuePrice] = React.useState({});

    //UpgradeDowngrade
  const [isLoadingUpgradeDowngrade, setIsLoadingUpgradeDowngrade] = React.useState(false)
  const [isErrorUpgradeDowngrade, setIsErrorUpgradeDowngrade] = React.useState(false)
  const [dataUpgradeDowngrade, setDataUpgradeDowngrade] = React.useState([]);
        

    //ValuationTable
    const [isLoadingTableData, setIsLoadingTableData] = React.useState(false)
    const [isErrorTableData, setIsErrorTableData] = React.useState(false)
    const [dataTableData, setDataTableData] = React.useState([]);

    const [direction, setDirection] = React.useState(true);




  // URLs
 
  var baseURL = process.env.REACT_APP_BACKEND_URL;
  var URLPEPS = baseURL+"/aktienpageValuation/PEPS/"+ticker +"";
  var URLPB =  baseURL+"/aktienpageValuation/PB/"+ticker +"";
  var URLPFCF =  baseURL+"/aktienpageValuation/PFCF/"+ticker +"";
  var URLPEG =  baseURL+"/aktienpageValuation/PEG/"+ticker +"";
  var URLEvEbitdaEvSales =  baseURL+"/aktienpageValuation/EvEbitdaEvSales/"+ticker +"";
  var URLPriceTargets =  baseURL+"/aktienpageValuation/PriceTargets/"+ticker +"";
  var URLTableData =  baseURL+"/aktienpageValuation/valuationtable/"+ticker +"";
  var URLFairValueChart =  baseURL+"/aktienpageValuation/FairValueChart/"+ticker +"";
  var URLFairValuePrice =  baseURL+"/aktienpageValuation/fairValuePrice/"+ticker +"";
  var URLUpgradeDowngrade =  baseURL+"/aktienpageValuation/UpgradeDowngrade/"+ticker +"";

  const fetchDataTableData = async () => {
    setIsErrorTableData(false);
    setIsLoadingTableData(true);
    try {
      const result = await axios(URLTableData);
      setDataTableData(result.data.myDatavaluation);
    } catch (error) {
      setIsErrorTableData(true);
    }
    setIsLoadingTableData(false);
  };
      
  const fetchDataPEPS = async () => {
    setIsErrorPEPS(false);
    setIsLoadingPEPS(true);
    try {
      const result = await axios(URLPEPS);
      setDataPEPS(result.data);
    } catch (error) {
      setIsErrorPEPS(true);
    }
    setIsLoadingPEPS(false);
  };

  const fetchDataPB = async () => {
    setIsErrorPB(false);
    setIsLoadingPB(true);
    try {
      const result = await axios(URLPB);
      setDataPB(result.data);
    } catch (error) {
      setIsErrorPB(true);
    }
    setIsLoadingPB(false);
  };

  const fetchDataPFCF = async () => {
    setIsErrorPFCF(false);
    setIsLoadingPFCF(true);
    try {
      const result = await axios(URLPFCF);
      setDataPFCF(result.data);
    } catch (error) {
      setIsErrorPFCF(true);
    }
    setIsLoadingPFCF(false);
  };

  const fetchDataPEG = async () => {
    setIsErrorPEG(false);
    setIsLoadingPEG(true);
    try {
      const result = await axios(URLPEG);
      setDataPEG(result.data);
    } catch (error) {
      setIsErrorPEG(true);
    }
    setIsLoadingPEG(false);
  };

  const fetchDataEvEbitdaEvSales = async () => {
    setIsErrorEvEbitdaEvSales(false);
    setIsLoadingEvEbitdaEvSales(true);
    try {
      const result = await axios(URLEvEbitdaEvSales);
      setDataEvEbitdaEvSales(result.data);
    } catch (error) {
      setIsErrorEvEbitdaEvSales(true);
    }
    setIsLoadingEvEbitdaEvSales(false);
  };

  const fetchDataPriceTargets = async () => {
    setIsErrorPriceTargets(false);
    setIsLoadingPriceTargets(true);
    try {
      const result = await axios(URLPriceTargets);
      setDataPriceTargets(result.data);
    } catch (error) {
      setIsErrorPriceTargets(true);
    }
    setIsLoadingPriceTargets(false);
  };

  const fetchDataFairValueChart = async () => {
    setIsErrorFairValueChart(false);
    setIsLoadingFairValueChart(true);
    try {
      const result = await axios(URLFairValueChart);
      setDataFairValueChart(result.data);
    } catch (error) {
      setIsErrorFairValueChart(true);
    }
    setIsLoadingFairValueChart(false);
  };

  const fetchDataFairValuePrice = async () => {
    setIsErrorFairValuePrice(false);
    setIsLoadingFairValuePrice(true);
    try {
      const result = await axios(URLFairValuePrice);
      setDataFairValuePrice(result.data);
    } catch (error) {
      setIsErrorFairValuePrice(true);
    }
    setIsLoadingFairValuePrice(false);
  };

  const fetchDataUpgradeDowngrade = async () => {
    setIsErrorUpgradeDowngrade(false);
    setIsLoadingUpgradeDowngrade(true);
    try {
      const result = await axios(URLUpgradeDowngrade);
      setDataUpgradeDowngrade(result.data.myData);
    } catch (error) {
      setIsErrorUpgradeDowngrade(true);
    }
    setIsLoadingUpgradeDowngrade(false);
  };

  useEffect(() => {
    fetchDataTableData();
    fetchDataPEPS();
    fetchDataPB();
    fetchDataPFCF();
    fetchDataPEG();
    fetchDataEvEbitdaEvSales();
    fetchDataPriceTargets();
    fetchDataFairValueChart();
    fetchDataFairValuePrice();
    fetchDataUpgradeDowngrade();
  }, []);




    return (
  <div className="CompanyBody">



  <div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Kennzahlen<span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>  </span></div>
  </div>


  {isLoadingTableData ? <SkeletonTable /> : <ValuationTable direction={direction} dataTableData={dataTableData} />}

</div>

  

<div className="ChartsThirdRow">

<div className="ChartHeadlineContainer"><div className="ChartHeadline">KGV</div>
</div>



<div className="ChartsContainer">
{isLoadingPEPS ? <ChartSkeleton/>:  <PeChart dataPEPS={dataPEPS}/>}
</div>
</div>


<div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">KUV</div>
  </div>

  <div className="ChartsContainer">
{isLoadingPFCF ? <ChartSkeleton/>:  <PsChart dataPEPS={dataPEPS}/>}
</div>
</div>



<div className="ChartsThirdRow">

  <div className="ChartHeadlineContainer"><div className="ChartHeadline">KBV</div>
  </div>
  

  <div className="ChartsContainer">
  {isLoadingPB ? <ChartSkeleton/>:  <PBChart dataPB={dataPB}/>}
  </div>
  </div>

  <div className="ChartsThirdRow">

  <div className="ChartHeadlineContainer"><div className="ChartHeadline">KFCF</div>
  </div>

  <div className="ChartsContainer">
{isLoadingPFCF ? <ChartSkeleton/>:  <KFCFChart dataPFCF={dataPFCF}/>}
</div>
</div>




<div className="ChartsThirdRow">

  <div className="ChartHeadlineContainer"><div className="ChartHeadline">PEG</div>
  </div>
  

  <div className="ChartsContainer">
  {isLoadingPEG ? <ChartSkeleton/>:  <PegChart dataPEG={dataPEG}/>}
  </div>
  </div>
  <div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Fair Value (DCF)</div>
  </div>

  <div className="ChartsContainer">
  {isLoadingFairValueChart ? <ChartSkeleton/>:  <AktienkursDCFChart dataFairValueChart={dataFairValueChart}/>}
</div>
</div>


<div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">EV/Ebitda<span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>  </span></div>
  </div>

  <div className="ChartsContainer">
  {isLoadingEvEbitdaEvSales ? <ChartSkeleton/>:  <EvEBITDA dataEvEbitdaEvSales={dataEvEbitdaEvSales}/>}
  </div>
  </div>
  <div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">EV/Sales<span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>  </span></div>
  </div>
  <div className="ChartsContainer">
  {isLoadingEvEbitdaEvSales ? <ChartSkeleton/>:  <EvSales dataEvEbitdaEvSales={dataEvEbitdaEvSales}/>}
  </div>
</div>



<div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Fair Value<span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>  </span></div>
  </div>

  <div className="ChartsContainer">
  {isLoadingFairValuePrice ? <ChartSkeleton/>:  <FairValue dataFairValuePrice={dataFairValuePrice}/>}
  </div>
  </div>
  <div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Schätzungen<span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>  </span></div>
  </div>
  <div className="ChartsContainer">
  {isLoadingPriceTargets ? <ChartSkeleton/>:  <AnalystenKonsens dataPriceTargets={dataPriceTargets}/>}
  </div>
</div>




{/* <div className="ChartsThirdRow">
  <div className="CompanySecondRowInfoTable1">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Analysten Ratings<span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>  </span></div>
  </div>

  {isLoadingUpgradeDowngrade ? <ChartSkeleton/>:  <ValuationAnalystenRatings dataUpgradeDowngrade={dataUpgradeDowngrade}/>}
  </div>


</div> */}



</div>
    );
  }


export default Valuation;