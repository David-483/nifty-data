import { Button, Rating } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link} from "react-router-dom";

function FondsUndETFsBox({name, index, kosten, ausschuettend, ratingvalue, YTD, oneYear, threeYears, pic}) {
  if(YTD.charAt(0) === "-"){
    var YTDcolor = "red";
  }else{
    var YTDcolor = "#09ff09";
  }
  if(oneYear.charAt(0) === "-"){
    var oneYearcolor = "red";
  }else{
    var oneYearcolor = "#09ff09";
  }
  if(threeYears.charAt(0) === "-"){
    var threeYearscolor = "red";
  }else{
    var threeYearscolor = "#09ff09";
  }

  return (
    <div className="start-page-etfsfonds-container">
      <div className="start-page-etfsfonds-content">
      <img className="start-page-etfsfonds-content-image"  
            src={`/img/etfsfondslogos/${pic}.svg`}

            style={{
              minWidth: '10%',
              maxWidth: '60%',
              minHeight: '10%',
              maxHeight: 40,
            }}
            ></img>
        <h4 className="start-page-etfsfonds-content-name"> {name} </h4>
        <div className="start-page-etfsfonds-content-container">
          <div className="start-page-etfsfonds-content-container-block">
          <h4 className="start-page-etfsfonds-content-info">Index: </h4> <h4 className="start-page-etfsfonds-content-value"> {index} 
                   
          </h4>
          </div>
          <div className="start-page-etfsfonds-content-container-block">
          <h4 className="start-page-etfsfonds-content-info">Kosten: </h4> <h4 className="start-page-etfsfonds-content-value"> {kosten} </h4>
          </div>
          <div className="start-page-etfsfonds-content-container-block">
         <h4 className="start-page-etfsfonds-content-info">Ausschüttend: </h4> <h4 className="start-page-etfsfonds-content-value"> {ausschuettend} </h4>
           </div>
        </div>
        <div className="start-page-etfsfonds-content-container-rating">
        <div className="start-page-etfsfonds-content-container-block">
         <h4 className="start-page-etfsfonds-content-info">Morningstar Rating </h4>
         <Rating name="read-only" value={ratingvalue} readOnly style={{marginRight:"15px", fontSize:"1.3rem"}} />
         </div>
        </div>


        <div className="start-page-etfsfonds-content-container">
        <div className="start-page-etfsfonds-content-container-block">
          <h4 className="start-page-etfsfonds-content-info">YTD: </h4> <h4 className="start-page-etfsfonds-content-value" 
          style={{color:YTDcolor}}>
            {YTD}%
            </h4>
          </div>
          <div className="start-page-etfsfonds-content-container-block">
          <h4 className="start-page-etfsfonds-content-info">1 Jahr: </h4> <h4 className="start-page-etfsfonds-content-value" style={{color:oneYearcolor}}> {oneYear}%</h4>
          </div>
          <div className="start-page-etfsfonds-content-container-block">
          <h4 className="start-page-etfsfonds-content-info">3 Jahre: </h4> <h4 className="start-page-etfsfonds-content-value" style={{color:threeYearscolor}}> {threeYears}%</h4>
          </div>
        </div>

        <div className="start-page-etfsfonds-content-bottom-container">

        <Button className="start-page-analysen-content-button"
          style={{
            borderRadius: 35,
            backgroundImage: "linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)",
            backgroundSize: "300%, 100%",
            // padding: "18px 36px",
            margin: "5px auto 5px auto",
            fontSize: "18px",
            width: 120,
            height: 40,
          }}
          variant="contained"
          endIcon={<PlayArrowIcon />}
          component={Link} to="/test"
        >
          Go!
        </Button>
        </div>
 </div>
    </div>
    
   
   
  );
}

export default FondsUndETFsBox;
