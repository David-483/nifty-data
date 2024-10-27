import "./DefinitionStylesheet.css";

function DefCAGR() {



  return (
    <>
<h1 className="definitionH1">CAGR.</h1>
<p>CAGR (Compund Annual Growth Rate) beschreibt den jährlichen Zins, mit dem sich ein Betrag verzinst hat.</p>



<h2 className="definitionH2">Problem</h2>
<p className="definitionP">Nehmen wir als Beispiel einen Aktienkurs, der innerhalb zwei Jahre von 100 auf 200 Dollar gestiegen ist. Wie hoch ist die jährliche Rendite? Intuitiv wird die Frage häufig - gerade von Börsenneulingen - mit 50 % pro Jahr beantwortet. Doch die direkte Probe zeigt, dass das nicht hinkommt. Startet man in Jahr 0 mit 100 Dollar und bekommt 50 % pro Jahr, hat man am Ende des Jahres 150 Dollar (100 + 50 %). Verzinsen sich diese 150 Dollar in Jahr Zwei wieder mit 50 %, kommt man auf 225 Dollar (150 Dollar + 50 %). Um hier ein richtiges Ergebnis zu bekommen, benötigt man die CAGR-Formel.</p>

<h2 className="definitionH2">Formel</h2>
<math><mi>C</mi><mi>A</mi><mi>G</mi><mi>R</mi><mo>&#x2009;</mo><mo>=</mo><mo>&#x2009;</mo><msup><mfenced><mfrac><mrow><mi>E</mi><mi>n</mi><mi>d</mi><mi>w</mi><mi>e</mi><mi>r</mi><mi>t</mi></mrow><mrow><mi>A</mi><mi>n</mi><mi>f</mi><mi>a</mi><mi>n</mi><mi>g</mi><mi>s</mi><mi>w</mi><mi>e</mi><mi>r</mi><mi>t</mi></mrow></mfrac></mfenced><mfenced><mfrac><mn>1</mn><mrow><mi>J</mi><mi>a</mi><mi>h</mi><mi>r</mi><mi>e</mi></mrow></mfrac></mfenced></msup><mo>-</mo><mn>1</mn></math>

<h2 className="definitionH2">Wofür verwendet man die CAGR-Formel?</h2>
<p className="definitionP">Die CAGR-Formel findet Anwendung, wenn du wissen möchtest, um wie viele Prozentpunkte sich ein Aktienkurs jährlich bewegt hat. Sie wird ebenso angewendet, um Umsätze, Gewinne oder andere Fundamentalkennzahlen zu analysieren.  </p>

</>

  );
}

export default DefCAGR;