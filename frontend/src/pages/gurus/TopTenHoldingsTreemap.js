import React, { Component } from "react";
import Chart from "react-apexcharts";

class TopTenHoldingsTreemap extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: [
            {
              data:  this.props.data.Guru.topTenHoldingsChartData.topTenHoldingChartData
            }
          ],
          options: {
            legend: {
              show: false
            },
            chart: {
              type: 'treemap'
            },
            title: {
              text: 'Top Holdings'
            },
            dataLabels: {
              enabled: true,
              style: {
              fontSize: "35px"
            },
              formatter: function(text, op) {
                    return [text, op.value]
                  },
            },
          },
        };
      }

  render() {
    return (
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="treemap"
              height={"400px"}
              width={"1240px"}
            />

    );
  }
}

export default TopTenHoldingsTreemap;