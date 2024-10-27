import React from 'react';
import './RenderPortfolio.css';

function RenderPortfolio({ portfolio, chartData }) {
  const totalInvested = Object.values(portfolio).reduce((acc, { totalValue }) => acc + totalValue, 0);
  const totalBuyPrice = Object.keys(portfolio).reduce((acc, ticker) => {
    const { quantity, purchasePrice } = portfolio[ticker];
    return acc + (quantity * purchasePrice);
  }, 0);
  const totalCurrentValue = Object.keys(portfolio).reduce((acc, ticker) => {
    const currentPrice = chartData[ticker] ? parseFloat(chartData[ticker][0][1]) : 0;
    const { quantity } = portfolio[ticker];
    return acc + quantity * currentPrice;
  }, 0);
  const totalProfit = totalCurrentValue - totalBuyPrice;
  const percentageProfit = (totalProfit / totalBuyPrice) * 100;

  return (
    <div className="portfolio-container">
      <div className="portfolio-summary">
        <div><strong>Aktueller Wert:</strong> {totalCurrentValue.toFixed(2)} €</div>
        <div><strong>Investiert:</strong> {totalBuyPrice.toFixed(2)} €</div>
        <div><strong>Gesamtgewinn:</strong> {totalProfit.toFixed(2)} €</div>
        <div><strong>Rendite:</strong> {percentageProfit.toFixed(2)} %</div>
      </div>
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Anzahl</th>
            <th>Durchschnittlicher Kaufpreis</th>
            <th>Aktueller Kurs</th>
            <th>Kaufpreis</th>
            <th>Gewinn</th>
            <th>Gesamtwert</th>
            <th>Prozentualer Gewinn</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(portfolio).map(ticker => {
            const currentPrice = chartData[ticker] ? parseFloat(chartData[ticker][0][1]) : 0;
            const { quantity, purchasePrice, totalValue } = portfolio[ticker];
            const currentValue = quantity * currentPrice;
            const buyPrice = purchasePrice * quantity;
            const profit = currentValue - buyPrice;
            const percentageProfit = ((currentValue / buyPrice) - 1) * 100;

            return (
              <tr key={ticker}>
                <td>{ticker}</td>
                <td>{quantity}</td>
                <td>{purchasePrice.toFixed(2)} €</td>
                <td>{currentPrice.toFixed(2)} €</td>
                <td>{buyPrice.toFixed(2)} €</td>
                <td>{profit.toFixed(2)} €</td>
                <td>{currentValue.toFixed(2)} €</td>
                <td>{percentageProfit.toFixed(2)} %</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RenderPortfolio;
