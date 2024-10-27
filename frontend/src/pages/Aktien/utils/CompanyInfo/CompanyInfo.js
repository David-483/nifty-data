import Aktienkurs from "../Charts/Chartlib/Aktienkurs";
import "./CompanyInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StockPerformanceInfoTable from "./StockPerformanceInfoTable";
import CompanyInfoOverviewTables from "./CompanyInfoOverviewTables";
import CompanyInfoManagement from "./CompanyInfoManagement";
import IconButton from "@mui/material/IconButton";
import { styled } from '@mui/material/styles';
import InfoIcon from "@mui/icons-material/Info";
import { Backdrop } from "@mui/material";
import DefAktienkurs from "../Definitionen/DefAktienkurs";
import DefPerformance from "../Definitionen/DefPerformance";
import ChartSkeleton from "../Charts/Skeletons/ChartSkeleton";
import DefCompanyInfos from "../Definitionen/DefCompanyInfos";
import DefManagement from "../Definitionen/DefManagement";
import Biopic from "./Biopic";
import ESGInfo from "./ESGInfo";

function CompanyInfo({ ticker }) {
  const [isLoadingChart, setIsLoadingChart] = React.useState(false);
  const [isLoadingIntraday, setIsLoadingIntraday] = React.useState(false);
  const [isLoadingPerformance, setIsLoadingPerformance] = React.useState(false);
  const [isLoadingManagement, setIsLoadingManagement] = React.useState(false);
  const [isLoadingQuickinfo, setIsLoadingQuickinfo] = React.useState(false);
  const [isLoadingBiopic, setIsLoadingBiopic] = React.useState(true);
  const [biopicData, setbiopicData] = React.useState([]);
  const [chartData, setChartData] = React.useState([]);
  const [intradayData, setIntradayData] = React.useState([]);
  const [performanceDatastockChangeData, setPerformanceDatastockChangeData] = React.useState([]);
  const [performanceDatacompanyQuoteData, setPerformanceDatacompanyQuoteData] = React.useState([]);
  const [quickinfoData, setquickinfoData] = React.useState({});
  const [isErrorChart, setisErrorChart] = React.useState(false);
  const [isErrorIntraday, setisErrorIntraday] = React.useState(false);
  const [managementData, setmanagementData] = React.useState([]);
  const [esgData, setEsgData] = React.useState([]);
  const [isLoadingEsg, setIsLoadingEsg] = React.useState(false);


    // PopUPs

    const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
      color: "rgba(255,255,255,1)",
      width: "20px",
      // marginBottom: "-15px"
      
    }));

    // Aktienkurs
const [openDialogAktienkurs, setOpenDialogAktienkurs] = React.useState(false);

    const handleClickOpenAktienkurs = () => {
      setOpenDialogAktienkurs(true);
    };

    const handleCloseAktienkurs = () => {
      setOpenDialogAktienkurs(false);
    };

        // Performance
const [openDialogPerformance, setOpenDialogPerformance] = React.useState(false);

const handleClickOpenPerformance = () => {
  setOpenDialogPerformance(true);
};

