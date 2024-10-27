import "./FondsDashboard.css"
import Header from "./utils/header/header.js";
import TopTen from "./utils/topten";
import ETFsUndFondsKurs from "./ETFsundFonds Utils/ETFsUndFondsChartLib/ETFsUndFondsKurs";
import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import FondsInfotable from "./utils/FondsInfotable";
import ETFsUndFondsMCAP from "./ETFsundFonds Utils/ETFsUndFondsChartLib/ETFsUndFondsMCAP";
import ETFsUndFondsAssets from "./ETFsundFonds Utils/ETFsUndFondsChartLib/ETFsUndFondsAssets";
import ETFsUndFondsRegions from "./ETFsundFonds Utils/ETFsUndFondsChartLib/ETFsUndFondsRegions";
import ETFsUndFondsSektor from "./ETFsundFonds Utils/ETFsUndFondsChartLib/ETFsUndFondsSektor";
import FondsValuationTable from "./utils/FondsValuationTable";


function FondsDashboard() {
  const [isLoadingFondsData, setIsLoadingFondsData] = React.useState(true)
  const [isLoadingChartData, setIsLoadingChartData] = React.useState(true)
  const [isErrorFondsData, setIsErrorFondsData] = React.useState(false)
  const [isErrorChartData, setIsErrorChartData] = React.useState(false)
  const [dataFondsData, setDataFondsData] = React.useState({});
  const [dataChartData, setDataChartData] = React.useState([]);

  const {ticker} = useParams();

  var baseURL = process.env.REACT_APP_BACKEND_URL;
  var URLFondsData = baseURL+"/FondsData/"+ticker +"";
  var URLChartData = baseURL+"/FondsData/fullverlauf/"+ticker +"";
  // var URLFondsData = baseURL+"/FondsData/VTI";
  // var URLChartData = baseURL+"/FondsData/fullverlauf/VTI";

  const fetchDataFondsData = async () => {
    setIsErrorFondsData(false);
    setIsLoadingFondsData(true);
    try {
      const result = await axios(URLFondsData);
      setDataFondsData(result.data);
    } catch (error) {
      setIsErrorFondsData(true);
    }
    setIsLoadingFondsData(false);
  };

  const fetchDataChart = async () => {
    setIsErrorChartData(false);
    setIsLoadingChartData(true);
    try {
      const result = await axios(URLChartData);
      setDataChartData(result.data.myData);
    } catch (error) {
      setIsErrorChartData(true);
    }
    setIsLoadingChartData(false);
  };


  useEffect(() => {
    fetchDataFondsData();
    fetchDataChart();
  }, []);
  
  return (
    
    
<>
{/* <h1>{ticker}</h1> */}
{/* <ETFsUndFondsHeader/> */}

<Header ticker={ticker} />

<div className="FondsBody">


<div className="ChartsThirdRow">
<div className="ChartHeadlineContainer">
    <div className="ChartHeadline">Eckdaten</div>
    </div>
    <div className="FondsTableContainer">
    <div className="FondsTableLeft">
    {isLoadingFondsData ? <div></div>  : <FondsInfotable data={dataFondsData.data}/>}
    </div>
    <div className="FondsTableRight">
    {isLoadingFondsData ? <div></div>  :  <FondsValuationTable data={dataFondsData.data}/> }
    </div>
    </div>
</div>

<div className="ChartsThirdRow">
<div className="ChartHeadlineContainer">
    <div className="ChartHeadline">Fondspreis
      </div>
  </div>

<div className="ChartsContainer">
{isLoadingChartData ? <div></div>  : <ETFsUndFondsKurs data={dataChartData}/>}
</div>
</div>




{isLoadingFondsData ? <div></div>  :

Object.keys(dataFondsData.data.ETF_Data.Top_10_Holdings).length < 5 ?  <div></div> :
<div className="ChartsThirdRow">
<div className="ChartHeadlineContainer">
    <div className="ChartHeadline">Top 10 Holdings</div>
    </div><TopTen data={dataFondsData.data.ETF_Data.Top_10_Holdings}/>
    </div>

}







<div className="ChartsThirdRow">
<div className="ChartHeadlineContainer">
    <div className="ChartHeadline">MCAP & Allokation</div>
    </div>
    <div className="ChartsRowContainer">
    <div className="ChartsContainerFonds">
    {isLoadingFondsData ? <div></div>  : <ETFsUndFondsMCAP data={dataFondsData.marketCap}/>}
</div>

    <div className="ChartsContainerFonds">
    {isLoadingFondsData ? <div></div>  : <ETFsUndFondsAssets data={dataFondsData.assets}/>}
</div>
</div>
</div>



<div className="ChartsThirdRow">
<div className="ChartHeadlineContainer">
    <div className="ChartHeadline">Regionen & Sektoren</div>
    </div>
    <div className="ChartsRowContainer">
    <div className="ChartsContainerFonds">
    {isLoadingFondsData ? <div></div>  :  <ETFsUndFondsRegions data={dataFondsData.regions}/>}
</div>

    <div className="ChartsContainerFonds">
    {isLoadingFondsData ? <div></div>  :   <ETFsUndFondsSektor data={dataFondsData.sector}/>}
</div>
</div>
</div>






</div>

</>

  );
}

export default FondsDashboard;