import { height } from "@mui/system";
import { fontFamily } from "@mui/system";
import UmsatzGewinnKurs from "./Chartlib/UmsatzGewinnKurs";
import Aktienkurs from "./Chartlib/Aktienkurs";
import MargenChart from "./Chartlib/MargenChart";
import CostsChart from "./Chartlib/CostsChart";
import TaxAndInterestsChart from "./Chartlib/TaxAndInterestsChart";
import EKFKChart from "./Chartlib/EKFKChart";
import ROAROEChart from "./Chartlib/ROAROEChart";
import CashQuickCurrentChart from "./Chartlib/CashQuickCurrentChart";
import NetDebtEbitdaChart from "./Chartlib/NetDebtEbitdaChart";
import CashDebtChart from "./Chartlib/CashDebtChart";
import FairValue from "./Chartlib/FairValue";
import FCFOEChart from "./Chartlib/FCFOEChart";
import ROICChart from "./Chartlib/ROICChart";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';

import Backdrop from "@mui/material/Backdrop";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ChartSkeleton from "./Skeletons/ChartSkeleton";

// Import der Definitionen
import DefUmsatzEBITGewinn from "../Definitionen/DefUmsatzEBITGewinn";
import DefFCFOE from "../Definitionen/DefFCFOE";
import DefMargen from "../Definitionen/DefMargen";
import DefCosts from "../Definitionen/DefCosts";

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';



import "./Charts.css";
import DefInterestsAndTaxes from "../Definitionen/DefInterestsAndTaxes";

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


