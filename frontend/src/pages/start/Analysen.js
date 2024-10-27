import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Aktienanalyse from "./aktienanalyse/aktienanalyse";
import { Link } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function Analysen() {
  return (
   <> 
   <div className="start-page-headline-container">
   <p className="start-page-headline-nth">Aktuelle Analysen</p>
   <Link to="/gurus" className="start-page-headline-link-nth"> 
        Alle Analysen <ArrowForwardRoundedIcon fontSize="medium" />
  </Link>
   </div>
  
   <div className="start-page-analysen">
    <Aktienanalyse name="Johnson & Johnson" 
    subtext1="JP Morgan ist die älteste Bank der Welt. Die Coronakrise hat der Bank zugesetzt. Wie geht es weiter?" 
    subtext2=""
    autor="Dr Professor Long Name" 
    datum="20 Feb 2022" 
    picurl="https://cdn.discordapp.com/attachments/838725097073410068/944897782098034748/Nifty_Design_Manual2.jpg"
    link="/login"
    />

    <Aktienanalyse name="Champagner Report-Analyse" 
    subtext1="Wer will Cash machen? Kauft euch diese freshe nice Analyse und seht selbst!" 
    subtext2="Aber Achtung: Champagner gibst gratis dazu"
    autor="Lukas Gesche"
    datum="04 Jan 2022" 
    picurl="https://cdn.discordapp.com/attachments/838725097073410068/944893029603475457/AlleAktien-ABInBev-Aktie-Aktienanalyse-488333.jpg"
    link="/gurus/david"
    />
    {/* <Aktienanalyse /> */}
   </div>
   </>
  );
}

export default Analysen;
