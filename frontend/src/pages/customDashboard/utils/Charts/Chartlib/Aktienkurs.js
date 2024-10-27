
import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Aktienkurs.css";


class Aktienkurs extends React.Component {
    constructor(props) {
      super(props);
      const myHookValue = this.props.myHookValue;
      this.state = {
        selection: 'one_year',
        options: {
          
          chart: {
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
             },
            locales: [{
              "name": "en",
              "options": {
                "months": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                "shortMonths": ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                "days": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                "shortDays": ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
                "toolbar": {
                    "exportToSVG": "Download SVG",
                    "exportToPNG": "Download PNG",
                    "menu": "Menü",
                    "selection": "Selection",
                    "selectionZoom": "Selection Zoom",
                    "zoomIn": "Zoom In",
                    "zoomOut": "Zoom Out",
                    "pan": "Panning",
                    "reset": "Reset Zoom"
                }
              }
            }],
            id: 'area-datetime',
            animations: {
              enabled: false
            },
            type: 'area',
            stacked: false,
            toolbar: {
              show: false,
            }
          },
          fill:{
            opacity:[0.6,1],
            type:["gradient", ""],
            gradient: {
              shade: 'dark',
              type: "vertical",
              shadeIntensity: 0,
              opacityFrom: 0.6,
              opacityTo: 0.1,
              stops: [0, 95, 100]
            },
          },
          noData: {
            text: "Wähle bitte was aus!",
            align: 'center',
            verticalAlign: 'middle',
            style: {
              color: "white",
              fontSize: '20px',
            }
          },
          xaxis: {
            tooltip: {
              enabled: false
            },
            forceNiceScale: true,
            type: 'datetime',
          //   categories: this.props.data.Guru.HoldingChartData.categories,
        //   x: new Date('14 Nov 2012').getTime(),
             tickAmount: 1,
             min: new Date('28 Jan 2017').getTime(),
             max: new Date('27 Feb 2022').getTime(),
            labels: {
              // offsetY: 10,
                style: {
                  colors: "white",
                  fontSize: "15px",
                }
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            curve: "smooth"
          },
          grid: {
            show: true,
            borderColor: 'rgba(255,255,255,0.2)',
          },
          yaxis: [
            {
              forceNiceScale: true,
              seriesName: 'Cashflow',
              opposite: true,
              tickAmount: 3,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#f8f9fa',
              },
              labels: {
                style: {
                  colors: 'white',
                  fontSize: '15px',
                },
              },
            },
          ],
          tooltip: {
            x: {
              format: 'dd MMMM yyyy'
            },
            enabled: true,
            followCursor: true,
            theme: "dark",
            
          },
          legend: {
            horizontalAlign: 'center',
          //   offsetX: 40,
            labels:{
              colors: '#fff'
            }
          },
        },

        selection: 'one_year',
        series: [{
          name: "Aktienkurs",
          type: 'area',
          data: 
               this.props.myHookValue
          ,
          color: '#ffffff',
        },], 
      };
    }

    updateData (timeline) {
      this.setState({
        selection: timeline
      })
      
      switch (timeline) {
        case 'one_month':
          this.setState({
            options: {
              xaxis: {
                min: new Date('28 Jan 2013').getTime(),
                max: new Date('27 Feb 2013').getTime(),
              }
            }
          })
          break;
        case 'six_months':
          this.setState({
            options: {
              xaxis: {
                min: new Date('27 Sep 2012').getTime(),
                max: new Date('27 Feb 2013').getTime(),
              }
            }
          })
          break;
        case 'one_year':
          this.setState({
            options: {
              xaxis: {
                min: new Date('27 Feb 2012').getTime(),
                max: new Date('27 Feb 2013').getTime(),
              }
            }
          })
          break;
          case 'three_year':
            this.setState({
              options: {
                xaxis: {
                  min: new Date('27 Feb 2019').getTime(),
                  max: new Date('27 Feb 2022').getTime(),
                }
              }
            })
            break;
            case 'five_year':
              this.setState({
                options: {
                  xaxis: {
                    min: new Date('27 Feb 2017').getTime(),
                    max: new Date('27 Feb 2022').getTime(),
                  }
                }
              })
              break;
              case 'ten_year':
                this.setState({
                  options: {
                    xaxis: {
                      min: new Date('27 Feb 2012').getTime(),
                      max: new Date('27 Feb 2022').getTime(),
                    }
                  }
                })
          break;
        case 'ytd':
          this.setState({
            options: {
              xaxis: {
                min: new Date('01 Jan 2013').getTime(),
                max: new Date('27 Feb 2013').getTime(),
              }
            }
          })
          break;
        case 'all':
          this.setState({
            options: {
              xaxis: {
                min: undefined,
                max: undefined,
              }
            }
          })
          break;
        default:

      }
    }
    
    
    render() {
        return  (
        <>
        <div className="Aktiendashboard-Aktienkurs-container">
        <div className="Aktiendashboard-Aktienkurs-container-buttons">
        <button className="Aktiendashboard-Aktienkurs-Button" onClick={()=>this.updateData('one_month')} id="one_month">1M</button>
              <button className="Aktiendashboard-Aktienkurs-Button" onClick={()=>this.updateData('six_months')} id="six_months">6M</button>
              <button className="Aktiendashboard-Aktienkurs-Button" onClick={()=>this.updateData('ytd')} id="ytd">YTD</button>
              <button className="Aktiendashboard-Aktienkurs-Button" onClick={()=>this.updateData('one_year')} id="one_year">1Y</button>
              <button className="Aktiendashboard-Aktienkurs-Button" onClick={()=>this.updateData('three_year')} id="three_year">3Y</button>
              <button className="Aktiendashboard-Aktienkurs-Button" onClick={()=>this.updateData('five_year')} id="five_year">5Y</button>
              <button className="Aktiendashboard-Aktienkurs-Button" onClick={()=>this.updateData('ten_year')} id="ten_year">10Y</button>
              <button className="Aktiendashboard-Aktienkurs-Button" onClick={()=>this.updateData('all')} id="all">ALL</button>
        </div>
        
            <div className="Aktiendashboard-Aktienkurs-container-chart">
              
            <Chart
              options={this.state.options}
              series={this.state.series}
              height={"100%"}
              width={"100%"}
            />
            </div>
        
        </div>
        </>
    )
    }

};

export default Aktienkurs;