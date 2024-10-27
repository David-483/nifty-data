import "./calculator.css"




function calculateEndwert(){

    var inputCapitalNumber = document.getElementById("inputCapital").value
    var inputInterestNumber = document.getElementById("inputInterest").value / 100
    var inputYears = document.getElementById("inputYears").value

    var Endwert = inputCapitalNumber/(1 + inputInterestNumber) ** inputYears
  
    document.getElementById("output").innerHTML = Endwert.toFixed(2);
   }



function WunschSumme() {

    return (

<>
<div className="calculatorsHeadline">
    Was brauchst du heute-Rechner
</div>

<div className="calculatorContainer">

<p style={{color:"white"}}>Wie viel Geld möchtest du später haben?</p>
<input type={"text"} id="inputCapital"></input>

<p style={{color:"white"}}>Welchen Zins nimmst du an?</p>
<input type={"text"} id="inputInterest"></input>

<p className="littleHeadline" style={{color:"white"}}>In wie viel Jahren möchtest du das Geld haben?</p>    
<input id="inputYears"></input>

<div className="CAGRResult">

<button className="CAGRButton" onClick={calculateEndwert}>Berechnen</button>

<output id="output"></output>

</div>

</div>



</>
  
    );
  }
  
  export default WunschSumme;