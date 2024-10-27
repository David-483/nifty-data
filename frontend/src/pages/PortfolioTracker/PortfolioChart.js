import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const PortfolioChart = ({ chartData, portfolio, transactions }) => {
  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);
  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  useEffect(() => {
    const updateChartData = () => {
      // Einzigartige und sortierte Datumsangaben sammeln
      const uniqueDates = [...new Set(Object.values(chartData).flat().map(item => item[0]))].sort();
      const firstPurchaseDate = new Date(Math.min(...transactions.map(t => new Date(t.purchaseDate))));
      const filteredDates = uniqueDates.filter(date => new Date(date) >= firstPurchaseDate);

      // Berechnung der kumulierten Werte für jedes Datum
      const accumulatedValues = filteredDates.map(date => {
        return Object.keys(portfolio).reduce((total, ticker) => {
          const data = chartData[ticker]?.find(item => item[0] === date);
          const currentPrice = data ? data[1] : portfolio[ticker].purchasePrice;
          const { purchases } = portfolio[ticker];

          const accumulatedValue = purchases.reduce((sum, purchase) => {
            const purchaseDate = new Date(purchase.date);
            if (new Date(date) >= purchaseDate) {
              return sum + (purchase.quantity * currentPrice);
            }
            return sum;
          }, 0);

          return total + accumulatedValue;
        }, 0);
      });

      setDates(filteredDates);
      setValues(accumulatedValues);
      setMinValue(Math.min(...accumulatedValues));
      setMaxValue(Math.max(...accumulatedValues));
    };

    updateChartData();
  }, [chartData, portfolio, transactions]);

  const option = {
    title: {
      text: 'Portfolio Wertverlauf',
      left: 'center',
      textStyle: {
        color: '#ffffff',
      },
    },
    tooltip: {
      trigger: 'axis',
      formatter: params => {
        const date = params[0].axisValue;
        const value = params[0].data.toFixed(2);
        return `Datum: ${date}<br/>Wert: ${value} €`;
      },
      backgroundColor: 'rgba(50, 50, 50, 0.7)',
      textStyle: {
        color: '#ffffff',
      },
    },
    xAxis: {
      type: 'category',
      data: dates,
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      axisLabel: {
        formatter: value => new Date(value).toLocaleDateString('de-DE'),
        color: '#ffffff',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
      axisLabel: {
        formatter: value => `${value} €`,
        color: '#ffffff',
      },
      splitLine: {
        show: false,
      },
      min: (minValue * 0.95).toFixed(0), // 5% Puffer nach unten
      max: (maxValue * 1.05).toFixed(0), // 5% Puffer nach oben
    },
    series: [
      {
        name: 'Portfolio',
        type: 'line',
        data: values,
        smooth: true,
        lineStyle: {
          color: '#ffffff',
        },
        itemStyle: {
          color: '#ffffff',
        },
      },
    ],

  };

  return <ReactECharts option={option} style={{ height: '600px', width: '100%' }} />;
};

export default PortfolioChart;
