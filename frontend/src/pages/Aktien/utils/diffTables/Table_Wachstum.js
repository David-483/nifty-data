import React, { useState } from "react";
import Button from "@mui/material/Button";
import NumberFormat from "react-number-format";

function Table_Wachstum({data, smoothed }) {

  return (
    <div>
      <div className="Aktiendashboard-datatable-container">
        <table
          className="Aktiendashboard-datatable">


            <tr>
                <td className="Aktiendashboard-datatable-firstTD"></td>
              <td>3 Jahre</td>
              <td>5 Jahre</td>
              <td>10 Jahre</td>
              <td>20 Jahre</td>
              <td>Max Data</td>
            </tr>



            <tr>
            {data.map((myValue, index) => (
              <>
              <td className="Aktiendashboard-datatable-firstTD">Umsatz</td> 
              <td> <NumberFormat value={myValue.ThreeYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.FiveYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TenYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TwentyYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                        
              <td> <NumberFormat value={myValue.MaxGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                        
              </>))}
            </tr>

            {!smoothed ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy" >

                <td className="Aktiendashboard-datatable-firstTD">Umsatz smoothed</td> {data.map((myValue, index) => ( <>
                <td> <NumberFormat value={myValue.smoothed_ThreeYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
                <td> <NumberFormat value={myValue.smoothed_FiveYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_TenYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_TwentyYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>    
                <td> <NumberFormat value={myValue.smoothed_MaxYrsGrowthRevenue} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>    
              </> ))}

          </tr>
          }


<tr>
            {data.map((myValue, index) => (
              <>
              <td className="Aktiendashboard-datatable-firstTD">EBITDA</td> 
              <td> <NumberFormat value={myValue.ThreeYrsGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.FiveYrsGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TenYrsGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TwentyYrsGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                       
              <td> <NumberFormat value={myValue.MaxGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                       
              </>))}
            </tr>

            {!smoothed ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy" >

                <td className="Aktiendashboard-datatable-firstTD">EBITDA smoothed</td> {data.map((myValue, index) => ( <>
                <td> <NumberFormat value={myValue.smoothed_ThreeYrsEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_FiveYrsGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_TenYrsGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_TwentyYrsGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>   
                <td> <NumberFormat value={myValue.smoothed_MaxYrsGrowthEBITDA} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>   
              </> ))}

          </tr>
          }


<tr>
            {data.map((myValue, index) => (
              <>
              <td className="Aktiendashboard-datatable-firstTD">EBIT</td> 
              <td> <NumberFormat value={myValue.ThreeYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.FiveYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TenYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TwentyYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                       
              <td> <NumberFormat value={myValue.MaxGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                       
              </>))}
            </tr>

            {!smoothed ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy" >

                <td className="Aktiendashboard-datatable-firstTD">EBIT smoothed</td> {data.map((myValue, index) => ( <>
                <td> <NumberFormat value={myValue.smoothed_ThreeYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_FiveYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
                <td> <NumberFormat value={myValue.smoothed_TenYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
                <td> <NumberFormat value={myValue.smoothed_TwentyYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>   
                <td> <NumberFormat value={myValue.smoothed_MaxYrsGrowthEBIT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>   
              </> ))}

          </tr>
          }


<tr>
            {data.map((myValue, index) => (
              <>
              <td className="Aktiendashboard-datatable-firstTD">EBT</td> 
              <td> <NumberFormat value={myValue.ThreeYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.FiveYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TenYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TwentyYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                        
              <td> <NumberFormat value={myValue.MaxGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                        
              </>))}
            </tr>

            {!smoothed ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy" >

                <td className="Aktiendashboard-datatable-firstTD">EBT smoothed</td> {data.map((myValue, index) => ( <>
                <td> <NumberFormat value={myValue.smoothed_ThreeYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_FiveYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_TenYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td> 
                <td> <NumberFormat value={myValue.smoothed_TwentyYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>     
                <td> <NumberFormat value={myValue.smoothed_MaxYrsGrowthEBT} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>     

              </> ))}
          </tr>
          }



<tr>
            {data.map((myValue, index) => (
              <>
              <td className="Aktiendashboard-datatable-firstTD">Gewinn</td> 
              <td> <NumberFormat value={myValue.ThreeYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.FiveYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TenYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
              <td> <NumberFormat value={myValue.TwentyYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                        
              <td> <NumberFormat value={myValue.MaxGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>                        
              </>))}
            </tr>

            {!smoothed ? ( 
          <></> 
          ) 
          : 
          <tr className="Aktiendashboard-datatable-yoy" >

                <td className="Aktiendashboard-datatable-firstTD">Gewinn smoothed</td> {data.map((myValue, index) => ( <>
                <td> <NumberFormat value={myValue.smoothed_ThreeYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
                <td> <NumberFormat value={myValue.smoothed_FiveYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
                <td> <NumberFormat value={myValue.smoothed_TenYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>
                <td> <NumberFormat value={myValue.smoothed_TwentyYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>   
                <td> <NumberFormat value={myValue.smoothed_MaxYrsGrowthNetIncome} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} isNumericString={true} /> </td>   
              </> ))}

          </tr>
          }




        </table>
      </div>
    </div>
  );
}

export default Table_Wachstum;
