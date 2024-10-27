import React, { useState } from "react";
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";

function Table_Ratios({ direction, data, yoy }) {
  return (
    <div>
      <div className="Aktiendashboard-datatable-container">
        <table
          className="Aktiendashboard-datatable"
          dir={direction ? "rtl" : "ltr"}
        >



          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTH">

              </td>
            )}

            {data.map((myValue, index) => (
              <>
                <td>{myValue.date}</td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTH">

              </td>
            ) : (
              <></>
            )}
          </tr>

          <>
          <tr className="Aktiendashboard-datatable-subline">
            <td style={{fontWeight: "300", opacity: "0.2", paddingBottom: "12px"}} colSpan="100%" className="Aktiendashboard-datatable-firstTD">
            Margen
            </td>
          </tr>
          <tr>
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">Bruttomarge</td>
                )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.grossMargin}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                </td>
              </>
            ))}
                        {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Bruttomarge
              </td>
            ) : (
              <></>
              )}

          </tr>

          <tr>
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">
                EBITDA Marge
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.ebitdaMargin}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                EBITDA Marge
              </td>
            ) : (
              <></>
              )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                EBIT Marge
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.ebitMargin}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                EBIT Marge
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">EBT Marge</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.ebtMargin}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">EBT Marge</td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Nettomarge </td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.netMargin}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Nettomarge</td>
            ) : (
              <></>
            )}
          </tr>

<tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Free Cashflow Marge</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue?.fcfMargin)}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Free Cashflow Marge</td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">R&D Marge</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.rdMargin}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">R&D Marge</td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">SG&A Marge</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.sgaMargin}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">SG&A Marge</td>
            ) : (
              <></>
            )}
          </tr>

                    
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Liquidität 1. Grades
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.cashRatio.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Liquidität 1. Grades
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Liquidität 2. Grades
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.quickRatio.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Liquidität 1. Grades
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Liquidität 3. Grades
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.currentRatio?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Liquidität 1. Grades
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Schuldenquote
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.debtRatio?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Schuldenquote
              </td>
            ) : (
              <></>
            )}
          </tr>
          
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Verschuldungsgrad
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.debtEquityRatio?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Verschuldungsgrad
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Zinsdeckungsgrad
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.interestCoverage?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Zinsdeckungsgrad
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Cashflowdeckungsgrad
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.cashFlowCoverageRatios?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Cashflowdeckungsgrad
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Dividende und CAPEX Deckungsgrad
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.dividendPaidAndCapexCoverageRatio?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                                Dividende und CAPEX Deckungsgrad
              </td>
            ) : (
              <></>
            )}
          </tr>

<tr className="Aktiendashboard-datatable-subline">
              <td  style={{fontWeight: "300", opacity: "0.2", paddingBottom: "12px"}} colSpan="100%" className="Aktiendashboard-datatable-firstTD">
              Returns
              </td>
            </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Return on Assets</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.returnOnAssets}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}



            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Return on Assets</td>
            ) : (
              <></>
            )}
          </tr>



          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Return on Equity
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.returnOnEquity }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Return on Equity
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Return on Capital Employed
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue?.returnOnCapitalEmployed}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
              Return on Capital Employed
              </td>
            ) : (
              <></>
            )}
          </tr>



<tr className="Aktiendashboard-datatable-subline">
            <td style={{fontWeight: "300", opacity: "0.2", paddingBottom: "12px"}} colSpan="100%" className="Aktiendashboard-datatable-firstTD">
            Turnover
            </td>
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Kapitalumschlagshäufigkeit
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue?.totalAssetTurnover).toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Kapitalumschlagshäufigkeit
              </td>
            ) : (
              <></>
            )}
          </tr>


          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Lagerumschlagshäufigkeit
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={((myValue.inventoryTurnover)?.toFixed(2) + " x")}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Lagerumschlagshäufigkeit
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Umschlaghäufigkeit des Anlagevermögens
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue?.fixedAssetTurnover)?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Umschlaghäufigkeit des Anlagevermögens
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Umschlaghäufigkeit der Forderungen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.receivablesTurnover)?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Umschlagshäufigkeit der Verbindlichkeiten
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Umschlagshäufigkeit der Verbindlichkeiten
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.payablesTurnover)?.toFixed(2) + " x"}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Andere Finanzierungsaktivitäten
              </td>
            ) : (
              <></>
            )}
          </tr>
                    



<tr className="Aktiendashboard-datatable-subline">
              <td  style={{fontWeight: "300", opacity: "0.2", paddingBottom: "12px"}} colSpan="100%" className="Aktiendashboard-datatable-firstTD">
              Weitere Informationen
              </td>
            </tr>

      <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Days Sales Outstanding (DSO)
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.daysOfSalesOutstanding?.toFixed(2))}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Days Sales Outstanding (DSO)
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Days Inventory Outstanding (DIO)
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.daysOfInventoryOutstanding?.toFixed(2))}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Days Inventory Outstanding (DIO)
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Days of Payable Outstanding (DPO)
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.daysOfPayablesOutstanding?.toFixed(2))}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Days of Payable Outstanding (DPO)
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Cash Conversion Cycle
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.cashConversionCycle?.toFixed(2))}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Cash Conversion Cycle
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Free Cash Flow pro Aktie
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.freeCashFlowPerShare.toFixed(2))}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Free Cash Flow Per Share
              </td>
            ) : (
              <></>
            )}
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Cash pro Aktie
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.cashPerShare.toFixed(2))}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Cash pro Aktie
              </td>
            ) : (
              <></>
            )}
          </tr>





          </>

        </table>
      </div>
    </div>
  );
}

export default Table_Ratios;
