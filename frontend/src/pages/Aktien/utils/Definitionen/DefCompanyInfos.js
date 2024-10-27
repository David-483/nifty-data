import "./DefinitionStylesheet.css";

function DefCompanyInfos() {



  return (
    <>
<h1 className="definitionH1">Infos.</h1>
<p>Unsere Info-Tabelle zeigt dir wichtige Informationen auf einen Blick.</p>

<h3 className="definitionH3">Sektor & Industrie (GICS)</h3>
<p className="definitionP">GICS (Global Industry Classification Standard) ist der Industriestandard, wenn es um die Klassifizierung von Unternehmen geht. Die 1999 von Standard & Poors und MSCI gegründete Gliederung umfasst 11 Sektoren, 24 Industrie-Zweige, 69 Industrien und 158 Subindustrien.</p>

<h3 className="definitionH3">Börsengang</h3>
<p className="definitionP">In diesem Jahr ging das Unternehmen in der Form, in der es heute existiert, an die Börse.</p>

<h3 className="definitionH3">Nächste Dividende</h3>
<p className="definitionP">Wann zahlt das Unternehmen die nächste Dividende? Häufig liest du hier "noch nicht bestätigt". Dividenden werden in der Regel kurzfristig öffentlich bestätigt - daher gibt es auf die Frage nicht immer eine Antwort. Verlässliche Dividendenzahler schütten aber regelmäßig zu einem Zeitpunkt aus, der sich aus der Vergangenheit ableiten lässt. Gehe dazu einfach in den Reiter "Dividenden" und gucke, wann das Unternehmen im letzten Jahr ausgeschüttet hat.</p>

<h3 className="definitionH3">Nächster Bericht</h3>
<p className="definitionP">Börsennotierte Unternehmen sind verpflichtet ihre Bücher (Geschäftszahlen) regelmäßig zu veröffentlichen - US-Unternehmen tun das beispielsweise alle drei Monate. Hier gibt es Auskunft über die Umsätze, Gewinne, Bilanz, Cashflows und alle anderen Aktivitäten, die ein Unternehmen in dne letzten drei Monaten getätigt hat oder in absehbarer Zeit angehen möchte.</p>

<h3 className="definitionH3">Mitarbeiter</h3>
<p className="definitionP">Wie viel Mitarbeiter hat das Unternehmen?</p>

<h3 className="definitionH3">Heimatbörse</h3>
<p className="definitionP">An welcher Börse ist das Unternehmen gelistet?</p>


<h3 className="definitionH3">KGV</h3>
<p className="definitionP">Das Kurs/Gewinn Verhältnis ist die so ziemlich wichtitgste und bekannteste Kennzahl für Aktionäre und stellt den Aktienkurs ins Verhältnis zu einer realwirtschaftlichen Größe - dem Gewinn pro Aktie (oder Marktkapitalisierung / Nettogewinn). Anders formuliert zeigt sie an, wie viele Jahre es dauert, bis ein Aktionär den bezahlten Aktienkurs in Form von Gewinnen zurückerhält. Es gibt viele Varianten des KGVs, da man verschiedene Größen nehmen kann wie bspw. den Gewinn je Aktie, den erwarteten Gewinn je Aktie (KGVe), den Gesamtgewinn eines Unternehmens, den bereinigten Gewinn oder ähnlich. Häufig wird das KGV gleichgestellt mit dem Preis einer Aktie. </p>
<h3 className="definitionH3">Und welches KGV ist nun günstig?</h3>
<p className="definitionP">Auch darüber lässt sich keine pauschale Antwort treffen und hängt stark von unter anderem dem Geschäftsmodell und der Branche ab. Gut ist es, sich das KGV eines Unternehmens über den Zeitverlauf anzuschauen und zu überlegen, ob es unter/über oder in der nähe des Mittelwertes ist. Diese Information findest du im Reiter "Valuation".</p>

<h3 className="definitionH3">KUV</h3>
<p className="definitionP">Das Kurs/Umsatz Verhältnis ist ebenso eine viel betrachtete Kennzahlen. Gerade, wenn ein Unternehmen noch keinen Gewinn macht lässt sich diese Kennzahl gut verwenden. Auch hier ist es schwer, einen pauschalen Wert zu nennen. So lohnt sich ebenso beim KUV ein Blick auf die Historie des Wertes und den Vergleich zu ziehen.</p>

<h3 className="definitionH3">PEG</h3>
<p className="definitionP">Das PEG-Ratio (Price to Earnings / Growth | DE: Kurs-Gewinn-Wachstums-Verhältnis) erlangte große Aufmerksamkeit durch Peter Lynch. Sie setzt das KGV ins Verhältnis zu der erwarteten Wachstumsrate der Gewinne und gibt Auskunft über den Preis, den man für das Wachstum eines Unterenhmens bezahlt. Gerade bei Wachstumsunternehmen lohnt es, das PEG-Ratio genauer zu betrachten. Man sagt, ein Wert unter 1 ist günstig, ein Wert über 2 teuer. Doch auch hier lässt sich Pauschal keine seriöse Aussage treffen.</p>

<h3 className="definitionH3">K/FCF</h3>
<p className="definitionP">Das Kurs/Free Cashflow Verhältnis wird, ebenso wie das KGV, verwendet, um den "Preis" einer Aktie zu erfahren. Der Vorteil des K/FCF gegenüber dem KGV ist es, dass sich Gewinne durch verschieden Wahlrechte in der Bilanz verändern lassen. Der Free Cashflow gibt ein realeres Bild über den Gewinn eines Unternehmens.</p>

<h3 className="definitionH3">EPS</h3>
<p className="definitionP">Earnings Per Share (Gewinn je Aktie) ergeben sich aus dem Verhältnis vom Unternehmensgewinn und der Anzahl der ausstehenden Aktien. Der Unterschied zum gesamten Unternehmensgewinn ist, dass sich der Gewinn je Aktie durch Aktienrückkäufe (verminderung der Anzahl der ausstehenden Aktien) beeinflussen lässt. </p>

<h3 className="definitionH3">Dividende p.a.</h3>
<p className="definitionP">Wie viel Dividende (in lokaler Währung) zahlte das Unternehmen in den letzten 12 Monaten? Der Wert in klammern gibt die aktuelle Dividendenrendite an.</p>

<h3 className="definitionH3">Börsenwert</h3>
<p className="definitionP">Der Börsenwert ergibt sich aus der Multiplikation aller ausstehenden Aktien mit dem aktuellen Aktienkurs. </p>
</>

  );
}

export default DefCompanyInfos;