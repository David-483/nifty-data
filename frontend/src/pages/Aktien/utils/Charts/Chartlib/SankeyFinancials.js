import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import './SankeyFinancials.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SankeyFinancials({ data }) {
  const [chosenYear, setChosenYear] = useState(0);
  const [hoveredValue, setHoveredValue] = useState({ name: 'Gewinn', value: 0 });

  const currentYear = new Date().getFullYear();
  const displayedYear = currentYear - chosenYear;

  const colors = {
    red1: "rgba(200,100,100,1)",
    red2: "rgba(200,100,100,1)",
    red3: "rgba(200,100,100,1)",
    green1: "rgba(20,197,164,1)",
    green2: "rgba(20,197,164,1)",
    green3: "rgba(20,197,164,1)",
    green4: "rgba(20,197,164,1)",
    yellow1: "rgba(200,200,100,1)"
  };

  const currentData = data[chosenYear] || {};
  const currentRevenue = currentData.revenue || 0;
  const currentGrossProfit = currentData.grossProfit || 0;
  var currentOperatingIncome = currentData.operatingIncome || 0;
  var currentIncome = currentData.netIncome || 0;

  var currentSGA = currentGrossProfit - currentOperatingIncome
  const currentCosts = currentRevenue - currentGrossProfit;
  const currentRD = currentGrossProfit - currentSGA - currentOperatingIncome;
  var currentInterestsAndTaxes = currentOperatingIncome - currentIncome;

  const isLoss = currentIncome < 0;
  const isInterestAndTaxProfit = currentInterestsAndTaxes < 0;

  if (currentInterestsAndTaxes < 0){
    currentInterestsAndTaxes = currentInterestsAndTaxes * -1
    currentIncome = currentIncome - currentInterestsAndTaxes
  }

  if (isLoss){
    currentIncome = currentIncome * -1;
  }

  if (isInterestAndTaxProfit){
    currentInterestsAndTaxes = currentInterestsAndTaxes * 1;
  }

  const formatNumber = (value) => {
    return new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value / 1000000) + " Mio.";
  };

  useEffect(() => {
    
    if (!data || data.length === 0) return;

    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: (params) => {
          const formattedValue = formatNumber(params.value);
          setHoveredValue({ name: params.name.replace(">", "zu"), value: formattedValue });
          return `${params.name.replace(">", "zu")}: ${formattedValue}`;
        }
      },
      series: {
        type: 'sankey',
        layout: 'none',
        nodeAlign: 'left',
        emphasis: {
          focus: 'none'
        },
        data: [
          { name: 'Umsatz', itemStyle: { color: colors.green1 }, label: { color: '#FFFFFF' } },
          { name: 'Direkte Kosten', itemStyle: { color: colors.red1 }, label: { color: '#FFFFFF' } },
          { name: 'Operatives Einkommen', itemStyle: { color: colors.green2 }, label: { color: '#FFFFFF' } },
          { name: 'Operative Kosten', itemStyle: { color: colors.red2 }, label: { color: '#FFFFFF' } },
          { name: 'EBIT', itemStyle: { color: colors.green3 }, label: { color: '#FFFFFF' } },
          { name: isInterestAndTaxProfit ? 'Zinsüberschuss' : 'Zinsen und Steuern', itemStyle: { color: isInterestAndTaxProfit ? colors.green4 : colors.red3 }, label: { color: '#FFFFFF' } },
          { name: isLoss ? 'Verlust' : 'Gewinn', itemStyle: { color: isLoss ? colors.red3 : colors.green4 }, label: { color: '#FFFFFF' } },
        ],
        links: [
          { source: 'Umsatz', target: 'Direkte Kosten', value: currentCosts, lineStyle: { color: colors.red1 } },
          { source: 'Umsatz', target: 'Operatives Einkommen', value: isInterestAndTaxProfit ?  currentGrossProfit : currentGrossProfit, lineStyle: { color: colors.green1 } },
          { source: 'Operatives Einkommen', target: 'Operative Kosten', value: currentSGA, lineStyle: { color: colors.red2 } },
          { source: 'Operatives Einkommen', target: 'EBIT', value: isInterestAndTaxProfit ? currentOperatingIncome :  currentOperatingIncome , lineStyle: { color: colors.green2 } },
          { source: 'EBIT', target: isInterestAndTaxProfit ? 'Zinsüberschuss' : 'Zinsen und Steuern', value: currentInterestsAndTaxes, lineStyle: { color: isInterestAndTaxProfit ? colors.green4 : colors.red3 } },
          { source: 'EBIT', target: isLoss ? 'Verlust' : 'Gewinn', value: currentIncome, lineStyle: { color: isLoss ? colors.red3 : colors.green3 } },

        ],
        lineStyle: {
          curveness: 0.5
        }
      }
    };

    myChart.setOption(option);

    setHoveredValue(
      { name: isInterestAndTaxProfit ? 'Zinsüberschuss' : 'Zinsen und Steuern', value: formatNumber(currentOperatingIncome) },
      { name: isLoss ? 'Verlust' : 'Gewinn', value: formatNumber(currentIncome) }
    );

    return () => {
      myChart.dispose();
    };
  }, [data, chosenYear, currentCosts, currentOperatingIncome, currentIncome, currentGrossProfit, currentRevenue, currentSGA, currentRD, isLoss]);

  return (
    <div>    
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <h2 style={{ color: "white", fontSize: "50px", margin: "5px" }}>{displayedYear}</h2>
        <p style={{ color: "white", fontSize: "28px", margin: "5px" }}>{hoveredValue.name}: {hoveredValue.value}</p>
      </div>

      <button 
        className='sankeyButtons' 
        onClick={() => setChosenYear((prevYear) => Math.min(data.length - 1, prevYear + 1))}
        disabled={chosenYear >= data.length - 1}
      >
        <ArrowBackIcon style={{ fontSize: "50px" }} />
      </button>
      <button 
        className='sankeyButtons' 
        onClick={() => setChosenYear((prevYear) => Math.max(0, prevYear - 1))}
        disabled={chosenYear <= 0}
      >
        <ArrowForwardIcon style={{ fontSize: "50px" }} />
      </button>
      <div id="main" style={{ width: '125%', height: '500px', marginLeft: "-6%" }}></div>
    </div>
  );
}

export default SankeyFinancials;
