import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Aktienanalyse from "./aktienanalyse/aktienanalyse";
import { Link } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import FondsUndETFsBox from './FondsUndETFs/FondsUndETFsBox';


function FondsUndETFs() {
  return (
   <> 
   <div className="start-page-headline-container">
   <p className="start-page-headline-nth">Fonds und ETFs</p>
   <Link to="/gurus" className="start-page-headline-link-nth"> 
        Alle Fonds und ETFs<ArrowForwardRoundedIcon fontSize="medium" />
  </Link>
   </div>
  
   <div className="start-page-etfsfonds">
    <FondsUndETFsBox name= "Vanguard Index Funds - Vanguard Total Stock Market ETF"
      index= "Russell 1000 TR USD"
      kosten= "0.3%"
      ausschuettend= "Nein"
      ratingvalue= {4}
      YTD= "-8,11"
      oneYear= "16"
      threeYears= "19"
      pic = "ISHARES"
      />
      
      <FondsUndETFsBox name= "Davids stabiler ETF - Wird mega auszahlen"
      index= "I Make you rich"
      kosten= "0.01%"
      ausschuettend= "Ja"
      ratingvalue= {5}
      YTD= "8,11"
      oneYear= "26"
      threeYears= "19"
      pic = "VANGUARD"
      />
      
     
      <FondsUndETFsBox name= "Vanguard Index Funds - Vanguard Total Stock Market ETF"
      index= "Russell 1000 TR USD"
      kosten= "0.3%"
      ausschuettend= "Nein"
      ratingvalue= {1}
      YTD= "-8,11"
      oneYear= "16"
      threeYears= "-19"
      pic = "ISHARES"
      />
   </div>
   </>
  );
}

export default FondsUndETFs;
