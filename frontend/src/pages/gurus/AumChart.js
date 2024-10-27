import { red } from "@mui/material/colors";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class AumChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          locales: [{
            "name": "en",
            "options": {
              "months": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
              "shortMonths": ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
              "days": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
              "shortDays": ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
              "toolbar": {
                  "exportToSVG": "Download SVG",
                  "exportToPNG": "Download PNG",
                  "menu": "Menü",
                  "selection": "Selection",
                  "selectionZoom": "Selection Zoom",
                  "zoomIn": "Zoom In",
                  "zoomOut": "Zoom Out",
                  "pan": "Panning",
                  "reset": "Reset Zoom"
              }
            }
          }],
          type: 'line',
          stacked: false,
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
        fill:{
          opacity:[0.2],
          type:["gradient", ""],
          gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0,
            opacityFrom: 0,
            opacityTo: 0.1,
            stops: [0, 100]
          },
        },
        noData: {
          text: "Wähle bitte was aus!",
          align: 'center',
          verticalAlign: 'middle',
          style: {
            color: "white",
            fontSize: '20px',
          }
        },
        xaxis: {
          categories: this.props.data.chartDataCategories,
          tickAmount: 12,
          axisTicks:{
            show:false
          },
          type: 'datetime',
          labels: {
            rotate: 0,
            format: 'yyyy',
              style: {
                colors: "white",
              }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 3],
          curve: "smooth",
          colors: ["rgba(255,0,255,1)"],
        },
        grid: {
          show: false,
        },
        yaxis: [
          {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: true,
              color: '#f8f9fa'
            },
            labels: {
              style: {
                colors: '#f8f9fa',
              },
              formatter: function(val, index){
                return (val/100000000).toFixed(0) + " Mio. $";
              },
            },
            // title: {
            //   text: "Assets under Management",
            //   offsetX: -15,
            //   style: {
            //     fontSize: '16px',
            //     color: '#f8f9fa',
            //     fontWeight: '100',
            //     // fontFamily: "Helvetica Neue",
            //   }
            // },
          },
          {
            seriesName: 'Cashflow',

            opposite: true,
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: true,
              color: '#fff'
            },
            axisTicks:{
              show: false,
              color: '#ff00ff'
            },
            labels: {
              style: {
                colors: '#fff'
              },
            },
            // title: {
            //   text: "Anzahl der Holdings",
            //   offsetX: 15,
            //   style: {
            //     fontSize: '16px',
            //     color: '#fff',
            //     fontWeight: '100'
            //   }
            // },
          },
        ],
        tooltip: {
          enabled: true,
          followCursor: true,
          theme: "dark",
        },
        legend: {
            horizontalAlign: 'left',
            position: 'top',
          labels:{
            colors: '#fff'
          }
        },
      },
      series: [{
        name: 'Assets under Management',
        type: 'area',
        data: this.props.data.chartDataAssets,
        color: "rgba(255,0,255,0.5)"
      }, {
        name: 'Holdings',
        type: 'line',
        data: this.props.data.chartDataHoldings,
        color: "rgba(0,255,255,0.5)"
      }], 
    };
  }

  render() {
    return (
            <Chart
              options={this.state.options}
              series={this.state.series}
              height={"100%"}
              width={"100%"}
            />
    );
  }
}

export default AumChart;