function Charts({ticker}) {
  // UmsatzGewinnKurs
  const [isLoadingUmsatzGewinnKurs, setIsLoadingUmsatzGewinnKurs] = React.useState(true)
  const [isErrorUmsatzGewinnKurs, setIsErrorUmsatzGewinnKurs] = React.useState(false)
  const [dataUmsatzGewinnKurs, setDataUmsatzGewinnKurs] = React.useState({});
  const [switchUmsatzGewinnChart, setswitchUmsatzGewinnChart] = React.useState(false);

  // FCFOE
  const [isLoadingFCFOE, setIsLoadingFCFOE] = React.useState(true)
  const [isErrorFCFOE, setIsErrorFCFOE] = React.useState(false)
  const [dataFCFOE, setDataFCFOE] = React.useState({});
  const [switchFCFOEChart, setswitchFCFOEChart] = React.useState(false);
 
  // Margen
  const [isLoadingMargen, setIsLoadingMargen] = React.useState(true)
  const [isErrorMargen, setIsErrorMargen] = React.useState(false)
  const [dataMargen, setDataMargen] = React.useState({});
  const [switchMargenChart, setswitchMargenChart] = React.useState(false);
  // Costs
  const [isLoadingCosts, setIsLoadingCosts] = React.useState(true)
  const [isErrorCosts, setIsErrorCosts] = React.useState(false)
  const [dataCosts, setDataCosts] = React.useState({});
  const [switchCostsChart, setswitchCostsChart] = React.useState(false);

  // TaxAndInterests
  const [isLoadingTaxAndInterests, setIsLoadingTaxAndInterests] = React.useState(true)
  const [isErrorTaxAndInterests, setIsErrorTaxAndInterests] = React.useState(false)
  const [dataTaxAndInterests, setDataTaxAndInterests] = React.useState({});
  const [switchTaxAndInterestsChart, setswitchTaxAndInterestsChart] = React.useState(false);

  // EKFK
  const [isLoadingEKFK, setIsLoadingEKFK] = React.useState(true)
  const [isErrorEKFK, setIsErrorEKFK] = React.useState(false)
  const [dataEKFK, setDataEKFK] = React.useState({});
  const [switchEKFKChart, setswitchEKFKChart] = React.useState(false);

  // CashQuickCurrent
  const [isLoadingCashQuickCurrent, setIsLoadingCashQuickCurrent] = React.useState(true)
  const [isErrorCashQuickCurrent, setIsErrorCashQuickCurrent] = React.useState(false)
  const [dataCashQuickCurrent, setDataCashQuickCurrent] = React.useState({});
  const [switchCashQuickCurrentChart, setswitchCashQuickCurrentChart] = React.useState(false);

  // NetDebtEbitda
  const [isLoadingNetDebtEbitda, setIsLoadingNetDebtEbitda] = React.useState(true)
  const [isErrorNetDebtEbitda, setIsErrorNetDebtEbitda] = React.useState(false)
  const [dataNetDebtEbitda, setDataNetDebtEbitda] = React.useState({});
  const [switchNetDebtEbitdaChart, setswitchNetDebtEbitdaChart] = React.useState(false);

  // CashDebt
  const [isLoadingCashDebt, setIsLoadingCashDebt] = React.useState(true)
  const [isErrorCashDebt, setIsErrorCashDebt] = React.useState(false)
  const [dataCashDebt, setDataCashDebt] = React.useState({});
  const [switchCashDebtChart, setswitchCashDebtChart] = React.useState(false);
  
  //ROAROE
  const [isLoadingROAROE, setIsLoadingROAROE] = React.useState(true)
  const [isErrorROAROE, setIsErrorROAROE] = React.useState(false)
  const [dataROAROE, setDataROAROE] = React.useState({});
  const [switchROAROEChart, setswitchROAROEChart] = React.useState(false);

  //ROIC
  const [isLoadingROIC, setIsLoadingROIC] = React.useState(true)
  const [isErrorROIC, setIsErrorROIC] = React.useState(false)
  const [dataROIC, setDataROIC] = React.useState({});
  const [switchROIChart, setswitchROICChart] = React.useState(false);

  var baseURL = process.env.REACT_APP_BACKEND_URL;


  // URLs
  var URLUmsatzGewinnKurs = baseURL+"/aktienpagecharts/UmsatzGewinnKurs/"+ticker +"";
  var URLFCFOE = baseURL+"/aktienpagecharts/FCFOE/"+ticker +"";
  var URLMargen = baseURL+"/aktienpagecharts/Margen/"+ticker +"";
  var URLCosts = baseURL+"/aktienpagecharts/Costs/"+ticker +"";
  var URLTaxAndInterests = baseURL+"/aktienpagecharts/TaxAndInterests/"+ticker +"";
  var URLEKFK = baseURL+"/aktienpagecharts/EKFK/"+ticker +"";
  var URLCashQuickCurrent = baseURL+"/aktienpagecharts/CashQuickCurrent/"+ticker +"";
  var URLNetDebtEbitda = baseURL+"/aktienpagecharts/NetDebtEbitda/"+ticker +"";
  var URLCashDebt = baseURL+"/aktienpagecharts/CashDebt/"+ticker +"";
  var URLROAROE = baseURL+"/aktienpagecharts/ROAROE/"+ticker +"";
  var URLROIC = baseURL+"/aktienpagecharts/ROIC/"+ticker +"";



  // PopUPs

  const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
    color: "rgba(255,255,255,1)",
    width: "20px",
    // marginBottom: "-15px"
    
  }));

  // UmsatzEBITGewinn
  const [openDialogUmsatzEBITGewinn, setOpenDialogUmsatzEBITGewinn] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialogUmsatzEBITGewinn(true);
  };

  const handleClose = () => {
    setOpenDialogUmsatzEBITGewinn(false);
  };


    // FCFOE
    const [openDialogFCFOE, setOpenDialogFCFOE] = React.useState(false);

    const handleClickOpenFCFOE = () => {
      setOpenDialogFCFOE(true);
    };
  
    const handleCloseFCFOE = () => {
      setOpenDialogFCFOE(false);
    };

    // Margen
    const [openDialogMargen, setOpenDialogMargen] = React.useState(false);

    const handleClickOpenMargen = () => {
      setOpenDialogMargen(true);
    };
  
    const handleCloseMargen = () => {
      setOpenDialogMargen(false);
    };

        // Costs
        const [openDialogCosts, setOpenDialogCosts] = React.useState(false);

        const handleClickOpenCosts = () => {
          setOpenDialogCosts(true);
        };
      
        const handleCloseCosts = () => {
          setOpenDialogCosts(false);
        };

        // InterestsAndTax
        const [openDialogInterestsAndTax, setOpenDialogInterestsAndTax] = React.useState(false);

        const handleClickOpenInterestsAndTax = () => {
          setOpenDialogInterestsAndTax(true);
        };
      
        const handleCloseInterestsAndTax = () => {
          setOpenDialogInterestsAndTax(false);
        };



  const fetchDataUmsatzGewinnKurs = async () => {
    setIsErrorUmsatzGewinnKurs(false);
    setIsLoadingUmsatzGewinnKurs(true);
    try {
      const result = await axios(URLUmsatzGewinnKurs);
      setDataUmsatzGewinnKurs(result.data);
    } catch (error) {
      setIsErrorUmsatzGewinnKurs(true);
    }
    setIsLoadingUmsatzGewinnKurs(false);
  };

  const fetchDataURLFCFOE = async () => {
    setIsErrorFCFOE(false);
    setIsLoadingFCFOE(true);
    try {
      const result = await axios(URLFCFOE);
      setDataFCFOE(result.data.data);
    } catch (error) {
      setIsErrorFCFOE(true);
    }
    setIsLoadingFCFOE(false);
  };

  const fetchDataMargen = async () => {
    setIsErrorMargen(false);
    setIsLoadingMargen(true);
    try {
      const result = await axios(URLMargen);
      setDataMargen(result.data);
    } catch (error) {
      setIsErrorMargen(true);
    }
    setIsLoadingMargen(false);
  };

  const fetchDataCosts = async () => {
    setIsErrorCosts(false);
    setIsLoadingCosts(true);
    try {
      const result = await axios(URLCosts);
      setDataCosts(result.data);
    } catch (error) {
      setIsErrorCosts(true);
    }
    setIsLoadingCosts(false);
  };

  const fetchDataTaxAndInterests = async () => {
    setIsErrorTaxAndInterests(false);
    setIsLoadingTaxAndInterests(true);
    try {
      const result = await axios(URLTaxAndInterests);
      setDataTaxAndInterests(result.data);
    } catch (error) {
      setIsErrorTaxAndInterests(true);
    }
    setIsLoadingTaxAndInterests(false);
  };

  const fetchDataEKFK = async () => {
    setIsErrorEKFK(false);
    setIsLoadingEKFK(true);
    try {
      const result = await axios(URLEKFK);
      setDataEKFK(result.data);
    } catch (error) {
      setIsErrorEKFK(true);
    }
    setIsLoadingEKFK(false);
  };
  
  const fetchDataCashQuickCurrent = async () => {
    setIsErrorCashQuickCurrent(false);
    setIsLoadingCashQuickCurrent(true);
    try {
      const result = await axios(URLCashQuickCurrent);
      setDataCashQuickCurrent(result.data);
    } catch (error) {
      setIsErrorCashQuickCurrent(true);
    }
    setIsLoadingCashQuickCurrent(false);
  };

  const fetchDataCashDebt = async () => {
    setIsErrorCashDebt(false);
    setIsLoadingCashDebt(true);
    try {
      const result = await axios(URLCashDebt);
      setDataCashDebt(result.data);
    } catch (error) {
      setIsErrorCashDebt(true);
    }
    setIsLoadingCashDebt(false);
  };

  const fetchDataROAROE = async () => {
    setIsErrorROAROE(false);
    setIsLoadingROAROE(true);
    try {
      const result = await axios(URLROAROE);
      setDataROAROE(result.data);
    } catch (error) {
      setIsErrorROAROE(true);
    }
    setIsLoadingROAROE(false);
  };

  const fetchDataNetDebtEbitda = async () => {
    setIsErrorNetDebtEbitda(false);
    setIsLoadingNetDebtEbitda(true);
    try {
      const result = await axios(URLNetDebtEbitda);
      setDataNetDebtEbitda(result.data.data);
    } catch (error) {
      setIsErrorNetDebtEbitda(true);
    }
    setIsLoadingNetDebtEbitda(false);
  };

  const fetchDataROIC = async () => {
    setIsErrorROIC(false);
    setIsLoadingROIC(true);
    try {
      const result = await axios(URLROIC);
      setDataROIC(result.data);
    } catch (error) {
      setIsErrorROIC(true);
    }
    setIsLoadingROIC(false);
  };


  useEffect(() => {
    fetchDataUmsatzGewinnKurs();
    fetchDataURLFCFOE();
    fetchDataMargen();
    fetchDataCosts();
    fetchDataTaxAndInterests();
    fetchDataEKFK();
    fetchDataCashQuickCurrent();
    fetchDataCashDebt();
    fetchDataROAROE();
    fetchDataNetDebtEbitda();
    fetchDataROIC();
  }, []);
   

  return (

  // PopUpsInhalt




<div className="CompanyBody">



{/* UmsatzEbitGewinn */}
<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogUmsatzEBITGewinn}
        onClick={handleClose}
      >

                  <div className="analyseInfoGlassDoor">

