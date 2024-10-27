import React, { Component } from "react";
import Chart from "react-apexcharts";

class Aktienbarslinecharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 120],
          color: "#f8f9fa",
        },
      ],
      options: {
        chart: {
          height: 350,
          offsetY: -10,
          offsetX: -4,
          type: "bar",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          noData: {  
            text: "Loading...",  
            align: 'center',  
            verticalAlign: 'middle',  
            offsetX: 0,  
            offsetY: 0,  
            style: {  
              color: "#000000",  
              fontSize: '14px',  
              fontFamily: "Helvetica"  
            }  
          },
        },
        tooltip: {
          enabled: true,
          followCursor: true,
          theme: "dark",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        title: {
          text: "S&P 50",
          align: "left",
          offsetY: 15,
          offsetX: 2,
          style: {
            color: "white",
          },
        },
        grid: {
          show: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          labels: {
            offsetY: 0,
            style: {
              colors: "white",
            },
          },
        },
        yaxis: {
          tickAmount: 4,
          labels: {
            style: {
              colors: "white",
            },
          },
        },

      },
      
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          height={"100%"}
          width={"100%"}
        />
      </div>
    );
  }
}

export default Aktienbarslinecharts;

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
