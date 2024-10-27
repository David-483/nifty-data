import { Link } from "react-router-dom";
// import "./styles.css";

function TableAbgaenge({ data }) {
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
              <th>Verkäufe</th>
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
                    src={`https://financialmodelingprep.com/image-stock/${daten.ticker.toUpperCase()}.png`}
                    height="24"
                  ></img>
                </td>
                <td>{daten.name}</td>
                <td>{daten.shares} % </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableAbgaenge;
