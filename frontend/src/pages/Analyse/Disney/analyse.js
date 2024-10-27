import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Backdrop from "@mui/material/Backdrop";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Umsatzgrafik from "./Umsatzgrafik";
import Aktienkurs from "./Aktienkurs";
import EBITGrafik from "./EBITGrafik";
import GewinnGrafik from "./GewinnGrafik";
import UmsatzEbitGewinn from "./UmsatzEbitGewinn";
import UmsatzVerteilung from "./UmsatzVerteilung";
import UmsatzVerteilung2 from "./UmsatzVerteilung2";
import UmsatzVerteilung3 from "./UmsatzVerteilung3";
import "./disneyanalyse.css"
import { fontSize } from "@mui/system";


const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: "white",
}),
);

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgba(255, 255, 255, 0.0)",
  boxShadow: "none",
  width: '90%',


}),
);

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
}),
);

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  color: "white",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
}),
);

const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
  color: "white",
}));

function Analyse() {

  const [openDialogGlassDoor, setOpenDialogGlassDoor] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialogGlassDoor(true);
  };

  const handleClose = () => {
    setOpenDialogGlassDoor(false);
  };



  // HIER MIT ANALYSE STARTEN

  return (
    <div>

<Backdrop 
        sx={{ color: "#fff", backdropFilter: "blur(10px)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openDialogGlassDoor}
        onClick={handleClose}
      >
        <div className="analyseInfoGlassDoor">
        <div className="GlassdoorCheckLogo">
                    <img className="GlassdoorLogo" src={`/img/Analysen_Banner/GlassdoorLogo.svg`}></img></div>
        <h4>
          {" "}
          Glassdoor ist eine der größten Seiten für Arbeitgeberbewertungen. Auf
          glassdoor.com können ehemalige und aktuelle Mitarbeitende Bewertungen
          zu ihrem Arbeitgeber abgeben - und das vollkommen anonym. Das führt
          dazu, das Bewertungen offen und ehrlich sind, auf der anderen Seite
          jedoch auch dazu, dass Arbeitgeber, Konkurrenten oder auch Personen,
          die nie bei dem jeweiligen Zielunternehmen gearbeitet haben.{" "}
        </h4>
        </div>

      </Backdrop>


      {/* SEKTION 1 - HEADLINE*/}
      <div className="AnalyseHeader">
      <div className="AnalyseLogoContainer">

        <img src={`/img/unternehmenslogos/DIS_WH.svg`}>
        </img>

      </div>
      <p className="AnalyseAutor">Aktienanalyse</p>
      </div>
      <div className="AnalyseFirstRowContainer">

        <div className="AnalyseFirstRow">
          <table className="Analyse_Table_First">
          <tr className="TableHeadlineTop">
              Soft Facts
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Headquarters</td>
              <td className="Analyse_Table_Second_Cell">Burbank, CA (USA)</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >Sektor</td>
              <td className="Analyse_Table_Second_Cell">Kommunikation</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Branche</td>
              <td className="Analyse_Table_Second_Cell">Entertainment</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">ISIN</td>
              <td className="Analyse_Table_Second_Cell">US2546871060</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Aktienkurs</td>
              <td className="Analyse_Table_Second_Cell">139,68 USD | 126,56 EUR</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Marktkapitalisierung</td>
              <td className="Analyse_Table_Second_Cell">253.105 Mio. USD</td>
            </tr>
            <tr className="TableHeadline">
              Hard Facts
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Umsatz</td>
              <td className="Analyse_Table_Second_Cell">72.988 Mio. USD</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">EBIT</td>
              <td className="Analyse_Table_Second_Cell">20.584 Mio. USD</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Gewinn</td>
              <td className="Analyse_Table_Second_Cell">1.995 Mio. USD</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Eigenkapital</td>
              <td className="Analyse_Table_Second_Cell">93.011 Mio. USD</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Fremdkapital</td>
              <td className="Analyse_Table_Second_Cell">110.598 Mio. USD</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Dividende</td>
              <td className="Analyse_Table_Second_Cell">Nein</td>
            </tr>
          </table>


          <div className="glowButton">
          <button className="glow-on-hover" type="button">Order gedruckte Analyse</button>
           
          </div>
          </div>

           <div className="AnalyseFirstRow">
          <table className="Analyse_Table_First">
          <tr className="TableHeadlineTop">
              Valuation
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">KGV</td>
              <td className="Analyse_Table_Second_Cell">31,4x</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">KUV</td>
              <td className="Analyse_Table_Second_Cell">5,3x</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">KBV</td>
              <td className="Analyse_Table_Second_Cell">1,9x</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">PEG</td>
              <td className="Analyse_Table_Second_Cell">2,1x</td>
            </tr>

          <tr className="TableHeadline">
              Margen
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Brutto Marge</td>
              <td className="Analyse_Table_Second_Cell">54,3 %</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">EBIT Marge</td>
              <td className="Analyse_Table_Second_Cell">15,4 %</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Netto Marge</td>
              <td className="Analyse_Table_Second_Cell">3,2 %</td>
            </tr>


            <tr className="TableHeadline">
              Returns
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">ROI</td>
              <td className="Analyse_Table_Second_Cell">20,4%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">ROA</td>
              <td className="Analyse_Table_Second_Cell">12,5%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">ROE</td>
              <td className="Analyse_Table_Second_Cell">8,4%</td>
            </tr>

            <tr className="TableHeadline">
              Health
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">EK-Quote</td>
              <td className="Analyse_Table_Second_Cell">43%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Net Debt / EBIT</td>
              <td className="Analyse_Table_Second_Cell">2,1x</td>
            </tr>
          </table>
           </div>




        <div className="AnalyseHeaderImage">

          <img
            className="AnalyseHeaderImage"
            src={`/img/Cover.jpg`}
          ></img>

        </div>

      </div>

      <div className="Analyse_Headline">
        Aktienkurs
      </div>

      <div className="AktienkursAnalyse">
        <Aktienkurs/>
</div>

<div className="AnalyseHeaderImage2">

<img
  src={`/img/Disney/Banner.jpeg`}
></img>

</div>

<div className="AccordionContainerOutside">

      {/*AB HIER ACCORDION*/}
      {/* SEKTION 2 - INHALT*/}
      <div className="Analyse_Headline">
        Überblick
      </div>

      {/* SEKTION 3 - ÜBERBLICK*/}
      <div className="AccordionContainer">



              <div className="AnalyseOverviewText">
                <p>Hallo ist im Deutschen ein mündlicher oder schriftlicher, nicht förmlicher Gruß, insbesondere unter Bekannten oder Freunden. <br></br>
                  Als Interjektion wird der Ausdruck auch ähnlich dem veralteten Anruf „Heda!“ gebraucht, um auf sich aufmerksam zu machen: „Hallo, ist da jemand?“
                  Eine weitere Interjektion – „Aber hallo!“ – hat die Bedeutung einer Bekräftigung (etwa: „Da hast du sowas von Recht!“) oder auch eines Widersprechens (etwa: „Da übersiehst du etwas Wesentliches!“).
                  Seit einigen Jahren vermehrt aufgekommen ist der Gebrauch als Frage „Hallo?“ mit abweichender Betonung, um jemanden zur Besinnung zu rufen.
                  Wesentlich für die jeweilige Bedeutung ist die gewählte Betonung, Mimik und Gestik des Sprechenden.
                  Von dem Ausruf leitet sich die substantivierte, im Gegensatz zu den anderen Formen auf der zweiten Silbe betonte Form „ein Hallo“ ab, die ein (fröhliches) lärmendes Durcheinander bezeichnet („Er wurde mit großem Hallo empfangen.“)
                </p>

                <p></p>

                <p>Hallo ist im Deutschen ein mündlicher oder schriftlicher, nicht förmlicher Gruß, insbesondere unter Bekannten oder Freunden. <br></br>
                  Als Interjektion wird der Ausdruck auch ähnlich dem veralteten Anruf „Heda!“ gebraucht, um auf sich aufmerksam zu machen: „Hallo, ist da jemand?“
                  Eine weitere Interjektion – „Aber hallo!“ – hat die Bedeutung einer Bekräftigung (etwa: „Da hast du sowas von Recht!“) oder auch eines Widersprechens (etwa: „Da übersiehst du etwas Wesentliches!“).
                  Seit einigen Jahren vermehrt aufgekommen ist der Gebrauch als Frage „Hallo?“ mit abweichender Betonung, um jemanden zur Besinnung zu rufen.
                  Wesentlich für die jeweilige Bedeutung ist die gewählte Betonung, Mimik und Gestik des Sprechenden.
                  Von dem Ausruf leitet sich die substantivierte, im Gegensatz zu den anderen Formen auf der zweiten Silbe betonte Form „ein Hallo“ ab, die ein (fröhliches) lärmendes Durcheinander bezeichnet („Er wurde mit großem Hallo empfangen.“)
                </p>

                <p></p>

                <p>Hallo ist im Deutschen ein mündlicher oder schriftlicher, nicht förmlicher Gruß, insbesondere unter Bekannten oder Freunden. <br></br>
                  Als Interjektion wird der Ausdruck auch ähnlich dem veralteten Anruf „Heda!“ gebraucht, um auf sich aufmerksam zu machen: „Hallo, ist da jemand?“
                  Eine weitere Interjektion – „Aber hallo!“ – hat die Bedeutung einer Bekräftigung (etwa: „Da hast du sowas von Recht!“) oder auch eines Widersprechens (etwa: „Da übersiehst du etwas Wesentliches!“).
                  Seit einigen Jahren vermehrt aufgekommen ist der Gebrauch als Frage „Hallo?“ mit abweichender Betonung, um jemanden zur Besinnung zu rufen.
                  Wesentlich für die jeweilige Bedeutung ist die gewählte Betonung, Mimik und Gestik des Sprechenden.
                  Von dem Ausruf leitet sich die substantivierte, im Gegensatz zu den anderen Formen auf der zweiten Silbe betonte Form „ein Hallo“ ab, die ein (fröhliches) lärmendes Durcheinander bezeichnet („Er wurde mit großem Hallo empfangen.“)
                </p>
              </div>


      </div>

      <div className="Analyse_Headline">
        Das Unternehmen
      </div>

      {/* SEKTION 4 - HISTORIE*/}
      <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Historie</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>





              <div className="HistoryContainer1">

                <div className="AnalyseFirstTextBannerContainer">

                  <div className="AnalyseHistorieBanner">

                    <img className="AnalyseHistorieBanner" src={`/img/Analysen_banner/2.jpg`}>
                    </img>
                  </div>

                  <div className="AnalyseHistorieBanner">

                    <img className="AnalyseHistorieBanner" src={`/img/Analysen_banner/3.jpg`}>
                    </img>
                  </div>

                  <div className="AnalyseHistorieBanner">

                    <img className="AnalyseHistorieBanner" src={`/img/Analysen_banner/4.jpg`}>
                    </img>
                  </div>


                </div>

                <div className="AnalyseFirstTextContainer">

                  <div className="Analyse_First_Text">
                    Walter Elias "Walt" Disney (geb. 1901) gründete bereits 1921 das Filmstudio „Laugh-O-gram“ in Kansas City. Der Name „Laugh-O-gram“ entstand aus einem älteren Projekt bei welchem Disney die Cartoons „Newman’s Laugh-O-Gram“ für das Newman Theater produziert hat - ein großer Erfolg. Im Anschluss stellte Disney die ersten Zeichner ein, um noch mehr Trickfilme zu produzieren. Doch die Umsätze der Cartoons reichten nicht aus, um das Unternehmen solvent zu halten. Das Studio geriet in finanzielle Schwierigkeiten, sodass Walt Disney im Büro lebte und im Bahnhof duschen musste. Nach einer ausgefallenen Zahlung der Pictorial Clubs, Inc. spitzten sich die finanziellen Probleme weiter zu und die Mitarbeiter verließen das Unternehmen. Nachdem der Zahnarzt Thomas B. McCrum kurze Zeit später einen neuen Kurzfilm für Zahnhygiene in Auftrag gegeben hatte, holte Disney die ehemaligen Mitarbeiter zurück, um „Tommy Tucker’s Tooth“ zu produzieren. So konnte das Studio einen Gewinn von 500 $ erzielen. Er investierte den Profit, um die Reallife/Cartoon-Serie, „Alice’s Wonderland“ zu produzieren. Kurz nachdem der 12,5 Minuten Film fertiggestellt war, ging das Studio schließlich Konkurs und meldete 1923 Insolvenz an.
                  </div>

                  <div className="Analyse_First_Text">
                    Da sein Bruder Roy, mit dem er ein sehr gutes Verhältnis hatte, unter starker Tuberkulose litt, zog er auf Rat seines Arztes in ein wärmeres Klima nach Kalifornien - Walt folgte ihm im Anschluss der Insolvenz und zog zu seinem Onkel nach Hollywood. Dort begann sich die New Yorker Filmververmietung M.J. Winkler für die Alice-Serie zu interessieren, welche ihm 1923 einen Vertrag über 1.500 USD pro neuem Film anboten. Dieser gilt heute als Start für die Walt Disney Company. Finanziert von Walt’s Bruder Roy konnte Disney einige Kurzfilme produzieren und schließlich auch wieder Zeichner einstellen. So kam 1924 ebenso sein alter Geschäftspartner Ub Iwerks zurück nach Hollywood. 1926 konzentrierte sich Disney zunehmend auf administrative Aufgaben und überließ Iwerks die Gestaltung neuer Figuren. 1928 zeichnete er dann Micky Maus, während Disney den Charakter entwickelte und formte. Ihren ersten Auftritt hatte sie anschließend im Kurzfilm „Plane Crazy“. Nachdem 1927 der erste Tonfilm (Der Jazzsänger) von Warner Bros. erschien, wertete Disney seine Produktionen auf und erschuf den Klassiker „Steamboat Willie“, in dem auch „Kater Karlo“ und „Minnie Maus“ einen Auftritt haben. Von da an erlangte Micky Maus weltweite Aufmerksamkeit und Disney wurde zu einem der erfolgreichsten Filmproduzenten. In der nächsten Zeit folgten „Donald Duck“, „Pluto“, „Goofy“ und viele weitere.
                  </div>

                  <div className="Analyse_First_Text">
                    Disney galt als verfechter moderner Technologien und strebte stets nach absoluter Perfektion in seinen Zeichentrickfilmen. So sicherte er sich das alleinige Verwendungsrecht am Technicolor-Verfahren, also der Möglichkeit, Filme mit drei Farben zu produzieren. Einer von diesen (von Blumen und Bäumen) brachte ihm seinen ersten Academy Award ein. Zudem plante er einen abendfüllenden Cartoon zu kreieren und kalkulierte mit 250.000$ und 18 Monaten Produktionszeit. Im Laufe der Zeit kamen neue Verfahren und es war nun möglich, Filme in vollen Farben zu produzieren. Jedoch wurde Disney gewarnt, dass Kinobesucher es nicht aushalten würden, 80 Minuten lang grelle Farben zu ertragen. Angelehnt an das Märchen "Snow White" mit  Marguerit Clarke begann Disney, den Film Schneewitchen zu produzieren und mit neuesten Produktiosntechniken zu versehen, wodurch sich die Produktionszeit und -kosten auf 36 Monate bzw. 1,75 Millionen $ erhöhten.  Der Film prämierte 1937, spielte 8,5 Millionen $ ein und gilt heute als bedeutendester Zeichentrickfilm. In den Folgejahren wurden weitere, bedeutsame Cartoons wie unter anderem Dumbo und Bambi produziert, welche zu seinerzeit jedoch, aufgrund eines Streiks und des 2. Weltkrieges, keine großen Erfolge feiern konnten. Erst durch Cinderella (1950) und Peter Pan (1953) gelang das Unternehmen nach über einem Jahrzehnt wieder auf Erfolgskurs.
                  </div>

                </div>

              </div>

              <div className="HistoryContainer2">

                <div className="AnalyseFirstTextBannerContainer">

                  <div className="AnalyseHistorieBanner">

                    <img className="AnalyseHistorieBanner" src={`/img/Analysen_banner/2.jpg`}>
                    </img>
                  </div>

                  <div className="AnalyseHistorieBanner">

                    <img className="AnalyseHistorieBanner" src={`/img/Analysen_banner/3.jpg`}>
                    </img>
                  </div>

                  <div className="AnalyseHistorieBanner">

                    <img className="AnalyseHistorieBanner" src={`/img/Analysen_banner/4.jpg`}>
                    </img>
                  </div>


                </div>

                <div className="AnalyseFirstTextContainer">

                  <div className="Analyse_First_Text">
                    Mit dem aufkommen des Fernsehens und der Eröffnung des ersten Vergnügungsparks in Anaheim, Kalifornien ergab sich für das Unternehmen eine Bandbreite an Einkommensquellen: Filme & Serien, Musik, Merchandising und einen Vergnügungspark. Es folgten weitere Klassiker wie 101 Dalmatiner (1961), Mary Poppins (1964) oder das Dschungelbuch (1967). Tragischerweise starb Walt Disney 1966 und kurze Zeit auch sein Bruder Roy, woraufhin Donn Tatum der neue CEO des Unternehmens wurde. In der kommenden Zeit gingen auch einige von „Disney’s Nine Old Men“ (Disney nannte seine neun engsten Mitarbeiter so) in den Ruhestand oder verstarben. Die kommenden Filme verbuchten eher mäßige Erfolge und der Umsatz der Spielfilmsparte sank massiv. Erst als - unter Michael Eisner als CEO - Walt Disneys Neffe Roy E. Disney 1986 im Unternehmen Aufstieg und ende der 80er die Videokassette eingeführt wurde, konnten die Einnahmen wieder gesteigert werden. Ebenso fand 1986 die Umbenennung von „Walt Disney Productions“ in „The Walt Disney Company“ statt.
                  </div>

                  <div className="Analyse_First_Text">
                    Die 90er Jahren wurden zur Disney Renaissance. Neben den Filmen "Arielle, Die Meerjungfrau“ (1989), „Die Schöne Und Das Biest“ (1991), „Aladdin" (1992), Der König der Löwen (1994), Pocahontas (1995) und Tartan (1999) prägten auch diverse Serien wie „Die Gummibärenbande“, „DuckTales“ oder „Chip n’ Chap“ die „Disney Dekade“.  Disney florierte und erweiterte das Geschäft. So begann die Zusammenarbeit mit Pixar und die ersten Computeranimierten Filme wie Toy Story (1995) oder das große Krabbeln (1997) entstanden. Weiter fand Mitte der 90er die bis dato größte Übernahme von Capital Cities/ABC Inc. für 19,1 Mrd. $ statt, so wie der Kauf von Fox Family Worldwide Anfang der 2000er für 2,9 Mrd. $ Cash plus 2,3 Mrd. $ Schulden. Außerdem startete das Unternehmen mit der Digitalisierung und kaufte die Internetunternehmen „Starwave“ und „Infoseek“. Darüberhinaus erweiterte Disney die Parks, Experiences and Products Sparte mit der Cruise Line und den Kreuzfahrtschiffen „Disney Magic“ und dem Schwesterschiff „Disney Wonder“.
                  </div>

                  <div className="Analyse_First_Text">
                    CEO Michael Eisner wurde 2005 von seinem Posten verdrängt und Bob Iger übernahm die Geschäftsführung. Zuvor wurde Eisner von unter anderem dem Sohn und Neffen der Disney Brüder Roy E. Disney vorgeworfen, das Unternehmen nicht ordentlich zu führen. Disney verließ daraufhin das Unternehmen 2003. In den 2000er fanden viele Übernahmen statt. So kaufte der Konzern 2006 Pixar für 7,4 Mrd. $, 2009 den Comicverlag Marvel für 4,3 Mrd. $, 2012 Lucasfilm für 4,05 Mrd. $ und schließlich 2019 21st Century Fox für 71,3 Mrd. $. - Disney kaufte das Unternehmen, um die Bibliothek für den geplanten Streamingdienst zu erweitern. 2019 launchte Disney schließlich den hauseigenen Streamingdienst Disney+, welcher heute über 110 Millionen Abonnierende umfasst. Disney hat es geschafft, eins der größten Medienunternehmen der Welt zu werden. Mit Franchises wie Star Wars, Simpsons, dem Marvel Universum und den Disney Klassikern hat der Konzern eine Bibliothek mit unzähligen Fans weltweit. Zusätzlich runden Themenparks, Merchandising, Resorts & Kreuzfahrtschiffe, Verlagswesen und viele weitere Sparten die Diversifizierung ab.
                  </div>

                </div>




              </div>


            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>

      {/* SEKTION 5 - GESCHÄFTSMODELL*/}
      <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Geschäftsmodell</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>



              <div className="BusinessCaseText1">

                <h1 className="AnalyseTextH0"> Wie verdient Disney Geld?</h1>


                <p className="AnalyseTextP">Die Walt Disney Company ist ein weltweit operierendes Unternehmen mit Aktivitäten in verschiedenen Geschäftsbereichen. Das Geschäftsmodell besteht aus dem produzieren und vertreiben von Filmen & Serien, verkauf von Lizenzartikeln und dem betreiben von Freizeitparks und anderen Attraktionen. Genauer teilt das Unternehmen ihre Aktivitäten in die Segmente: „Disney Media and Entertainment Distribution“ (DMED) und „Disney Parks, Experiences and Products“ (DPEP).
                </p>

                <img className="GrafikenWide"
  src={`/DIS/Grafiken/Umsatz.jpg`}
></img>
<div className="Umsatzverteilung">

<div className="FirstPieChart">
<UmsatzVerteilung/>
</div>

<div className="SecondPieChart">

<div>
<UmsatzVerteilung2/>
</div>

<div>
<UmsatzVerteilung3/>
</div>

</div>


</div>

                <h1 className="AnalyseTextH1">Disney Media and Entertainment Distribution</h1>
                <p className="AnalyseTextP1">Das DMED-Segment umfasst die weltweite Produktion und Distribution von Filmen und Serien.
                  Diese werden von drei Gruppen: „Studios“, „General Entertainment“ und „Sports“, produziert und über die Kanäle: „Linear Networks“, „Direct-to-Consumer“ und „Content Sales/Licensing“ vertrieben. Was die Kanäle und Produktionsstätten genau bedeuten, erfährst du im nächsten Abschnitt.</p>
                <h1 className="AnalyseTextH1sub">Produktion</h1>
                <li className="AnalyseTextH2sub">Studios</li>
                <p className="AnalyseTextP2sub">Unter „Studios“ produziert der Mäuse-Konzern Filme und Serien unter den Namen: „The Walt Disney Pictures“„Twentieth Century Studios“, „Marvel“, „Lucasfilm“, „Pixar“ und „Searchlight Pictures“. Dazu gehören große Namen wie die Disney-Klassiker (König der Löwen, Pocahontas, die Schöne und das Biest, Toy Story, Star Wars, Fluch der Karibik und unzählige weitere. Vor der Akquisition von Marvel im Jahre 2010 hat Marvel einen langfristigen Vertrag mit Sony gemacht, welche die Produktion und den Vertrieb von Spider-Man-Filmen umfasst. Sony trägt die Kosten für die Produktion und den Vertrieb, während Disney die Merchandise-Rechte hält und an Dritte verkauft. Disney zahlt Sony eine Lizenzgebühr, welche sich nach den Einnahmen der Einspielergebnisse richten - nach oben hin jedoch begrenzt sind. Für das Jahr 2022 plant das Unternehmen 50 Filmen und Serien zu produzieren, welche sich jedoch aufgrund der Covid-19-Pandemie verschieben können. </p>
                <li className="AnalyseTextH2sub">General Entertainment</li>
                <p className="AnalyseTextP2sub">Zu „General Entertainment“ zählen die Produktionen der Broadcast und Kabelkanäle sämtlicher.
                  Im allgemeinen werden diese von den Studios: „ABC Signature“, „20th Television“, „Disney Branded Television“, „FX Productions“ und den „National Geographic Studios“ produziert - jedoch kauft Disney auch Programmrechte dazu. Disney plant für das Jahr 2022 über hundert Serien zu produzieren. Darunter: 60 ungeschrieben Serien, 30 Sitcoms, 25 Drama-Serien, 15 Doku-Serien, 10 animierte-Serien und andere Spezial- und Kurzfilme. </p>
                <li className="AnalyseTextH2sub">Sports</li>
                <p className="AnalyseTextP2sub">Der Konzern besitzt die wichtigsten Sportprogramm-Rechte weltweit, welche selbst produziert und über die eigenen Kanäle vertrieben werden. Darunter fallen College Basketball und Football, die NBA (US-Basketball), NFL (US-Football, MLB (US-Baseball), US-Open und Wimbledon (2 von 4 GrandSlam Tennisturnieren), PGA & Masters (Golf), NHL (US-Eishockey) und viele weitere hochkarätige Sportevents. International besitzt der Konzern die Rechte an verschiedenen Cricket-Events, Premier League (1. Liga Fußball England), La Liga (1. Liga Fußball Spanien), Bundesliga (1. Liga Fußball Deutschland) und viele mehr. </p>
                <h1 className="AnalyseTextH1sub">Vertrieb</h1>
                <li className="AnalyseTextH2sub">Linear Networks</li>
                <p className="AnalyseTextP2sub">Hierzu zählen die verschiedenen inländischen Kabel- und Broadcastkanäle wie ABC Television Network, ESPN, Disney-Sender, National Geographic oder FX. Der Unterschied zwischen Broadcasting und Kabel liegt in der Finanzierung. Broadcasting finanziert sich (wie in Deutschland die privaten TV-Sender) über Werbung und senden über öffentliche Radiowellen, Kabelkanäle (Cable) dagegen finanzieren sich über Abonnements und senden über private Radiowellen. Auch ausländische Fernsehkanäle wie ESPN, Fox oder National Geographic sowie einem 50% Anteil an A+E Television (unter anderem History Channel) zählen hierzu. </p>
                <table className="Analyse_UmsatzTable_First">
                  <h1 className="AnalyseTextH2">Abonnierende</h1>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Channel</td>
              <td className="Analyse_Table_First_Cell">Inländische Mitglieder</td>
              <td className="Analyse_Table_First_Cell">Ausländische Mitglieder</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_Second_Cell" >Disney</td>
              <td className="Analyse_Table_Second_Cell">189</td>
              <td className="Analyse_Table_Second_Cell">399</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_Second_Cell" >ESPN</td>
              <td className="Analyse_Table_Second_Cell">359</td>
              <td className="Analyse_Table_Second_Cell">64</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_Second_Cell" >Freeform</td>
              <td className="Analyse_Table_Second_Cell">76</td>
              <td className="Analyse_Table_Second_Cell">Nur US</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_Second_Cell" >FX</td>
              <td className="Analyse_Table_Second_Cell">196</td>
              <td className="Analyse_Table_Second_Cell">Nur US</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_Second_Cell" >National Geographic Channels</td>
              <td className="Analyse_Table_Second_Cell">127</td>
              <td className="Analyse_Table_Second_Cell">320</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_Second_Cell" >Fox</td>
              <td className="Analyse_Table_Second_Cell">Nur International</td>
              <td className="Analyse_Table_Second_Cell">184</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_Second_Cell" >Star</td>
              <td className="Analyse_Table_Second_Cell">Nur International</td>
              <td className="Analyse_Table_Second_Cell">216</td>
            </tr>
            </table>
                <li className="AnalyseTextH2sub">Direct-to-Consumer (DTC)</li>
                <p className="AnalyseTextP2sub">Disney sendet auch direkt an Verbraucher und Verbraucherinnen. Hierunter fallen verschiedene Streamingdienste wie „Disney+“, „ESPN+“, „Hulu“ oder „Star+“. </p>
                <h2 className="AnalyseTextH3sub">Disney+</h2>
                <p className="AnalyseTextP3sub">Disney+ (inklusive Star+ und Hotstar) ist der 2019 in den USA gelaunchte Streamingdienst 		von The World Disney Company. Die Bibliothek umfasst 33.000 Folgen und 1.850 Filme 			von unter anderem Disney, Pixar, Marvel, den Simpsons und Star Wars. Das Abo kostet in 		Deutschland aktuell 8.99€ pro Monat bei monatlicher Zahlung oder 89,90€ (7,50€ pro 			Monat) bei jährlicher Zahlung. Der Streamingdienst zählte Ende des Jahres 2021 118 			Millionen zahlende Personen zu seiner Kundschaft. </p>
                <h3 className="AnalyseTextH3sub">ESPN+</h3>
                <p className="AnalyseTextP3sub">ESPN+ ist ein abonomment-basierter Sreamingdienst für Live Sport events - alternativ
                  kann man die Sport-Events auch einzeln buchen. Zum Anfang Oktober 2021 betrug die
                  Anzahl der abonnierenden ungefähr 17 Millionen Personen.</p>
                <h3 className="AnalyseTextH3sub">Hulu</h3>
                <p className="AnalyseTextP3sub">Hulu ist ebenso ein Abonnement basierter Streamingdienst. Der Unterschied zu Disney+
                  ist zum einen, das Hulu zwei Versionen anbietet - eine mit begrenzter Werbung (6,99$ pro 		Monat) und eine ohne Werbung (12,99$ pro Monat). Zusätzlich bietet Hulu eine Version mit 	Live-TV (Broadcasting-Sender), Disney+ und EPSN+ für 69,99$ pro Monat und
                  75,99$ pro Monat (werbefrei). Ein weiterer Vorteil von Hulu sind Channels, welche das
                  Angebot erweitern. So füllt sich für zusätzliche 14,99$ die Bibliothek mit dem Angebot von
                  HBO-Max oder für 9,99$ die Bibliothek von Cinemax. Disney hat einen
                  67% Anteil an Hulu, die restlichen 33% gehören NBC Universal. Hier besteht aktuell
                  jedoch ein Deal, dass Disney den Anteil von NBCU 2024 zu einem Preis von
                  27,5 Milliarden USD übernehmen muss.</p>
                <h1 className="AnalyseTextH1">Disney Parks, Experiences and Products</h1>
                <p className="AnalyseTextP1">Das DPED-Segment umfasst die Aktivitäten aus den „Parks & Experiences“ und „Consumer Products“.</p>
                <li className="AnalyseTextH2sub">Parks & Experiencies</li>
                <p className="AnalyseTextP2sub">Hierunter fallen Freizeitparks und Resorts wie: „Walt Disney World Resort in Florida“, „Disneyland Resort in California“, „Disneyland Paris“, 48% Anteil an „Hong Kong Disneyland Resort“ sowie ein 43% Anteil am „Shanghai Disney Resort“. Die Minderheiten der chinesischen Parks gehen auf Regulation der Volksrepublik China zurück. Grob gesagt muss die Regierung immer die Mehrheit an ausländischen Unternehmen halten (hier Shendi Group, zu 100% im Besitz des chinesischen Staates). Zudem generiert The Walt Disney Company Einnahmen aus der „Disney Cruise Line“, dem „Disney Vacation Club“ und unter anderem einem 73% Anteil an den „National Geographic Expeditions“. </p>
                <li className="AnalyseTextH2sub">Consumer Products</li>
                <p className="AnalyseTextP2sub">Unter Konsumgütern fallen die Umsätze aus Lizenzeinnahmen der Markennamen, Charakteren & Figuren, Literatur und anderen immateriellen Gegenständen sowie den Einnahmen aus Merchandise-Produkten oder Büchern und Comics. </p>


                <h1 className="AnalyseTextH0"> Welche Kosten entstehen dabei? </h1>

                <h1 className="AnalyseTextH1">Kosten für DMED </h1>
                <p className="AnalyseTextP1">Für die Disney Media and Entertainment Distribution fallen vor allem operative Kosten hinsichtlich Programmierungs- und Produktionskosten für produzierte Filme der Studios: Walt Disney Pictures, 20th Century Studios, Marvel, Lucasfilm, Pixar und Searchlight Pictures. Kosten für die technische Infrastruktur, Vetriebs- und Verwaltungskosten, Abschreibungen sowie Kosten für den Kauf von beispielsweise News- und Sport-Content. </p>
                <h1 className="AnalyseTextH1">Kosten für DPEP </h1>
                <p className="AnalyseTextP1">Auch für die Parks & Experiences entstehen vor allem Kosten für Personal, für die Herstellung der verkauften Speisen und Getränke oder der Merchandise-Artikel, Reparaturen, Öl, für die technische Infrastruktur, Versicherungen und mehr. Neben den allgemeinen Kosten ist dieses Segment besonders Kapitalintensiv. Kosten für die Instandhaltung und Erweiterung der Parks, auch neue Kreuzfahrtschiffe und Attraktionen verlangen hohe Investitionen.  </p>


              </div>

            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>

      {/* SEKTION 6 - MANAGEMENT*/}
      <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Management</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>

              <div className="ManagementText1">

              <div className="AnalyseManagementContainer">

<img className="AnalyseManagementImage" src={`/img/Analysen_Banner/Management.jpg`}>
</img>
</div>

              <p className="AnalyseTextP"> Bob Chapek wurde 1960 in Indiana geboren und erwarb einen Bachelor of Science in Mikrobiologie sowie einen Master of Business Administration an der Michigan State University. Bevor Chapek 1993 zu der Walt Disney Company gewechselt ist, arbeitete er für die H. J. Heinz Company (heute $KHC) und für J. Walter Tompson (heute $WPP). Seine Karriere bei Disney startete als Marketing Direktor für die Buena Vista Home Entertainment Division. Der damalige CEO Michael Eisner sagte über Chapek, er sei eine Führungskraft von der man wüsste, dass sie aufsteigen würde. Er wisse, wie man ein Geschäft führt und passt die Unternehmensstrategie immer an die aktuellen Marktgegebenheiten an. So wird ihm zugeschrieben, dass er das Unternehmen in das digitale Zeitalter geführt hat, in dem er die Filme und Serien nicht mehr auf VHS, sondern auf DVD und später Blu-Ray veröffentlichte. 2006 wurde Chapek zum Präsident der Buena Vista Home Entertainment Division gewählt. 2009 stieg er zum Präsidenten des Vertriebs der Walt Disney Studios auf. Im weiteren Verlauf wechselte Disney an die Spitze der Consumer Products und sorgte dafür, dass Disney durch unter anderem Star Wars der größte Lizenzgeber für geistiges Eigentum wurde. 2014 drang Chapek, nachdem Eltern aus seiner Abteilung ihn darauf hinwiesen, dass es schwierig sei, qualitativ hochwertige Lernapps für Kinder zu finden, in den Markt für Lernapps. 2015 wurde Chapek zum vorsitzenden der Parks und Resorts ernannt und investierte während seiner Amtszeit über 24 Milliarden US-Dollar - mehr als die Übernahmen von Pixar, Marvel und Lucasfilm zusammen gekostet haben. Im Februar 2020 wurde Chapek schließlich zum CEO befördert und löste damit Bob Iger ab. Dieser leitete jedoch - aufgrund der Coronapandemie - weiterhin das operative Geschäft. 
                </p>
                <h2 className="ManagementTextSub">Aktuell</h2>
                <p className="AnalyseTextP">Disney spendete an Parteien, die das „Dont-Say-Gay“-Gesetz, bei dem konservative Politiker gegen LGBT-Themen (Lesbian, Gay, Bisexuell und Transgender) in Schulen waren, verabschiedet haben. Nach Kritik über diese Spenden weigerte sich Chapek, diese Spenden einzustellen. Einige Mitarbeitende von Disney forderten Chapek auf, sich gegen das Gesetz zu stellen und die Spenden einzustellen. Kurze Zeit später wurden die Spenden schließlich eingestellt und Chapek entschuldige sich für seine früheren Aussagen und plane in Zukunft LGBTQ+ Organisationen (Lesbian, Gay, Bisexual, Transgender, Queer and more) zu unterstützen. </p>
                <p className="AnalyseTextP">Allgemein ist Bob Chapek nicht unumstritten in der Fangemeinde. 2021 wurde die Petition „Fire Disney CEO Bob Chapek auf change.org (weltweit größte Plattform für Online-Petitionen) gestartet, welche bereits mehr als 100.000 Unterstützende zählt. Chapek wird vorgeworfen, sich bereits in seiner Zeit als Vorstand der Parks und Resorts nicht richtig um diese gekümmert zu haben. Die Qualität ging seit dem stark zurück und die Parks haben sich immens verschlechtert. Auch heute als CEO des Konzerns wird ihm vorgeworfen, er fokussiere sich zu sehr auf die neue Einkommensquelle Disney+ und enttäusche Fans der Parks & Resorts damit. Die Community wünscht sich Abigail Disney (Enkelin von Roy Disney) als neuen CEO. Diese sorgte bereits für Aufsehen, als sie 2020 das Management kritisierte, welche 2020 in der Zeit der Corona-Pandemie 100.000 Mitarbeitende in den Zwangsurlaub schickten und für die Managementetage Bonizahlungen in zweistelliger Millionenhöhe beanspruchte. </p>
                <h2 className="ManagementTextSub">Kompensation</h2>
                <p className="AnalyseTextP">Bob Chapek hat im Jahr 2021 ein Gehalt von 2,5 Millionen USD beansprucht. Zusätzlich bekam er Bonizahlungen in Höhe von 29,96 Millionen USD. Insgesamt betrug seine Kompensation damit 32,46 Millionen USD. Im Jahr 2020 betrug die gesamte Kompensation 15,3 Millionen USD, wovon 1,8 Millionen USD auf das Grundgehalt entfallen. </p>

                  <div className="GlassdoorCheckContainer">
                    <div className="GlassdoorCheckLogo">
                    <img className="GlassdoorLogo" src={`/img/Analysen_Banner/GlassdoorLogo.svg`}></img></div>

                    <IconButton color="primary" onClick={handleClickOpen}>
                <StyledInfoIcon />
              </IconButton>

                  </div>

                  <p className="AnalyseTextP">
Mehr als 11.000 geschriebene Bewertungen wurden auf Glassdoor abgegeben. Davon befürworten 67 % den CEO und 75 % würden das Unternehmen einem Freund oder einer Freundin empfehlen. Im gesamten erreicht The Walt Disney Company eine Gesamtwertung von 4 Sternen. Die besser-bewerteten Bereiche sind Vielfalt & Inklusive (4,1) und Kultur & Werte (4,0). Hier werden gerade das angenehme Arbeitsumfeld und die vielen Benefits positiv bewertet. Unzufrieden ist die Belegschaft mit der Führungsebene (3,5) und der Work-Life-Balance (3,5). Viele Überstunden und die Erwartung, solange es geht auf der Arbeit zu bleiben sowie eine unterdurchschnittliche Bezahlung machen die Mehrheit der Kommentare aus. </p>

<br></br>
<div className="AnalyseManagementContainer">
<img className="AnalyseManagementImage" src={`/img/Analysen_Banner/Management2.jpg`}>
</img>
</div>
<p className="AnalyseTextP">McCarthy (1952) hat, ebenso wie CEO Chapek, einen Bachelor in Biologie sowie einen MBA in Marketing und Finanzen von der University of California. Von 1981 bis 2000 war sie in verschiedenen Positionen und schließlich als CFO im Finanzsektor tätig. Im Anschluss startete sie bei The Walt Disney Company, wo sie seit 2015 der CFO ist. Neben ihrer Position als CFO ist sie im Aufsichtsrat von Procter and Gamble. Für Aufruhe sorgte sie im Jahr 2021, als sie im quarterly Call auf die frage, wie man mit steigender Inflation umgehen wolle, antwortete:
„…i was talking to our parks senior team about things we could do there. And there are lots of things that are worth talking about. We can adjust suppliers. We can substitute products. We can cut portion size, which is probably good for some people's waistlines.”.</p>
<h2 className="ManagementTextSub">Kompensation</h2>
<p className="AnalyseTextP">Im Jahr 2021 betrug das Grundgehalt 1,9 Millionen USD. Ihre gesamte Vergütung betrug 21,7 Millionen USD. Fast das doppelte (198%) gegenüber des Vorjahres. 2020 betrug das Grundgehalt 1,7 Millionen USD und die gesamte Vergütung 15,3 Millionen USD. </p>

              </div>
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>

      {/* SEKTION 7 - AKTIONÄRSSTRUKTUR & INSIDER */}
      <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Aktionärsstruktur & Insider</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>
              <div className="BusinessCaseText1">
              <p className="AnalyseTextP"> 
              Wenn Insider kaufen oder verkaufen, kann das Aufschluss über anstehende Ereignisse oder innerbetriebliche Veränderungen geben. Grundsätzliche sind Käufe ein gutes und Verkäufe ein schlechtes Zeichen. Entscheidend ist jedoch, ob hier eigenes Kapital eingesetzt/frei gemacht wird oder es bpsw. eine Ausübung eines Optionspaketes war. Wir beobachten die Verkäufe der letzten 12 Monate und filtern signifikante Veränderungen heraus.
              </p>

              <h1 className="AnalyseTextH1">
              Aktionärsstruktur
              </h1>

              <p className="AnalyseTextP1">The Walt Disney Company ist aktuell rund 255 Mrd. USD Wert. Diese verteilen sich zu 65,5 % auf institutionelle Anleger und 34,4% sind in Privatbesitz. Der restliche Teil von 0,1 % verteilt sich auf Unternehmen, Insider und der öffentlichen Hand. 
              Die größten Beteiligungen halten The Vanguard Group (7,6 %), BlackRock (6,4 %), State Street (4,0 %), State Farm Insurance (1,9 %) und Geode Capital (1,6 %).</p>

              <h1 className="AnalyseTextH1">
              Insider
              </h1>

            <p className="AnalyseTextP1">
            Der ehemalige CEO und aktuelle Vorstand des Boards Bob Iger verkaufte zum Ende des Jahres 2021 über 500.000 Aktien mit einem Gesamtvolumen von 98.668.463 USD. Die Gründe dafür liegen laut einem Unternehmenssprecher in der Diversifizierung des persönlichen Portfolios. 
            </p>

              </div>

            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>

                  {/* SEKTION 8 - MERGERS & AKQUISITIONS*/}
                  <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Übernahmen & Transaktionen</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>
<div>



              <div className="BusinessCaseText1">
              <p className="AnalyseTextP"> 
              In den vergangenen 12 Monaten gab es keine großen Übernahmen. Neben zwei verkäufen kleinerer Einheiten (Fox Sports Argentina an Mediaproduccion SL und Fox TeleColombia & Studios TeleMexico an ViacomCBS) gab es einen Kauf (BAMTECH LLC von National Hockey League). Die letzte namhafte Übernahme war die von Twenty-First Century Fox im Jahr 2019 - ein wahrer Krimi. Im Zuge der Auferlegung eines eigenen Streamingdienstes wollte Disney seine Bibliothek erweitern und erklärte Ende 2017, dass sie in Verhandlungen mit Rupert Murdoch (News Corp.) stehen, um die Bereiche 21st Century Fox, einschließlich 20th Century Fox, FX Networks und National Geograph Partner zu übernehmen. Der Deal würde unter anderem die Rechte an unter anderem den Simpsons, X-men und unter anderem Star Wars IV beinhalten. Kurze zeit später schaltetet sich auch unter anderem Comcast in die Verhandlung einen, doch zog das Angebot im Dezember 2017 wieder zurück. Schließlich einigten sich Disney & Fox auf eine Summe von 52,4 Mrd. USD. Als AT&T im Juni 2018 das OK für die Übernahme von Time Warner erhielt, unterbreitete Comcast nun doch ein Angebot von 65 Mrd. USD und überstieg das Angebot von Disney damit um 12,6 Mrd. USD. Doch auch Disney zog ein paar Tage später nach und erhöhte das Angebot nochmals auf schließlich 71,3 Mrd. USD. Am 19 Juli gab Comcast offiziell bekannt, das Gebot fallen zu lassen, um sich auf die Beteiligung der Sky plc. Zu fokussieren. Am 27. Juli stimmten schließlich die Disney-Aktionäre für den Zusammenschluss der beiden Unternehmen. Am 20 März 2019 wurde der Deal schließlich abgeschlossen und die restlichen Assets der ehemaligen 21st Century Fox wurden zur neuen Fox Corporation (US35137L1052). 
              </p>
 </div>
              </div>
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>


      <div className="Analyse_Headline">
        Kennzahlen
      </div>


      {/* SEKTION 8 - Umsatz*/}
      <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Umsatz (2000-2021)</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>
<div>
<h2 className="AnalyseTextH0">Umsatz</h2>

<p className="AnalyseText">Im folgenden gehen wir ausführlich auf die Umsätze der Walt Disney Company ein. Zuerst betrachten wir die Umsatzverteilung hinsichtlich der verschiedenen Segmente (wie entstehen die Umsätze)) sowie der regionalen Verteilung (wo entstehen die Umsatz?). Im Anschluss Betrachen wir die Umsätze im historischen Verlauf und zeigen Szenarien auf, wie es weitergehen kann.
</p>

<p className="AnalyseText">Unsere Datenbasis reicht bis ins Jahr 1940 zurück. In dem Jahr erreichte Disney einen Umsatz von 2.525.723,39$. Verglichen mit dem Umsatz 2021 von 67.418 Mio. USD entspricht das einem jährlichen Wachstum von 13,4%. In den letzten Jahren hat sich der Umsatz wie folgt entwickelt:
</p>


<div className="UmsatzTableUndChart">
<div>
                 <Umsatzgrafik/>
              </div>
<table className="Analyse_UmsatzTable_First">
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">20 Jahre</td>
              <td className="Analyse_Table_Second_Cell">5,1%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >10 Jahre</td>
              <td className="Analyse_Table_Second_Cell">5,1%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >5 Jahre</td>
              <td className="Analyse_Table_Second_Cell">3,9%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >3 Jahre</td>
              <td className="Analyse_Table_Second_Cell">4,3%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >1 Jahr</td>
              <td className="Analyse_Table_Second_Cell">3,1%</td>
            </tr>
            </table>

              </div>
            <h2 className="AnalyseTextH1">Segmentaler Umsatz</h2>

            <p className="AnalyseTextP1">75% (50.866 Mio. USD) der Umsätze entstehen im Segment „Disney Media and Entertainment Distribution“. Das restliche Viertel (16.552 Mio. USD) entfällt auf das Segment „Disney Parks, Experiences and Products“. 
</p>

<h3 className="AnalyseTextH1sub">DMEA</h3>

<p className="AnalyseTextH1sub">Die 75% des Gesamtumsatzes schlüßeln sich wie folgt auf:</p>

<table className="Analyse_UmsatzTable_First">
<tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Sparte</td>
              <td className="Analyse_Table_Second_Cell">Umsatz</td>
              <td className="Analyse_Table_Second_Cell">Veränderung yoy</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Lineaer Networks</td>
              <td className="Analyse_Table_Second_Cell">28.093$ (55%)</td>
              <td className="Analyse_Table_Second_Cell">+2%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >Direct to Consumer</td>
              <td className="Analyse_Table_Second_Cell">16.319$ (32%)</td>
              <td className="Analyse_Table_Second_Cell">+55%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >Content Sales/Licensing and Other</td>
              <td className="Analyse_Table_Second_Cell">7.346$ (14%)</td>
              <td className="Analyse_Table_Second_Cell">-33%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >Elimination of Intrasegment Revenue</td>
              <td className="Analyse_Table_Second_Cell">-892$ (-1%)</td>
              <td className="Analyse_Table_Second_Cell">-17%</td>
            </tr>
            </table>

            <p className="AnalyseTextH1sub">Klar zu sehen, der Direktvertrieb hat sich prächtig entwickelt - der Verkauf und die Lizenzierung der Inhalte dagegen stark verschlechtert. Die linearen Netzwerke wachsen mit geringen 2% und die Eliminierungen der intersegmentalen Umsätze (die eine Sparte generiert Umsätze bei einer anderen Sparte des selben Konzerns) haben sich um 17 % verringert. </p>

            <h2 className="AnalyseTextH3sub">Linear Networks</h2>

<p className="AnalyseTextP3sub">Die 54% der DMEA Sparte schlüßeln sich wie folgt auf:</p>



<table className="Analyse_UmsatzTable_First">
<tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Sparte</td>
              <td className="Analyse_Table_Second_Cell">Umsatz</td>
              <td className="Analyse_Table_Second_Cell">Veränderung yoy</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell">Affiliate fees</td>
              <td className="Analyse_Table_Second_Cell">18.652$ (66%)</td>
              <td className="Analyse_Table_Second_Cell">—%</td>
            </tr>
            <tr className="Analyse_Table_First_Row">
              <td className="Analyse_Table_First_Cell" >Advertising</td>
              <td className="Analyse_Table_Second_Cell">16.319$ (32%)</td>
              <td className="Analyse_Table_Second_Cell">+55%</td>
            </tr>
            </table>

            <p className="AnalyseTextH1sub">Hier fällt der größte Teil auf die Affiliate fees. Das sind die Gebühren, die ein MVPD (Multichannel Video Programming Distributor) monatlich an Disney zahlt, um das Programm zu senden. Inländisch (USA) generiert das Unternehmen 15.244 Mio. USD, außerhalb der USA 3.408 Mio. USD. Und während Disney+ aktuell (noch!) keine Advertising-Einnahmen erzielt, generieren Hulu und EPSN+ welche. Diese machen 32% der Linear Networks aus. Von diesen gerundet 8,9 Mrd. USD werden 6,9 Mrd. USD innerhalb und 1,9 Mrd. USD außerhalb der USA generiert.  </p>

{/* <div className="UmsatzverteilungContainer">
<div>
<UmsatzVerteilung/>
</div>
<div>
<UmsatzVerteilung2/>
</div>
</div> */}


              </div>
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>

            {/* SEKTION 9 - EBIT*/}
            <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>EBIT (2000-2021)</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>
<div>

Schreib hier etwas rien

              <div>
                 <EBITGrafik/>
              </div>

              </div>
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>

                  {/* SEKTION 10 - EBIT*/}
                  <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Gewinn (2000-2021)</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>
<div>

Schreib hier etwas rien

              <div>
                 <GewinnGrafik/>
              </div>

              </div>
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>

                        {/* SEKTION 10 - Kombinierter Chart*/}
                        <div className="AccordionContainer">
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Kombinierter Chart (2000-2021)</div>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>
<div>

Walt Disney 

              <div>
                 <UmsatzEbitGewinn/>
              </div>

              </div>
            </Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      </div>

      

    </div>
    </div>
  );
}




export default Analyse;