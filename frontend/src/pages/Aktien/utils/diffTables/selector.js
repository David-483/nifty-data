import React, { useState, useEffect } from "react";
import axios from "axios";
import SkeletonTable from "./SkeletonTable";
import Table_IS from "./Table_IS";
import Table_BS from "./Table_BS";
import Table_CFS from "./Table_CFS";
import Table_Ratios from "./Table_Ratios";
import Table_Wachstum from "./Table_Wachstum";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SankeyFinancials from "../Charts/Chartlib/SankeyFinancials";


import "./selector.css";

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: "#ffffff",
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 'calc(6px + 0.4vw)',
    background: "unset",
    padding: 8,
    // width: 32,
    color:"black",
    height: 32,
    borderRadius: "5px",
    backgroundColor: "rgba(255,255,255,1)",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "rgba(255,255,255,0.2)",
  fontSize: 'calc(6px + 0.4vw)',

  "&:focus": {
    // backgroundColor: "red !important",
    color: "rgba(255,255,255,1)",
  },
  "&.Mui-selected": {
    color: "rgba(255,255,255,1)",
  },
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  color: "red",
  fontSize: 'calc(8px + 0.4vw)',
  display: "flex",
  justifyContent: "space-around",
  "&:focus": {
    // backgroundColor: "red !important",
    color: "rgba(255,255,255,0.1)",
  },
  "&.MuiTabs-indicator": {
    color: "rgba(255,255,255,1)",
  },
}, {index: 1}));

function valuetext(value) {
  return `Jahr: ${value}`;
}

const minDistance = 3;

