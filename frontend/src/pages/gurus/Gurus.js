import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";

import Profilecard from "./Profilecard";
import AumChart from "./AumChart";
import TablePortfolio from "./TablePortfolio";
import TableAbgaenge from "./TableAbgaenge";
import TableZugaenge from "./TableZugaenge";
import Biographie from "./Biographie";
import TopTenHoldingsTreemap from "./TopTenHoldingsTreemap";
import TopTenBarChart from "./TopTenBarChart";
import GuruSectorChart from "./GuruSectorChart";
import SectorOverTimeChart from "./SectorOverTimeChart";
import GuruSkeleton from "../Aktien/utils/diffTables/GuruSkeleton";
import ChartSkeleton from "../Aktien/utils/Charts/Skeletons/ChartSkeleton";
import ProfilecardSkeleton from "./Skeletons/ProfilecardSkeleton";
import BiographieSkeleton from "./Skeletons/BiographieSkeleton";
import MyComponent from "./MyComponent";
import FetchData from "./FetchData";

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';


import "./GurusStyle.css";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 45,
  height: 24,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#000',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${"./../img/dollar.svg"})`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#8796A5',
        // WEG von LINKS MITTE WEG
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    
    // LINKER KNÜPPEL 
    width: 22,
    height: 22,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${"./../img/percent.svg"})`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
     // WEG von RECHTS MITTE WEG
    borderRadius: 20 / 2,
  },
}));



function Gurus() {
  const [isLoadingHoldings, setIsLoadingHoldings] = useState(true);
  const [isErrorHoldings, setIsErrorHoldings] = useState(true);
  const [isLoadingDescriptions, setIsLoadingDescriptions] = useState(true);
  const [isErrorDescriptions, setIsErrorDescriptions] = useState(true);
  const [dataHoldings, setDataHoldings] = useState();
  const [dataDescriptions, setDataDescriptions] = useState();
  const [badReq,setbadReq] = useState(true);
  const [noAuth,setnoAuth] = useState(false);

  const [switchSectorChart, setswitchSectorChart] = React.useState(true);
  const [switchTopTenChart, setswitchTopTenChart] = React.useState(true);

  var { guru } = useParams();
  if(guru==undefined){
    guru = "0001067983";
  }

  var baseURL = process.env.REACT_APP_BACKEND_URL;
  

   const fetchDataGurusHoldings = async (urlRequestHoldings) => {
    setIsErrorHoldings(false);
    setIsLoadingHoldings(true);
    try {
      const result = await axios(urlRequestHoldings);
      setDataHoldings(result.data);
    } catch (error) {
      setIsErrorHoldings(true);
    }
    setIsLoadingHoldings(false);
  };

  const fetchDataGurusDescriptions = async (urlRequestDescriptions) => {
    setIsErrorDescriptions(false);
    setIsLoadingDescriptions(true);
    try {
      const result = await axios(urlRequestDescriptions);
      setDataDescriptions(result.data);
    } catch (error) {
      setIsErrorDescriptions(true);
    }
    setIsLoadingDescriptions(false);
  };


  useEffect(() => {
    // var urlRequest = baseURL+`/gurus/${guru}`;
    var urlRequestHoldings = baseURL+`/gurusPage/test/${guru}`;
    var urlRequestDescriptions = baseURL+`/gurusPage/description/${guru}`;
    fetchDataGurusHoldings(urlRequestHoldings);
    fetchDataGurusDescriptions(urlRequestDescriptions);
  }, []);

  useEffect(() => {
    // var urlRequest = baseURL+`/gurus/${guru}`;
    var urlRequestHoldings = baseURL+`/gurusPage/test/${guru}`;
    var urlRequestDescriptions = baseURL+`/gurusPage/description/${guru}`;
    fetchDataGurusHoldings(urlRequestHoldings);
    fetchDataGurusDescriptions(urlRequestDescriptions);
    // window.scrollTo(0, 0);
    }, [guru]);


  

  return (
    <>
    <div key={guru}>
      

      <div className="main-container">

<div className="guruFirstRow">

<div className="guruHeadlineContainer">
          <div className="guruHeadline">
            Übersicht
          </div>
          </div>

<div className="guruInnerTop">
            <div className="guru-detail-topsection">
            {isLoadingDescriptions ? <ProfilecardSkeleton /> : <Profilecard data={dataDescriptions} />}              
            </div>

            {isLoadingDescriptions ? <BiographieSkeleton /> : <Biographie data={dataDescriptions} />}
          </div>
          </div>

          {/* <!-- ENDE TOP SECTION --> */}


          <div className="guruFirstRow">
          <div className="guruHeadlineContainer">
          <div className="guruHeadline">
            Assets under Management
          </div>
          </div>

        

          {/* <%- include ('_aumchart.ejs') %> */}
          <div className="aumchartcontainer">
          {isLoadingHoldings ? <GuruSkeleton /> : <AumChart data={dataHoldings.chartDataAum[0]} />}
          </div>
          </div>

          <div className="guruFirstRow">
          <div className="guruHeadlineContainer">
          <div className="guruHeadline">
            Portfolio
          </div>
          </div>

            <div className="guruPortfolioTable">
          {isLoadingHoldings ? <GuruSkeleton /> : <TablePortfolio data={dataHoldings.aktuelleHoldings} />}
          </div>


          <div className="guruHeadlineContainer" style={{marginTop:"50px"}}>
          <div className="guruHeadline">
            Zugänge
          </div>
          </div>

          <div className="guruPortfolioTable">
          {isLoadingHoldings ? <GuruSkeleton /> : <TableZugaenge data={dataHoldings.zukauefeHoldings} />}
          </div>
          
          <div className="guruHeadlineContainer" style={{marginTop:"50px"}}>
          <div className="guruHeadline">
            Abgänge
          </div>
          </div>
          {isLoadingHoldings ? <GuruSkeleton /> : <TableAbgaenge data={dataHoldings.abgaengeHoldings} />}


          </div>

          <div className="guruFirstRow">
          <div className="guruHeadlineContainer">
          <div className="guruHeadline">
            Top {isLoadingHoldings ? 10 : dataHoldings.chartDataTopTen.chartDataTopTenHoldingsPercent?.length} Holdings
          </div>
          </div>


          {/* <%- include ('_topTenHoldingsTreemap.ejs') %>  */}

          <div className="aumchartcontainer">
            <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchTopTenChart(!switchTopTenChart);}} /></div>
            {isLoadingHoldings ? <ChartSkeleton/>:  (<> {switchTopTenChart ? <TopTenBarChart data={dataHoldings.chartDataTopTen} dataValues={dataHoldings.chartDataTopTen.chartDataTopTenHoldingsPercent} chartType={switchTopTenChart} /> : <><TopTenBarChart data={dataHoldings.chartDataTopTen} dataValues={dataHoldings.chartDataTopTen.chartDataTopTenHoldingValues} chartType={switchTopTenChart}/> </> } </>) }
            </div>
          </div>


          <div className="guruFirstRow">
          <div className="guruHeadlineContainer">
          <div className="guruHeadline">
            Sektor Allokation
          </div>
          </div>

          <div className="aumchartcontainer">
            <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchSectorChart(!switchSectorChart);}} /></div>
            {isLoadingHoldings ? <ChartSkeleton/>:  (<> {switchSectorChart ? <GuruSectorChart data={dataHoldings.sectorChartData} dataValues={dataHoldings.sectorChartData.sectorValuesPercent} chartType={switchSectorChart} /> : <><GuruSectorChart data={dataHoldings.sectorChartData} dataValues={dataHoldings.sectorChartData.sectorValues} chartType={switchSectorChart} /> </> } </>) }

            </div>
            </div>

            <div className="guruFirstRow">
          <div className="guruHeadlineContainer">
          <div className="guruHeadline">
            Sektor Allokation
          </div>
          </div>

          <div className="aumchartcontainer">
          {isLoadingHoldings ? <GuruSkeleton /> : <SectorOverTimeChart data={dataHoldings.trendChartData} />}
          </div>
          </div>
          
          <div className="guruFoot">

          </div>

      </div>
      </div>
      </>
  );
}

export default Gurus;
