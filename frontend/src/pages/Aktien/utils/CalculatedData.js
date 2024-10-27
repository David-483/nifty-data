import "./CalculatedData.css";

function CalculatedData() {
  return (
    <div className="Aktiendashboard-CalculatedData-container">
      <h1> Valuation </h1>

      <div className="Aktiendashboard-CalculatedData-container-infos">
        <h4 className="Aktiendashboard-CalculatedData-content-info">KGV: </h4>
        <h4 className="Aktiendashboard-CalculatedData-content-value">
          {" "}
          285 Mrd. USD
        </h4>
      </div>
      <div className="Aktiendashboard-CalculatedData-container-infos">
        <h4 className="Aktiendashboard-CalculatedData-content-info">KUV: </h4>
        <h4 className="Aktiendashboard-CalculatedData-content-value">
          {" "}
          285 Mrd. USD
        </h4>
      </div>
      <div className="Aktiendashboard-CalculatedData-container-infos">
        <h4 className="Aktiendashboard-CalculatedData-content-info">PEG: </h4>
        <h4 className="Aktiendashboard-CalculatedData-content-value">
          {" "}
          285 Mrd. USD
        </h4>
      </div>
      <div className="Aktiendashboard-CalculatedData-container-infos">
        <h4 className="Aktiendashboard-CalculatedData-content-info">PSG: </h4>
        <h4 className="Aktiendashboard-CalculatedData-content-value">
          {" "}
          285 Mrd. USD
        </h4>
      </div>
    </div>
  );
}

export default CalculatedData;
