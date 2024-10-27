import React, { useState } from "react";
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";

function Table_BS({ direction, data, yoy }) {
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
                <td key={index}>{myValue.date}</td>
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
            Umlaufvermögen
            </td>
          </tr>
          <tr>
            {direction ? (
              <></>
              ) : (
                <td className="Aktiendashboard-datatable-firstTD">Cash</td>
                )}

            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.cashAndCashEquivalents  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                    />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Cash</td>
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_cashAndCashEquivalents} %
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
                Kurzfristige Investments
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.shortTermInvestments  / 1000000 }
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
                Kurzfristige Investments
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_shortTermInvestments} %
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
                Cash und kurzfristige Investments
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.cashAndShortTermInvestments  / 1000000 }
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
                Cash und kurzfristige Investments
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_cashAndShortTermInvestments} %
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
              <td className="Aktiendashboard-datatable-firstTD">Nettoforderungen</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.netReceivables  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Nettoforderungen</td>
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_netReceivables} %
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
              <td className="Aktiendashboard-datatable-firstTD">Inventar</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.inventory  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Inventar</td>
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_inventory} %
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
              <td className="Aktiendashboard-datatable-firstTD">Anderes Umlaufvermögen</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.otherCurrentAssets)  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Anderes Umlaufvermögen</td>
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_otherCurrentAssets} %
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
              <td className="Aktiendashboard-datatable-firstTD">Umlaufvermögen</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.totalCurrentAssets  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}

            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">Umlaufvermögen</td>
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_totalCurrentAssets} %
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
              Anlagevermögen
              </td>
            </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">PPE</td>
            )}

            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.propertyPlantEquipmentNet  / 1000000 }
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    
                    isNumericString={true}
                  />
                </td>
              </>
            ))}



            {direction ? (
              <td className="Aktiendashboard-datatable-firstTD">PPE</td>
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_propertyPlantEquipmentNet} %
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
                Goodwill
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.goodwill  / 1000000 }
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
                Goodwill
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_goodwill} %
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
                Immaterielle Vermögensgegenstände
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.intangibleAssets  / 1000000 }
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
              Immaterielle Vermögensgegenstände
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_intangibleAssets} %
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
                Langfristige Investments
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.longTermInvestments / 1000000}
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
                Langfristige Investments
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_longTermInvestments} %
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
                Steueransprüche
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.taxAssets  / 1000000 }
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
                Steueransprüche
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_taxAssets} %
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
                Gesamtes Anlagevermögen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.totalNonCurrentAssets  / 1000000 }
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
                Gesamtes Anlagevermögen
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_totalNonCurrentAssets} %
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
                Bilanzsumme
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={myValue.totalAssets  / 1000000 }
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
                Bilanzsumme
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_totalAssets} %
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
            Fremdkapital
            </td>
          </tr>

          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Verbindlichkeiten aus LuL
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.accountPayables / 1000000).toFixed(0)}
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
                Verbindlichkeiten aus LuL
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_accountPayables} %
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
                Kurzfristge Verbindlichkeiten
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.totalCurrentLiabilities / 1000000).toFixed(0)}
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
                Kurzfristige Verbindlichkeiten
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_totalCurrentLiabilities} %
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
                Langfristige Schulden
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.longTermDebt / 1000000).toFixed(0)}
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
                Langfristige Schulden
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_longTermDebt} %
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
                Fremdkapital
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.totalLiabilities / 1000000 )?.toFixed(0)}
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
                Fremdkapital
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_totalLiabilities} %
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
            Eigenkapital
            </td>
          </tr>
          <tr>
            {direction ? (
              <></>
            ) : (
              <td className="Aktiendashboard-datatable-firstTD">
                Stammaktien
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.commonStock / 1000000).toFixed(0)}
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
                Stammaktien
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_commonStock} %
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
                Gewinnrücklagen
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.retainedEarnings / 1000000).toFixed(0)}
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
                Gewinnrücklagen
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_retainedEarnings} %
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
                Eigenkapital
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.totalEquity / 1000000).toFixed(0)}
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
                Eigenkapital
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_totalEquity} %
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
                Bilanzsumme
              </td>
            )}
            {data.map((myValue, index) => (
              <>
                <td key={index} style={{ direction: "ltr" }}>
                  <NumberFormat
                    value={(myValue.totalLiabilitiesAndTotalEquity / 1000000).toFixed(0)}
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
                Bilanzsumme
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
                <td key={index} style={{ direction: "ltr" }}>
                  {myValue.yoy_totalLiabilitiesAndTotalEquity} %
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

export default Table_BS;
