import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import ChartSkeleton from "../Charts/Skeletons/ChartSkeleton";

import "./Dividend.css";

import DividendYieldChart from "../Charts/Chartlib/DividendYieldChart";
import DividendChart from "../Charts/Chartlib/DividendChart";
import PayoutChart from "../Charts/Chartlib/PayoutChart";
import OutstandingSharesChart from "../Charts/Chartlib/OutstandingSharesChart";
import DividendInfoTables from "./DividendInfoTables";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import InfoIcon from "@mui/icons-material/Info";
import Backdrop from "@mui/material/Backdrop";
import DefUmsatzEBITGewinn from "../Definitionen/DefUmsatzEBITGewinn";

import DividendTableQuarter from "./DividendTableQuarter";
import DividendTableYearly from "./DividendTableYearly";
import DividendInfoTableGrowth from "./DividendInfoTableGrowth";
import DividendInfoTableAllgemein from "./DividendInfoTableAllgemein";

var baseURL = process.env.REACT_APP_BACKEND_URL;


// Style für Tabellen
const TopLineRowHeadlineTop = {
  fontFamily: "Inter-Bold",
  fontSize: 15,
  color: "white",
  paddingRight: 5,
  paddingLeft: 5,
  textAlign: "Left",
}

const TopLineRowHeadline = {
  fontFamily: "inter-regular",
  fontSize: 15,
  color: "white",
  paddingRight: 5,
  paddingLeft: 5,
  textAlign: "Left",
}

// SwitchButton
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
        backgroundImage: `url(${"./../img/barchart.svg"})`,
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
      backgroundImage: `url(${"./../img/linechart.svg"})`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
     // WEG von RECHTS MITTE WEG
    borderRadius: 20 / 2,
  },
}));


//InfoButton
const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
  color: "rgba(255,255,255,1)",
  width: "20px",
  // marginBottom: "-15px"
  
}));


