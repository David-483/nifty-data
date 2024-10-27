import { IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link} from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Aktie({ticker}) {
  return (
    <div className="start-page-trendingaktien-container">
        <div className="start-page-trendingaktien-content">
      <img loading="lazy" className="start-page-trendingaktien-content-image" src={`/img/unternehmenslogos/${ticker}.svg`} 
        style={{

            maxWidth: '70%',
            minHeight: '10%',
            maxHeight: 70,
          }}

      ></img>
      
        <IconButton className="start-page-trendingaktien-content-button"
          style={{
            borderRadius: 35,
            backgroundColor: "rgba(0,0,0,0.4)",
            backgroundSize: "800%, 100%",
            // padding: "18px 36px",
            marginTop: "auto",
            marginBottom: "20px",
            marginRight:"auto",
            marginLeft:"auto",
            fontSize: "10px",
            width: 40,
            height: 40,
          }}
          variant="contained"
        >
        <ChevronRightIcon style={{color:"white"}} />
        </IconButton>
        </div>
        </div>
    
   
   
  );
}

export default Aktie;
