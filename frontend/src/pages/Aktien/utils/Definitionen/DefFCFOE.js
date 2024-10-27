import "./DefinitionStylesheet.css";

function DefFCFOE() {



  return (
    <>
<h1 className="definitionH1">Free Cashflow & Owner Earnings</h1>

<h2 className="definitionH2">Free Cashflow</h2>
<h3 className="definitionH3">Defintion</h3>
<p className="definitionP">Der Free Cashflow gibt - im gegensatz zum Gewinn - die tatsächlichen, innerhalb einer bestimmten Periode, frei zur Verfügung stehenden Mittel eines Unternehmens an. Fiktive Ausgaben wie Abschreibungen und Rückstellungen werden hier nicht betrachtet. </p>
<h3 className="definitionH3">Berechnung</h3>
<p className="definitionP">Free Cashflow = operativer Cashflow - Investitionsausgaben (CapEX)</p>
<h3 className="definitionH3">Interpretation</h3>
<p className="definitionP">Der Free Cashflow ist aussagekräfter als der Gewinn, denn er spiegelt die wirklichen Zahlungsabflüsse eines Unternehmens wider. Je mehr Free Cashflow ein Unternehmen hat, desto mehr kann es für Aktienrückkäufe oder Dividenden aufbringen - auch Schulden können so schneller zurückgezahlt werden. So ist ein sinkender Free Cashflow nicht unbedingt schlecht - solange das Geld gewinnbringend investiert wird. </p>
<h3 className="definitionH3">Synyonme</h3>
<p className="definitionP">DE: Freier Kapitalfluss<span style={{fontStyle:"italic"}}></span></p>

<h2 className="definitionH2">Owner Earnings</h2>
<h3 className="definitionH3">Defintion</h3>
<p className="definitionP">Die Owner Earnings sind eine Abwandlung der Unternehmensgewinne und spiegeln die Ertragskraft eines Unterenhmens genauer wider als der bilanzierte Gewinn.</p>
<h3 className="definitionH3">Berechnung</h3>
<p className="definitionP">Owner Earnings = Gewinn + Abschreibungen +/- andere zahlungsunwirksame Positionen - Kapitalkosten +/- Änderungen des Working Capitals <br></br>
Owner Earnings = Operativer Cashflow + Erhaltungsinvestitionen</p>
<h3 className="definitionH3">Interpretation</h3>
<p className="definitionP">Das Konzept der Owner Earnings trat zum ersten Mal 1986 im Jahresbericht von Berkshire Hathaway auf. Warren Buffett schrieb: (freie Übersetzung von Nifty Finance) ..."was als Eigentümergewinn bezeichnet werden kann. Es handelt sich dabei um den ausgewiesenen Gewinn zuzüglich der Abschreibungen und bestimmte andere, nicht zahlungswirksame, Aufwendungen abzüglich des durchschnittlichen jährlichen Betrags der aktivierten Ausgaben für Investitionen, den das Unternehmen benötigt, um seine langfristige Wettbewerbsposition und sein Absatzvolumen vollständig zu erhalten." Investoren können diese Kennzahl als weitere Größe verwenden, um ein genaueres Bild über die wirkliche Ertragskraft eines Unternehmens zu bekommen.</p>
<h3 className="definitionH3">Quelle</h3>
<a style={{color:"white", textDecoration:"none", fontFamily:"inter-regular"}} href={"https://www.berkshirehathaway.com/letters/1986.html"} target="_blank">Berkshire Hathaway Annual Letter 1986</a>
<h3 className="definitionH3">Synyonme</h3>
<p className="definitionP"> DE: Eigentümergewinn<span style={{fontStyle:"italic"}}></span></p>
</>

  );
}

export default DefFCFOE;