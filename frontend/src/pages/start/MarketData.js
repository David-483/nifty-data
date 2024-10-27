import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
import Modal from 'react-modal';
import './MarketData.css'; // Für die CSS-Styling
import MarketDataBanner from './MarketDataBanner';

const MarketData = () => {
    const [isErrorMarketData, setIsErrorMarketData] = useState(false);
    const [isErrorIndexData, setIsErrorIndexData] = useState(false);
    const [dataMarketData, setDataMarketData] = useState([]);
    const [dataIndexData, setDataIndexData] = useState(null);
    const [filter, setFilter] = useState('US');
    const [searchTerm, setSearchTerm] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [hoveredData, setHoveredData] = useState({ date: '', price: '' });
    const [timeRange, setTimeRange] = useState('3Y'); // Standardmäßig 3 Jahre
    const tickerRef = useRef(null);


    const baseURL = process.env.REACT_APP_BACKEND_URL;
    const baseMarketDataURL = `${baseURL}/marketData`;

    const fetchMarketData = async () => {
        setIsErrorMarketData(false);
        try {
            const result = await axios.get(baseMarketDataURL);
            setDataMarketData(result.data);
        } catch (error) {
            setIsErrorMarketData(true);
        }
    };

    const fetchIndexData = async (symbol, name) => {
        setIsErrorIndexData(false);
        try {
            const url = `${baseURL}/companyinfo/Aktienkurs/${symbol}`;
            console.log('Fetching index data from URL:', url); // Log the URL
            const result = await axios.get(url);
            console.log('Index Data:', result.data); // Log the raw data
            setDataIndexData({ ...result.data, indexName: name });
            setHoveredData({ date: result.data.myData[0][0], price: result.data.myData[0][1] }); // Initialwert setzen
            setModalIsOpen(true);
        } catch (error) {
            console.error('Error fetching index data:', error);
            setIsErrorIndexData(true);
        }
    };
    

    useEffect(() => {
        fetchMarketData();
    }, []);

    useEffect(() => {
        if (tickerRef.current) {
            const tickerWidth = tickerRef.current.scrollWidth;
            const containerWidth = tickerRef.current.clientWidth;
            const duration = (tickerWidth / containerWidth) * 100; // Anpassung der Basisdauer nach Bedarf
            tickerRef.current.style.animationDuration = `${duration}s`;
        }
    }, [dataMarketData]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('de-DE').format(price);
    };

    const formatChangePercentage = (percentage) => {
        return `${percentage?.toFixed(2)}%`;
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return `${date.toLocaleDateString('de-DE')} | ${date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}`;
    };

    

    const filteredData = dataMarketData.filter(item => {
        const matchesFilter = (() => {
            switch (filter) {
                case 'USA':
                    return ['^SPX', '^NYA', 'SP500TR', '^IXIC', '^DJI', '^RUT', '^W5000'].includes(item.symbol);
                    case 'Dow Jones':
                        return ['^DJU', '^DJT', '^W1DOW',].includes(item.symbol);
                case 'S&P 500':
                    return ['^SP500TR', '^SPX', '^SPXESUP', '^SP500-15', '^SP500-20', '^SP500-25', '^SP500-30', '^SP500-35', '^SP500-40', '^SP500-45', '^SP500-50', '^SP500-55', '^SP500-60', '^GSPE'].includes(item.symbol);
                case 'DE':
                    return ['^GDAXI', '^MDAXI', '^SDAXI', '^TECDAX'].includes(item.symbol);
                case 'Mixed':
                    return ['^STOXX50E', 'MSCIWORLD', '^FTSE', '^N225'].includes(item.symbol);
                default:
                    return true;
            }
        })();
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.symbol.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearchTerm;
    });

    const tickerData = dataMarketData.filter(item =>
        item.symbol === 'MSCIWORLD' || 
        item.symbol === '^STOXX50E' || 
        item.symbol === '^W5000' || 
        item.symbol === '^RUT' || 
        item.symbol === '^SPX' || 
        item.symbol === '^IXIC' || 
        item.symbol === '^DJI' || 
        item.symbol === 'GDAXI' || 
        item.symbol === '^MDAXI' || 
        item.symbol === '^SDAXI' || 
        item.symbol === '^TECDAX' || 
        item.symbol === '^FTSE' || 
        item.symbol === '^N225' || 
        item.symbol === '^SPX');

        const getChartOptions = (data, indexName) => {
            const { filteredData, min, max } = filterDataByRange(data.myData, timeRange);
            return {
                title: {
                    text: indexName, // Name des Index anzeigen
                    left: 'center',
                    textStyle: {
                        color: '#FFFFFF' // Weiße Schriftfarbe für den Titel
                    }
                },
                grid: {
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 20,
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    },
                    formatter: function (params) {
                        const date = params[0].name;
                        const price = params[0].value;
                        setHoveredData({ date, price });
                        return ''; // Tooltip Text leer lassen
                    },
                    backgroundColor: 'rgba(0, 0, 0, 0)' // Tooltip Hintergrund unsichtbar machen (opacity 0)
                },
                xAxis: {
                    type: 'category',
                    data: filteredData.map(item => {
                        const date = new Date(item[0]);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                        return `${day}.${month}.${year}`;
                    }).reverse(), // Daten umdrehen und Datum formatieren
                    axisLine: { // Achsenlinien entfernen
                        show: false
                    },
                    axisTick: { // Achsenmarkierungen entfernen
                        show: false
                    },
                    splitLine: { // Gitterlinien entfernen
                        show: false
                    },
                    axisLabel: {
                        color: '#FFFFFF' // Weiße Schriftfarbe für die Achsenbeschriftungen
                    }
                },
                yAxis: {
                    type: 'value',
                    min: min,
                    max: max,
                    axisLine: { // Achsenlinien entfernen
                        show: false
                    },
                    axisTick: { // Achsenmarkierungen entfernen
                        show: false
                    },
                    splitLine: { // Gitterlinien entfernen
                        show: false
                    },
                    axisLabel: {
                        color: '#FFFFFF' // Weiße Schriftfarbe für die Achsenbeschriftungen
                    }
                },
                series: [{
                    data: filteredData.map(item => item[1]).reverse(), // Daten umdrehen
                    type: 'line',
                    smooth: true, // Linie glatt machen
                    lineStyle: {
                        color: '#FFFFFF', // Weiße Linie
                        width: 2 // Dickere Linie
                    },
                    itemStyle: {
                        opacity: 0 // Punkte entfernen
                    }
                }]
            };
        };
        
        
        const filterDataByRange = (data, range) => {
            const now = new Date();
            let startDate;
            let frequency = 'daily';
        
            switch (range) {
                case '1Y':
                    startDate = new Date(now.setFullYear(now.getFullYear() - 1));
                    break;
                case '3Y':
                    startDate = new Date(now.setFullYear(now.getFullYear() - 3));
                    frequency = 'weekly';
                    break;
                case '5Y':
                    startDate = new Date(now.setFullYear(now.getFullYear() - 5));
                    frequency = 'monthly';
                    break;
                case '10Y':
                    startDate = new Date(now.setFullYear(now.getFullYear() - 10));
                    frequency = 'monthly';
                    break;
                case 'Max':
                    return { 
                        filteredData: aggregateData(data, 'monthly'), 
                        min: Math.floor(Math.min(...data.map(item => parseFloat(item[1])))), 
                        max: Math.ceil(Math.max(...data.map(item => parseFloat(item[1]))))
                    };
                default:
                    startDate = new Date(now.setFullYear(now.getFullYear() - 3));
                    frequency = 'weekly';
            }
        
            const filteredData = data.filter(item => new Date(item[0]) >= startDate);
            const aggregatedData = aggregateData(filteredData, frequency);
            const min = Math.floor(Math.min(...aggregatedData.map(item => parseFloat(item[1]))));
            const max = Math.ceil(Math.max(...aggregatedData.map(item => parseFloat(item[1]))));
            return { filteredData: aggregatedData, min, max };
        };
        
        const aggregateData = (data, frequency) => {
            if (frequency === 'weekly') {
                return aggregateWeekly(data);
            } else if (frequency === 'monthly') {
                return aggregateMonthly(data);
            }
            return data;
        };
        
        const aggregateWeekly = (data) => {
            const weeklyData = [];
            let currentWeek = [];
            data.forEach((item, index) => {
                currentWeek.push(item);
                if (new Date(item[0]).getDay() === 5 || index === data.length - 1) { // Freitag oder letzter Tag der Daten
                    const averagePrice = currentWeek.reduce((acc, curr) => acc + parseFloat(curr[1]), 0) / currentWeek.length;
                    weeklyData.push([currentWeek[0][0], averagePrice.toFixed(2)]);
                    currentWeek = [];
                }
            });
            return weeklyData;
        };
        
        const aggregateMonthly = (data) => {
            const monthlyData = [];
            let currentMonth = [];
            let currentMonthLabel = new Date(data[0][0]).getMonth();
            data.forEach((item, index) => {
                const itemMonth = new Date(item[0]).getMonth();
                if (itemMonth !== currentMonthLabel || index === data.length - 1) {
                    if (index === data.length - 1) currentMonth.push(item); // Add the last item
                    const averagePrice = currentMonth.reduce((acc, curr) => acc + parseFloat(curr[1]), 0) / currentMonth.length;
                    monthlyData.push([currentMonth[0][0], averagePrice.toFixed(2)]);
                    currentMonth = [item];
                    currentMonthLabel = itemMonth;
                } else {
                    currentMonth.push(item);
                }
            });
            return monthlyData;
        };
        
    

    const handleTimeRangeChange = (range) => {
        setTimeRange(range);
    };


    return (
        <div>
            <div className="ticker-container">
                {isErrorMarketData && <p>Error fetching market data.</p>}
                <div className="ticker-wrapper">
                    <div className="ticker" ref={tickerRef}>
                        <ul>
                            {[...tickerData, ...tickerData].map((item, index) => (
                                <li key={`${item.symbol}-${index}`} className="ticker-item">
                                    <span className="name">{item.name}</span>
                                    <span className="symbol">{item.symbol}</span>
                                    <span className="price">
                                        {formatPrice(item.price)} 
                                        <span className={`change ${item.changesPercentage < 0 ? 'negative' : 'positive'}`}>
                                            ({formatChangePercentage(item.changesPercentage)})
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="homeTopContainer">

         <MarketDataBanner dataMarketData={dataMarketData}/>
  <div className='marketDataContainer'>
  <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Suche..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
            </div>


            <div className="filter-buttons">
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('USA')}>USA</button>
                <button onClick={() => setFilter('S&P 500')}>S&P 500</button>
                <button onClick={() => setFilter('Dow Jones')}>Dow Jones Family</button>
                <button onClick={() => setFilter('DE')}>DE</button>
                <button onClick={() => setFilter('Mixed')}>Mixed</button>
            </div>

            <div className="market-table-container">
                <table className="market-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Indexstand</th>
                            <th>Veränderung</th>
                            <th>Volumen</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
    {filteredData.map((item, index) => (
        <tr key={index} onClick={() => fetchIndexData(item.symbol, item.name)}>
            <td className='nameCell'>{item.name} <br></br> <span style={{fontSize:"12px", color:"orange"}}> {item.symbol} </span> </td>
            <td>{formatPrice(item.price)}</td>
            <td className={item.changesPercentage < 0 ? 'negative' : 'positive'}>
                {formatChangePercentage(item.changesPercentage)}
            </td>
            <td>{item.volume === 0 ? 'Keine Daten' : formatPrice(item.volume)}</td>
            <td>{formatTimestamp(item.timestamp)}</td>
        </tr>
    ))}
</tbody>

                </table>
            </div>
            </div>
            <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    contentLabel="Index Chart"
    className="indexPopUpContainer"
    overlayClassName="Overlay"
    shouldCloseOnOverlayClick={true} // Ermöglicht das Schließen durch Klicken außerhalb des Fensters
>
    <button onClick={() => setModalIsOpen(false)} className="closeButtonIndexPopUp">x</button>
    <div className="chart-header">
        <div className="chart-info">
            <span style={{fontSize:"30px", fontWeight:"700"}}>{hoveredData.price} Pkt.</span>
            <span style={{fontSize:"16px", color:"grey"}}>{hoveredData.date}</span>
        </div>
        <div className="time-range-buttons">
            <button onClick={() => handleTimeRangeChange('1Y')}>1J</button>
            <button onClick={() => handleTimeRangeChange('3Y')}>3J</button>
            <button onClick={() => handleTimeRangeChange('5Y')}>5J</button>
            <button onClick={() => handleTimeRangeChange('10Y')}>10J</button>
            <button onClick={() => handleTimeRangeChange('Max')}>Max</button>
        </div>
    </div>
    {dataIndexData ? (
        <ReactEcharts option={getChartOptions(dataIndexData, dataIndexData.indexName)} style={{ height: '500px' }} /> 
    ) : (
        <p>Loading...</p>
    )}
</Modal>

</div>

        </div>
    );
};

export default MarketData;
