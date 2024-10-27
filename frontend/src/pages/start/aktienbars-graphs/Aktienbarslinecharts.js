import React, { Component } from "react";
import Chart from "react-apexcharts";

class Aktienbarslinecharts extends React.Component {
  constructor(props) {
    super(props);
    const myHookValue = this.props.myHookValue;
    const myMinValue = this.props.myMinValue;
    const myMaxValue = this.props.myMaxValue;
    this.state = {
      selection: 'one_year',
      options: {
        
        chart: {
          zoom:{
            enabled: false,
          },
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
          id: 'area-datetime',
          animations: {
            enabled: false
          },
          type: 'area',
          stacked: false,
          toolbar: {
            show: false,
          }
        },
        fill:{
          opacity:[0.6,1],
          type:["gradient", ""],
          gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0,
            opacityFrom: 0.6,
            opacityTo: 0.1,
            stops: [0, 95, 100]
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
          tooltip: {
            enabled: false
          },
          forceNiceScale: true,
          type: 'datetime',
        //   categories: this.props.data.Guru.HoldingChartData.categories,
      //   x: new Date('14 Nov 2012').getTime(),
          //  tickAmount: 4,
          //  min: new Date('10 Jun 2021').getTime(),
          //  max: new Date().getTime(),
          labels: {
            // offsetY: 10,
            format: "dd.MM",
              style: {
                colors: "white",
                fontSize: "15px",
              }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2,
          curve: "smooth"
        },
        grid: {
          show: false,
          borderColor: 'rgba(255,255,255,0.2)',
        },
        yaxis: [
          {
            forceNiceScale: true,
            seriesName: 'Cashflow',
            opposite: true,
            tickAmount: 1,
            min: parseInt(this.props.myMinValue),
            // min: 2000,
            max: parseInt(this.props.myMaxValue),
            // max: 6000,
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
              color: '#f8f9fa',
            },
            labels: {
              style: {
                colors: 'white',
                fontSize: '15px',
              },
            },
          },
        ],
        tooltip: {
          x: {
            format: 'dd MMMM yyyy'
          },
          enabled: true,
          followCursor: true,
          theme: "dark",
          
        },
        legend: {
          horizontalAlign: 'center',
        //   offsetX: 40,
          labels:{
            colors: '#fff'
          }
        },
      },
      selection: 'one_year',
      series: [{
        name: "Aktienkurs",
        type: 'area',
        data: 
             this.props.myHookValue
        ,
        color: '#ffffff',
      },], 
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          type="area"
          options={this.state.options}
          series={this.state.series}
          height={"140%"}
          width={"100%"}
        />
      </div>
    );
  }
}

export default Aktienbarslinecharts;

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