<DefUmsatzEBITGewinn/>
        </div>

      </Backdrop>


{/* FCFOE */}
<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogFCFOE}
        onClick={handleCloseFCFOE}
      >

                  <div className="analyseInfoGlassDoor">

<DefFCFOE/>
        </div>

      </Backdrop>

{/* Margen */}
<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogMargen}
        onClick={handleCloseMargen}
      >

                  <div className="analyseInfoGlassDoor">

<DefMargen/>
        </div>

      </Backdrop>


      {/* Costs */}
<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogCosts}
        onClick={handleCloseCosts}
      >

                  <div className="analyseInfoGlassDoor">

<DefCosts/>
        </div>

      </Backdrop>


      {/* Interests and Taxes */}
      <Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogInterestsAndTax}
        onClick={handleCloseInterestsAndTax}
      >

                  <div className="analyseInfoGlassDoor">

<DefInterestsAndTaxes/>
        </div>

      </Backdrop>



<div className="ChartsThirdRow">

<div className="ChartHeadlineContainer">

  <div className="ChartHeadline">Gewinn und Verlust 
                </div>
   <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchUmsatzGewinnChart(!switchUmsatzGewinnChart);}} /></div>


</div>
<div id="Kurs" className="ChartsContainer">
{isLoadingUmsatzGewinnKurs ? <ChartSkeleton/>: (<> {switchUmsatzGewinnChart ?  <UmsatzGewinnKurs dataUmsatzGewinnKurs={dataUmsatzGewinnKurs}bar={switchUmsatzGewinnChart}/> : <><UmsatzGewinnKurs dataUmsatzGewinnKurs={dataUmsatzGewinnKurs} bar={switchUmsatzGewinnChart}/> </> } </>) }

  </div>
