import React, { Component } from "react";
import ReactECharts from 'echarts-for-react';
import axios from 'axios';
import * as echarts from 'echarts/core';
import Modal from 'react-modal';
import "./Aktienkurs.css";

Modal.setAppElement('#root'); // Set the root element for accessibility

class Aktienkurs extends Component {

  constructor(props) {
    super(props);

    const initialData = props.myHookValue?.myData
      ? this.convertData(props.myHookValue.myData)
      : [];

    const intradayData = props.intradayHook?.myData
      ? this.convertIntradayData(props.intradayHook.myData)
      : [];

    const firstValue = initialData.length > 0 ? initialData[0][1] : 0;
    const firstDate = initialData.length > 0 ? new Date(initialData[0][0]).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' }) : "";

    this.state = {
      selection: '3Y',
      seriesData: initialData,
      currentMin: new Date().setFullYear(new Date().getFullYear() - 3),
      currentMax: new Date(),
      minDataValue: initialData.length > 0 ? Math.min(...initialData.map(item => item[1])) : 0,
      maxDataValue: initialData.length > 0 ? Math.max(...initialData.map(item => item[1])) : 0,
      hoveredValue: firstValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }), // Initialisiert mit dem neuesten Wert
      hoveredDate: firstDate,
      currentValue: firstValue,
      startDate: "",
      endDate: "",
      annualReturn: 0,
      totalReturn: 0,
      modalIsOpen: false,
      period: '3Y',
      selectingField: null // Zustand zum Wechseln zwischen Start- und Enddatum
    };

    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.updateData('3Y');
    const firstValue = this.state.seriesData.length > 0 ? this.state.seriesData[0][1] : 0;
    const firstDate = this.state.seriesData.length > 0 ? new Date(this.state.seriesData[0][0]).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' }) : "";
    this.setState({ 
        currentValue: firstValue,
        hoveredValue: firstValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        hoveredDate: firstDate
    });

    document.addEventListener('keydown', this.handleKeyPress); // Hinzugefügt: Event-Listener für Enter-Taste
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress); // Entferne Event-Listener bei Komponenten-Demontage
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.closeModal();
    }
  }

  convertData = (data) => {
    return data.map(item => [
      new Date(item[0]).getTime(),
      parseFloat(item[1])
    ]);
  }

  convertIntradayData = (data) => {
    return data.map(item => [
      new Date(item[0]).getTime(),
      parseFloat(item[1])
    ]);
  }

  handleDateChange = (field, event) => {
    this.setState({ [field]: event.target.value }, this.updateData);
  }

  calculateReturns = (data) => {
    if (data.length < 2) return { annualReturn: 0, totalReturn: 0 };

function formatNumber(number) {
  // Formatiert die Zahl mit Tausendertrennzeichen und zwei Dezimalstellen
  return number // Stellt sicher, dass immer zwei Dezimalstellen vorhanden sind
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") // Fügt Punkte als Tausendertrennzeichen hinzu
    .replace(",", "Y")
    .replace(".", ",")
    .replace("Y", ".")
}


    const startValue = data[data.length - 1][1];
    const endValue = data[0][1];
    let totalReturn = ((endValue / startValue) - 1) * 100;

    const endDate = new Date(data[0][0]);
    const startDate = new Date(data[data.length - 1][0]);
    const years = -(startDate - endDate) / (1000 * 60 * 60 * 24 * 365.25); // Berücksichtigt Schaltjahre
    

    let annualReturn = (((endValue / startValue) ** (1 / years) - 1) * 100).toFixed(2);
    annualReturn = formatNumber(annualReturn);
    totalReturn = formatNumber(totalReturn.toFixed(2));
    if (years < 0.95) {
      annualReturn = `${annualReturn}% p.a. (Rendite hochgerechnet)`;
    } else {
      annualReturn = `${annualReturn}% p.a.`;
    }

    return { annualReturn: annualReturn, totalReturn: totalReturn };
  }

  fetchIntradayData = async (ticker) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/companyinfo/Intraday/${ticker}`);
      const intradayData = this.convertData(response.data.myData);
      this.setState({ seriesData: intradayData }, () => {
        this.updateData();
      });
    } catch (error) {
      console.error("Error fetching intraday data:", error);
      // Error-Feedback an den Nutzer könnte hier hinzugefügt werden
    }
  }

  updateData = (timeline) => {
    const { ticker } = this.props;
    const now = new Date();
    const newMin = new Date(now);
    let newMax = now;

    if (timeline === '1T') {
      this.setState({ seriesData: this.state.seriesData }, () => {
        this.fetchIntradayData(ticker);
      });
      return;
    }

    if (timeline) {
      this.setNewMinMax(timeline, newMin, newMax, now);
    } else {
      const { startDate, endDate } = this.state;
      if (startDate) newMin.setTime(new Date(startDate).getTime());
      if (endDate) newMax = new Date(endDate);
    }

    const filteredData = this.state.seriesData.filter(data => {
      const dataDate = new Date(data[0]);
      return dataDate >= newMin && dataDate <= newMax;
    });

    const { annualReturn, totalReturn } = this.calculateReturns(filteredData);

    if (filteredData.length > 0) {
      const lastDataPointDate = new Date(Math.max(...filteredData.map(item => item[0])));
      if (lastDataPointDate < now) {
        newMax = lastDataPointDate;
      }
    }

    const valueRange = filteredData.map(item => item[1]);
    let minDataValue = Math.min(...valueRange),
      maxDataValue = Math.max(...valueRange);

    const valuePadding = (maxDataValue - minDataValue) * 0.1;
    minDataValue = Math.max(0, minDataValue - valuePadding);
    maxDataValue += valuePadding;

    this.setState({
      currentMin: newMin.getTime(),
      currentMax: newMax.getTime(),
      minDataValue: minDataValue,
      maxDataValue: maxDataValue,
      annualReturn: annualReturn,
      totalReturn: totalReturn,
      currentValue: filteredData.length > 0 ? filteredData[filteredData.length - 1][1] : this.state.currentValue,
      period: timeline, // Perioden-Auswahl aktualisieren
      startDate: newMin.toISOString().split('T')[0],
      endDate: newMax.toISOString().split('T')[0]
    });
  }

  setNewMinMax = (timeline, newMin, newMax, now) => {
    switch (timeline) {
      case '1T':
        newMin.setDate(now.getDate() - 1);
        break;
      case '1W':
        newMin.setDate(now.getDate() - 7);
        break;
      case '2W':
        newMin.setDate(now.getDate() - 14);
        break;
      case '1M':
        newMin.setMonth(now.getMonth() - 1);
        break;
      case '3M':
        newMin.setMonth(now.getMonth() - 3);
        break;
      case '6M':
        newMin.setMonth(now.getMonth() - 6);
        break;
      case '1Y':
        newMin.setFullYear(now.getFullYear() - 1);
        break;
      case '3Y':
        newMin.setFullYear(now.getFullYear() - 3);
        break;
      case '5Y':
        newMin.setFullYear(now.getFullYear() - 5);
        break;
      case '10Y':
        newMin.setFullYear(now.getFullYear() - 10);
        break;
      case 'ytd':
        newMin.setMonth(0);
        newMin.setDate(1);
        break;
      case 'all':
        const dates = this.state.seriesData.map(item => item[0]);
        newMin.setTime(Math.min(...dates));
        newMax = new Date(Math.max(...dates));
        break;
      default:
        return;
    }
  }

  getOption = () => {
    const { minDataValue, maxDataValue } = this.state;
  
    const niceMin = Math.floor(minDataValue / 0.2) * 0.2;
    const niceMax = Math.ceil(maxDataValue / 0.2) * 0.2;
    const interval = Math.ceil((niceMax - niceMin) / 3);
  
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          snap: false, // Ensure the line is always shown when hovering over the chart
          label: {
            show: false
          },
          lineStyle: {
            type: 'solid',
            color: '#6a7985'
          }
        },
        backgroundColor: 'rgba(0,0,0,0)', // Make the tooltip background transparent
        borderWidth: 0, // Remove the border
        textStyle: {
          color: 'rgba(0,0,0,0)' // Make the text transparent
        },
        formatter: (params) => {
          const value = params[0].data[1];
          const displayDate = new Date(params[0].data[0]).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' });
          const hoveredValue = `${value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
          const hoveredDate = `${displayDate}`;
  
          if (this.state.hoveredValue !== hoveredValue || this.state.hoveredDate !== hoveredDate) {
            this.setState({ hoveredValue: hoveredValue, hoveredDate: hoveredDate });
          }
  
          // Return an empty string to hide the tooltip text
          return '';
        }
      },
      xAxis: {
        type: 'time',
        min: this.state.currentMin,
        max: this.state.currentMax,
        axisLabel: {
          color: "#ccc",
          formatter: (value) => {
            let date = new Date(value);
            let month = date.toLocaleString('default', { month: 'short' });
            let year = date.getFullYear();
            return `${month} ${year}`;
          }
        },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        min: niceMin,
        max: niceMax,
        interval: interval,
        splitNumber: 1,
        axisLabel: {
          color: "#ccc",
          formatter: (value) => value.toFixed(0) // Keine Nachkommastellen
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.1)'
          }
        },
        position: 'right',
      },
      series: [{
        data: this.state.seriesData,
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
          width: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#83bff6'
          }, {
            offset: 1, color: '#188df0'
          }]),
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: 'rgba(24, 141, 240, 0.3)'
          }, {
            offset: 1, color: 'rgba(24, 141, 240, 0.1)'
          }])
        }
      }],
      grid: {
        left: '2%',
        right: '2%',
        bottom: '0%',
        containLabel: true,
        show: false,
      },
    };
  };

  onChartReady = (chart) => {
    this.chart = chart;
    chart.on('click', this.handleChartClick); // Hinzugefügt: Event-Listener für Klick-Events

    chart.on('mousemove', (params) => {
        const value = params[0].data[1];
        const displayDate = new Date(params[0].data[0]).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const hoveredValue = `${value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const hoveredDate = `${displayDate}`;

        if (this.state.hoveredValue !== hoveredValue || this.state.hoveredDate !== hoveredDate) {
            this.setState({ hoveredValue: hoveredValue, hoveredDate: hoveredDate });
        }
    });

    chart.on('globalout', () => {
        const firstDataPoint = this.state.seriesData.length > 0 ? this.state.seriesData[0] : [0, 0];
        const firstValue = firstDataPoint[1];
        const displayDate = new Date(firstDataPoint[0]).toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const hoveredValue = `${firstValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const hoveredDate = `${displayDate}`;
        this.setState({ 
            hoveredValue: hoveredValue,
            hoveredDate: hoveredDate,
            currentValue: firstValue
        });
    });
  };

  handleChartClick = (params) => {
    const clickedDate = new Date(params.data[0]).toISOString().split('T')[0];
    if (this.state.selectingField === 'startDate') {
      this.setState({ startDate: clickedDate, selectingField: null }, () => {
        this.updateData();
      });
    } else if (this.state.selectingField === 'endDate') {
      this.setState({ endDate: clickedDate, selectingField: null }, () => {
        this.updateData();
      });
    }
  }
  

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, selectingField: null });
  }

  enableDateSelection = (field) => {
    this.setState({ selectingField: field, modalIsOpen: false });
  }

  render() {
    const { hoveredValue, hoveredDate, currentValue, startDate, endDate, annualReturn, totalReturn, modalIsOpen, period, selectingField } = this.state;
    const { quickinfoData } = this.props;
    const intervals = [
      '1W', '1M', '3M', '6M',
      'ytd', '1Y', '3Y', '5Y', '10Y', 'all'
    ];
  
    return (
      <>
        <div className="Aktiendashboard-Aktienkurs-container">
          <div className="quickInfoCompanyData">
          </div>
          <div className="Aktiendashboard-Aktienkurs-returns">
            <div className="stockPriceReturnContainer">
              <p className="stockPriceDisplay">{hoveredValue} {quickinfoData.currency}</p>
              <p className="stockDateDisplay">{hoveredDate}</p>
              <div className="splitLine"></div>
              <p className="stockReturnHeadline">Betrachteter Zeitraum</p>
              <p className="stockDateRangeDisplay">{new Date(startDate).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })} - {new Date(endDate).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
              <p className="stockReturnsDisplay">Rendite: {totalReturn}% | {annualReturn}</p>
            </div>
          </div>
          <div className="optionsButtonContainer">
            <button onClick={this.openModal} className="choseTimelineButton">Zeitraum auswählen</button>
          </div>
          <div className="Aktiendashboard-Aktienkurs-container-chart">
            <ReactECharts
              option={this.getOption()}
              style={{ height: '400px', width: '100%' }}
              onChartReady={this.onChartReady}
            />
          </div>
        </div>
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Zeitraum auswählen"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="modal-header">
            <h2>Zeitraum auswählen</h2>
            <button className="close-button" onClick={this.closeModal}>X</button>
          </div>
          {intervals.map(timeline => (
            <button key={timeline} className="Aktiendashboard-Aktienkurs-Button" onClick={() => { this.updateData(timeline); this.closeModal(); }} id={timeline}>
              {timeline.toUpperCase().replace('_', ' ')}
            </button>
          ))}
          <div className="Aktiendashboard-Aktienkurs-modal-date-inputs">
            <label>Startdatum:</label>
            <div className="date-input-container">
              <input
                type="date"
                value={startDate}
                onChange={(e) => this.handleDateChange('startDate', e)}
                className={`Aktiendashboard-Aktienkurs-DateInput ${selectingField === 'startDate' ? 'selecting' : ''}`}
              />
            </div>
            <label>Enddatum:</label>
            <div className="date-input-container">
              <input
                type="date"
                value={endDate}
                onChange={(e) => this.handleDateChange('endDate', e)}
                className={`Aktiendashboard-Aktienkurs-DateInput ${selectingField === 'endDate' ? 'selecting' : ''}`}
              />
            </div>
          </div>
        </Modal>
      </>
    );
  }
  
}

export default Aktienkurs;
