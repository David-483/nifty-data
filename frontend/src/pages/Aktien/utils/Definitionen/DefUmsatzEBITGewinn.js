import "./DefinitionStylesheet.css";

function DefUmsatzEBITGewinn() {



  return (
    <>
                    <h1 className="definitionH1">Umsatz, EBIT, Gewinn und Verlust.</h1>

<h2 className="definitionH2">Umsatz</h2>
<h3 className="definitionH3">Defintion</h3>
<p className="definitionP">Der Umsatz eines Unternehmens umfasst alle verkauften Produkte und erbrachten Dienstleistungen innerhalb einer bestimmten Periode (bei uns 1 Jahr).</p>
<h3 className="definitionH3">Berechnung</h3>
<p className="definitionP">Umsatz = Stückpreis x Menge</p>
<h3 className="definitionH3">Interpretation</h3>
<p className="definitionP">Der Umsatz zeigt an, ob ein Unternehmen wächst, stagniert oder schrumpft. Steigende Umsätze sind in der Regel ein gutes - sinkende Umsätze ein schlechtes - Zeichen. Achtung! Steigende Umsätze können bspw. durch Einmaleffekte wie Verkäufe von Unternehmenssparten, einmaligen Großaufträgen oder ähnlich verzerrt sein. Auch sinkende Umsätze müssen nicht unbedingt ein schlechtes Zeichen sein. Im Zuge einer Umstrukturierung kann ein Unternehmen zwar sinkende Umsätze verzeichnen, bei höheren Margen jedoch trotzdem mehr gewinn erzielen. Hier lohnt es sich, die langfristige Entwicklung zu betrachten.   </p>
<h3 className="definitionH3">Synyonme</h3>
<p className="definitionP">DE: Erlös, Einnahmen | <span style={{fontStyle:"italic"}}> EN: Revenue, Sales</span></p>

<h2 className="definitionH2">EBIT <span style={{fontSize:"15px",}}> Earnings Before Interests and Taxes</span></h2>
<h3 className="definitionH3">Defintion</h3>
<p className="definitionP">EBIT ist der operative Gewinn, also der Gewinn nach Umsatz- und administrativen Kosten aber vor Steuern und Zinsen. </p>
<h3 className="definitionH3">Berechnung</h3>
<p className="definitionP"> EBIT = Umsatz - Umsatzkosten - Vertriebs & Verwaltungskosten <br></br> EBIT = Gewinn + Steuern + Zinsen</p>
<h3 className="definitionH3">Interpretation</h3>
<p className="definitionP">Das EBIT zeigt den Gewinn vor Zinsen & Steuern und wird besonders häufig verwendet, da hier Zinsen und Steuern nicht beachtet werden. Denn Zinsen und Steuern spiegeln nicht die eigentliche Leistung - bzw. das eigentliche Geschäft - einer Unternehmeung wider und geben daher keinen Aufschluss über den wirtschaftlichen Erfolg eines Unternehmen. Zusätzlich lassen sich artverwandte Unternehmen besser miteinander vergleichen. Entscheidend zwischen Unternehmen der gleichen Branche ist nämlich die Ertragskraft - also wie viel Dollar von einem Dollar Umsatz wirklich überbleiben. Kapitalkosten (Zinsen) spiegeln diese nicht wider - denn hat ein Unterenhmen mehr Sicherheiten, welche es der Bank bieten kann, erhält es bessere Zinskonditionen. Das ist in der Regel bei jungen Unternehmen der Fall - obwohl diese nicht unbedingt schlechter wirtschaften als gestandene Unternehmen. Auch die Steuern verzerren die Ertragskraft eines Unternehmens. Das kann zum Beispiel bei temporären Steuersenkungen der Fall sein, sollten die vergleichten Unternehmen in unterschiedlichen Ländern mit verschiedenen Steuergesetzen tätig sein.    </p>
<h3 className="definitionH3">Synyonme</h3>
<p className="definitionP">DE: Operativer Gewinn, Betriebsergebnis | <span style={{fontStyle:"italic"}}> EN: operating profit, operating income</span></p>

<h2 className="definitionH2">Gewinn / Verlust</h2>
<h3 className="definitionH3">Defintion</h3>
<p className="definitionP">Der Gewinn ist der Betrag, der nach Abzügen aller Kosten, Zinsen und Steuern für die Gesellschafter übrig bleibt. Entstehen in einer Periode mehr Kosten als Umsätze, entsteht ein Verlust (=negativer Gewinn). </p>
<h3 className="definitionH3">Berechnung</h3>
<p className="definitionP"> Gewinn = Umsatz - EBIT - Zinsen & Steuern </p>
<h3 className="definitionH3">Interpretation</h3>
<p className="definitionP">Der Gewinn ist - gerade in der Aktienanalyse - sehr wichtig und sollte immer und unbedingt betrachtet werden. Macht ein Unternehmen Gewinne, hat es grundsätzlich zwei Möglichkeiten. Es kann Gelder einbehalten (=Thesaurierung) oder Gelder an die Gesellschafter ausschütten (bspw. in Form von Dividenden). Thesauriert ein Unternehmen den Gewinn, kann es davon bspw. Investitionen finanzieren, die Eigenkapitalbasis erhöhen um ggfs. günstigere Kredite zu bekommen, Rücklagen bilden oder Kredite vorzeitig tilgen. Gewinne/Verluste spielen für Aktionäre eine große Rolle. Macht ein Unternehmen Verluste, wird es langfristig nicht überleben. Denn Verluste bedeuten, dass - früher oder später - Gesellschafter eigenes Geld nachschießen müssen oder das Unternehmen insolvent gehen wird. Gerade in der Anfangsphase machen Unternehmen noch keine Gewinne, doch auch bewährte Unternehmen können - zumindest temporär - Verluste erwirtschaften. </p>
<h3 className="definitionH3">Achtung</h3>
<p className="definitionP">Der Gewinn kann durch Bilanztricks verfälscht werden. So gibt es bilanzpolitische Maßnahmen wie Wahlrechte, welche den Gewinn schmälern oder höher erscheinen lassen. Zusätzlich schmälern Abschreibungen und Rückstellungen den Gewinn, obwohl diese nicht (oder nicht unbedingt) zahlungswirksam sind bzw. keinen monetären Abfluss von Geldeinheiten bedeuten.</p>
<h3 className="definitionH3">Synyonme</h3>
<p className="definitionP">DE: Ergebnis, Ertag, Profit  | <span style={{fontStyle:"italic"}}> EN: net income, profit</span></p>
</>

  );
}

export default DefUmsatzEBITGewinn;