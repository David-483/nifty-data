import React, { useState } from "react";
import NumberFormat from "react-number-format";

function Table_IS({ direction, data, yoy }) {
  console.log(data)

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
  <td>
  {myValue.date.split('-').reverse().join('.')}
</td>
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
            Operativ I
            </td>
          </tr>
          <tr>
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">Umsatz</td>
                )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.revenue  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Umsatz</td>
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
                  {myValue.yoy_revenue} %
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
                Umsatzkosten
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.costOfRevenue  / 1000000 }
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
                Umsatzkosten
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
                  {myValue.yoy_costOfRevenue} %
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
                Bruttogewinn
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.grossProfit  / 1000000 }
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
                Bruttogewinn
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
                  {myValue.yoy_grossProfit} %
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

 
          <>
          <tr className="Aktiendashboard-datatable-subline">
            <td style={{fontWeight: "300", opacity: "0.2", paddingBottom: "12px"}} colSpan="100%" className="Aktiendashboard-datatable-firstTD">
            Operativ II
            </td>
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">Vertriebs- und Verwaltungskosten</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.sellingGeneralAndAdministrativeExpenses  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Vertriebs- und Verwaltungskosten</td>
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
                  {myValue.yoy_sellingGeneralAndAdministrativeExpenses} %
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
              <td className="Aktiendashboard-datatable-firstTD">Forschungs- und Entwicklungskosten</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.researchAndDevelopmentExpenses  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Forschungs- und Entwicklungskosten</td>
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
                  {myValue.yoy_researchAndDevelopmentExpenses} %
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
              <td className="Aktiendashboard-datatable-firstTD">Operative Gesamtkosten</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.operatingExpenses  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Operative Gesamtkosten</td>
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
                  {myValue.yoy_operatingExpenses} %
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
              <td className="Aktiendashboard-datatable-firstTD">EBIT</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.operatingIncome  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">EBIT</td>
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
                  {myValue.yoy_operatingIncome} %
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
            
          <>
          
          <tr className="Aktiendashboard-datatable-subline">
            <td style={{fontWeight: "300", opacity: "0.2", paddingBottom: "12px"}} colSpan="100%" className="Aktiendashboard-datatable-firstTD">
            Gewinn
            </td>
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Zinseinnahmen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.interestIncome  / 1000000 }
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
                Zinseinnahmen
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
                  {myValue.yoy_interestIncome} %
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
                Zinsausgaben
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.interestExpense  / 1000000 }
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
                Zinsausgaben
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
                  {myValue.yoy_interestExpense} %
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
                Zinsüberschuss
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.interestNet / 1000000}
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
                Zinsüberschuss
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
                  {myValue.yoy_interestNet} %
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
                Gewinn vor Steuern
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.incomeBeforeTax  / 1000000 }
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
                Gewinn vor Steuern
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
                  {myValue.yoy_incomeBeforeTax} %
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
                Steuern
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.incomeTaxExpense  / 1000000 }
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
                Steuern
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
                  {myValue.yoy_incomeTaxExpense} %
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
                Gewinn
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.netIncome  / 1000000 }
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
                Gewinn
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
                  {myValue.yoy_netIncome} %
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
            Weitere Informationen
            </td>
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                EBITDA
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.ebitda / 1000000)?.toFixed(0)}
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
                  EBITDA
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
                  {myValue.yoy_ebitda} %
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
                Umsatz je Aktie
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.sps)?.toFixed(2)}
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
                Umsatz je Aktie
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
                  {myValue.yoy_sps} %
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
                Umsatz je Aktie (verwässert)
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.spsdiluted)?.toFixed(2)}
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
                Umsatz je Aktie (verwässert)
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
                  {myValue.yoy_spsdiluted} %
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
                Gewinn je Aktie 
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.eps)?.toFixed(2)}
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
                Gewinn je Aktie
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
                  {myValue.yoy_eps} %
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
                Gewinn je Aktie (verwässert)
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.epsdiluted)?.toFixed(2)}
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
                Gewinn je Aktie (verwässert)
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
                  {myValue.yoy_epsdiluted} %
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
                Ausstehende Aktien
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.weightedAverageShsOut)?.toFixed(0)}
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
                Ausstehende Aktien
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
                  {myValue.yoy_weightedAverageShsOut} %
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
                Ausstehende Aktien (verwässert)
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.weightedAverageShsOutDil)?.toFixed(0)}
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
                Ausstehende Aktien (verwässert)
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
                  {myValue.yoy_weightedAverageShsOutDil} %
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
            Quelle
            </td>
          </tr>

<tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Quelle
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td style={{ direction: "ltr" }}>

              <a href={myValue.link} target="_blank">link</a>

                </td>
              </>
            ))}
            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">
                Quelle
              </td>
            ) : (
              <></>
            )}
          </tr>

          {/* <tr className="Aktiendashboard-datatable-subline">
            <td colSpan="100%" className="Aktiendashboard-datatable-firstTD">
            &nbsp;
            </td>
          </tr> */}



          </>
          

        </table>
      </div>
    </div>
  );
}

export default Table_IS;
