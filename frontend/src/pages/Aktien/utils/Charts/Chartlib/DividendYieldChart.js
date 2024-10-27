import React, { Component } from "react";
import Chart from "react-apexcharts";

class DividendYieldChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          foreColor: "white"
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
          categories: [2009,2010,2011,2012,2013,2014,2015, 2016, 2017, 2018, 2019, 2020, 2021]
        },
        labels: {
          formatter: function (value) {
            const formattedValue = (value).toFixed(2); // Teilt die Anzeigewerte durch 10000 und zeigt sie auf 2 Dezimalstellen
            return formattedValue.replace(".", ","); // Fügt Tausendertrennzeichen hinzu
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
            name: "Dividende",
            data: ["1.5","1.6","1.4","1.5","1.7","1.45","0.99", "1.2", "1.1", "1.8", "2.1", "1.9", "1.8"],
            // color: "#f0095b"
            color: "rgba(255,0,255,0.5)"
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

export default DividendYieldChart;