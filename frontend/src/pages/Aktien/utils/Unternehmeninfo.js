import { IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link} from "react-router-dom";

function Unternehmeninfo({pic}) {
  return (
    <div className="start-page-trendingaktien-container">
        <div className="start-page-trendingaktien-content">
      <img className="start-page-trendingaktien-content-image" src={`/img/unternehmenslogos/${pic}.svg`} 
        style={{
            maxWidth: '70%',

          }}

      ></img>
      
        <IconButton className="start-page-trendingaktien-content-button"
          style={{
            borderRadius: 35,
            backgroundImage: "linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)",
            backgroundSize: "300%, 100%",
            // padding: "18px 36px",
            marginTop: "auto",
            marginBottom: "20px",
            marginRight:"auto",
            marginLeft:"auto",
            fontSize: "18px",
            width: 40,
            height: 40,
          }}
          variant="contained"
          component={Link} to="/gurus"
        >
            <ArrowForwardIcon style={{color:"white"}} />
        </IconButton>
        </div>
        </div>
    
   
   
  );
}

export default Unternehmeninfo;
