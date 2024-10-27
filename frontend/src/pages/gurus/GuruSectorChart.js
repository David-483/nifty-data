import React, { Component } from "react";
import Chart from "react-apexcharts";

class GuruSectorChart extends Component {
    constructor(props) {
        super(props);
        var myBoolean = (this.props.chartType);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar",
                foreColor: '#fff',
                toolbar:{
                  show: false
                },
            },

            dataLabels: {
              enabled: true,
              textAnchor: 'start',
              formatter: function (value) {
                if(myBoolean){
                  return (value)?.toFixed(2) + " %"
                }else{
                  return (value).toLocaleString() + " USD"
                }
              },
              offsetX: 0,
            },

            tooltip: {
              theme: "dark",
              y: {
                formatter: function (val) {
                  if(myBoolean){
                    return (val)?.toFixed(2) + " %"
                  }else{
                    return (val/1000000000)?.toFixed(2) + " Mrd. USD"
                  }
                },
                title: {
                  formatter: function (seriesName) {
                    return seriesName 
                  },
                },
              },
            },
            plotOptions: {
                bar: {
                  borderRadius: 15,
                  horizontal: true,
                }
              },
            xaxis: {
              categories: this.props.data.categories,
              labels: {
                style: {
                  colors: '#f8f9fa',
                },
                formatter: function(val, index){
                  if(myBoolean){
                    return (val).toLocaleString() + " %"
                  }else{
                    return (val/1000000000)?.toFixed(0) + " Mrd. USD"
                  }
                },
              },
            }
          },
          series: [
            {
              
              name: "Wert",
              data: this.props.dataValues,
              color: "rgba(255,0,255,0.5)",
            }
          ]
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

export default GuruSectorChart;