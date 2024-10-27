import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';


function SkeletonTable() {
    const [value, setValue] = React.useState('true');

    const handleChange = () => {
        return setValue(!value);
      };

  return (
    <div>
      <div className="Aktiendashboard-datatable-container">
        <table
          className="Aktiendashboard-datatable"
        >
  <tr>
  <th className="Aktiendashboard-datatable-firstTH"></th>
    <th><Skeleton sx={{ backgroundColor: "#9e9e9e" }} height={40}/></th>
    <th><Skeleton sx={{ backgroundColor: "#9e9e9e" }} height={40}/></th>
    <th><Skeleton sx={{ backgroundColor: "#9e9e9e" }} height={40}/></th>
    <th><Skeleton sx={{ backgroundColor: "#9e9e9e" }} height={40}/></th>
  </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"15%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
  </tr>
  <tr className="Aktiendashboard-datatable-yoy">
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"22%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
  </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ backgroundColor: "#9e9e9e" }} width={"18%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
  </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ backgroundColor: "#9e9e9e" }} width={"20%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
  </tr>
  <tr className="Aktiendashboard-datatable-yoy">
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ backgroundColor: "#9e9e9e" }} width={"24%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
  </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ backgroundColor: "#9e9e9e" }} width={"11%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
  </tr>
  <tr className="Aktiendashboard-datatable-yoy">
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ backgroundColor: "#9e9e9e" }} width={"24%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
  </tr>
  <tr>
  <td className="Aktiendashboard-datatable-firstTD"><Skeleton sx={{ backgroundColor: "#9e9e9e" }} width={"15%"} height={40}/></td>
  <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
    <td style={{ direction: "rtl" }}><Skeleton variant="text" sx={{ backgroundColor: "#9e9e9e" }} width={"55%"} height={40}/></td>
  </tr>
</table>
    </div>
    </div>
  );
}

export default SkeletonTable;