</div>

<div className="ChartsThirdRow">

  <div className="ChartHeadlineContainer">
    <div className="ChartHeadline">FCF & Owner Earnings
  </div>
  <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchFCFOEChart(!switchFCFOEChart);}} /></div>
  </div>
  <div className="ChartsContainer">
  {isLoadingFCFOE ? <ChartSkeleton/>: (<> {switchFCFOEChart ?   <FCFOEChart dataFCFOE={dataFCFOE} bar={switchFCFOEChart}/> : <><FCFOEChart dataFCFOE={dataFCFOE} bar={switchFCFOEChart}/> </> } </>) }
  
  </div>
</div>

<div className="ChartsThirdRow">

  <div className="ChartHeadlineContainer">
    <div className="ChartHeadline">Margen



  </div>
   <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchMargenChart(!switchMargenChart);}} /></div>
</div>
  <div className="ChartsContainer">
  {isLoadingMargen ? <ChartSkeleton/>: (<> {switchMargenChart ? <MargenChart dataMargen={dataMargen} bar={switchMargenChart}/> : <><MargenChart dataMargen={dataMargen} bar={switchMargenChart}/> </> } </>) }
  </div>
</div>


 {/* thirdRow */}

<div className="ChartsThirdRow">

 {/* Costs Chart */}



  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Kosten</div>
  <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchCostsChart(!switchCostsChart);}} /></div>
  </div>

  <div className="ChartsContainer">
  {isLoadingCosts ? <ChartSkeleton/>:  (<> {switchCostsChart ? <CostsChart dataCosts={dataCosts} bar={switchCostsChart}/> : <><CostsChart dataCosts={dataCosts} bar={switchCostsChart}/> </> } </>) }
  </div>
  </div>

 {/* Zinsen und Steuern Chart */}
 <div className="ChartsThirdRow">

  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Zinsen & Steuern</div>
  <div className="SwitchButtonContainer"><MaterialUISwitch onClick={() => { setswitchTaxAndInterestsChart(!switchTaxAndInterestsChart);}} /></div>
  </div>

  <div className="ChartsContainer">
{isLoadingTaxAndInterests ? <ChartSkeleton/>:  (<> {switchTaxAndInterestsChart ? <TaxAndInterestsChart dataTaxAndInterests={dataTaxAndInterests} bar={switchTaxAndInterestsChart}/> : <><TaxAndInterestsChart dataTaxAndInterests={dataTaxAndInterests} bar={switchTaxAndInterestsChart}/> </> } </>) }
</div>
</div>




