import React, { Component } from "react";
import Chart from "react-apexcharts";

class UmsatzVerteilung2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [27201, 16319, 7346],
        options: {
            forecolor: "white",
          chart: {
            width: 380,
          },
          title: {
            text: "DMED",
            align: "center",
            style: {
              fontSize: "20px",
              color: "white",
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
          dataLabels: {
            style: {
              colors: ['white', 'black', "black"],
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
          tooltip: {
            followCursor: false,
            fillSeriesColor: false,
            theme: "dark",
        },

        //   plotOptions: {
        //     pie: {
        //       startAngle: -90,
        //       endAngle: 90,
        //       offsetY: 10
        //     }
        //   },
          labels: ["Linear Networks", "Direct-to-Consumer","Content Sales/Licensing"],
          colors: ["#000000", "#999999", "#ffffff"],
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

export default UmsatzVerteilung2;
