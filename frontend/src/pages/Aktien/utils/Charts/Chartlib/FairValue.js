import React, { Component } from "react";
import Chart from "react-apexcharts";

class FairValue extends Component {
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
          categories: ["Aktienkurs", "Fair Value (DCF)"],
          type: "catgeories",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              const formattedValue = (value).toFixed(2); // Teilt die Anzeigewerte durch 10000 und zeigt sie auf 2 Dezimalstellen
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
            name: "",
            data: [{
              x: "Preis",
              y: this.props.dataFairValuePrice.FairValuePrice,  },
              {
                x: "stark kaufen",
                y: this.props.dataFairValuePrice.FairValueDCF,
              }],
          
            // color: "#f0095b"
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
              type="bar"
              width="100%"
              height="200%"
            />
      </div>
    );
  }
}



export default FairValue;