import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Tracker.css';
import PortfolioChart from './PortfolioChart';
import PortfolioPieChart from './PortfolioPieChart';
import RenderPortfolio from './RenderPortfolio';
import PortfolioHistory from './PortfolioHistory'; // Neue Komponente importieren

function Tracker() {
  const [transactions, setTransactions] = useState([]);
  const [ticker, setTicker] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchaseDate, setPurchaseDate] = useState(getTodayDate());
  const [portfolio, setPortfolio] = useState({});
  const [chartData, setChartData] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/companyinfo/Aktienkurs/`;

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = user?.token;
    if (!token) {
      console.error('No token found. Redirecting to login page.');
      navigate('/login'); // Weiterleitung zur Anmeldeseite
      return;
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, navigate]);

  useEffect(() => {
    if (ticker) {
      fetchPurchasePrice(ticker, purchaseDate);
    }
  }, [ticker, purchaseDate]);

  useEffect(() => {
    const fetchData = async () => {
      const uniqueTickers = [...new Set(transactions.map(transaction => transaction.ticker))];

      for (const ticker of uniqueTickers) {
        try {
          const response = await fetch(apiUrl + ticker);
          const data = await response.json();
          setChartData(prevData => ({
            ...prevData,
            [ticker]: data.myData,
          }));
        } catch (error) {
          console.error('Error fetching the data', error);
        }
      }
    };

    fetchData();
  }, [transactions]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const profile = JSON.parse(localStorage.getItem('profile'));
        const token = profile?.token;
        console.log('Token:', token); // Log the token to check if it's retrieved correctly
        if (!token) {
          console.error('No token found. Redirecting to login page.');
          navigate('/login'); // Weiterleitung zur Anmeldeseite
          return;
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/portfolio/get`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`Error fetching transactions: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fetched transactions:', data); // Log the fetched data
        setTransactions(data.transactions);
        updatePortfolio(data.transactions);
      } catch (error) {
        console.error('Error fetching transactions', error);
      }
    };

    fetchTransactions();
  }, [navigate]);

  const fetchPurchasePrice = async (ticker, date) => {
    try {
      const response = await fetch(`${apiUrl}${ticker}?date=${date}`);
      const data = await response.json();
      const priceEntry = data.myData.find(entry => entry[0] === date);

      if (priceEntry) {
        const price = priceEntry[1];
        setPurchasePrice(price);
      } else {
        setPurchasePrice('');
      }
    } catch (error) {
      console.error('Error fetching purchase price', error);
    }
  };

  const handleTickerChange = (e) => {
    const tickerValue = e.target.value;
    setTicker(tickerValue);
    if (tickerValue) {
      fetchPurchasePrice(tickerValue, getTodayDate());
    }
  };

  const handlePurchaseDateChange = (e) => {
    const date = e.target.value;
    setPurchaseDate(date);
    if (ticker) {
      fetchPurchasePrice(ticker, date);
    }
  };

  const handlePurchasePriceChange = (e) => {
    setPurchasePrice(e.target.value);
  };

  const savePortfolioToServer = async (updatedPortfolio) => {
    try {
      const profile = JSON.parse(localStorage.getItem('profile'));
      const token = profile?.token;
      console.log('Token before saving portfolio:', token); // Log the token to check if it's retrieved correctly
      if (!token) {
        console.error('No token found. Redirecting to login page.');
        navigate('/login'); // Weiterleitung zur Anmeldeseite
        return;
      }

      setIsSaving(true); // Set saving state
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/portfolio/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedPortfolio)
      });
      setIsSaving(false); // Reset saving state
      if (!response.ok) {
        throw new Error('Error saving portfolio');
      }
      const data = await response.json();
      console.log('Portfolio saved successfully:', data);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000); // Reset success indicator after 2 seconds
    } catch (error) {
      console.error('Error saving portfolio:', error);
    }
  };

  const addTransaction = () => {
    const newTransaction = {
      ticker,
      purchasePrice: parseFloat(purchasePrice),
      quantity: parseInt(quantity),
      purchaseDate,
    };
    let updatedTransactions;
    if (editIndex !== null) {
      updatedTransactions = transactions.map((transaction, index) =>
        index === editIndex ? newTransaction : transaction
      );
      setEditIndex(null);
    } else {
      updatedTransactions = [...transactions, newTransaction];
    }
    setTransactions(updatedTransactions);
    setTicker('');
    setPurchasePrice('');
    setQuantity('');
    setPurchaseDate(getTodayDate());
    updatePortfolio(updatedTransactions);

    // Speichern des gesamten Portfolios auf dem Server
    const updatedPortfolio = {
      name: 'Mein Portfolio', // Sie können dies dynamisch machen
      transactions: updatedTransactions
    };
    savePortfolioToServer(updatedPortfolio);
  };

  const updatePortfolio = (updatedTransactions) => {
    const newPortfolio = updatedTransactions.reduce((acc, transaction) => {
      const { ticker, purchasePrice, quantity, purchaseDate } = transaction;
      const currentHolding = acc[ticker] || { quantity: 0, purchasePrice: 0, totalValue: 0, purchases: [] };

      const updatedHolding = {
        quantity: currentHolding.quantity + quantity,
        purchasePrice: (currentHolding.purchasePrice * currentHolding.quantity + purchasePrice * quantity) / (currentHolding.quantity + quantity),
        totalValue: (currentHolding.quantity + quantity) * purchasePrice,
        purchases: [...currentHolding.purchases, { quantity, date: purchaseDate, purchasePrice }],
      };

      acc[ticker] = updatedHolding;
      return acc;
    }, {});

    setPortfolio(newPortfolio);
  };

  const handleEdit = (index) => {
    const transaction = transactions[index];
    setTicker(transaction.ticker);
    setPurchasePrice(transaction.purchasePrice);
    setQuantity(transaction.quantity);
    setPurchaseDate(transaction.purchaseDate);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
    updatePortfolio(updatedTransactions);

    // Speichern des aktualisierten Portfolios auf dem Server
    const updatedPortfolio = {
      name: 'Mein Portfolio', // Sie können dies dynamisch machen
      transactions: updatedTransactions
    };
    savePortfolioToServer(updatedPortfolio);
  };

  return (
    <div className="trackerContainer">
      <div className='topContainer'>
        <div className="transactionInput">
          <h1>Transaktion hinzufügen</h1>
          <label>
            Ticker:
            <input type="text" value={ticker} onChange={handleTickerChange} />
          </label>
          <label>
            Kaufdatum:
            <input type="date" value={purchaseDate} onChange={handlePurchaseDateChange} />
          </label>
          <label>
            Kaufkurs:
            <input type="number" value={purchasePrice} onChange={handlePurchasePriceChange} />
          </label>
          <label>
            Stück:
            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
          </label>
          <button onClick={addTransaction} className="addButton">{editIndex !== null ? 'Aktualisieren' : 'Hinzufügen'}</button>
        </div>
        <div className="portfolioEvaluation">
          <PortfolioChart chartData={chartData} portfolio={portfolio} transactions={transactions} />
          <PortfolioPieChart portfolio={portfolio} />
        </div>
        {isSaving && <div className="savingIndicator">Speichern...</div>}
        {saveSuccess && <div className="successIndicator"></div>}
      </div>

      <RenderPortfolio portfolio={portfolio} chartData={chartData} />

      <PortfolioHistory transactions={transactions} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default Tracker;