const handleClosePerformance = () => {
  setOpenDialogPerformance(false);
};


        // Infos
        const [openDialogInfos, setOpenDialogInfos] = React.useState(false);

        const handleClickOpenInfos = () => {
          setOpenDialogInfos(true);
        };
        
        const handleCloseInfos = () => {
          setOpenDialogInfos(false);
        };
        



        // Management
        const [openDialogManagement, setOpenDialogManagement] = React.useState(false);

        const handleClickOpenManagement = () => {
          setOpenDialogManagement(true);
        };
        
        const handleCloseManagement = () => {
          setOpenDialogManagement(false);
        };
        



  const FixedLine = {
    fontFamily: "Inter-regular",

    fontSize: 15,
    color: "white",
    paddingLeft: 5,
  };

  const FixedLineRight = {
    fontFamily: "Inter-regular",
    fontSize: 15,
    color: "white",
    paddingLeft: 10,
  };

  const FlexLine = {
    fontFamily: "Inter-Bold",
    fontSize: 15,
    color: "white",
    paddingRight: 10,
  };

  const FlexLineRight = {
    fontFamily: "Inter-Bold",
    fontSize: 15,
    color: "white",
    paddingRight: 5,
    textAlign: "right",
  };

  const TopLineRow = {
    fontFamily: "Inter-regular",
    fontSize: 15,
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "Left",
  };

  const UnderLineRow = {
    fontFamily: "Inter-Bold",
    fontSize: 15,
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "Left",
  };

  var aktienkursURL =
    process.env.REACT_APP_BACKEND_URL+"/companyinfo/Aktienkurs/" + ticker + "";
    
    var intradayURL =
    process.env.REACT_APP_BACKEND_URL+"/companyinfo/Intraday/" + ticker + "";

  var performanceURL =
  process.env.REACT_APP_BACKEND_URL+"/companyinfo/PerformanceTable/" + ticker + "";
  var managementURL =
  process.env.REACT_APP_BACKEND_URL+"/companyinfo/Management/" + ticker + "";
    var quickinfoURL =
    process.env.REACT_APP_BACKEND_URL+"/companyinfo/quickinfo/" + ticker + "";
    var biopicURL =
    process.env.REACT_APP_BACKEND_URL+"/companyinfo/biopic/" + ticker + "";
    var esgURL =
    process.env.REACT_APP_BACKEND_URL+"/companyinfo/ESG/" + ticker + "";




  // Aktienkurs import

  const fetchDataAktienkurs = async () => {
    setisErrorChart(false);
    setIsLoadingChart(true);
    try {
      const result = await axios(aktienkursURL);
      setChartData(result.data);
    } catch (error) {
      setisErrorChart(true);
    }
    setIsLoadingChart(false);
  };

  const fetchDataIntraday = async () => {
    setisErrorIntraday(false);
    setIsLoadingIntraday(true);
    try {
      const result = await axios(intradayURL);
      setIntradayData(result.data);
    } catch (error) {
      setisErrorIntraday(true);
    }
    setIsLoadingIntraday(false);
  };

  const fetchDataPerformance = async () => {
    // setIsError(false);
    setIsLoadingPerformance(true);
    try {
      const result = await axios(performanceURL);

      setPerformanceDatastockChangeData(result.data.stockChangeData[0]);
      setPerformanceDatacompanyQuoteData(result.data.companyQuoteData[0]);

    } catch (error) {
      // setIsError(true);
    }
    setIsLoadingPerformance(false);
  };

  const fetchDataManagement = async () => {
    // setIsError(false);
    setIsLoadingManagement(true);
    try {
      const result = await axios(managementURL);
      setmanagementData(result.data.myData);
    } catch (error) {
      // setIsError(true);
    }
    setIsLoadingManagement(false);
  };


  const fetchDataEsg = async () => {
    setIsLoadingEsg(true);
    try {
        const result = await axios.get(esgURL);
        setEsgData(result.data);
    } catch (error) {
        console.error("Error fetching ESG data:", error);
        // setIsError(true); // Kann entkommentiert werden, um den Fehlerzustand zu setzen
    } finally {
        setIsLoadingEsg(false);
    }
};

  const fetchDataQuickinfo = async () => {
    // setIsError(false);
    setIsLoadingQuickinfo(true);
    try {
      const result = await axios(quickinfoURL);
      setquickinfoData(result.data);
    } catch (error) {
      // setIsError(true);
    }
    setIsLoadingQuickinfo(false);
  };

  const fetchDataBiopic = async () => {
    // setIsError(false);
    setIsLoadingBiopic(true);
    try {
      const result = await axios(biopicURL);
      console.log(result.data?.companiesInfos[0]);
      setbiopicData(result.data?.companiesInfos[0]);
    } catch (error) {
      // setIsError(true);
    }
    setIsLoadingBiopic(false);
  };

  useEffect(() => {
    fetchDataAktienkurs();
    fetchDataIntraday();
    fetchDataPerformance();
    fetchDataManagement();
    fetchDataEsg();
    fetchDataQuickinfo();
    fetchDataBiopic();
  }, [ticker]);

  // stockChangeData

  return (
    <div className="CompanyBody">


{/* UmsatzEbitGewinn */}
    <Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogAktienkurs}
        onClick={handleCloseAktienkurs}
      >

                  <div className="analyseInfoGlassDoor">

