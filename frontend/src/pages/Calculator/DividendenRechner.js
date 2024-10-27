import "./calculator.css"




function calculate(){

    var inputCapitalNumber = document.getElementById("inputCapital").value
    var inputInterestNumber = document.getElementById("inputInterest").value / 100

    var Endwert = ((inputCapitalNumber * inputInterestNumber)/12).toFixed(2)
    var EndwertformatQuartal = (Endwert * 4).toFixed(2)
    var EndwertformatJahr = (Endwert * 12).toFixed(2)
    var EuroCent = ""
    var EuroCentQuarter = ""
    var EuroCentYearly = ""

    if (Endwert < 1) {
        EuroCent = " Cent"
    } else { EuroCent = " Euro"}

    if (Endwert < 1) {
        EuroCentQuarter = " Cent"
    } else { EuroCentQuarter = " Euro"}

    if (Endwert < 1) {
        EuroCentYearly = " Cent"
    } else { EuroCentYearly = " Euro"}

    Endwert = Endwert.replace(".", ",")
    EndwertformatQuartal = EndwertformatQuartal.replace(".", ",")
    EndwertformatJahr = EndwertformatJahr.replace(".", ",")





    var Ausgabe = Endwert + EuroCent + " pro Monat" + " | " + EndwertformatQuartal + EuroCentQuarter + " pro Quartal" + " | " + EndwertformatJahr + EuroCentYearly + " pro Jahr"
  
    document.getElementById("output").innerHTML = Ausgabe;
   }



function DividendenRechner() {

    return (

<>
<div className="calculatorsHeadline">
    Dividende pro Monat
</div>

<div className="calculatorContainer">

<p style={{color:"white"}}>Welchen Betrag möchtest du investieren?</p>
<input type={"number"} id="inputCapital"></input>

<p style={{color:"white"}}>Wie viel Dividende zahlt die Aktie pro Jahr in Prozent?</p>
<input type={"number"} id="inputInterest"></input>

<div className="CAGRResult">

<button className="CAGRButton" onClick={calculate}>Berechnen</button>

<output id="output"></output>

</div>

</div>



</>
  
    );
  }
  
  export default DividendenRechner;