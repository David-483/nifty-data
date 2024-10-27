import React, { Component } from "react";
import Chart from "react-apexcharts";

class OutstandingSharesChart extends Component {
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
                const formattedValue = (value / 10).toFixed(0); // Teilt die Anzeigewerte durch 10000 und zeigt sie auf 2 Dezimalstellen
                return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Fügt Tausendertrennzeichen hinzu
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
      name: "Outstanding Shares",
      data: this.props.dataOutstandingShares,
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

export default OutstandingSharesChart;