import React, { useEffect, useState } from 'react';
import './MarketDataBanner.css'; // Für die CSS-Styling

const MarketDataBanner = ({ dataMarketData }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [topGainer, setTopGainer] = useState({});
    const [topLoser, setTopLoser] = useState({});
    const [topMCAP, setTopMCAP] = useState([]);
    const [priceComparison, setPriceComparison] = useState([]);
    const [priceComparison2, setPriceComparison2] = useState([]);


    useEffect(() => {
        // Intervall für Seitenwechsel
        const interval = setInterval(() => {
            setCurrentPage(prevPage => (prevPage + 1) % 5);
        }, 30000); // 30000 Millisekunden = 30 Sekunden

        // Bestimmen des größten Gewinners, Verlierers und Top 3 MCAPs
        if (dataMarketData && dataMarketData.length > 0) {
            let maxChange = -Infinity;
            let minChange = Infinity;
            let maxChangeItem = {};
            let minChangeItem = {};
            let sortedByMCAP = [...dataMarketData].sort((a, b) => b.price - a.price).slice(0, 7);
            let comparison = [...dataMarketData].map(item => ({
                name: item.name,
                difference: ((item.price - item.priceAvg50) / item.priceAvg50) * 100
                
                
            }
            
            )
            ).filter(item => isFinite(item.difference)).sort((a, b) => b.difference - a.difference);


            let comparison2 = [...dataMarketData].map(item => ({
                name: item.name,
                difference2: ((item.price - item.priceAvg200) / item.priceAvg200) * 100
            })).filter(item => isFinite(item.difference2)).sort((a, b) => b.difference2 - a.difference2);

            dataMarketData.forEach(item => {
                if (item.changesPercentage > maxChange) {
                    maxChange = item.changesPercentage;
                    maxChangeItem = item;
                }
                if (item.changesPercentage < minChange && item.changesPercentage !== -1) {
                    minChange = item.changesPercentage;
                    minChangeItem = item;
                }
            });

            setTopGainer(maxChangeItem);
            setTopLoser(minChangeItem);
            setTopMCAP(sortedByMCAP);
            setPriceComparison(comparison);
            setPriceComparison2(comparison2);
        }

        return () => clearInterval(interval);
    }, [dataMarketData]);


    const renderPageContent = () => {
        switch (currentPage) {
            case 0:
                return (
                    <div className='page1OutterContainer'>
                        <div className="page1">
                            MARKETS
                            <div className='splitLine'></div>

                            <div style={{ lineHeight: "20px", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                                {topGainer.name ? `Der ${topGainer.name} ist stark gestiegen. Am letzten Handelstag ist der Index um ${topGainer.changesPercentage}% gestiegen. In Punkten ausgedrückt ist der Index von ${topGainer.previousClose} auf ${topGainer.price} Punkte gestiegen.` : 'Lade Daten...'}
                            </div>

                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className='page2OutterContainer'>
                        <div className="page2">
                            Markets
                            <div className='splitLine'></div>
                            <div style={{ lineHeight: "20px", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                                {topLoser.name ? `Der ${topLoser.name} ist stark gefallen. Am letzten Handelstag ist der Index um ${topLoser.changesPercentage}% gefallen. In Punkten ausgedrückt ist der Index von ${topLoser.previousClose} auf ${topLoser.price} Punkte gefallen.` : 'Lade Daten...'}
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className='page3OutterContainer'>
                        <div className="page3">
                            High Indizes
                            <div className='splitLine'></div>
                            <div style={{ lineHeight: "20px", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                                {topMCAP.length > 0 ? (
                                    <div>
                                        {topMCAP.map((item, index) => (
                                            <span style={{ color: "white" }} key={index}>{item.name}<br></br> <span style={{ opacity: "0.6" }}> {(item.price).toFixed(2)}<br></br><br></br></span></span>
                                        ))}
                                    </div>
                                ) : 'Lade Daten...'}
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className='page4OutterContainer'>
                        <div className="page4">
                            SMA 50
                            <div className='splitLine'></div>
                            <div style={{ lineHeight: "20px", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                                {priceComparison.length > 0 ? (
                                    <div>
                                        <br></br>
                                        <span style={{fontSize:"20px"}} >Top 2</span>
                                        <br></br>
                                        <br></br>
                                        {priceComparison.slice(0, 2).map((item, index) => (
                                            <span style={{ color: "white" }} key={index}>{item.name}<br></br> <span style={{ opacity: "0.6" }}> {item.difference.toFixed(2)}%</span><br></br><br></br></span>
                                        ))}
                                        <br></br>
                                        <br></br>
                                        <span style={{fontSize:"20px"}} >Worst 2</span>
                                        <br></br>
                                        <br></br>
                                        {priceComparison.slice(-2).map((item, index) => (
                                            <span style={{ color: "white" }} key={index}>{item.name}<br></br> <span style={{ opacity: "0.6" }}>{item.difference.toFixed(2)}%</span><br></br><br></br></span>
                                        ))}
                                    </div>
                                ) : 'Lade Daten...'}
                            </div>
                        </div>
                    </div>
                );
                case 4:
                    return (
                        <div className='page5OutterContainer'>
                            <div className="page5">
                                SMA 200
                                <div className='splitLine'></div>
                                <div style={{ lineHeight: "20px", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                                    {priceComparison2.length > 0 ? (
                                        <div>
                                            <br></br>
                                            <span style={{fontSize:"20px"}} >Top 2</span>
                                            <br></br>
                                            <br></br>
                                            {priceComparison2.slice(0, 2).map((item, index) => (
                                                <span style={{ color: "white" }} key={index}>{item.name}<br></br> <span style={{ opacity: "0.6" }}> {item.difference2.toFixed(2)}%</span><br></br><br></br></span>
                                            ))}
                                            <br></br>
                                            <br></br>
                                            <span style={{fontSize:"20px"}} >Worst 2</span>
                                            <br></br>
                                            <br></br>
                                            {priceComparison2.slice(-2).map((item, index) => (
                                                <span style={{ color: "white" }} key={index}>{item.name}<br></br> <span style={{ opacity: "0.6" }}>{item.difference2.toFixed(2)}%</span><br></br><br></br></span>
                                            ))}
                                        </div>
                                    ) : 'Lade Daten...'}
                                </div>
                            </div>
                        </div>
                    );
            default:
                return null;
        }
    };

    return (
        <div className="marketBannerContainer">
            {renderPageContent()}
        </div>
    );
};

export default MarketDataBanner;
