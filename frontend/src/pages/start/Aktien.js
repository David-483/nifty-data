import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Aktienanalyse from "./aktienanalyse/aktienanalyse";
import { Link } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Aktie from './aktien/aktie.js';


function Aktien() {
  return (
   <> 
   <div className="start-page-headline-container">
   <p className="start-page-headline-nth">Unsere Lieblingsaktien</p>
   {/* <Link to="/gurus" className="start-page-headline-link-nth"> 
        Alle Aktien<ArrowForwardRoundedIcon fontSize="medium" />
  </Link> */}
  </div>
  <div className="start-page-trendingaktien">

<a href="/#/aktien/AAPL">
  <Aktie 
  ticker="AAPL"
  />
  </a>

<a href="/#/aktien/KO">
<Aktie
  ticker="KO"
  />
  </a>

  <a href="/#/aktien/GOOG">
<Aktie 
  ticker="GOOG"
  />
</a>

<a href="/#/aktien/NKE">
<Aktie 
  ticker="NKE"
  />
  </a>

  <a href="/#/aktien/MSFT">
   <Aktie 
  ticker="MSFT"
  />
  </a>

  <a href="/#/aktien/SPGI">
<Aktie 
  ticker="SPGI"
  />
    </a>

<a href="/#/aktien/MCO">
<Aktie 
  ticker="MCO"
  />
    </a>

<a href="/#/aktien/MCD">
<Aktie 
  ticker="MCD"
  />
    </a>

<a href="/#/aktien/WM">
<Aktie 
  ticker="WM"
  />
    </a>

<a href="/#/aktien/MC.PA">
<Aktie 
  ticker="MC.PA"
  />
    </a>

<a href="/#/aktien/ADBE">
<Aktie 
  ticker="ADBE"
  />
    </a>

<a href="/#/aktien/V">
<Aktie
  ticker="V"
  />
    </a>

   </div>


   </>
  );
}

export default Aktien;