function Dividend({ticker}) {

    // POP Ups
    // Dividend
    const [openDialogDividend, setOpenDialogDividend] = React.useState(false);

    const handleClickOpenDividend = () => {
      setOpenDialogDividend(true);
    };
  
    const handleClose = () => {
      setOpenDialogDividend(false);
    };

        // DividendYield
        const [openDialogDividendYield, setOpenDialogDividendYield] = React.useState(false);

        const handleClickOpenDividendYield = () => {
          setOpenDialogDividendYield(true);
        };
      
        const handleCloseDividendYield = () => {
          setOpenDialogDividendYield(false);
        };

                // PayoutRatio
        const [openDialogPayoutRatio, setOpenDialogPayoutRatio] = React.useState(false);

        const handleClickOpenPayoutRatio = () => {
          setOpenDialogPayoutRatio(true);
        };
      
        const handleClosePayoutRatio = () => {
          setOpenDialogPayoutRatio(false);
        };

    // OutstandingShares
    const [openDialogOutstandingShares, setOpenDialogOutstandingShares] = React.useState(false);

    const handleClickOpenOutstandingShares = () => {
      setOpenDialogOutstandingShares(true);
    };
  
    const handleCloseOutstandingShares = () => {
      setOpenDialogOutstandingShares(false);
    };        
  



  // Charts
  // PayoutRatio
  const [isLoadingPayoutRatio, setIsLoadingPayoutRatio] = React.useState(false)
  const [isErrorPayoutRatio, setIsErrorPayoutRatio] = React.useState(false)
  const [dataPayoutRatio, setDataPayoutRatio] = React.useState([]);
  const [switchPayoutRatio, setswitchPayoutRatio] = React.useState(false);

  var URLPayoutRatio = baseURL+"/aktienpagedividend/PayoutRatio/"+ticker +"";

  const fetchDataPayoutRatio = async () => {
    setIsErrorPayoutRatio(false);
    setIsLoadingPayoutRatio(true);
    try {
      const result = await axios(URLPayoutRatio);
      setDataPayoutRatio(result.data.PayoutRatio);
    } catch (error) {
      setIsErrorPayoutRatio(true);
    }
    setIsLoadingPayoutRatio(false);
  };


  // Dividend
      const [isLoadingDividend, setIsLoadingDividend] = React.useState(false)
      const [isErrorDividend, setIsErrorDividend] = React.useState(false)
      const [dataDividend, setDataDividend] = React.useState([]);
      const [switchDividendChart, setswitchDividendChart] = React.useState(false);
    
      var URLDividend = baseURL+"/aktienpagedividend/Dividende/"+ticker +"";

      const fetchDataDividend = async () => {
        setIsErrorDividend(false);
        setIsLoadingDividend(true);
        try {
          const result = await axios(URLDividend);
          setDataDividend(result.data.data);
        } catch (error) {
          setIsErrorDividend(true);
        }
        setIsLoadingDividend(false);
      };
      

        // DividendQuarter
        const [isLoadingDividendQuarter, setIsLoadingDividendQuarter] = React.useState(false)
        const [isErrorDividendQuarter, setIsErrorDividendQuarter] = React.useState(false)
        const [dataDividendQuarter, setDataDividendQuarter] = React.useState([]);
      
        var URLDividendQuarter = baseURL+"/aktienpagedividend/DividendQuarter/"+ticker +"";
  
        const fetchDataDividendQuarter = async () => {
          setIsErrorDividendQuarter(false);
          setIsLoadingDividendQuarter(true);
          try {
            const result = await axios(URLDividendQuarter);
            setDataDividendQuarter(result.data.DividendeExDate);
          } catch (error) {
            setIsErrorDividendQuarter(true);
          }
          setIsLoadingDividendQuarter(false);
        };

        // DividendYield
        const [isLoadingDividendYield, setIsLoadingDividendYield] = React.useState(false)
        const [isErrorDividendYield, setIsErrorDividendYield] = React.useState(false)
        const [dataDividendYield, setDataDividendYield] = React.useState([]);
        const [switchDividendYieldChart, setswitchDividendYieldChart] = React.useState(false);
      
        var URLDividendYield = baseURL+"/aktienpagedividend/Dividende/"+ticker +"";
  
        const fetchDataDividendYield = async () => {
          setIsErrorDividendYield(false);
          setIsLoadingDividendYield(true);
          try {
            const result = await axios(URLDividendYield);
            setDataDividendYield(result.data.data);
          } catch (error) {
            setIsErrorDividendYield(true);
          }
          setIsLoadingDividendYield(false);
        };


        // OutstandingShares
        const [isLoadingOutstandingShares, setIsLoadingOutstandingShares] = React.useState(false)
        const [isErrorOutstandingShares, setIsErrorOutstandingShares] = React.useState(false)
        const [dataOutstandingShares, setDataOutstandingShares] = React.useState([]);
        const [switchOutstandingShares, setswitchOutstandingShares] = React.useState(false);
      
        var URLOutstandingShares = baseURL+"/aktienpagedividend/OutstandingShares/"+ticker +"";
  
        const fetchDataOutstandingShares = async () => {
          setIsErrorOutstandingShares(false);
          setIsLoadingOutstandingShares(true);
          try {
            const result = await axios(URLOutstandingShares);
            setDataOutstandingShares(result.data.OutstandingShares);
          } catch (error) {
            setIsErrorOutstandingShares(true);
          }
          setIsLoadingOutstandingShares(false);
        };

        // InfoTableAllgemein
        const [isLoadingInfoTableAllgemein, setIsLoadingInfoTableAllgemein] = React.useState(false)
        const [isErrorInfoTableAllgemein, setIsErrorInfoTableAllgemein] = React.useState(false)
        const [dataInfoTableAllgemein, setDataInfoTableAllgemein] = React.useState({});

              
         var URLInfoTableAllgemein = baseURL+"/aktienpagedividend/DividendInfosAllgemein/"+ticker +"";
          
                const fetchDataInfoTableAllgemein = async () => {
                  setIsErrorInfoTableAllgemein(false);
                  setIsLoadingInfoTableAllgemein(true);
                  try {
                    const result = await axios(URLInfoTableAllgemein);
                    setDataInfoTableAllgemein(result.data);
                  } catch (error) {
                    setIsErrorInfoTableAllgemein(true);
                  }
                  setIsLoadingInfoTableAllgemein(false);
                };


        // InfoTableGrowth
        const [isLoadingInfoTableGrowth, setIsLoadingInfoTableGrowth] = React.useState(false)
        const [isErrorInfoTableGrowth, setIsErrorInfoTableGrowth] = React.useState(false)
        const [dataInfoTableGrowth, setDataInfoTableGrowth] = React.useState({});

              
         var URLInfoTableGrowth = baseURL+"/aktienpagedividend/DividendInfosGrowth/"+ticker +"";
          
                const fetchDataInfoTableGrowth = async () => {
                  setIsErrorInfoTableGrowth(false);
                  setIsLoadingInfoTableGrowth(true);
                  try {
                    const result = await axios(URLInfoTableGrowth);
                    setDataInfoTableGrowth(result.data);
                  } catch (error) {
                    setIsErrorInfoTableGrowth(true);
                  }
                  setIsLoadingInfoTableGrowth(false);
                };



  useEffect(() => {
    fetchDataPayoutRatio();
    fetchDataDividend();
    fetchDataDividendYield();
    fetchDataOutstandingShares();
    fetchDataDividendQuarter();
    fetchDataInfoTableAllgemein();
    fetchDataInfoTableGrowth();
  }, []);
    

  return (

<div className="CompanyBody">


{/* Definitionen */}
{/* Dividende */}

<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogDividend}
        onClick={handleClose}
      >

                  <div className="analyseInfoGlassDoor">

<DefUmsatzEBITGewinn/>
        </div>

      </Backdrop>



{/* Dividendenrendite */}

<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogDividendYield}
        onClick={handleCloseDividendYield}
      >

                  <div className="analyseInfoGlassDoor">

