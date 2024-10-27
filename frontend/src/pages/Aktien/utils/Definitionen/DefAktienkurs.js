import "./DefinitionStylesheet.css";

function DefAktienkurs() {



  return (
    <>
<h1 className="definitionH1">Aktienkurs.</h1>
<p>Der Aktienkurs spiegelt den Börsenwert pro Aktie eines Unternehmens wider und wird an der Börse festgelegt.</p>

<h3 className="definitionH3">Wie entsteht ein Börsenkurs?</h3>
<p className="definitionP">Der Kurs einer Aktie ergibt sich aus dem Angebot und der Nachfrage. Möchten mehr Personen eine Aktie kaufen, als sie verkaufen wollen, steigt der Kurs und vice versa.</p>
<h3 className="definitionH3">Formel</h3>
<math> <mi>Aktienkurs</mi><mo>=</mo><mo>&#x2009;</mo>
<mfrac><mrow><mi>Marktkapitalisierung</mi></mrow><mrow><mi>Anzahl der ausstehenden Aktien</mi></mrow></mfrac></math>
<h3 className="definitionH3">Allgemeines</h3>
<p className="definitionP">Da sich der Preis je Aktie aus dem Verhältnis von Marktkapitalisierung (=Börsenwert) und Anzahl ausstehender Aktien ergibt, lässt sich keine Aussage darüber treffen, ob eine Aktie nun "günstig" oder "teuer" ist. Gerade in Zeiten von Sparplänen und Niedrigpreis-Brokern lassen sich direkt Bruchstücke kaufen. <br></br> Doch betrachten wir das nun genauer: Unternehmen A hat einen Marktwert von 1.000 Dollar und gibt 100 Aktien zu je 10 Dollar aus. Unternehmen B dagegen gibt nur 10 Aktien zu einem Wert von 100 Dollar aus. Auch hier ist der Marktwert 1.000 Dollar. Schlussfolgernd ist eine Berkshire Hathaway A Aktie nicht unbedingt teuer, nur weil sie 600.000 USD kostet. Andersrum ist eine Steinhoff Aktie auch nicht unbedingt günstig, nur weil sie "nur" 0,20 EUR kostet. Würde es nämlich nur eine Berkshire-Hathaway A Aktie geben, wäre der Unternehmenswert 600.000 Dollar.</p>
<h3 className="definitionH3">Interpretation</h3>
<p className="definitionP">Wichtig ist hier also, dem Aktienkurs an sich nicht zu viel Beachtung zu schenken. Erst in Relation mit anderen Werten wie dem Umsatz-, Gewinn- oder Cashflow pro Aktie ergibt sich ein wirkliches Bild über den Wert einer Aktie. Um ein gutes Gefühl für Unternehmensbewertung zu bekommen, lohnt es sich, den gesamten Wert eines Unternehmens zu betrachten (=Marktkapitalsierung), denn dieser ist eine absolute Zahl und kein Verhältnis wie der Preis pro Aktie. Den Börsenwert findest du bei uns im Header unter dem Aktienkurs.</p>
<h3 className="definitionH3">Synyonme</h3>
<p className="definitionP">DE: Börsenkurs, Kurs, Preis | <span style={{fontStyle:"italic"}}>EN: Stockprice, price</span></p>


</>

  );
}

export default DefAktienkurs;