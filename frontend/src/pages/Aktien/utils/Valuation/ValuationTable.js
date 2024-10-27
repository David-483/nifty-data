import React, { useState } from "react";
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";

function ValuationTable({direction, dataTableData}) {
  return (
    <div>
      <div className="Aktiendashboard-datatable-container">
      <table
          className="Aktiendashboard-datatable"
          dir={direction ? "rtl" : "ltr"}
        >
          {/* Datum */}
          <tr>
            {direction ? (
              <></>
            ) : (
              <th className="Aktiendashboard-datatable-firstTH"></th>
            )}

            {dataTableData.map((myValue, index) => (
              <>
                <td>{myValue.date}</td>
              </>
            ))}

            {direction ? (
              <th className="Aktiendashboard-datatable-firstTH"></th>
            ) : (
              <></>
            )}
          </tr>
          <tr>
            
          {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">KGV</td>
                )}

          {dataTableData.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.KGV}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                </td>
              </>
            ))}


            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">KGV</td>
              ) : (
                <></>
                )}
          </tr>
          <tr>

          {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">KUV</td>
                )}

          {dataTableData.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.KUV}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}

                    isNumericString={true}
                    />
                </td>
              </>
            ))}


            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">KUV</td>
              ) : (
                <></>
                )}
</tr>

<tr>

{direction ? (
    <></>
    ) : (
      <td className="Aktiendashboard-datatable-firstTD">KBV</td>
      )}

{dataTableData.map((myValue, index) => (
    <>
      <td style={{ direction: "ltr" }}>
        <NumberFormat
          value={myValue.KBV}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}

          isNumericString={true}
          />
      </td>
    </>
  ))}


  {direction ? (
    <td className="Aktiendashboard-datatable-firstTD">KBV</td>
    ) : (
      <></>
      )}
</tr>

<tr>

{direction ? (
    <></>
    ) : (
      <td className="Aktiendashboard-datatable-firstTD">KFCF</td>
      )}

{dataTableData.map((myValue, index) => (
    <>
      <td style={{ direction: "ltr" }}>
        <NumberFormat
          value={myValue.KFCF}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}

          isNumericString={true}
          />
      </td>
    </>
  ))}


  {direction ? (
    <td className="Aktiendashboard-datatable-firstTD">KFCF</td>
    ) : (
      <></>
      )}
</tr>

<tr>

{direction ? (
    <></>
    ) : (
      <td className="Aktiendashboard-datatable-firstTD">Enterprise Value  </td>
      )}

{dataTableData.map((myValue, index) => (
    <>
      <td style={{ direction: "ltr" }}>
        <NumberFormat
          value={myValue.EV}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}

          isNumericString={true}
          />
      </td>
    </>
  ))}


  {direction ? (
    <td className="Aktiendashboard-datatable-firstTD">Enterprise Value</td>
    ) : (
      <></>
      )}
</tr>

<tr>

{direction ? (
    <></>
    ) : (
      <td className="Aktiendashboard-datatable-firstTD">EV/Umsatz</td>
      )}

{dataTableData.map((myValue, index) => (
    <>
      <td style={{ direction: "ltr" }}>
        <NumberFormat
          value={myValue.EVUV}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}

          isNumericString={true}
          />
      </td>
    </>
  ))}


  {direction ? (
    <td className="Aktiendashboard-datatable-firstTD">EV/Umsatz</td>
    ) : (
      <></>
      )}
</tr>

<tr>

{direction ? (
    <></>
    ) : (
      <td className="Aktiendashboard-datatable-firstTD">EV/Ebitda</td>
      )}

{dataTableData.map((myValue, index) => (
    <>
      <td style={{ direction: "ltr" }}>
        <NumberFormat
          value={myValue.EVEBITDA}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}

          isNumericString={true}
          />
      </td>
    </>
  ))}


  {direction ? (
    <td className="Aktiendashboard-datatable-firstTD">EV/Ebitda</td>
    ) : (
      <></>
      )}
</tr>

<tr>

{direction ? (
    <></>
    ) : (
      <td className="Aktiendashboard-datatable-firstTD">EV/FCF</td>
      )}

{dataTableData.map((myValue, index) => (
    <>
      <td style={{ direction: "ltr" }}>
        <NumberFormat
          value={myValue.EVFCF}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}

          isNumericString={true}
          />
      </td>
    </>
  ))}


  {direction ? (
    <td className="Aktiendashboard-datatable-firstTD">EV/FCF</td>
    ) : (
      <></>
      )}
</tr>

<tr>

{direction ? (
    <></>
    ) : (
      <td className="Aktiendashboard-datatable-firstTD">Gewinnrendite</td>
      )}

{dataTableData.map((myValue, index) => (
    <>
      <td style={{ direction: "ltr" }}>
        <NumberFormat
          value={myValue.GewinnRendite}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}

          isNumericString={true}
          />
      </td>
    </>
  ))}


  {direction ? (
    <td className="Aktiendashboard-datatable-firstTD">Gewinnrendite </td>
    ) : (
      <></>
      )}
</tr>

<tr>

{direction ? (
    <></>
    ) : (
      <td className="Aktiendashboard-datatable-firstTD">Free Cashflow-Rendite</td>
      )}

{dataTableData.map((myValue, index) => (
    <>
      <td style={{ direction: "ltr" }}>
        <NumberFormat
          value={myValue.FCFRendite}
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}

          isNumericString={true}
          />
      </td>
    </>
  ))}


  {direction ? (
    <td className="Aktiendashboard-datatable-firstTD">Free Cashflow-Rendite</td>
    ) : (
      <></>
      )}
</tr>


        </table>
      </div>
    </div>
  );
}

export default ValuationTable;
