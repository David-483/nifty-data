import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class BranchenReportsUmsatzVerteilung3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [63, 18, 12, 7],
      options: {
        chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: true,
              },
              value: {
                show: true,
              }
            }
          }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        labels: ['Sammeln', 'Deponien', 'Recycling', 'Sonstiges'],
        legend: {
          show: false,
          floating: false,
          fontSize: '16px',
          position: 'bottom',
          // offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 1
          }
        },
        responsive: [{
          breakpoint: 600,
          options: {
            chart:{
            height: 130,
            },
            legend: {
                show: false
            }
          }
        }]
      },
    
    
    };
  }


  render() {
    return (
      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={300} />
</div>
    );
  }
}

export default BranchenReportsUmsatzVerteilung3;
