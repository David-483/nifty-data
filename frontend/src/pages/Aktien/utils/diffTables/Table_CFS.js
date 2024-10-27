import React, { useState } from "react";
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";

function Table_CFS({ direction, data, yoy }) {


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
            Operativer Cashflow
            </td>
          </tr>
          <tr>
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">Gewinn</td>
                )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.netIncome_cfs  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Gewinn</td>
              ) : (
                <></>
                )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_netIncome_cfs} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
          }
          <tr>
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">
                Abschreibungen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.depreciationAndAmortization_cfs  / 1000000 }
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
                Abschreibungen
              </td>
            ) : (
              <></>
              )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_depreciationAndAmortization_cfs} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
          }

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Latente Steuern
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.deferredIncomeTax  / 1000000 }
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
                Latente Steuern
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_deferredIncomeTax} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}


          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Aktienbasierte Vergütung</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.stockBasedCompensation  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Aktienbasierte Vergütung</td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_stockBasedCompensation} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            ) : (
              <></>
            )}
          </tr>
}

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Andere nicht zahlungswirksame Positionen </td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.otherNonCashItems  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Andere nicht zahlungswirksame Positionen</td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_otherNonCashItems} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            ) : (
              <></>
            )}
          </tr>
}



<tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Veränderung des Working Capitals</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.changeInWorkingCapital)  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Veränderung des Working Capitals</td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_changeInWorkingCapital} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            ) : (
              <></>
            )}
          </tr>
}

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Operativer Cashflow</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.netCashProvidedByOperatingActivities  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Operativer Cashflow</td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_netCashProvidedByOperatingActivities} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            ) : (
              <></>
            )}
          </tr>
}

<tr className="Aktiendashboard-datatable-subline">
              <td  style={{fontWeight: "300", opacity: "0.2", paddingBottom: "12px"}} colSpan="100%" className="Aktiendashboard-datatable-firstTD">
              Cashflow aus Investitionsaktivitäten
              </td>
            </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Sachanlagen</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.investmentsInPropertyPlantAndEquipment  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}



            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Sachanlagen</td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_investmentsInPropertyPlantAndEquipment} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
            ) : (
              <></>
            )}
          </tr>
}


          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Netto Akquisitionen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.acquisitionsNet  / 1000000 }
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
                Netto Akquisitionen
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_acquisitionsNet} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Investitionen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.purchasesOfInvestments  / 1000000 }
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
              Erwerb von Beteiligungen
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_purchasesOfInvestments} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Veräußerung von Beteiligungen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.salesMaturitiesOfInvestments / 1000000}
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
                Veräußerung von Beteiligungen
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_salesMaturitiesOfInvestments} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Andere Investitionen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.otherInvestingActivites  / 1000000 }
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
                Andere Investitionen
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_otherInvestingActivites} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                              Cashflow aus Investitionsaktivitäten
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.netCashUsedForInvestingActivites  / 1000000 }
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
                              Cashflow aus Investitionsaktivitäten
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_netCashUsedForInvestingActivites} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}

<tr className="Aktiendashboard-datatable-subline">
            <td style={{fontWeight: "300", opacity: "0.2", paddingBottom: "12px"}} colSpan="100%" className="Aktiendashboard-datatable-firstTD">
            Cashflow aus Finanzierungsaktivitäten
            </td>
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Zurückgezahlte Schulden
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.debtRepayment / 1000000).toFixed(0)}
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
                Zurückgezahlte Schulden
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_debtRepayment} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Ausgegebene Aktien
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.commonStockIssued / 1000000).toFixed(0)}
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
                Ausgegebene Aktien
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_commonStockIssued} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Zurückgekaufte Aktien
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.commonStockRepurchased / 1000000).toFixed(0)}
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
                Zurückgekaufte Aktien
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_commonStockRepurchased} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                gezahlte Dividenden
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.dividendsPaid / 1000000 )?.toFixed(0)}
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
                gezahlte Dividenden
              </td>
            ) : (
              <></>
            )}
          </tr>
          {!yoy ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_dividendsPaid} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Andere Finanzierungsaktivitäten
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.otherFinancingActivites / 1000000).toFixed(0)}
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
                    {!yoy ? ( 
                      <></> 
                      ) 
                      : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_otherFinancingActivites} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Cashflow aus Finanzierungsaktivitäten
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.netCashUsedProvidedByFinancingActivities / 1000000).toFixed(0)}
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
                Cashflow aus Finanzierungsaktivitäten
              </td>
            ) : (
              <></>
            )}
          </tr>
                    {!yoy ? ( 
                      <></> 
                      ) 
                      : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_netCashUsedProvidedByFinancingActivities} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}
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
                CAPEX
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.capitalExpenditure / 1000000).toFixed(0)}
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
                CAPEX
              </td>
            ) : (
              <></>
            )}
          </tr>
                    {!yoy ? ( 
                      <></> 
                      ) 
                      : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_capitalExpenditure} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}

<tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Free Cashflow
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.freeCashFlow / 1000000).toFixed(0)}
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
                Free Cashflow
              </td>
            ) : (
              <></>
            )}
          </tr>
                    {!yoy ? ( 
                      <></> 
                      ) 
                      : 
          <tr className="Aktiendashboard-datatable-yoy">
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">YOY</td>
                )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  {myValue.yoy_freeCashFlow} %
                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">YOY</td>
              ) : (
                <></>
                )}
          </tr>
}




          </>

        </table>
      </div>
    </div>
  );
}

export default Table_CFS;
