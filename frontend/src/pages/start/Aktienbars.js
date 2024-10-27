import React, { useEffect, useState } from "react";
import AktienbarsLinechart from "./aktienbars-graphs/Aktienbarslinecharts"
import axios from "axios";
import "./Home Stylesheets/aktienbarsStyle.css"

function Aktienbars (){

    const [isLoadingChartSP500, setIsLoadingChartSP500] = React.useState(false)
    const [isLoadingDAXChart, setIsLoadingDAXChart] = React.useState(false)
    const [isLoadingESTOXXChart, setIsLoadingESTOXXhart] = React.useState(false)
    const [isLoadingVIXChart, setIsLoadingVIXChart] = React.useState(false)
    const [chartDataSP500, setChartDataSP500] = React.useState([])
    const [chartDataSP500minValue, setChartDataSP500minValue] = React.useState([])
    const [chartDataSP500maxValue, setChartDataSP500maxValue] = React.useState([])
    const [chartDataDAX, setChartDataDAX] = React.useState([])
    const [chartDataDAXminValue, setChartDataDAXminValue] = React.useState([])
    const [chartDataDAXmaxValue, setChartDataDAXmaxValue] = React.useState([])
    const [chartDataESTOXX, setChartDataESTOXX] = React.useState([])
    const [chartDataESTOXXminValue, setChartDataESTOXXminValue] = React.useState([])
    const [chartDataESTOXXmaxValue, setChartDataESTOXXmaxValue] = React.useState([])
    const [chartDataVIX, setChartDataVIX] = React.useState([])
    const [chartDataVIXminValue, setChartDataVIXminValue] = React.useState([])
    const [chartDataVIXmaxValue, setChartDataVIXmaxValue] = React.useState([])
  
  
    // var aktienKursURL= "https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?serietype=line&apikey=3c8a64de9342c1f496c9780b2e3fdba1"
    // var aktienKursURLDAX= "https://financialmodelingprep.com/api/v3/historical-price-full/%5EGDAXI?serietype=line&apikey=3c8a64de9342c1f496c9780b2e3fdba1"
    // var aktienKursURLESTOXX= "https://financialmodelingprep.com/api/v3/historical-price-full/%5ESTOXX50E?serietype=line&apikey=3c8a64de9342c1f496c9780b2e3fdba1"
    // var aktienKursURLVIX= "https://financialmodelingprep.com/api/v3/historical-price-full/%5EVIX?serietype=line&apikey=3c8a64de9342c1f496c9780b2e3fdba1"
  
    
    var baseURL = process.env.REACT_APP_BACKEND_URL;
    const serverURL = baseURL+"/welcomepage/topcharts/";
    var aktienKursURLSP500= serverURL+"SP500";
    var aktienKursURLDAX= serverURL+"DAX"
    var aktienKursURLESTOXX= serverURL+"STOXX50E"
    var aktienKursURLVIX= serverURL+"VIX";
    var result = [];


    // FetchData S&P 500
  const fetchDataSP500 = async () => {
      setIsLoadingChartSP500(true);
    try {
      const result = await axios(aktienKursURLSP500);
      setChartDataSP500(result.data.myData);
      setChartDataSP500minValue(result.data.minValue);
      setChartDataSP500maxValue(result.data.maxValue);
    } catch (error) {
    }
    setIsLoadingChartSP500(false);
  };



    // FetchData DAX
  const fetchDataDAX = async () => {
    // setIsError(false);
    setIsLoadingDAXChart(true);
    try {
      const result = await axios(aktienKursURLDAX);
      setChartDataDAX(result.data.myData);
      setChartDataDAXminValue(result.data.minValue);
      setChartDataDAXmaxValue(result.data.maxValue);
    } catch (error) {
    }
    setIsLoadingDAXChart(false);
  };
  


  // FetchData ESTOXX 
  const fetchDataESTOXX = async () => {
    // setIsError(false);
    setIsLoadingESTOXXhart(true);
    try {
      const result = await axios(aktienKursURLESTOXX);
      setChartDataESTOXX(result.data.myData);
      setChartDataESTOXXminValue(result.data.minValue);
      setChartDataESTOXXmaxValue(result.data.maxValue);
    } catch (error) {
      // setIsError(true);
    }
    setIsLoadingESTOXXhart(false);
  };



    // FetchData VIX
    const fetchDataVIX = async () => {
      // setIsError(false);
      setIsLoadingVIXChart(true);
      try {
        const result = await axios(aktienKursURLVIX);
        setChartDataVIX(result.data.myData);
        setChartDataVIXminValue(result.data.minValue);
        setChartDataVIXmaxValue(result.data.maxValue);

      } catch (error) {
        // setIsError(true);
      }
      setIsLoadingVIXChart(false);
    };
    

    useEffect(() => {
      fetchDataDAX();
      fetchDataSP500();
      fetchDataESTOXX();
      fetchDataVIX();
    }, []);
  




    return (
        <div className="start-page-aktienbars">

<div className="AktienbarsHeadlineMobile">Was machen die Märkte?</div>

<div className="chartsContainerAktienbars1">
              <div className="start-page-aktienbars-container-chartFirst">
              <div className="AktienbarsHeadlineMobile2">S&P 500</div>
              {isLoadingChartSP500 ? <h1>Lädt gerade</h1> : <AktienbarsLinechart myHookValue={chartDataSP500} myMinValue={chartDataSP500minValue} myMaxValue={chartDataSP500maxValue} />}
              <div className="AktienbarsHeadlineMobile2"></div>
            </div>
            </div>
            

            <div className="chartsContainerAktienbars2">
            <div className="start-page-aktienbars-container-chartSecond">
              <div className="AktienbarsHeadlineMobile2">Dax Perfomance</div>
            {isLoadingDAXChart ? <h1>Lädt gerade</h1> : <AktienbarsLinechart myHookValue={chartDataDAX} myMinValue={chartDataDAXminValue} myMaxValue={chartDataDAXmaxValue} />}
            <div className="AktienbarsHeadlineMobile2"></div>
            </div>
            </div>

            <div className="chartsContainerAktienbars3">
            <div className="start-page-aktienbars-container-chartThird">
              <div className="AktienbarsHeadlineMobile2">EuroStoxx 50</div>
            {isLoadingESTOXXChart ? <h1>Lädt gerade</h1> : <AktienbarsLinechart myHookValue={chartDataESTOXX} myMinValue={chartDataESTOXXminValue} myMaxValue={chartDataESTOXXmaxValue} />}
            <div className="AktienbarsHeadlineMobile2">Der DAX spiegelt den Wert der 40 größten Unternehmen aus Deutschland wieder</div>
            </div>
            </div>
            
            <div className="chartsContainerAktienbars4">
            <div className="start-page-aktienbars-container-chartFourth">
              <div className="AktienbarsHeadlineMobile2">VIX Index</div>
            {isLoadingVIXChart ? <h1>Lädt gerade</h1> : <AktienbarsLinechart myHookValue={chartDataVIX} myMinValue={chartDataVIXminValue} myMaxValue={chartDataVIXmaxValue} />}
            <div className="AktienbarsHeadlineMobile2">Der DAX spiegelt den Wert der 40 größten Unternehmen aus Deutschland wieder</div>
            </div>
            </div>
    </div>

    )
}

export default Aktienbars;