function Selector({ticker}) {
  const [value, setValue] = React.useState("1");
  const [timerange, settimerange] = React.useState([2015, 2023]);
  const [myDataISYear, setDataIS] = useState([]);
  const [myDataBSYear, setDataBS] = useState([]);
  const [myDataCFSYear, setDataCFS] = useState([]);
  const [dataWachstum, setDataWachstum] = useState([]);
  const [myDataRatios, setDataRatios] = useState([]);
  const [showDataIS, setshowDataIS] = useState([]);
  const [showDataBS, setshowDataBS] = useState([]);
  const [showDataCFS, setshowDataCFS] = useState([]);
  const [showDataRatios, setshowDataRatios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [lowestSliderRange, setlowestSliderRange] = useState(1980);
  const [ltmchecked, setltmChecked] = React.useState(true);
  const [direction, setDirection] = React.useState(false);
  const [yoychecked, setyoyChecked] = React.useState(true);
  const [smoothedChecked, setSmoothedChecked] = React.useState(true);

  var baseURL = process.env.REACT_APP_BACKEND_URL;

    const fetchData = async (myURL) => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(myURL);
        setDataIS(result.data.myDataISYear);
        setDataBS(result.data.myDataBSYear);
        setDataCFS(result.data.myDataCFSYear);     

        setDataRatios(result.data.myDataRatios);
        setDataWachstum(result.data.myDataGrowth);
        var myVal = parseInt(result.data.myDataISYear[result.data.myDataISYear.length - 1].formattedDate,10);
        setlowestSliderRange(myVal);

      } catch (error) {
        setIsError(true);
      }
      
      setIsLoading(false);
    };

    
    

    useEffect(() => {
      if(!isLoading){
        handleTimerange();
      }
    }, [isLoading]); 

    useEffect(() => {
      
      var url = baseURL + "/aktienpagefinancials/" + ticker;

        fetchData(url);
      },[]);


  useEffect(() => {
    handleTimerange();
  }, [ltmchecked]);




  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 2023 - minDistance);
        settimerange([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        settimerange([clamped - minDistance, clamped]);
      }
    } else {
      settimerange(newValue);
    }
    
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleSliderChange = (event) => {
    setltmChecked(!ltmchecked);
  };

  const handleTimerange = () => {
    // setUrl(`http://localhost:3001/basicdata/test2`);

    var updatedValueIS = [];
    var updatedValueBS = [];
    var updatedValueCFS = [];
    var updatedValueRatios = [];

    if (ltmchecked == true) {
      for (var z = 0; z <= myDataISYear.length - 1; z++) {
        if (myDataISYear[z].formattedDate == "LTM") {
          updatedValueIS.push(myDataISYear[z]);
        }
      }

      for (var z = 0; z <= myDataBSYear.length - 1; z++) {
        if (myDataBSYear[z].formattedDate == "LTM") {
          updatedValueBS.push(myDataBSYear[z]);
        }
      }

      for (var z = 0; z <= myDataCFSYear.length - 1; z++) {
        if (myDataCFSYear[z].JaformattedDatehr == "LTM") {
          updatedValueCFS.push(myDataCFSYear[z]);
        }
      }

      for (var z = 0; z <= myDataRatios.length - 1; z++) {
        if (myDataRatios[z].formattedDate == "LTM") {
          updatedValueRatios.push(myDataRatios[z]);
        }
      }
    }

    for (var z = 0; z <= myDataISYear.length - 1; z++) {
      if (myDataISYear[z].formattedDate >= timerange[0] && myDataISYear[z].formattedDate <= timerange[1]) {
        updatedValueIS.push(myDataISYear[z]);
      }
    }

    for (var z = 0; z <= myDataBSYear.length - 1; z++) {
      if (myDataBSYear[z].formattedDate >= timerange[0] && myDataBSYear[z].formattedDate <= timerange[1]) {
        updatedValueBS.push(myDataBSYear[z]);
      }
    }

    for (var z = 0; z <= myDataCFSYear.length - 1; z++) {
      if (myDataCFSYear[z].formattedDate >= timerange[0] && myDataCFSYear[z].formattedDate <= timerange[1]) {
        updatedValueCFS.push(myDataCFSYear[z]);
      }
    }

    for (var z = 0; z <= myDataRatios.length - 1; z++) {
      if (myDataRatios[z].formattedDate >= timerange[0] && myDataRatios[z].formattedDate <= timerange[1]) {
        updatedValueRatios.push(myDataRatios[z]);
      }
    }



    setshowDataIS(updatedValueIS);
    setshowDataBS(updatedValueBS);
    setshowDataCFS(updatedValueCFS);
    setshowDataRatios(updatedValueRatios);

  };

  return (

    <>  
        <div className="FinancialsContainer">

        <div className="ChartsThirdRow">

        <div className="ChartHeadlineContainer">
    <div className="ChartHeadline">Sankey Chart
  </div>
  </div>

<div className="ChartsContainer" style={{marginBottom: "100px", backgroundColor:"rgba(0,0,0,0.7)"}}>
  <SankeyFinancials data={showDataIS}/>
</div>
</div>

      <div className="Aktiendashboard-tabellen-container">
      <TabContext  value={value} style={{ minWidth: 2550}}>
        <div className="Aktiendashboard-tabellen-tablist">
          <StyledTabList
            TabIndicatorProps={{ style: { backgroundColor: "white"} }}
            onChange={handleChange}
            centered
            variant="fullWidth"
          >
            <StyledTab sx={{minWidth: "10px"}} label="GuV" value="1" />
            <StyledTab sx={{minWidth: "10px"}}  label="Bilanz" value="2" />
            <StyledTab sx={{minWidth: "10px"}}  label="Cashflow" value="3" />
            <StyledTab sx={{minWidth: "10px"}}  label="Ratios" value="4" />
            <StyledTab sx={{minWidth: "10px"}} label="Wachstum" value="5" />
          </StyledTabList>
        </div>

        {(value=="5") ?
           <div className="Aktiendashboard-tabellen-slider-container">

<FormControlLabel
          disable
          value="top"
          componentsProps={{ typography: {  fontSize: 'calc(8px + 0.4vw)'} }}
          control={<Checkbox 
            checked={!smoothedChecked}
             onChange={() => setSmoothedChecked(!smoothedChecked)}
      sx={{
            color: "#ffffff",
            "&, & + .MuiFormControlLabel-label": {
              color: "#ffffff",
            },
            '&.Mui-checked': {
              color: "#ffffff",
            },
          }}
          />}
          label="geglättet"
          labelPlacement="bottom"
        />
           </div>
        :
        <>
        <div className="Aktiendashboard-tabellen-slider-container">          
          <StyledSlider
            // size="small"
            getAriaLabel={() => "Minimum distance shift"}
            value={timerange}
            onChange={handleChange2}
            onChangeCommitted={handleTimerange}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            min={lowestSliderRange}
            max={2023}
            disableSwap
            style={{
              alignSelf: "center",
              width:"60%",
            }}
          />

        
        <div className="Aktiendashboard-tabellen-switchltm-container">


          <FormControlLabel
          disable
          value="top"
          componentsProps={{ typography: {  fontSize: 'calc(8px + 0.4vw)'} }}
          control={<Checkbox 
            checked={ltmchecked}
      onChange={handleSliderChange}
      sx={{
            color: "#ffffff",
            "&, & + .MuiFormControlLabel-label": {
              color: "#ffffff",
            },
            '&.Mui-checked': {
              color: "#ffffff",
            },

          }}
          />}
          label="LTM"
          labelPlacement="bottom"
        />

{(value>"3") ? <></> :

<FormControlLabel
          disable
          value="top"
          componentsProps={{ typography: {  fontSize: 'calc(8px + 0.4vw)'} }}
          control={<Checkbox 
            checked={!yoychecked}
             onChange={() => setyoyChecked(!yoychecked)}
      sx={{

            color: "#ffffff",
            "&, & + .MuiFormControlLabel-label": {
              color: "#ffffff",
            },
            '&.Mui-checked': {
              color: "#ffffff",
            },
          }}
          />}
          label="YOY"
          labelPlacement="bottom"
        />
}

<FormControlLabel
          disable
          value="top"
          componentsProps={{ typography: {  fontSize: 'calc(8px + 0.4vw)'} }}
          control={<Checkbox 
            checked={direction}
             onChange={() => setDirection(!direction)}
      sx={{

            color: "#ffffff",
            "&, & + .MuiFormControlLabel-label": {
              color: "#ffffff",
            },
            '&.Mui-checked': {
              color: "#ffffff",
            },
          }}
          />}
          label="left to right"
          labelPlacement="bottom"
        />

        </div>        

        </div>

        <div className="Aktiendashboard-tabellen-slider-container" style={{marginTop: "-10px", marginBottom: "10px", color: "white",   fontSize: 'calc(8px + 0.4vw)',}}>
        Wähle den Zeitraum der Daten
      </div>
        </>
  }
        <TabPanel sx={{ width: "90%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}} value="1">
          {isLoading ? <SkeletonTable /> : <Table_IS direction={direction} data={showDataIS} yoy={!yoychecked} />}
        </TabPanel>
        <TabPanel sx={{  width: "90%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}}  value="2">
          {isLoading ? <SkeletonTable /> : <Table_BS direction={direction} data={showDataBS} yoy={!yoychecked}/>}
        </TabPanel>
        <TabPanel sx={{  width: "90%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}} value="3">
        {isLoading ? <SkeletonTable /> : <Table_CFS direction={direction} data={showDataCFS} yoy={!yoychecked}/>}
        </TabPanel>
        <TabPanel sx={{  width: "90%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}}  value="4">
        {isLoading ? <SkeletonTable /> : <Table_Ratios direction={direction} data={showDataRatios} />}
        </TabPanel>
        <TabPanel sx={{  width: "90%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}} value="5">
        {isLoading ? <SkeletonTable /> : <Table_Wachstum smoothed={!smoothedChecked} data={dataWachstum} />}
        </TabPanel>
      </TabContext>
     
    </div>
    </div>


{/* MOBILE */}


    <div className="FinancialsMobileContainer">

    <div className="Aktiendashboard-tabellen-container">
      <TabContext  value={value} style={{ minWidth: 2550}}>
        <div className="Aktiendashboard-tabellen-tablist">
          <StyledTabList
            TabIndicatorProps={{ style: { backgroundColor: "white"} }}
            onChange={handleChange}
            centered
            variant="fullWidth"
          >
            <StyledTab sx={{minWidth: "10px"}} label="GuV" value="1" />
            <StyledTab sx={{minWidth: "10px"}}  label="Bilanz" value="2" />
            <StyledTab sx={{minWidth: "10px"}}  label="Cashflow" value="3" />
            <StyledTab sx={{minWidth: "10px"}}  label="Ratios" value="4" />
            <StyledTab sx={{minWidth: "10px"}} label="Wachstum" value="5" />
          </StyledTabList>
        </div>


        {(value=="5") ?
           <div className="Aktiendashboard-tabellen-slider-container">

<FormControlLabel
          disable
          value="top"
          componentsProps={{ typography: {  fontSize: 'calc(8px + 0.4vw)'} }}
          control={<Checkbox 
            checked={!smoothedChecked}
             onChange={() => setSmoothedChecked(!smoothedChecked)}
      sx={{
            color: "#ffffff",
            "&, & + .MuiFormControlLabel-label": {
              color: "#ffffff",
            },
            '&.Mui-checked': {
              color: "#ffffff",
            },
          }}
          />}
          label="geglättet"
          labelPlacement="bottom"
        />
           </div>
        :
        <>

       <div>




        <div className="Aktiendashboard-tabellen-slider-container">          
          <StyledSlider
            // size="small"
            getAriaLabel={() => "Minimum distance shift"}
            value={timerange}
            onChange={handleChange2}
            onChangeCommitted={handleTimerange}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            min={lowestSliderRange}
            max={2023}
            disableSwap
            style={{
              alignSelf: "center",
              width:"100%",
            }}
          />
          
        <div className="Aktiendashboard-tabellen-switchltm-container">
          <FormControlLabel
          disable
          value="top"
          componentsProps={{ typography: {  fontSize: 'calc(8px + 0.4vw)'} }}
          control={<Checkbox 
            checked={ltmchecked}
      onChange={handleSliderChange}
      sx={{
            color: "#ffffff",
            "&, & + .MuiFormControlLabel-label": {
              color: "#ffffff",
            },
            '&.Mui-checked': {
              color: "#ffffff",
            },

          }}
          />}
          label="LTM"
          labelPlacement="bottom"
        />

{(value>"3") ? <></> :

<FormControlLabel
          disable
          value="top"
          componentsProps={{ typography: {  fontSize: 'calc(8px + 0.4vw)'} }}
          control={<Checkbox 
            checked={!yoychecked}
             onChange={() => setyoyChecked(!yoychecked)}
      sx={{

            color: "#ffffff",
            "&, & + .MuiFormControlLabel-label": {
              color: "#ffffff",
            },
            '&.Mui-checked': {
              color: "#ffffff",
            },
          }}
          />}
          label="YOY"
          labelPlacement="bottom"
        />
}

<FormControlLabel
          disable
          value="top"
          componentsProps={{ typography: {  fontSize: 'calc(8px + 0.4vw)'} }}
          control={<Checkbox 
            checked={direction}
             onChange={() => setDirection(!direction)}
      sx={{

            color: "#ffffff",
            "&, & + .MuiFormControlLabel-label": {
              color: "#ffffff",
            },
            '&.Mui-checked': {
              color: "#ffffff",
            },
          }}
          />}
          label="left to right"
          labelPlacement="bottom"
        />
        </div>

        </div>        

        </div>


        </>
  }


        <TabPanel sx={{ width: "100%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}} value="1">
          {isLoading ? <SkeletonTable /> : <Table_IS direction={direction} data={showDataIS} yoy={!yoychecked} />}
        </TabPanel>
        <TabPanel sx={{  width: "100%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}}  value="2">
          {isLoading ? <SkeletonTable /> : <Table_BS direction={direction} data={showDataBS} yoy={!yoychecked}/>}
        </TabPanel>
        <TabPanel sx={{  width: "100%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}} value="3">
        {isLoading ? <SkeletonTable /> : <Table_CFS direction={direction} data={showDataCFS} yoy={!yoychecked}/>}
        </TabPanel>
        <TabPanel sx={{  width: "100%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}}  value="4">
        {isLoading ? <SkeletonTable /> : <Table_Ratios direction={direction} data={showDataRatios} />}
        </TabPanel>
        <TabPanel sx={{  width: "100%", margin:"auto", padding:"0", marginTop:"20px", marginBottom:"50px"}} value="5">
        {isLoading ? <SkeletonTable /> : <Table_Wachstum smoothed={!smoothedChecked} data={dataWachstum} />}
        </TabPanel>
      </TabContext>
     
    </div>

    </div>
    </>

  );
}

export default Selector;
