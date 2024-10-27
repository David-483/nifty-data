import { withTheme } from "@emotion/react";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class BranchenReportsFundamentalsChart3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: "2018",
        data: [500, 600, 100, 200]
      }, {
        name: "2019",
        data: [500, 600, 100, 200]
      }, {
        name: "2020",
        data: [500, 600, 100, 200]
      }, {
        name: "2021",
        data: [500, 600, 100, 200]
      }, {
        name: "LTM",
        data: [500, 600, 100, 200]
      }],
      options: {
        markers: {
          size: 0
        },

        grid: {
          borderColor: "rgba(255,255,255,0.2)"
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        chart: {
          type: 'bar',
          foreColor: "white",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
          xaxis: {
            categories: ["Waste Management", "Republic Services", "Waste Connection", "Veolia Services"],
          },

        yaxis: {

        },
        fill: {
          opacity: 1
        },
        tooltip: {
          theme: "dark" }
      },
    
    
    };
  }


  render() {
    return (
      <div id="chart"> 
  <ReactApexChart options={this.state.options} series={this.state.series}  type="bar" height={350} width={"100%"}/>
</div>
    );
  }
}

export default BranchenReportsFundamentalsChart3;
