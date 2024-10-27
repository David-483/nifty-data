import React from 'react';
import './BranchenReports.css'
import { styled } from '@mui/material/styles';
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import BranchenReportsHeader from './BranchenReportsHeader.js';
import BranchenReportsKeyFacts from './BranchenReportsKeyFacts';
import BranchenReportsKeyFacts2 from './BranchenReportsKeyFacts2';
import BranchenReportsKeyFacts3 from './BranchenReportsKeyFacts3';
import BranchenReportsCompanyApp1 from './BranchenReportsCompanyApp1';
import BranchenReportsCompanyApp2 from './BranchenReportsCompanyApp2';
import BranchenReportsCompanyApp3 from './BranchenReportsCompanyApp3';
import BranchenReportsCompanyApp4 from './BranchenReportsCompanyApp4';
import BranchenReportsFundamentalsApp1 from './BranchenReportsFundamentalsApp1';
import BranchenReportsFundamentalsApp2 from './BranchenReportsFundamentalsApp2';
import BranchenReportsFundamentalsApp3 from './BranchenReportsFundamentalsApp3';
import BranchenReportsFundamentalsApp4 from './BranchenReportsFundamentalsApp4';
import BranchenReportsFinancialsApp1 from './BranchenReportsFinancialsApp1';
import BranchenReportsFinancialsApp2 from './BranchenReportsFinancialsApp2';
import BranchenReportsFinancialsApp3 from './BranchenReportsFinancialsApp3';
import BranchenReportsFinancialsApp4 from './BranchenReportsFinancialsApp4';
import BranchenReportsCompanyAnalysisApp1 from './BranchenReportsCompanyAnalysisApp1';


const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: "white",
  
}),
);

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  boxShadow: "none",
  marginLeft: '0%',
  marginRight:'0%',

}),
);

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  marginLeft: '5%',
  marginRight:'5%',
}),
);

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  marginLeft: '5%',
  marginRight:'5%',
}),
);

const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
  color: "white",
}));



function BranchenReportsMain (){

    return (
<>
        <BranchenReportsHeader/>


        <StyledAccordion style={{marginTop:"5px"}}>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">

            <div style={{fontSize:"15px", fontWeight:"900"}}>Umsatzverteilungen</div>

          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>
        <BranchenReportsKeyFacts/>

       <BranchenReportsCompanyApp1/>
        <BranchenReportsCompanyApp2/>
        <BranchenReportsCompanyApp3/>
        <BranchenReportsCompanyApp4/>
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>


        <StyledAccordion style={{marginTop:"10px"}}>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">

            <div style={{fontSize:"15px", fontWeight:"900"}}>Wachstum</div>

          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>

        <BranchenReportsKeyFacts2/>
        <BranchenReportsFundamentalsApp1/>
        <BranchenReportsFundamentalsApp2/>
        <BranchenReportsFundamentalsApp3/>
        <BranchenReportsFundamentalsApp4/>
        </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>


        <StyledAccordion style={{marginTop:"10px"}}>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">

            <div style={{fontSize:"15px", fontWeight:"900"}}>Finanzen</div>
            
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>

            <BranchenReportsKeyFacts3/>
        <BranchenReportsFinancialsApp1/>
        <BranchenReportsFinancialsApp2/>
        <BranchenReportsFinancialsApp3/>
        <BranchenReportsFinancialsApp4/>
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>


        <StyledAccordion style={{marginTop:"10px"}}>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">

<img className="BRCALogo" style={{width:"5%"}} src="/img/unternehmenslogos/WM.svg" alt="Company Logo"></img> <div style={{fontSize:"15px", fontWeight:"900", marginLeft:"1%"}}>Waste Management</div>


          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>
<BranchenReportsCompanyAnalysisApp1/>

        </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>


        </>
    );
  }


export default BranchenReportsMain;