<DefAktienkurs/>
        </div>

      </Backdrop>

    <Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogPerformance}
        onClick={handleClosePerformance}
      >

                  <div className="analyseInfoGlassDoor">

<DefPerformance/>
        </div>

      </Backdrop>

      <Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogInfos}
        onClick={handleCloseInfos}
      >

                  <div className="analyseInfoGlassDoor">

<DefCompanyInfos/>
        </div>

      </Backdrop>


      {/* Managmenet Pop Up */}
    <Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogManagement}
        onClick={handleCloseManagement}
      >

                  <div className="analyseInfoGlassDoor">

<DefManagement/>
        </div>

      </Backdrop>





      {/* HTML */}

      <div className="ChartsThirdRow">

    
<div className="ChartHeadlineContainer">

      <div className="ChartHeadline">Infos
      <span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>    </span>
      <span className="iconButtonInfo"  style={{position:"absolute", }}>   <IconButton color="primary" onClick={handleClickOpenInfos}><StyledInfoIcon /></IconButton></span>
      </div>
      </div>

      {isLoadingPerformance ? <ChartSkeleton/> :  <CompanyInfoOverviewTables quickinfoData={quickinfoData}/>}

      </div>


      <div className="ChartsThirdRow">

        

      <div className="ChartHeadlineContainer">

      <div className="ChartHeadline">Aktienkurs
      <span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>    </span>
      <span className="iconButtonInfo" style={{position:"absolute",}}>   <IconButton color="primary" onClick={handleClickOpenAktienkurs}><StyledInfoIcon /></IconButton></span>
      </div>
      </div>

      <div className="ChartsContainer">
      {isLoadingChart ? <ChartSkeleton /> : <Aktienkurs ticker={ticker} myHookValue={ chartData } intradayHook={intradayData} quickinfoData={quickinfoData}/>}
      </div>  
      </div>




      <div className="ChartsThirdRow">


      

      


{isLoadingBiopic ? <ChartSkeleton/> : (biopicData == undefined ? <></> : 
<><div className="ChartHeadlineContainer"><div className="ChartHeadline">Biopic</div></div> <Biopic biopicData={biopicData}  /> </>)}
</div>







      <div className="ChartsThirdRow">


      <div className="ChartHeadlineContainer">

<div className="ChartHeadline">Performance
<span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>    </span>
<span className="iconButtonInfo"  style={{position:"absolute", }}>   <IconButton color="primary" onClick={handleClickOpenPerformance}><StyledInfoIcon /></IconButton></span>
</div>


</div>

{isLoadingPerformance ? <ChartSkeleton/> :  <StockPerformanceInfoTable performanceDatastockChangeData={performanceDatastockChangeData} performanceDatacompanyQuoteData={ performanceDatacompanyQuoteData }/>}
</div>






      <div className="ChartsThirdRow">

      <div className="ChartHeadlineContainer">

      <div className="ChartHeadline">ESG
      <span className="iconButtonInfo"  style={{position:"absolute", }}>   <IconButton color="primary" onClick={handleClickOpenManagement}><StyledInfoIcon /></IconButton></span>
      </div>
      </div>
      <div className="ChartsContainer">
      <ESGInfo esgData={esgData} />
      </div>
      </div>


      <div className="ChartsThirdRow">
      <div className="ChartHeadlineContainer">

<div className="ChartHeadline">Management
<span style={{marginLeft:"5px", fontSize:"15px", fontFamily:"inter-bold", opacity:"0.6"}}>    </span>
<span className="iconButtonInfo"  style={{position:"absolute", }}>   <IconButton color="primary" onClick={handleClickOpenManagement}><StyledInfoIcon /></IconButton></span>
</div>
</div>


      <CompanyInfoManagement managementData={managementData}/>


    </div>


    </div>
    
  );
}

export default CompanyInfo;
