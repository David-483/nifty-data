import "./CompanyInfo.css";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

function ESGInfo({esgData}) {

  console.log(esgData)

  const TopLineRow = {
    fontFamily: "Inter-bold",
    fontSize: "calc(8px + 0.4vw)",
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "left",
  };

  const TopLineRowRight = {
    fontFamily: "Inter-bold",
    fontSize: "calc(8px + 0.4vw)",
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "right",
  };

  const UnderLineRow = {
    fontFamily: "Inter-regular",
    fontSize: "calc(8px + 0.4vw)",
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "left",
  };

  const UnderLineRowRight = {
    fontFamily: "Inter-regular",
    fontSize: "calc(8px + 0.4vw)",
    color: "white",
    paddingRight: 5,
    paddingLeft: 5,
    textAlign: "right",
  };

  return (
    <div className="CompanySecondRow" style={{ marginBottom: "50px" }}>

      <div className="CompanySecondRowInfoTable1">
        <div className="CompanyTableSecondRowContainer">
          <table className="CompanyTableSecondRow">
            <tbody>
              <tr>
                <td colSpan={2} style={TopLineRow}>
                  Sektor (GICS)
                </td>
                <td colSpan={2} style={TopLineRow}>
                  {esgData ? esgData[0]?.socialScore: "Keine Daten"}
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={TopLineRow}>
                  Social Score
                </td>
                <td colSpan={2} style={TopLineRow}>
                  {"test"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ESGInfo;
