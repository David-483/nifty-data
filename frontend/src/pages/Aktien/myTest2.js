import GridLayout from "react-grid-layout";
import Guru from "../start/gurus/Gurus";
import Aktienanalyse from "../start/aktienanalyse/aktienanalyse";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Button} from '@mui/material'


function myTest() {


  const handleSaveClick = (e) => {
    e.preventDefault();
  };


  return (
    <>
  
  <Button
        id="basic-button"
        onClick={handleSaveClick}
      >
        Speichern
  </Button>

  <Button
        id="basic-button"
        onClick={handleSaveClick}
      >
        Laden
  </Button>


    <GridLayout className="layout" cols={24} rowHeight={30} width={1500} height={3000} isBounded={true} compactType={null}>
      <div key="a" data-grid={{ x: 0, y: 0, w: 4, h: 8, isResizable: false }}>
        <Aktienanalyse
          name="Champagner Report-Analyse"
          subtext1="Wer will Cash machen? Kauft euch diese freshe nice Analyse und seht selbst!"
          subtext2="Aber Achtung: Champagner gibst gratis dazu"
          autor="Lukas Gesche"
          datum="04 Jan 2022"
          picurl="https://cdn.discordapp.com/attachments/838725097073410068/944893029603475457/AlleAktien-ABInBev-Aktie-Aktienanalyse-488333.jpg"
          link="/gurus/david"
        />
      </div>
      <div key="c" data-grid={{ x: 5, y: 0, w: 4, h: 8 , isResizable: false}}>
        <Aktienanalyse
          name="Champagner Report-Analyse"
          subtext1="Wer will Cash machen? Kauft euch diese freshe nice Analyse und seht selbst!"
          subtext2="Aber Achtung: Champagner gibst gratis dazu"
          autor="Lukas Gesche"
          datum="04 Jan 2022"
          picurl="https://cdn.discordapp.com/attachments/838725097073410068/944893029603475457/AlleAktien-ABInBev-Aktie-Aktienanalyse-488333.jpg"
          link="/gurus/david"
        />
      </div>
      <div key="b" data-grid={{ x: 0, y: 9, w: 4, h: 8, isResizable: false }}>
        <Aktienanalyse
          name="Champagner Report-Analyse"
          subtext1="Wer will Cash machen? Kauft euch diese freshe nice Analyse und seht selbst!"
          subtext2="Aber Achtung: Champagner gibst gratis dazu"
          autor="Lukas Gesche"
          datum="04 Jan 2022"
          picurl="https://cdn.discordapp.com/attachments/838725097073410068/944893029603475457/AlleAktien-ABInBev-Aktie-Aktienanalyse-488333.jpg"
          link="/gurus/david"
        />
      </div>
    </GridLayout>
    </>
  );
}
export default myTest;
