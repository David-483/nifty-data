import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link} from "react-router-dom";

function Aktienanalyse({name, subtext1, subtext2, datum, autor, picurl, link}) {
  return (
    <div className="start-page-analysen-container">
      <div className="start-page-analysen-image-container">
      <img className="start-page-analysen-content-image" src={picurl}></img>
      </div>
      <div className="start-page-analysen-content-right">
        <h1 className="start-page-analysen-content-headline"> {name}</h1>
        <h3 className="start-page-analysen-content-subline"> {subtext1} <br></br> {subtext2}</h3>
        <h3 className="start-page-analysen-content-autor"> {autor} </h3>
        <div className="start-page-analysen-content-bottom-container">
        <h4 className="start-page-analysen-content-datum"> {datum}</h4>
        <Button className="start-page-analysen-content-button"
          style={{
            borderRadius: 35,
            backgroundImage: "linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)",
            backgroundSize: "300%, 100%",
            // padding: "18px 36px",
            marginTop: "auto",
            marginBottom: "20px",
            marginRight:"15px",
            fontSize: "18px",
            width: 120,
            height: 40,
          }}
          variant="contained"
          endIcon={<PlayArrowIcon />}
          component={Link} to={link}
        >
          Go!
        </Button>
        </div>
        
      </div>
    </div>
    
   
   
  );
}

export default Aktienanalyse;
