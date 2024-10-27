import React from 'react';
import ReactECharts from 'echarts-for-react';

const PortfolioPieChart = ({ portfolio }) => {
  const option = {
    title: {
      text: 'Portfolio Verteilung',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Anteile',
        type: 'pie',
        radius: '50%',
        data: Object.keys(portfolio).map(ticker => ({
          value: portfolio[ticker].totalValue,
          name: ticker,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default PortfolioPieChart;
