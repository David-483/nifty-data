import React, { Component } from "react";
import Chart from "react-apexcharts";

class AktienKursGraphTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
            chart: {
                id: 'aktienKursGraphJahr',
                type: 'area',
                height: "100%",
                width: "100%",
                sparkline: {
                  enabled: true
                },
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                opacity: 0.2,
              },
          tooltip: {
            x: {
              show: true,
            },
            y: {
              title: {
                formatter: function formatter(val) {
                  return ' $';
                }
              }
            }
        },
          
          stroke: {
            curve: 'smooth',
            width: 0.5
          },
          markers: {
            size: 0
          },
          grid: {
            padding: {
              top: 20,
              bottom: 10,
              left: 20,
              right: 20
            }
          },
          colors: ['#00ff00'],
        },
        fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: "vertical",
              shadeIntensity: 1,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 0,
              stops: [0, 75, 100],
              colorStops: []
            }
          },
        series: [
          {
            data: [[1, 34], [3, 43], [5, 31], [10, 43], [13, 33], [15, 43], [18, 33], [20, 52]]
          }
        ],
      };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default AktienKursGraphTop;
