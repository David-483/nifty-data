import React, { Component } from "react";
import Chart from "react-apexcharts";

class SectorOverTimeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
          
      series: [{
        name: 'Energie',
        color: 'rgba(255,0,255,0.9)',
        data: this.props.data.Energie
      }, {
        name: 'Finanzen',
        color: 'rgba(255,0,255,0.6)',
        data: this.props.data.Finanzen
      },{
        name: 'Fonds',
        color: 'rgba(255,0,255,0.3)',
        data: this.props.data.Fonds
      },
       {
        name: 'Gesundheit',
        color: 'rgba(0,255,255,0.9)',
        data: this.props.data.Gesundheit
      }, {
        name: 'Zyklische Konsumgüter',
        color: 'rgba(0,255,255,0.6)',
        data: this.props.data.Zyklische_Konsumgüter
      }, {
        name: 'Immobilien',
        color: 'rgba(0,255,255,0.3)',
        data: this.props.data.Immobilien
      }, {
        name: 'Industrie',
        color: 'rgba(255,255,0,0.9)',
        data: this.props.data.Industrie
      }, {
        name: 'Grundstoffe',
        color: 'rgba(255,255,0,0.6)',
        data: this.props.data.Grundstoffe
      }, {
        name: 'Versorger',
        color: 'rgba(255,255,0,0.3)',
        data: this.props.data.Versorger
      }, {
        name: 'Kommunikation',
        color: 'rgba(100,100,100,0.9)',
        data: this.props.data.Kommunikation
      }, {
        name: 'Nichtzyklische Konsumgüter',
        color: 'rgba(100,100,100,0.6)',
        data: this.props.data.Nichtzyklische_Konsumgüter
      }, {
        name: 'Kryptowährungen',
        color: 'rgba(100,100,100,0.3)',
        data: this.props.data.Kryptowährungen
      }, {
        name: 'Technologie',
        color: 'rgba(200,200,200,0.9)',
        data: this.props.data.Technologie
      }, {
        name: 'Alternative Investements',
        color: 'rgba(200,200,200,0.6)',
        data: this.props.data.AlternativeInvestements
      }],
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
        foreColor: "white",
        toolbar:{
          show: false
        },
        type: 'bar',
        stacked: true,
        stackType: '100%'
      },
      plotOptions:{
        bar:{
          borderRadius:0
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      xaxis: {

        categories: this.props.data.sectorOverTimeCategories,
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
      yaxis: {
        opposite: true,
        labels: {
          formatter: (value) => { return value },
        },

        forceNiceScale: true,
        min: 0,
      tickAmount: 6,
      axisTicks: {
          show: false,
      },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        enabled: true,
        followCursor: true,
        theme: "dark",
        x: {
          format: 'dd MMMM yyyy'
        }
      },
      legend: {
        formatter: function(val, opts) {
          return val.substring(1, val.indexOf("competitor-forms-windows-xp"))
        },
        showForNullSeries: false,
        showForZeroSeries: false,
        horizontalAlign: 'left',
        position: 'top',
        offsetX: 0,
        offsetY: 10
      },
    },
  };
  }

  render() {
    return (

            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={"100%"}
              width={"100%"}
            />

    );
  }
}

export default SectorOverTimeChart;