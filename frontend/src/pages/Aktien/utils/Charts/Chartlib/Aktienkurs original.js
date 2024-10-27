import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Aktienkurs.css";


class Aktienkurs extends React.Component {
    constructor(props) {
      super(props);
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
            type:"gradient",
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
            min: (new Date().setMonth(new Date().getMonth() - 36)),
            tooltip: {
              enabled: false
            },
            forceNiceScale: true,
            type: 'datetime',
             tickAmount: 8,

            labels: {
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
              tickAmount: 1,
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
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


          responsive: [{
            breakpoint: 700,
            options: {
              chart: {
                width: '100%'
            },
            
              yaxis: [
                {
                  forceNiceScale: true,
                  seriesName: 'Cashflow',
                  opposite: true,
                  tickAmount: 0,
                  axisTicks: {
                    show: false,
                  },
                  axisBorder: {
                    show: false,
                    color: '#f8f9fa',
                  },
                  labels: {
                    formatter: function (value) {
                      return value;
                    },
                    style: {
                      colors: 'white',
                      fontSize: '10px',
                    },
                  },
                }, 
              ],
              xaxis: {
                min: (new Date().setMonth(new Date().getMonth() - 36)),
                tooltip: {
                  enabled: false
                },
                axisTicks: {
                  show: false,
                },
                forceNiceScale: true,
                type: 'datetime',
                tickAmount: 0,
    
                labels: {
                    style: {
                      colors: "white",
                      fontSize: "10px",
                    }
                }
              },
            },
        }],
        },
        
        
        selection: 'one_year',
        series: [{
          name: "Aktienkurs",
          type: 'area',
          data: 
               this.props.myHookValue.myData
          ,
          color: '#ffffff',
        },], 
      };
    }

    

    updateData (timeline) {
      var today = new Date();
      var todayTime = today.getTime();
      var oneMonth = (new Date().setMonth(new Date().getMonth() - 1));
      var sixMonth = (new Date().setMonth(new Date().getMonth() - 6));
      var oneYear = (new Date().setFullYear(new Date().getFullYear() - 1));
      var YTD = (new Date().setFullYear(new Date().getFullYear() - 1));
      var threeYear = (new Date().setFullYear(new Date().getFullYear() - 3));
      var fiveYear = (new Date().setFullYear(new Date().getFullYear() - 5));
      var tenYear = (new Date().setFullYear(new Date().getFullYear() - 10));


      this.setState({
        selection: timeline
      })
      
      switch (timeline) {
        case 'one_month':
          this.setState({
            options: {
              xaxis: {
                min: oneMonth,
                max: todayTime,
                tooltip: {
                  enabled: false
                },
                 tickAmount: 10,
                 labels: {
                    style: {
                      colors: "white",
                      fontSize: "15px",
                    }
              },
            },
              yaxis: [this.getHighestRange(parseInt(this.props.myHookValue.oneMonthMax), parseInt(this.props.myHookValue.oneMonthMin))
              ],
            }
          })
          break;
        case 'six_months':
          this.setState({
            options: {
              xaxis: {
                min: sixMonth,
                max: todayTime,
              },
              yaxis: [this.getHighestRange(parseInt(this.props.myHookValue.sixMonthsMax),parseInt(this.props.myHookValue.sixMonthsMin))
              ],
            }
          })
          break;
        case 'one_year':
          this.setState({
            options: {
              xaxis: {
                min: oneYear,
                max: todayTime,
              },
              yaxis: [this.getHighestRange(parseInt(this.props.myHookValue.YTDMax), parseInt(this.props.myHookValue.YTDMin))
              ],
            }
          })
          break;
        case 'three_year':
            this.setState({
              options: {
                xaxis: {
                  min: threeYear,
                  max: todayTime,
                },
                yaxis: [this.getHighestRange(parseInt(this.props.myHookValue.threeYearMax), parseInt(this.props.myHookValue.threeYearMin))
                ],
              }
            })
            break;
        case 'five_year':
              this.setState({
                options: {
                  xaxis: {
                    min: fiveYear,
                    max: todayTime,
                  },
                  yaxis: [this.getHighestRange(parseInt(this.props.myHookValue.fiveYearMax), parseInt(this.props.myHookValue.fiveYearMin))
                  ],
                }
              })
              break;
        case 'ten_year':
                this.setState({
                  options: {
                    xaxis: {
                      min: tenYear,
                      max: todayTime,
                    },
                    yaxis: [this.getHighestRange(parseInt(this.props.myHookValue.tenYearMax), parseInt(this.props.myHookValue.tenYearMin))
                    ],
                  }
                })
          break;
        case 'ytd':
          this.setState({
            options: {
              xaxis: {
                min: YTD,
                max: todayTime,
              },
              yaxis: [this.getHighestRange(parseInt(this.props.myHookValue.YTDMax), parseInt(this.props.myHookValue.YTDMin))
              ],
            }
          })
          break;
        case 'all':
          this.setState({
            options: {
              xaxis: {
                min: undefined,
                max: undefined,
              },
              yaxis: [this.getHighestRange(parseInt(this.props.myHookValue.allTimeMax),parseInt(this.props.myHookValue.allTimeMin))
              ],
            }
          })
          break;
        default:

      }
    }

    getHighestRange(highest, lowest){
      var myVar = {
        min: lowest,
        max: highest,
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
      };
      return myVar;
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
              height={"200%"}
              width={"100%"}
            />
            </div>
        
        </div>
        </>
    )
    }

};

export default Aktienkurs;