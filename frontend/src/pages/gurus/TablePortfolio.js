import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import "../gurus/GurusStyle.css"

function TablePortfolio({ data }) {
  return (
    <div className="carousel-slider">
      <div className="tableHeader">
        <table
          className="carousel-table"
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Anteil</th>
              <th>Shares</th>
              <th>Sektor</th>
              {/* <th>Change</th> */}
              <th>Wert</th>
              <th>Wert/Aktie</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="tableInhalt">
        <table
          className="carousel-table"
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <tbody>
            {data.map((daten, i) => (
              <tr key={i}>
                <td>
                <img
                   loading="lazy"
                    height="24"
                    src={`https://financialmodelingprep.com/image-stock/${daten.ticker.toUpperCase()}.png`}
                    alt=""
                 />
                </td>
                <td><Link  className="guruTableLinks" to={`/aktien/${daten.ticker}`}>{daten.name}</Link></td>
                <td><NumberFormat value={daten.anteilValue} displayType={'text'}  decimalSeparator={','} suffix={' %'}  /></td>
                <td><NumberFormat value={daten.shares} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /></td>
                <td>{daten.sector}</td>
                {/* <td><NumberFormat value={daten.changes/1} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} suffix={' %'}/></td> */}
                <td><NumberFormat value={daten.value} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} suffix={' $'} /></td>
                <td><NumberFormat value={daten.sharePerValue} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} suffix={' $'} decimalScale={2}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablePortfolio;
