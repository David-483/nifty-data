import React, { Component } from "react";
import Chart from "react-apexcharts";

class PsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
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
        grid: {
          borderColor: "#40475D"
        },
        stroke: {
          width:2,
        },
        legend: {
          horizontalAlign: 'left',
          position: 'top',
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.props.dataPEPS.myDataPEPSJahre,
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              const formattedValue = (value).toFixed(0); // Teilt die Anzeigewerte durch 10000 und zeigt sie auf 2 Dezimalstellen
              return formattedValue.replace(".", ","); // Fügt Tausendertrennzeichen hinzu
            },
          },
        },
        annotations: {
          yaxis: [
                    {
              y: this.props.dataPEPS.PSAVG,
              borderColor: 'rgba(0,0,0,1)',
              strokeDashArray: 0,
              borderWidth: 1,
              label: {
                offsetY: 0,
                offsetX: 35,
                borderRadius: 0,
                borderColor: '#000',
                position: 'left',
                style: {
                  color: '#fff',
                  background: '#000'
                },
                text: '⌀ ' + this.props.dataPEPS.PSAVG
              }
            }
          ],
          
        },
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
      series: [

                  {
          name: "KUV",
          data: this.props.dataPEPS.myDataPS, 
          // color: "#f96b9e"
          color: "rgba(255,0,255,0.5)"
        },
      ]
    };
  }

  render() {
    return (
          <div className="">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height="200%"
            />
      </div>
    );
  }
}

export default PsChart;