<div className="ChartsThirdRow">

  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Verschuldung</div>
  </div>
  <div className="ChartsContainer">
  {isLoadingEKFK ? <ChartSkeleton/>:  (<> {switchEKFKChart ? <EKFKChart dataEKFK={dataEKFK} bar={switchEKFKChart}/> : <><EKFKChart dataEKFK={dataEKFK} bar={switchEKFKChart}/> </> } </>) }

  </div>
  </div>

  <div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Liquidität</div>
  </div>
  <div className="ChartsContainer">
  {isLoadingCashQuickCurrent ? <ChartSkeleton/>:  (<> {switchCashQuickCurrentChart ? <CashQuickCurrentChart dataCashQuickCurrent={dataCashQuickCurrent} bar={switchCashQuickCurrentChart}/> : <><CashQuickCurrentChart dataCashQuickCurrent={dataCashQuickCurrent} bar={switchCashQuickCurrentChart}/> </> } </>) }
  </div>
</div>



<div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Verschuldung</div>
  </div>
  <div className="ChartsContainer">
  {isLoadingNetDebtEbitda ? <ChartSkeleton/>:  (<> {switchNetDebtEbitdaChart ? <NetDebtEbitdaChart dataNetDebtEbitda={dataNetDebtEbitda} bar={switchNetDebtEbitdaChart}/> : <><NetDebtEbitdaChart dataNetDebtEbitda={dataNetDebtEbitda} bar={switchNetDebtEbitdaChart}/> </> } </>) }
  </div>
  </div>

  <div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">Liquidität</div>
  </div>

  <div className="ChartsContainer">
  {isLoadingCashDebt ? <ChartSkeleton/>:  (<> {switchCashDebtChart ? <CashDebtChart dataCashDebt={dataCashDebt} bar={switchCashDebtChart}/> : <><CashDebtChart dataCashDebt={dataCashDebt} bar={switchCashDebtChart}/> </> } </>) }

  </div>
</div>



<div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">ROA & ROE</div>
  </div>

  <div className="ChartsContainer">
  {isLoadingROAROE ? <ChartSkeleton/>:  (<> {switchROAROEChart ? <ROAROEChart dataROAROE={dataROAROE} bar={switchROAROEChart}/> : <><ROAROEChart dataROAROE={dataROAROE} bar={switchROAROEChart}/> </> } </>) }
  </div>
  </div>

  <div className="ChartsThirdRow">
  <div className="ChartHeadlineContainer"><div className="ChartHeadline">ROIC</div>
  </div>

  <div className="ChartsContainer">
  {isLoadingROIC ? <ChartSkeleton/>:  (<> {switchROIChart ? <ROICChart dataROIC={dataROIC} bar={switchROIChart}/> : <><ROICChart dataROIC={dataROIC} bar={switchROIChart}/> </> } </>) }

  </div>
</div>




</div>
  );
}

export default Charts;
