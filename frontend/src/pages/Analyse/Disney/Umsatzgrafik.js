import React, { Component } from "react";
import Chart from "react-apexcharts";

class Umsatzgrafik extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          foreColor: "white"
          
        },
        plotOptions: {
          bar: {
            borderRadius: 1,
          },
        },
        grid: {
          borderColor: "#40475D"
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [2000, 2001, 2002, 2003, 2004 ,2005 ,2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, "LTM"]
        },
        tooltip: {
          theme: "dark" }
      },
      series: [
        {
          name: "Umsatz",
          data: [25325, 25172, 25329, 27061, 30752, 31374, 33747, 35510, 37843, 36149, 38063, 40893, 42278, 45041, 48813, 52465, 55632, 55137, 59434, 69607, 65388, 67518, 72988],
          color: "#ff4d6d"
        },

      ]
    };
  }

  render() {
    return (
          <div className="Umsatzgrafik">
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

export default Umsatzgrafik;
