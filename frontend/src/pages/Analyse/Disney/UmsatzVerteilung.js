import React, { Component } from "react";
import Chart from "react-apexcharts";

class Umsatzverteilung extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [50866, 16552],
        options: {
          chart: {
            colors:"#373d3f",
            width: 380,
          },
          title: {
            text: "Konzernumsatz",
            align: "center",
            style: {
              fontSize: "20px",
              color: "white",
            }
          },
          dataLabels: {
            style: {
              colors: ['white', 'black', '#9C27B0'],
              fontSize: "15px",
            },
            enabled: true,
          },
          plotOptions: {
            pie: {
              dataLabels: {
                 offset: -7,
               }
            }
         },
          stroke: {
            show: false
          },
          legend: {
            position: "bottom",
            labels:{
            colors: "white",}
          },
          tooltip: {
            followCursor: false,
            fillSeriesColor: false,
            theme: "dark",
        },
          // plotOptions: {
          //   pie: {
          //     startAngle: -90,
          //     endAngle: 90,
          //     offsetY: 10
          //   }
          // },
          labels: ['Disney Media and Entertainmed Distribution', "Disney Parks, Experiences and Products"],
          colors: ["#000000", "#ffffff", "#999999"],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              grid: {
                padding: {
                  bottom: -80
                }
              },
            }
          }]
        },
      
      
      };
    }


  render() {
    return (
          <div className="">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width="200%"
              height="200%"
              
            />
      </div>
    );
  }
}

export default Umsatzverteilung;
