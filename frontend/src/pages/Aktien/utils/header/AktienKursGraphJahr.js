import React, { Component } from "react";
import Chart from "react-apexcharts";

class AktienKursGraphJahr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "aktienKursGraphJahr",
          type: "area",
          height: "100%",
          width: "100%",
          sparkline: {
            enabled: true,
          },

          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            opacity: 0.2,
          },
        },
        tooltip: {
          theme: "dark",
          x: {
              format: 'dd MMMM yyyy',
            show: true,
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return ' $ USD';
              }
            },
          },
         },
        stroke: {
          curve: "smooth",
          width: 1,
        },
        markers: {
          size: 0,
        },
        grid: {
          padding: {
            top: 20,
            bottom: 10,
            left: 20,
            right: 20,
          },
        },
        xaxis: {
          type: 'datetime',
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'dark',
            type: "vertical",
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0,100]
          }
        },
      },
      series: [
        {
          name: "Aktienkurs",
          type: 'area',
          data:
            this.props.myHookValue
           
          ,
          // color: "#00ff00",
          color: ""+this.props.chartColor+"",
        },
        
      ],
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
        height={"100%"}
        width={"100%"}
      />
    );
  }
}

export default AktienKursGraphJahr;
