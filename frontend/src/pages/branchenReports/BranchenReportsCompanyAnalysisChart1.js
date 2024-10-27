import { withTheme } from "@emotion/react";
import { darken } from "@mui/material";
import { padding } from "@mui/system";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class BranchenReportsCompanyAnalysisChart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: "2018",
        data: [400, 300, 200, 100],
        type: "bar",
      }, {
        name: "2019",
        data: [350, 250, 150, 50],
        type: "bar"
      }, {
        name: "2019",
        data: [500, 400, 300, 200],
        type: "bar"
      }, {
        name: "2019",
        data: [550, 500, 450, 400],
        type: "bar"
      }, {
        name: "2020",
        data: [50, 60, 20, 30,],
        type: "line"
      }, {
        name: "2021",
        data: [60, 40, 30, 35],
        type: "line"
      }],
      options: {
        markers: {
          size: 0
        },

        grid: {
          borderColor: "rgba(255,255,255,0.2)",
          padding:{

          }
        },
        colors: ['#3ab1ea', '#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        chart: {
          type: 'line',
          foreColor: "white",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false
        },
        plotOptions:{
          bar:{
            distributed: false,
            columnWidth: "50%",
            rangeBarOverlap: true
          }
        },
        stroke: {
          width: [0, 0, 0, 0, 4, 4],

        },
        
          xaxis: {
            tickPlacement: "between",
            categories: ["Waste Management", "Republic Services", "Waste Connection", "Veolia Services"],
          },

        yaxis: [{
          seriesName: 'test',
          opposite: false,
        },
        {
          show: false,
          seriesName: 'Income',
          opposite: false,
        },
        {
          show: false,
          seriesName: 'Income',
          opposite: false,
        },
        {
          show: false,
          seriesName: 'Income',
          opposite: false,
        },
        {
          show: false,
          seriesName: 'Income',
          opposite: false,
        },
        {
          seriesName: 'Income',
          opposite: true,
        },
        ],
        fill: {
          opacity: 1
        },
        tooltip: {
          theme: "dark",
        },
      },
    
    
    };
  }


  render() {
    return (
      <div id="chart"> 
  <ReactApexChart options={this.state.options} series={this.state.series}  type="line" height={350} width={"100%"}/>
</div>
    );
  }
}

export default BranchenReportsCompanyAnalysisChart1;
