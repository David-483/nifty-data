import React, { Component } from "react";
import Chart from "react-apexcharts";

class ROAROEChart extends Component {
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
        zoom: {
          autoScaleYaxis: true,
        },
        },
        grid: {
          borderColor: "#40475D"
        },
        stroke: {
          width: 2
        },
        legend: {
          horizontalAlign: 'left',
          position: 'top',
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.props.dataROAROE.myDataROAROEJahre
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              const formattedValue = (value / 10).toFixed(0); // Teilt die Anzeigewerte durch 10000 und zeigt sie auf 2 Dezimalstellen
              return formattedValue.replace(".", ","); // Fügt Tausendertrennzeichen hinzu
            },
          },
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
            name: "ROE",
            data: this.props.dataROAROE.myDataROE,

            // color: "#f0095b"
            color: "rgba(255,0,255,0.5)"
          },
                  {
          name: "ROA",
          data: this.props.dataROAROE.myDataROA,
          // color: "#f96b9e"
          color: "rgba(0,255,255,0.5)"
        },

      ]
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

export default ROAROEChart;