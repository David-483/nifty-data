import React, { Component } from "react";
import Chart from "react-apexcharts";

class GewinnGrafik extends Component {
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
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [2000, 2001, 2002, 2003, 2004 ,2005 ,2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
        },
        tooltip: {
          theme: "dark" }
      },
      series: [
        {
          name: "Gewinn",
          data: [920, -158, 1236, 1267, 2345, 2533, 3374, 4687, 4427, 3307, 3963, 4807, 5682, 6136, 7501, 8382, 9391, 8980, 12598, 11054, -2864, 1995],
          color: "#ff4d6d"
        }
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

export default GewinnGrafik;