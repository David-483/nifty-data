import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Aktienanalyse from "./aktienanalyse/aktienanalyse";
import { Link } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Guru from './gurus/Gurus';


function Gurus() {
  return (
   <> 
   <div className="start-page-headline-container">
   <p className="start-page-headline-nth">Die neuesten Guru Updates</p>

  </div>
  
   <div className="start-page-gurus">

   <a href="#/gurus/0001067983">
    <Guru ticker="0001067983"
    />
    </a>

    <a href="#/gurus/0001166559">
<Guru ticker="0001166559"
    />
        </a>



<a href="#/gurus/0001569205">
<Guru ticker="0001569205"
    />
        </a>

<a href="#/gurus/0001336528">
<Guru ticker="0001336528"
    />
        </a>

<a href="#/gurus/0001549575">
<Guru ticker="0001549575"
    />
        </a>

<a href="#/gurus/0000783412">
<Guru ticker="0000783412"
    />
        </a>





   </div>
   </>
  );
}

export default Gurus;
