import CalcCAGR from "./CalcCAGR";
import EndwertRechner from "./EndwertRechner";
import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import SvgIcon from '@mui/material/SvgIcon';

import { useParams } from "react-router-dom";
import WunschSumme from "./WunschSumme";
import DividendenRechner from "./DividendenRechner";

function Rechner() {

    const [value, setValue] = React.useState("Company");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const {ticker} = useParams();

    return (
<>

<TabContext value={value}>

<div className="calculatorMainContainer">
<Tabs TabIndicatorProps={{ style: { backgroundColor: "rgba(255,255,255,1)" }}} value={value} onChange={handleChange} aria-label="icon label tabs example">


<Tab icon={ <SvgIcon>
<path d="M19.52,4.18h3.95c.29,0,.52,.24,.52,.52v12.6c0,.29-.24,.52-.52,.52h-3.95c-.29,0-.52-.24-.52-.52V4.7c0-.29,.24-.52,.52-.52h0Zm-8.57,4.07c.28,0,.51,.24,.51,.52v8.53c0,.28-.23,.52-.51,.52h-3.98c-.28,0-.51-.24-.51-.52V8.77c0-.28,.23-.52,.51-.52h3.98ZM.52,11.67h3.95c.29,0,.52,.24,.52,.52v5.11c0,.29-.24,.52-.52,.52H.52C.24,17.83,0,17.59,0,17.3v-5.11C0,11.9,.24,11.67,.52,11.67h0ZM0,18.66H23.97v1.67H0v-1.67ZM13.25,0h3.95c.29,0,.52,.24,.52,.52V17.3c0,.29-.24,.52-.52,.52h-3.95c-.29,0-.52-.24-.52-.52V.52C12.73,.24,12.96,0,13.25,0h0Z"/>
</SvgIcon>} 
label="CAGr" value="CAGR" 
/>

<Tab icon={ <SvgIcon>
<path d="M15.94,0H1.92C.86,0,0,.86,0,1.92V22.08c0,1.06,.86,1.92,1.92,1.92H15.89c1.06,0,1.92-.86,1.92-1.92V1.92c.05-1.06-.82-1.92-1.87-1.92h0ZM5.66,21.12c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm4.99,8.4c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm4.99,8.4c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.8c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48V2.88c0-.29,.19-.48,.48-.48H15.17c.29,0,.48,.19,.48,.48V7.92Z" />
</SvgIcon>} 
label="Endwert" value="Endwert" 
/>

<Tab icon={ <SvgIcon>
<path d="M15.94,0H1.92C.86,0,0,.86,0,1.92V22.08c0,1.06,.86,1.92,1.92,1.92H15.89c1.06,0,1.92-.86,1.92-1.92V1.92c.05-1.06-.82-1.92-1.87-1.92h0ZM5.66,21.12c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm4.99,8.4c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm4.99,8.4c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.8c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48V2.88c0-.29,.19-.48,.48-.48H15.17c.29,0,.48,.19,.48,.48V7.92Z" />
</SvgIcon>} 
label="Wunschsumme" value="WunschSumme" 
/>

<Tab icon={ <SvgIcon>
<path d="M15.94,0H1.92C.86,0,0,.86,0,1.92V22.08c0,1.06,.86,1.92,1.92,1.92H15.89c1.06,0,1.92-.86,1.92-1.92V1.92c.05-1.06-.82-1.92-1.87-1.92h0ZM5.66,21.12c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm4.99,8.4c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm4.99,8.4c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.18c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.22c0,.29-.19,.48-.48,.48h-2.5c-.29,0-.48-.19-.48-.48v-2.4c0-.29,.19-.48,.48-.48h2.5c.29,0,.48,.19,.48,.48v2.4Zm0-4.8c0,.29-.19,.48-.48,.48H2.69c-.29,0-.48-.19-.48-.48V2.88c0-.29,.19-.48,.48-.48H15.17c.29,0,.48,.19,.48,.48V7.92Z" />
</SvgIcon>} 
label="Zinsrechner" value="ZinsRechner" 
/>


</Tabs>

  </div>

<TabPanel value="CAGR"><CalcCAGR  /></TabPanel>
<TabPanel value="Endwert"><EndwertRechner /></TabPanel>
<TabPanel value="WunschSumme"><WunschSumme /></TabPanel>
<TabPanel value="ZinsRechner"><DividendenRechner /></TabPanel>


</TabContext>
</>
  
    );
  }
  
  export default Rechner;