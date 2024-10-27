import React, { Component } from "react";
import Chart from "react-apexcharts";

class AnalystenKonsens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          foreColor: "white",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
          tools: {
            download: false,
            selection: false,
            zoom: '<img src="./../img/chartreset.svg">',
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: '<img src="./../img/chartreset.svg" width="80" title="Chart zurücksetzen">',
          },
        },
        },
        grid: {
          borderColor: "#40475D"
        },
        stroke: {
          width:2,
        },
        legend: {
          horizontalAlign: 'left',
          position: 'top',
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ["stark kaufen", "kaufen", "halten", "verkaufen", "stark verkaufen"],
          type: "catgeories",
        },
        tooltip: {
          theme: "dark" 
        },
        responsive: [{
          breakpoint: 700,
          options: {
            xaxis: {
              tickAmount: 10,
            },
          },
      }]
      },
      series: [
        {
            name: "",
            data: [{
              x: "stark kaufen",
              y: this.props.dataPriceTargets.myDataStrongBuy, 
          }, {
            x: "kaufen",
            y: this.props.dataPriceTargets.myDataBuy, 
          }, {
            x: "halten",
            y: this.props.dataPriceTargets.myDataHold, 
          }, {
            x: "verkaufen",
            y: this.props.dataPriceTargets.myDataSell, 
          }, {
            x: "stark verkaufen",
            y: this.props.dataPriceTargets.myDataStrongSell, 
          }],
          
            // color: "#f0095b"
            color: "rgba(255,0,255,0.5)"
          },

      ]
    };
  }

  render() {
    return (
          <div className="">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="200%"
            />
      </div>
    );
  }
}

export default AnalystenKonsens;