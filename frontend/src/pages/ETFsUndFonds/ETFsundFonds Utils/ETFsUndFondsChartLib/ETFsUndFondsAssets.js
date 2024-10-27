import React, { Component } from "react";
import Chart from "react-apexcharts";

class ETFsUndFondsAssets extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        data: this.props.data.assets_values,
        color: "rgba(255,0,255,0.5)",
      }],
      options: {
        chart: {
          id: "basic-bar",
          foreColor: '#fff',
          toolbar:{
            show: false
          },
        },
        tooltip: {
          theme: "dark",
            },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        
        xaxis: {
          categories: this.props.data.assets_Categories,
        }
      },
    
    
    };
  }



  render() {
    return (
      <>

          <div className="">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="200%"
              
            />
      </div>
      </>
    );
  }
}

export default ETFsUndFondsAssets;
