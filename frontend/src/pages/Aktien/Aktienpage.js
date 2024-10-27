import React, { useState, useEffect } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Header from "./utils/header/header";
import SvgIcon from "@mui/material/SvgIcon";
import { styled } from "@mui/material/styles";

// import "../Aktien/utils/AllgemeineInfo.css";
import "./Aktienpage.css";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ApartmentIcon from "@mui/icons-material/Apartment";

import CompanyInfo from "../Aktien/utils/CompanyInfo/CompanyInfo";
import Selector from "./utils/diffTables/selector";
import Charts from "./utils/Charts/Charts";
import Valuation from "../Aktien/utils/Valuation/Valuation";
import Dividend from "../Aktien/utils/Dividend/Dividend";
import DCFCalculator from "./utils/DCF/DCFCalculator";

import { useParams } from "react-router-dom";

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "rgba(255,255,255,0.4)",

  "&:focus": {
    // backgroundColor: "red !important",
    color: "rgba(255,255,255,1)",
  },
  "&.Mui-selected": {
    color: "rgba(255,255,255,1)",
  },
  "&.MuiTabs-indicator": {
    display: "none"
    // backgroundColor: "orange"
  }
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  color: "red",

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


function Aktienpage() {
  const [value, setValue] = React.useState("Company");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var { ticker } = useParams();
  if(ticker==undefined){
    ticker = "AAPL";
  }
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ticker]);

  return (
    <div key={ticker}>
      <Header ticker={ticker} />

      <TabContext value={value}>
        <div className="Aktiendashboard-AllgemeineInfo-container">
          <StyledTabList
            TabIndicatorProps={{ style: { background: "white",  } }}
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
            variant="fullWidth"
          >
            <StyledTab
              icon={<ApartmentIcon style={{width: "40%"}} />}
              label="Company"
              value="Company"

              sx={{
                fontSize: 'calc(8px + 0.4vw)',
                height: "100px",
                minWidth: "10px",
                textTransform: "none",
              }}
            />

            <StyledTab
              icon={<FavoriteIcon style={{width: "40%"}}  />}
              label="Finanzen"
              value="Finanzen"
              sx={{
                fontSize: 'calc(8px + 0.4vw)',
                textTransform: "none",
                height: "100px",
                minWidth: "10px",

              }}
            />

            <StyledTab
              icon={
                <SvgIcon style={{width: "40%"}} >
                  <path d="M19.52,4.18h3.95c.29,0,.52,.24,.52,.52v12.6c0,.29-.24,.52-.52,.52h-3.95c-.29,0-.52-.24-.52-.52V4.7c0-.29,.24-.52,.52-.52h0Zm-8.57,4.07c.28,0,.51,.24,.51,.52v8.53c0,.28-.23,.52-.51,.52h-3.98c-.28,0-.51-.24-.51-.52V8.77c0-.28,.23-.52,.51-.52h3.98ZM.52,11.67h3.95c.29,0,.52,.24,.52,.52v5.11c0,.29-.24,.52-.52,.52H.52C.24,17.83,0,17.59,0,17.3v-5.11C0,11.9,.24,11.67,.52,11.67h0ZM0,18.66H23.97v1.67H0v-1.67ZM13.25,0h3.95c.29,0,.52,.24,.52,.52V17.3c0,.29-.24,.52-.52,.52h-3.95c-.29,0-.52-.24-.52-.52V.52C12.73,.24,12.96,0,13.25,0h0Z" />
                </SvgIcon>
              }
              label="Charts"
              value="Charts"
              sx={{
                fontSize: 'calc(8px + 0.4vw)',
                height: "100px",
                minWidth: "10px",
                textTransform: "none",
              }}
            />

            <StyledTab
              icon={
                <SvgIcon style={{width: "40%"}} >
                  <path d="M15.94,0H1.92C.86,0,0,.86,0,1.92V22.08c0,1.06,.86,1.92,1.92,1.92H15.89c1.06,0,1.92-.86,1.92-1.92V1.92c.05-1.06-.82-1.92-1.87-1.92h0ZM5.66,21.12c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm4.99,8.4c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm4.99,8.4c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.8c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48V2.88c0-.29,.19-.48,.48-.48H15.17c.29,0,.48,.19,.48,.48V7.92Z" />
                </SvgIcon>
              }
              label="Valuation"
              value="Valuation"
              sx={{
                fontSize: 'calc(8px + 0.4vw)',
                height: "100px",
                minWidth: "10px",
                textTransform: "none",
              }}
            />

            <StyledTab
              icon={
                <SvgIcon style={{width: "40%"}} >
                  <path d="M20.68,2.02h-7.4c-.81,0-1.47,.66-1.47,1.47v6.32c0,.81,.66,1.47,1.47,1.47h7.4c.81,0,1.47-.66,1.47-1.47V3.49c0-.81-.66-1.47-1.47-1.47Zm-.53,5.05l-1.77,1.64c-.13,.1-.25,.15-.4,.15s-.33-.08-.43-.2c-.23-.25-.2-.63,.03-.86l.63-.58h-3.97c-.33,0-.61-.28-.61-.61s.28-.61,.61-.61h3.97l-.63-.58c-.25-.23-.25-.61-.03-.86s.61-.25,.86-.03l1.77,1.64c.13,.13,.2,.28,.2,.43-.03,.18-.1,.35-.23,.45Z" />
                  <path d="M16.71,13.95c-1.44,.33-4.02,.66-4.93,.38-.38-.18-1.31-1.21-1.82-1.77-.48-.53-.93-1.01-1.36-1.41-.73-.73-1.31-1.24-2.37-1.52-1.29-.33-4.52-.71-5.43,1.44C-.16,13.31-.01,19.17,.04,23.34c0,.35,.23,.66,.61,.66H7.54c.4,0,.58-.23,.61-.56,.03-.23,.25-4.19,.4-7.02,.66,.63,1.31,1.16,2.05,1.39,.68,.23,1.49,.3,2.32,.3,1.97,0,4.04-.43,4.57-.56,.99-.23,1.62-1.21,1.39-2.2-.2-1.01-1.19-1.64-2.17-1.41Z" />
                  <circle cx="4.79" cy="4.19" r="4.19" />
                </SvgIcon>
              }
              label="Dividende"
              value="Dividende"
              sx={{
                fontSize: 'calc(8px + 0.4vw)',
                height: "100px",
                minWidth: "10px",
                textTransform: "none",
              }}
            />

<StyledTab
              icon={
                <SvgIcon style={{width: "40%"}} >
                  <path d="M20.68,2.02h-7.4c-.81,0-1.47,.66-1.47,1.47v6.32c0,.81,.66,1.47,1.47,1.47h7.4c.81,0,1.47-.66,1.47-1.47V3.49c0-.81-.66-1.47-1.47-1.47Zm-.53,5.05l-1.77,1.64c-.13,.1-.25,.15-.4,.15s-.33-.08-.43-.2c-.23-.25-.2-.63,.03-.86l.63-.58h-3.97c-.33,0-.61-.28-.61-.61s.28-.61,.61-.61h3.97l-.63-.58c-.25-.23-.25-.61-.03-.86s.61-.25,.86-.03l1.77,1.64c.13,.13,.2,.28,.2,.43-.03,.18-.1,.35-.23,.45Z" />
                  <path d="M16.71,13.95c-1.44,.33-4.02,.66-4.93,.38-.38-.18-1.31-1.21-1.82-1.77-.48-.53-.93-1.01-1.36-1.41-.73-.73-1.31-1.24-2.37-1.52-1.29-.33-4.52-.71-5.43,1.44C-.16,13.31-.01,19.17,.04,23.34c0,.35,.23,.66,.61,.66H7.54c.4,0,.58-.23,.61-.56,.03-.23,.25-4.19,.4-7.02,.66,.63,1.31,1.16,2.05,1.39,.68,.23,1.49,.3,2.32,.3,1.97,0,4.04-.43,4.57-.56,.99-.23,1.62-1.21,1.39-2.2-.2-1.01-1.19-1.64-2.17-1.41Z" />
                  <circle cx="4.79" cy="4.19" r="4.19" />
                </SvgIcon>
              }
              label="DCF"
              value="DCF"
              sx={{
                fontSize: 'calc(8px + 0.4vw)',
                height: "100px",
                minWidth: "10px",
                textTransform: "none",
              }}
            />


          </StyledTabList>
        </div>

        <TabPanel style={{ padding: 0}} value="Company">
          <CompanyInfo ticker={ticker} />
        </TabPanel>
        <TabPanel  style={{ padding: 0}}  value="Finanzen">
          <Selector ticker={ticker} />
        </TabPanel>
        <TabPanel  style={{ padding: 0}}  value="Charts">
          <Charts ticker={ticker} />
        </TabPanel>
        <TabPanel  style={{ padding: 0}}  value="Valuation">
          <Valuation ticker={ticker} />
        </TabPanel>
        <TabPanel  style={{ padding: 0}}  value="Dividende">
          <Dividend ticker={ticker} />
        </TabPanel>
        <TabPanel  style={{ padding: 0}}  value="DCF">
          <DCFCalculator ticker={ticker} />
        </TabPanel>
        {/* <TabPanel value="Eigentum"><Ownership ticker={ticker}/></TabPanel> */}
      </TabContext>
    </div>
  );
}

export default Aktienpage;
