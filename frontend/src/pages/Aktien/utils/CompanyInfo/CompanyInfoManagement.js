import { height, fontFamily } from "@mui/system";
import Aktienkurs from "../Charts/Chartlib/Aktienkurs";
import "./CompanyInfo.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

function CompanyInfoManagement({ managementData}) {

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
          <table className="CompanyTableThirdRow">
            <tbody>
              <tr>
                <td style={TopLineRow}>Position</td>
                <td style={TopLineRowRight}>Name</td>
                <td style={TopLineRowRight}>Gender</td>
                <td style={TopLineRowRight}>Gehalt</td>
                <td style={TopLineRowRight}>Geburtsjahr</td>
              </tr>

              {managementData.map((managementData, i) => (
                <tr key={i}>
                  <td style={UnderLineRow}>{managementData.position}</td>
                  <td style={UnderLineRowRight}>{managementData.name}</td>
                  <td style={UnderLineRowRight}>{managementData.gender}</td>
                  <td style={UnderLineRowRight}>
                    <NumberFormat
                      value={managementData.pay}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      isNumericString={true}
                    />{" "}
                    T. {managementData.currencyPay}
                  </td>
                  <td style={UnderLineRowRight}>
                    {managementData.yearBorn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default CompanyInfoManagement;