<DefUmsatzEBITGewinn/>
        </div>

      </Backdrop>


{/* PayoutRatio */}

<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogPayoutRatio}
        onClick={handleClosePayoutRatio}
      >

                  <div className="analyseInfoGlassDoor">

<DefUmsatzEBITGewinn/>
        </div>

      </Backdrop>


{/* PayoutRatio */}

<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogOutstandingShares}
        onClick={handleCloseOutstandingShares}
      >

                  <div className="analyseInfoGlassDoor">

<DefUmsatzEBITGewinn/>
        </div>

      </Backdrop>

 {/* FirstRow */}

<div className="ChartsThirdRow">

 {/* Dividend Chart */}


<div className="ChartHeadlineContainer"><div className="ChartHeadline">Dividende</div>
  <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchDividendChart(!switchDividendChart);}} /></div>
  </div>

  <div className="ChartsContainer">
  {isLoadingDividend ? <ChartSkeleton/> :  (<> {switchDividendChart ? <DividendChart dataDividend={dataDividend} bar={switchDividendChart}/> : <><DividendChart dataDividend={dataDividend} bar={switchDividendChart}/> </> } </>) }
  </div>


  </div>
 {/* SecondRow */}


<div className="ChartsThirdRow">

   {/* Dividenden Payout Chart */}


  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Payout</div>
  <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchPayoutRatio(!switchPayoutRatio);}} /></div>
  </div>

  <div className="ChartsContainer">
  {isLoadingPayoutRatio ? <ChartSkeleton/> :  (<> {switchPayoutRatio ? <PayoutChart dataPayoutRatio={dataPayoutRatio} bar={switchPayoutRatio}/> : <><PayoutChart dataPayoutRatio={dataPayoutRatio} bar={switchPayoutRatio}/> </> } </>) }
  </div>
  </div>


 {/* Outstanding Shares Chart */}

 <div className="ChartsThirdRow">
 <div className="ChartHeadlineContainer"><div className="ChartHeadline">Ausstehende Aktien</div>
 <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchOutstandingShares(!switchOutstandingShares);}} /></div>
 </div>

  <div className="ChartsContainer">
  {isLoadingOutstandingShares ? <ChartSkeleton/> :  (<> {switchOutstandingShares ? <OutstandingSharesChart dataOutstandingShares={dataOutstandingShares} bar={switchOutstandingShares}/> : <><OutstandingSharesChart dataOutstandingShares={dataOutstandingShares} bar={switchOutstandingShares}/> </> } </>) }
</div>
</div>




 {/* Third Row */}

<div className="ChartsThirdRow">

  {/* <DividendInfoTables/> */}

  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Infos</div>
  </div>

  <div className="CompanyTableSecondRowContainer">
  {isLoadingInfoTableAllgemein ? <ChartSkeleton/> : <DividendInfoTableAllgemein dataInfoTableAllgemein={dataInfoTableAllgemein}/> }

  </div>
  </div>


  <div className="ChartsThirdRow">

  {/* <DividendInfoTables/> */}

  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Infos</div>
  </div>

  <div className="CompanyTableSecondRowContainer">
  {isLoadingInfoTableGrowth ? <ChartSkeleton/> : <DividendInfoTableGrowth dataInfoTableGrowth={dataInfoTableGrowth}/> }
  </div>
</div>



 {/* Fourth Row */}

<div className="ChartsThirdRow">

  {/* <DividendQuarterTable/> */}


  <div className="ChartHeadlineContainer">
    <div className="ChartHeadline">Dividenden</div>
  </div>


{isLoadingDividendQuarter ? <ChartSkeleton/> :  <DividendTableQuarter dataDividendQuarter={dataDividendQuarter}/>}
</div>
</div>
  );
}


export default Dividend;
