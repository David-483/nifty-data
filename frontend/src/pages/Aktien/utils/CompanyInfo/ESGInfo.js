import React, { useRef, useEffect, useState } from "react";
import ReactECharts from 'echarts-for-react';
import "./CompanyInfo.css";

function ESGInfo({ esgData }) {

  let environmentalColor = "rgba(184, 146, 255, 1)"
  let socialColor = "rgba(255, 194, 226, 1)"
  let governanceColor = "rgba(255, 144, 179, 1)"

  const chartRef = useRef(null);
  const historicalChartRef = useRef(null);

  // Hilfsfunktion zum Sortieren der Daten nach Datum
  const sortDataByDate = (data) => {
    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // Initialisiere die Daten und sortiere sie
  const sortedData = sortDataByDate(esgData);

  // Hilfsfunktion, um initiale Gauge-Daten zu erhalten
  const getInitialGaugeData = (sortedData) => {
    if (!sortedData || sortedData.length === 0) {
      return [
        { value: 0, name: 'Environmental', title: { offsetCenter: ['-100%', '130%'], color: 'rgba(255,255,255,0.8)' }, detail: { valueAnimation: true, offsetCenter: ['-100%', '117%'], color: environmentalColor }, itemStyle: { color: environmentalColor } },
        { value: 0, name: 'Social', title: { offsetCenter: ['0%', '130%'], color: 'rgba(255,255,255,0.8)' }, detail: { valueAnimation: true, offsetCenter: ['0%', '117%'], color: socialColor }, itemStyle: { color: socialColor } },
        { value: 0, name: 'Governance', title: { offsetCenter: ['100%', '130%'], color: 'rgba(255,255,255,0.8)' }, detail: { valueAnimation: true, offsetCenter: ['100%', '117%'], color: governanceColor }, itemStyle: { color: governanceColor } }
      ];
    }

    // Verwende den neuesten Eintrag
    const latestData = sortedData[0];

    return [

      
      {
        value: latestData.environmentalScore || 0,
        name: 'Environmental',
        title: {
          offsetCenter: ['-100%', '130%'],
          color: 'rgba(255,255,255,0.8)' // Weiß
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['-100%', '117%'],
          color: environmentalColor
        },
        itemStyle: {
          color: environmentalColor
        }
      },
      {
        value: latestData.socialScore || 0,
        name: 'Social',
        title: {
          offsetCenter: ['0%', '130%'],
          color: 'rgba(255,255,255,0.8)' // Weiß
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '117%'],
          color: socialColor
        },
        itemStyle: {
          color: socialColor
        }
      },
      {
        value: latestData.governanceScore || 0,
        name: 'Governance',
        title: {
          offsetCenter: ['100%', '130%'],
          color: 'rgba(255,255,255,0.8)' // Weiß
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['100%', '117%'],
          color: governanceColor
        },
        itemStyle: {
          color: governanceColor
        }
      }
    ];
  };

  // Initialisierung des States
  const [gaugeData, setGaugeData] = useState(getInitialGaugeData(sortedData));

  const gaugeOption = {
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        min: 0,
        max: 100,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 0,
            borderColor: 'rgba(255,255,255,0.1)' // Weiß
          },
        },
        axisLine: {
          lineStyle: {
            width: 80,
            color: [
              [1, 'rgba(0,0,0,0.2)']
            ]
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 1
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData,
        title: {
          fontSize: 14,
        },
        detail: {
          fontSize: 24,
          formatter: '{value}'
        },
      }
    ]
  };

  const historicalData = sortedData.map(item => ({
    date: new Date(item.date).getFullYear(), // Nur Jahr extrahieren
    environmental: item.environmentalScore,
    social: item.socialScore,
    governance: item.governanceScore
  }));

  // Filtere die Daten, um nur den ersten und dann jeden vierten Punkt zu zeigen
  const filteredData = historicalData.filter((item, index) => index === 0 || index % 4 === 0);

  const historicalOption = {
    color: [environmentalColor, socialColor, governanceColor],
    title: {
      textStyle: {
        color: 'rgba(255,255,255,0.8)' // Weiß
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(255,255,255,0.5)' // Weiß
        }
      },
      textStyle: {
        color: 'black' // Schwarze Schrift
      }
    },
    legend: {
      data: ['Environmental', 'Social', 'Governance'],
      textStyle: {
        color: 'rgba(255,255,255,0.8)' // Weiß
      }
    },
    grid: {
      left: '0%',
      right: '1%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: filteredData.map(item => item.date),
        axisLabel: {
          color: 'rgba(255,255,255,0.8)' // Weiß
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.8)' // Weiß
          }
        },
        inverse: true // x-Achse invertieren
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,0.8)' // Weiß
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.8)' // Weiß
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.2)' // Weiß
          }
        },
        position: 'right', // y-Achse nach rechts verschieben
        inverse: false // y-Achse invertieren
      }
    ],
    series: [
      {
        name: 'Environmental',
        type: 'bar',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: environmentalColor
        },
        emphasis: {
          focus: 'series'
        },
        data: filteredData.map(item => item.environmental)
      },
      {
        name: 'Social',
        type: 'bar',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: socialColor
        },
        emphasis: {
          focus: 'series'
        },
        data: filteredData.map(item => item.social)
      },
      {
        name: 'Governance',
        type: 'bar',
        smooth: true,
        lineStyle: {
          width: 2
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: environmentalColor
        },
        emphasis: {
          focus: 'series'
        },
        data: filteredData.map(item => item.governance)
      }
    ]
  };

  useEffect(() => {
    const historicalChartInstance = historicalChartRef.current.getEchartsInstance();

    const onMouseOver = (params) => {
      if (params.componentType === 'series') {
        const yearData = esgData.find(data => new Date(data.date).getFullYear() === parseInt(params.name));
        if (yearData) {
          setGaugeData([
            {
              value: yearData.environmentalScore,
              name: 'Environmental',
              title: {
                offsetCenter: ['-100%', '130%'],
                color: 'rgba(255,255,255,0.8)' // Weiß
              },
              detail: {
                valueAnimation: true,
                offsetCenter: ['-100%', '117%'],
                color: environmentalColor
              },
              itemStyle: {
                color: environmentalColor
              }
            },
            {
              value: yearData.socialScore,
              name: 'Social',
              title: {
                offsetCenter: ['0%', '130%'],
                color: 'rgba(255,255,255,0.8)' // Weiß
              },
              detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '117%'],
                color: socialColor
              },
              itemStyle: {
                color: socialColor
              }
            },
            {
              value: yearData.governanceScore,
              name: 'Governance',
              title: {
                offsetCenter: ['100%', '130%'],
                color: 'rgba(255,255,255,0.8)' // Weiß
              },
              detail: {
                valueAnimation: true,
                offsetCenter: ['100%', '117%'],
                color: governanceColor
              },
              itemStyle: {
                color: governanceColor
              }
            }
          ]);
        }
      }
    };

    const onMouseOut = () => {
      setGaugeData(getInitialGaugeData(sortedData));
    };

    historicalChartInstance.on('mouseover', onMouseOver);
    historicalChartInstance.on('mouseout', onMouseOut);

    return () => {
      historicalChartInstance.off('mouseover', onMouseOver);
      historicalChartInstance.off('mouseout', onMouseOut);
    };
  }, [esgData]);

  useEffect(() => {
    setGaugeData(getInitialGaugeData(sortedData));
  }, [sortedData]);

  return (
    <div className="CompanySecondRow">
      <div className="echarts-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ReactECharts ref={historicalChartRef} option={historicalOption} style={{ height: 400, width: '60%' }} /> 
        <ReactECharts ref={chartRef} option={gaugeOption} style={{ height: 400, width: '30%' }} />
      </div>
    </div>
  );
}

export default ESGInfo;
