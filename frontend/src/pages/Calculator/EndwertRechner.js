import "./calculator.css"




function calculateEndwert(){

    var inputCapitalNumber = document.getElementById("inputCapital").value
    var inputInterestNumber = document.getElementById("inputInterest").value / 100
    var inputYears = document.getElementById("inputYears").value

    var Endwert = inputCapitalNumber*(1 + inputInterestNumber) ** inputYears
  
    document.getElementById("output").innerHTML = Endwert.toFixed(2);
   }



function EndwertRechner() {

    return (

<>
<div className="calculatorsHeadline">
    Endwert-Rechner
</div>

<div className="calculatorContainer">

<p style={{color:"white"}}>Kapitalbetrag</p>
<input type={"text"} id="inputCapital"></input>

<p style={{color:"white"}}>Zins</p>
<input type={"text"} id="inputInterest"></input>

<p className="littleHeadline" style={{color:"white"}}>Zeitraum</p>    
<input id="inputYears"></input>

<div className="CAGRResult">

<button className="CAGRButton" onClick={calculateEndwert}>Berechnen</button>

<output id="output"></output>

</div>

</div>



</>
  
    );
  }
  
  export default EndwertRechner;