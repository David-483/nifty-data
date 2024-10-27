import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Aktienkurs.css";


class PayoutChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

        options: {
          chart: {
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true,
             },
            id: 'area-datetime',
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
          stroke: {
            width:2,
          },
          grid: {
            borderColor: "#40475D"
          },
          xaxis: {
            type: 'datetime',
          },

          annotations: {
            yaxis: [
              {
                y: 40,
                borderColor: 'rgba(0,0,0,0)',
                strokeDashArray: 0,
                borderWidth: 1,
                label: {
                  orientation: 'left',
                  offsetY: -2,
                  offsetX: -5,
                  borderRadius: 0,
                  borderColor: '#000',
                  style: {
                    color: '#fff',
                    background: '#000'
                  },
                  text: 'Average'
                }
              },            
            ],
            
          },
          dataLabels: {
            enabled: false
          },
          yaxis: [
            {
              forceNiceScale: true,
              seriesName: 'Cashflow',
              tickAmount: 3,
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
                color: '#f8f9fa',
              },
              labels: {
                formatter: function (value) {
                  const formattedValue = (value).toFixed(2); // Teilt die Anzeigewerte durch 10000 und zeigt sie auf 2 Dezimalstellen
                  return formattedValue.replace(".", ","); // Fügt Tausendertrennzeichen hinzu
                },
              },
            },
          ],
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
        series: [{
          name: "Payout Ratio",
          data: this.props.dataPayoutRatio,
          color: "rgba(255,0,255,0.5)"
        },], 
      };
    }
    
    
    render() {
      return (
        <div>
            <div className="">
             {this.props.bar  ?
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="100%"
                height="200%"
              />
              :
              <Chart
              options={this.state.options}
              series={this.state.series}
              
              type="area"
              width="100%"
              height="200%"
            />
    }
        </div>
        </div>
      );
    }
  }

export default PayoutChart;