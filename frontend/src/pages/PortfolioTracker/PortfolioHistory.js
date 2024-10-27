// PortfolioHistory.js

import React from 'react';
import './PortfolioHistory.css';

function PortfolioHistory({ transactions, onEdit, onDelete }) {
  return (
    <div className="transactionHistory">
      <h2>Historie</h2>
      {transactions.map((transaction, index) => (
        <div key={index} className="transactionItem">
          <p><strong>Ticker:</strong> {transaction.ticker}</p>
          <p><strong>Kaufkurs:</strong> {transaction.purchasePrice.toFixed(2)} €</p>
          <p><strong>Stück:</strong> {transaction.quantity}</p>
          <p><strong>Kaufdatum:</strong> {transaction.purchaseDate}</p>
          <button className="editButton" onClick={() => onEdit(index)}>✎</button>
          <button className="deleteButton" onClick={() => onDelete(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default PortfolioHistory;
